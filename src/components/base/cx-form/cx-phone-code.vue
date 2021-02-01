<template>
  <div class="cx-phone-code">
    <van-field
      v-model="eleConfig.value"
      :name="eleConfig.name"
      :type="eleConfig.inputType"
      :label="eleConfig.label"
      :required="eleConfig.required"
      :placeholder="eleConfig.placeholder"
      :clickable="eleConfig.clickable"
      :clearable="eleConfig.clearable"
      :showWordLimit="eleConfig.showWordLimit"
      :disabled="eleConfig.disabled"
      :readonly="eleConfig.readonly"
      :left-icon="eleConfig.leftIcon"
      :right-icon="eleConfig.rightIcon"
      :autosize="eleConfig.autosize"
      :rules="initRules"
    >
      <template #button>
        <van-button size="small" type="primary" native-type="button">发送验证码</van-button>
      </template>
    </van-field>
  </div>
</template>

<script>
import { Field,Button} from "vant";
export default {
  name: "CxPhoneCode",
  components: {
    "van-field": Field,
    "van-button": Button
  },
  data() {
    return {
      eleConfig: {},
    };
  },
  computed: {
    initRules() {
      let rules = []
      if(this.eleConfig.rules.length>0){
        rules = this.eleConfig.rules
      }
      if(this.eleConfig.required){
        rules.unshift({required:this.eleConfig.required,message:''})
      }
      return rules
    },
  },
  props: {
    cxEleConfig: {
      type: Object,
    },
  },
  methods: {
    initData() {
      this.eleConfig = this.cxEleConfig;
    }
  },
  watch: {},
  created() {
    this.initData();
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.cx-phone-code {
}
</style>
