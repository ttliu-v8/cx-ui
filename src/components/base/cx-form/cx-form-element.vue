<template>
  <div class="cx-form-element">
    <slot>
      <cx-input
        v-if="currConfig.eleType == 'input'"
        v-bind="currConfig"
        :value.sync="currConfig.value"
      />
      <cx-picker
        v-if="
          currConfig.eleType == 'commPicker' ||
          currConfig.eleType == 'datetimePicker'
        "
        v-bind="currConfig"
        :value.sync="currConfig.value"
      />
      <cx-picker
        v-if="currConfig.eleType == 'addressPicker'"
        v-bind="currConfig"
        :value.sync="currConfig.value"
      />
      <!-- :cx-ele-config.sync="eleConfig" -->
      <!-- <cx-radio
        v-if="currConfig.eleType == 'radio'"
        v-bind="eleConfig"
        :value.sync="currConfig.value"
      /> -->
      <cx-phone-code
        v-if="currConfig.eleType == 'phoneCode'"
        v-bind="currConfig"
        :value.sync="currConfig.value"
      />
      <cx-id-type-and-code
        v-if="currConfig.eleType == 'idTypeAndCard'"
        v-bind="currConfig"
        :value.sync="currConfig.value"
      />
      <cx-auto-complete
        v-if="currConfig.eleType == 'autocomplete'"
        v-bind="currConfig"
        :value.sync="currConfig.value"
      />
    </slot>
  </div>
</template>

<script>
import CxInput from "./cx-input.vue";
import CxPicker from "./cx-picker.vue";
//import CxRadio from "./cx-radio.vue";
import CxPhoneCode from "./cx-phone-code.vue";
import CxIdTypeAndCode from "./cx-id-type-and-code.vue";
import CxAutoComplete from "./cx-auto-complete.vue";

export default {
  name: "CxFormElement",
  components: {
    CxInput, //输入框
    CxPicker, //选择器，包括普通选择器，地址选择器，日期选择器
    // CxRadio, // 单选按钮组
    CxPhoneCode, // 短信验证码组件
    CxIdTypeAndCode, // 证件类型与证件号码,生日，性别复合组件
    CxAutoComplete, // 自动补全组件
  },
  props: {
    eleConfig: {
      type: Object,
    },
    labelWidth: String,
    colon: Boolean,
  },
  data() {
    return {
      currConfig: {
        value: this.eleConfig.value || "",
        label: this.eleConfig.label || "-",
        labelWidth:
          this.eleConfig.labelWidth !== this.labelWidth
            ? this.eleConfig.labelWidth
            : this.labelWidth,
        colon:
          this.eleConfig.colon !== this.colon
            ? this.eleConfig.colon
            : this.colon,
        name: this.eleConfig.name || "-",
        eleType: this.eleConfig.eleType || "input",
        inputType: this.eleConfig.inputType || "text",
        maxlength: this.eleConfig.maxlength || "-",
        visible: this.eleConfig.visible || true,
        placeholder: this.eleConfig.placeholder || "-",
        disabled: this.eleConfig.disabled || false,
        readonly: this.eleConfig.readonly || false,
        required: this.eleConfig.required || false,
        clearable: this.eleConfig.clearable || false,
        showWordLimit: this.eleConfig.showWordLimit || false,
        border: this.eleConfig.border === false?false:true, // 是否有下边框
        autosize: this.eleConfig.autosize || false,
        rightIcon: this.eleConfig.rightIcon || "",
        columns: this.eleConfig.columns || [],
        datetimePickerType: this.eleConfig.datetimePickerType || "date",
        currentDate: this.eleConfig.currentDate || "",
        minDate: this.eleConfig.minDate || "",
        maxDate: this.eleConfig.maxDate || "",
        addressList: this.eleConfig.addressList || {},
        addressValue: this.eleConfig.addressValue || "",
        provinceCode: this.eleConfig.provinceCode || "430000",
        columnsNum: this.eleConfig.columnsNum || 3,
        //direction: "horizontal", // radio有效
        //itemList: [], //radio有效[{code:'01',desc:'男'},{code:'02',desc:'女'}]
        childMap: this.eleConfig.childMap || {}, // 复合组件有效
        rules: this.eleConfig.rules || [], //表单校验规则
        dataMap:this.eleConfig.dataMap,
      },
    };
  },
  computed: {},
  watch: {
    "currConfig.value": {
      handler(newVal) {
        this.$emit("update:value", newVal);
      },
      deep: true,
    },
    "eleConfig.value": {
      handler(newVal) {
        this.currConfig.value = newVal;
      },
      deep: true,
    },
  },
  created() {
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
.cx-form-element {
  /deep/.van-cell {
    overflow: visible;
    padding:12px 16px;
  }
  /deep/.van-field__error-message {
    position: absolute;
    width: auto;
    background: #000;
    z-index: 9999;
    color: #fff;
    padding: 5px;
    right: 0;
    border-radius: 4px;
    top: 30px;
    font-size: 14px;
  }
  /deep/.van-field__error-message::before {
    content: "";
    border: 8px solid #000;
    position: absolute;
    top: -16px;
    right: 15px;
    border-color: transparent;
    border-bottom-color: #000;
  }
  /deep/.van-field__label {
    margin-right: 5px;
  }
}
</style>
