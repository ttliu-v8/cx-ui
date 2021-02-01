<template>
  <div class="cx-form">
    <van-form
      :labelWidth="labelWidth"
      :labelAlign="labelAlign"
      :inputAlign="inputAlign"
      :errorMessageAlign="errorMessageAlign"
      :validateTrigger="validateTrigger"
      :colon="colon"
      :validateFirst="validateFirst"
      :scrollToError="scrollToError"
      :showError="showError"
      :showErrorMessage="showErrorMessage"
      :submitOnEnter="submitOnEnter"
      @submit="formSubmit"
      @failed="formFailed"
    >
      <slot>
        <cx-form-element
          v-for="item in elementMap"
          :key="item.id"
          :ele-config="item"
          :label-width="labelWidth"
          :colon="colon"
          :value.sync="item.value"
        />
      </slot>
      <slot name="submit">
        <div class="comm-bg">
          <van-button round block native-type="submit" class="comm-submit">{{
            submitText
          }}</van-button>
        </div>
      </slot>
    </van-form>
  </div>
</template>

<script>
import { Form, Button } from "vant";
import CxFormElement from "./cx-form-element.vue";
export default {
  name: "CxForm",
  components: {
    "van-form": Form,
    "van-button": Button,
    CxFormElement,
  },
  props: {
    labelAlign:{
      type:String,
      default:"left"
    },
    labelWidth:{
      type:String,
      default:"84px"
    },
    inputAlign:{
      type:String,
      default:"right"
    },
    colon:{
      type:Boolean,
      default:false
    },
    errorMessageAlign:{
      type:String,
      default:"right"
    },
    validateTrigger:{
      type:String,
      default:"onBlur"
    },
    validateFirst:{
      type:Boolean,
      default:false,
    },
    scrollToError:{
      type:Boolean,
      default:true,
    },
    showError:{
      type:Boolean,
      default:true,
    },
    showErrorMessage:{
      type:Boolean,
      default:true,
    },
    submitOnEnter:{
      type:Boolean,
      default:true,
    },
    submitText: {
      type: String,
      default:"提交",
    },
    elementMap: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
    };
  },

  methods: {
    formSubmit(data) {
      this.$emit("submit", data);
    },
    formFailed(data) {
      this.$emit("failed", data);
    },
  },
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style lang='less' scoped>
.cx-form {
  .comm-bg {
    padding: 20px 30px;
  }
  .comm-submit {
    background-image: linear-gradient(177deg, #fab26e 0%, #f5681e 100%);
    color: #fff;
    border: 0;
    font-size:16px;
  }
}
</style>
