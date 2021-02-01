<template>
  <div class="jx-input">
    <van-field
      :name="eleConfig.name"
      :label="eleConfig.label"
      :required="eleConfig.required"
      :placeholder="eleConfig.placeholder"
      :leftIcon="eleConfig.leftIcon"
      :rules="initRules"
    >
      <template #input>
        <van-radio-group
          v-model="eleConfig.value"
          :direction="eleConfig.direction"
        >
          <van-radio
            :name="item.code"
            v-for="item in eleConfig.itemList"
            :key="item.id"
            >{{item.desc}}</van-radio
          >
        </van-radio-group>
      </template>
    </van-field>
  </div>
</template>

<script>
import { Field, Radio, RadioGroup } from "vant";
export default {
  name: "JxRadio",
  components: {
    "van-field": Field,
    "van-radio": Radio,
    "van-radio-group": RadioGroup,
  },
  data() {
    return {
      eleConfig: {},
    };
  },
  computed: {
    initRules() {
      let rules = [];
      if (this.eleConfig.rules.length > 0) {
        rules = this.eleConfig.rules;
      }
      if (this.eleConfig.required) {
        rules.unshift({
          required: this.eleConfig.required,
          message: '',
        });
      }
      return rules;
    },
  },
  props: {
    jxEleConfig: {
      type: Object,
    },
  },
  methods: {
    initData() {
      this.eleConfig = this.jxEleConfig;
    },
  },
  watch: {},
  created() {
    this.initData();
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.jx-input {
}
</style>
