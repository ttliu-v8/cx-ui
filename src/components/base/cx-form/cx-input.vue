<template>
  <div v-if="visible" class="cx-input" :class="{ 'border-bottom': border }">
    <van-field
      v-model="currentValue"
      :label="label"
      :label-width="labelWidth"
      :colon="colon"
      :name="name"
      :type="inputType"
      :required="required"
      :placeholder="placeholder"
      :showWordLimit="showWordLimit"
      :disabled="disabled"
      :maxlength="maxlength"
      :readonly="readonly"
      :autosize="autosize"
      :rules="rules"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
    >
      <template v-slot:input><slot name="input"> </slot></template>
      <template
        v-slot:right-icon
        v-if="rightIconShow"
        :class="{ hasClear: clearable }"
      >
        <van-icon
          name="cross"
          v-if="clearable && currentValue"
          @click="doClear"
        />
        <span v-if="indexOfRightIcon" :class="rightIconClass">
          <img :src="calendarImg" v-if="rightIcon == 'calendar'" />
        </span>
        <span v-else-if="rightIcon">{{ rightIcon }}</span>
      </template>
      <template v-slot:button>
        <slot name="button"> </slot>
      </template>
    </van-field>
  </div>
</template>

<script>
import { Field, Icon } from "vant";
export default {
  name: "CxInput",
  components: {
    "van-field": Field,
    "van-icon": Icon,
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
      type: Number | String,
    },
    colon: {
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
    border: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    leftIcon: {
      type: String,
      default: "",
    },
    rightIcon: {
      type: String,
      default: "",
    },
    autosize: {
      type: Boolean | Object,
      default: false,
    },
    rules: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      currentValue: this.value,
      calendarImg: require("./assets/img/rili.png"),
      rightIconType: ["calendar", "triangle", "arrow"],
    };
  },
  computed: {
    rightIconShow() {
      if (this.rightIcon || this.clearable) {
        return true;
      } else {
        return false;
      }
    },
    indexOfRightIcon() {
      if (this.rightIconType.indexOf(this.rightIcon) > -1) {
        return true;
      } else {
        return false;
      }
    },
    rightIconClass() {
      if (this.rightIcon !== "arrow") {
        return this.rightIcon;
      } else {
        if (this.clearable && this.currentValue) {
          return "arrow arrow2";
        } else {
          return "arrow";
        }
      }
    },
  },
  methods: {
    onBlur($event) {
      this.$emit("blur", $event);
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onInput(event) {
      this.$emit("input", event);
    },
    doClear(event) {
      this.currentValue = "";
      event.stopPropagation();
      //console.log(event)
    },
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal;
    },
    currentValue(newVal) {
      this.$emit("update:value", newVal);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang='less' scoped>
.cx-input {
  /deep/.van-field__right-icon {
    width: auto;
    padding-left: 5px;
    display: flex;
  }
  /deep/.van-icon {
    color: #999;
    font-size: 17px;
    margin-right: 5px;
  }
  .triangle {
    border: 6px solid transparent;
    border-top-color: #777;
    margin-top: 7px;
  }
  .arrow {
    position: relative;
    display: inline-block;
    width: 8px;
    height: 8px;
    top: -3px;
  }
  .arrow2 {
    top: 5px;
  }
  .arrow::after {
    content: "";
    position: absolute;
    z-index: 1;
    right: -7px;
    border: 7px solid transparent;
    border-left-color: #777;
  }
  .arrow::before {
    content: "";
    position: absolute;
    z-index: 2;
    right: -5px;
    border: 7px solid transparent;
    border-left-color: #fff;
  }
  .calendar {
    img {
      width: 16px;
      float: left;
    }
  }
  .lbl-txt {
    position: relative;
  }
  .lbl-txt-icon {
    position: absolute;
    right: -16px;
  }
}
.border-bottom {
  border-bottom: 1px solid #efefef;
  border: 0 im !important;
}
</style>
