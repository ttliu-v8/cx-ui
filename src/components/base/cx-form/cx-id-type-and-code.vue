<template>
  <div class="cx-id-type-and-code">
    <cx-picker v-bind="eleMap.idType" :value.sync="eleMap.idType.value" />
    <cx-input
      v-bind="eleMap.idCard"
      :value.sync="eleMap.idCard.value"
      @blur="idCardOnBlur"
    />
    <cx-picker v-bind="eleMap.birthday" :value.sync="eleMap.birthday.value" />
    <cx-picker v-bind="eleMap.gender" :value.sync="eleMap.gender.value" />
    <van-field :name="name" v-model="joinText" class="input-hidden" />
  </div>
</template>

<script>
import CxInput from "./cx-input.vue";
import CxPicker from "./cx-picker.vue";
import { Field } from "vant";
export default {
  name: "CxIdTypeAndCode",
  components: {
    CxInput,
    CxPicker,
    "van-field": Field,
  },
  props: {
    value: {
      type: String | Object,
      defalut: "",
    },
    label: {
      type: String,
      defalut: "",
    },
    name: {
      type: String,
      defalut: "",
    },
    childMap: {
      type: Object,
      default: function () {
        return {
          idType: {},
          idCard: {},
          birthday: {},
          gender: {},
        };
      },
    },
  },
  data() {
    return {
      allValues: this.value.split("$"),
      eleMap: this.childMap,
      joinText: this.value,
    };
  },
  computed: {},
  methods: {
    getGenderAndBirthday(idCard) {
      let birthday = "";
      let gender = "";
      if (idCard.length == 18) {
        let year = idCard.substring(6, 10);
        let month = idCard.substring(10, 12);
        let day = idCard.substring(12, 14);
        birthday = year + "-" + month + "-" + day;

        // 1 女 0 男
        if (idCard.substring(16, 17) % 2 == 0) {
          gender = "女";
        } else {
          gender = "男";
        }
      }
      return {
        birthday: birthday,
        gender: gender,
      };
    },
    idCardOnBlur() {
      if (this.eleMap.idType.value == "身份证") {
        let genderAndBirthday = this.getGenderAndBirthday(
          this.eleMap.idCard.value
        );
        this.eleMap.birthday.value = genderAndBirthday.birthday;
        this.eleMap.gender.value = genderAndBirthday.gender;
      }
    },
  },
  watch: {
    "eleMap.idType.value": {
      handler(newValue) {
        // console.log(newValue);
        if (newValue == "身份证") {
          this.eleMap.birthday.visible = false;
          this.eleMap.gender.visible = false;
        } else {
          this.eleMap.birthday.visible = true;
          this.eleMap.gender.visible = true;
        }
        this.allValues[0] = newValue;
        this.joinText = this.allValues.join("$");
        this.$emit("update:value", this.joinText);
      },
      deep: true,
    },
    "eleMap.gender.value": {
      handler(newValue) {
        this.allValues[3] = newValue;
        this.joinText = this.allValues.join("$");
        this.$emit("update:value", this.joinText);
      },
      deep: true,
    },
    "eleMap.idCard.value": {
      handler(newValue) {
        this.allValues[1] = newValue;
        this.joinText = this.allValues.join("$");
        this.$emit("update:value", this.joinText);
      },
      deep: true,
    },
    "eleMap.birthday.value": {
      handler(newValue) {
        this.allValues[2] = newValue;
        this.joinText = this.allValues.join("$");
        this.$emit("update:value", this.joinText);
      },
      deep: true,
    },
  },
  created() {},
  mounted() {
    if (this.eleMap.idType.value == "身份证") {
      this.eleMap.birthday.visible = false;
      this.eleMap.gender.visible = false;
    } else {
      this.eleMap.birthday.visible = true;
      this.eleMap.gender.visible = true;
    }
  },
};
</script>

<style lang='less' scoped>
.cx-id-type-and-code {
  .input-hidden {
    height: 0;
    overflow: hidden!important;
    padding: 0!important;
    border:0 !important;
  }
}
</style>
