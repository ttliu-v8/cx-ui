<template>
  <div class="element-recommender">
    <cx-input
      :name="name"
      :label="label"
      :required="required"
      :value="joinText"
      :rules="[
        {
          validator: checkRule,
          message: '请将推荐人的工号和姓名补充完整',
          trigger: 'onChange'
        }
      ]"
    >
      <template #input>
        <div class="inner-input">
          <cx-input v-bind="eleMap.jobNumber" :value.sync="eleMap.jobNumber.value" />
          <span class="split">-</span>
          <cx-input v-bind="eleMap.jobName" :value.sync="eleMap.jobName.value" />
        </div>
      </template>
    </cx-input>
  </div>
</template>

<script>
import CxInput from "@/components/base/cx-form/cx-input.vue";
export default {
  name: "ElementRecommender",
  components: {
    CxInput
  },
  props: {
    label: {
      type: String | Object,
      defalut: ""
    },
    value: {
      type: String | Object,
      defalut: ""
    },
    name: {
      type: String,
      defalut: ""
    },
    labelWidth:{
      type:String,
    },
    colon:{
      type:Boolean,
    },
    required: {
      type: Boolean,
      defalut: false
    },
    childMap: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      allValues: this.value ? this.value.split("$") : "$".split("$"),
      joinText: this.value,
      showError: false,
      eleMap: this.childMap
    };
  },
  computed: {},
  methods: {
    checkRule() {
      if (this.allValues.length == 0) {
        return true;
      } else if (this.allValues.length == 2) {
        if ((this.allValues[0] == null && this.allValues[1] == null) || (this.allValues[0].length == 0 && this.allValues[1].length == 0)) {
          return true;
        } else if (this.allValues[0] == null || this.allValues[1] == null) {
          return false;
        } else if (this.allValues[0].length == 0 || this.allValues[1].length == 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  },
  watch: {
    "eleMap.jobNumber.value": {
      handler(newValue) {
        this.allValues[0] = newValue;
        this.joinText = this.allValues.join("$");
        this.$emit("update:value", this.joinText);
      },
      deep: true
    },
    "eleMap.jobName.value": {
      handler(newValue) {
        this.allValues[1] = newValue;
        this.joinText = this.allValues.join("$");
        this.$emit("update:value", this.joinText);
      },
      deep: true
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.element-recommender {
  .jx-input:first-child {
    width: 55%;
  }
  .jx-input:last-child {
    width: 45%;
  }
  .inner-input {
    display: flex;
    /deep/.van-cell {
      padding: 0;
    }
  }
  .split {
    padding: 0 5px 0 5px;
  }
}
</style>
