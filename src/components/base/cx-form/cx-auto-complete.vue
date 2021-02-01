<template>
  <div v-if="visible" class="cx-auto-complete">
    <cx-input
      :name="name"
      :value.sync="currentText"
      :required="required"
      :inputType="inputType"
      :label="label"
      :label-width="labelWidth"
      :colon="colon"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="true"
      :rightIcon="rightIcon"
      :maxlength="maxlength"
      :rules="rules"
      :border="border"
      :clearable="clearable"
      @focus="doFocus"
    />

    <van-popup v-model="show" position="bottom" closeable class="auto-fill">
      <van-search
        v-model="searchInput"
        placeholder="请输入搜索关键词"
        class="search"
        input-align="center"
        @input="search"
      />
      <ul class="bank-ul">
        <li v-for="item in dataArray" :key="item.id" @click="doClick(item)">
          {{ item }}
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Search } from "vant";
import CxInput from "./cx-input.vue";
export default {
  name: "CxAutoComplete",
  components: {
    "van-search": Search,
    CxInput,
    "van-popup": Popup,
  },
  props: {
    value: {
      type: String | Number | Boolean | Object,
      default: "",
    },
    visible: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    labelWidth: {
      type: String,
      default: "",
    },
    colon: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    clearable:{
      type: Boolean,
    },
    maxlength: {
      type: String | Number,
      default: "-",
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "-",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rightIcon: {
      type: String,
      default: "triangle",
    },
    rules: {
      type: Array,
      default: function () {
        return [];
      },
    },
    dataMap: {
      type: Object,
    },
    listStyle: {
      type: String | Object,
      default: "",
    },
  },
  data() {
    return {
      currentText: this.value,
      dataArrayAll: Object.values(this.dataMap) || [],
      dataArray: [],
      keys: [],
      show: false,
      searchInput: "",
    };
  },
  computed: {},
  methods: {
    doFocus() {
      this.searchInput = "";
      this.initDataArray();
      this.show = true;
    },
    doBlur() {
      //this.show = false;
    },
    doClose() {
      this.show = false;
    },
    doClick(item, key) {
      if (item != "--亲，没搜到哦，换个关键字试试--") {
        this.show = false;
        this.currentText = item;
      }
    },
    search(data) {
      if (data.length == 0) {
        this.initDataArray();
      } else {
        let temp = this.dataArrayAll.filter((element) => {
          return element.indexOf(data) > -1;
        });
        if (temp.length > 0) {
          this.dataArray = temp;
        } else {
          this.dataArray = ["--亲，没搜到哦，换个关键字试试--"];
        }
      }
    },
    initDataArray() {
      this.dataArray = [];
      for (let item of this.dataArrayAll) {
        this.dataArray.push(item);
      }
    },
  },
  watch: {
    value(newVal) {
      this.currentText = newVal;
    },
    currentText(newVal) {
      this.$emit("update:value", newVal);
    },
  },
  created() {},
  mounted() {
    this.initDataArray();
  },
};
</script>

<style lang="less" scoped>
.cx-auto-complete {
  position: relative;
  /deep/.van-popup__close-icon--top-right {
    top: 8px;
    left: 10px;
  }
  .auto-fill {
    width: 100vw;
    height: 315px;
    .bank-ul {
      padding: 0 12px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      border-top: 1px solid #ddd;
      height: 225px;
      li {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        text-align: center;
        color: #777;
      }
      li:last-child {
        border-bottom: 0;
      }
    }
    .search {
      padding-top: 40px;
    }
  }
  .btn-close {
    position: absolute;
    padding: 0 4px;
    right: 0;
    top: 0;
    font-size: 12px;
    color: #f6691f;
    background: #ffede3;
  }
}
.van-search{
  /deep/.van-cell{
    padding:5px 8px 5px 0!important
  }
}
</style>
