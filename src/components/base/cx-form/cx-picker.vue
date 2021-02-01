<template>
  <div v-if="visible" class="cx-picker">
    <!--普通picker-->
    <div class="commPicker" v-if="eleType == 'commPicker'">
      <cx-input
        :readonly="true"
        :name="name"
        :label="label"
        :label-width="labelWidth"
        :colon="colon"
        :value.sync="currentValue"
        :placeholder="placeholder"
        @click.native="doShowPicker"
        :required="required"
        :right-icon="rightIcon"
        :disabled="disabled"
        :rules="rules"
        :border="border"
        :clearable="clearable"
      />

      <van-popup v-model="showPicer" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          :default-index="pickerDefaultIndex"
          @confirm="pickerOnConfirm"
          @cancel="showPicer = false"
        />
      </van-popup>
    </div>
    <!--datetime-picker-->
    <div class="datetimePicker" v-if="eleType == 'datetimePicker'">
      <cx-input
        :readonly="true"
        :name="name"
        :value.sync="currentValue"
        :label="label"
        :label-width="labelWidth"
        :colon="colon"
        :placeholder="placeholder"
        @click.native="doShowPicker"
        :required="required"
        :right-icon="rightIcon"
        :disabled="disabled"
        :rules="rules"
        :border="border"
        :clearable="clearable"
      />
      <van-popup v-model="showPicer" position="bottom">
        <van-datetime-picker
          :type="datetimePickerType"
          v-model="initPickerDate"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="pickerOnConfirm"
          @cancel="showPicer = false"
        />
      </van-popup>
    </div>
    <!---地址picker--->
    <div class="addressPicker" v-if="eleType == 'addressPicker'">
      <cx-input
        readonly
        :name="name"
        :value.sync="currentValue"
        :label="label"
        :label-width="labelWidth"
        :colon="colon"
        :placeholder="placeholder"
        @click.native="doShowPicker"
        :required="required"
        :right-icon="rightIcon"
        :disabled="disabled"
        :rules="rules"
        :border="border"
        :clearable="clearable"
      />
      <van-popup v-model="showPicer" position="bottom">
        <van-area
          :area-list="areaPickerList"
          :value="calProvinceCode"
          :columns-num="columnsNum"
          @confirm="pickerOnConfirm"
          @cancel="showPicer = false"
        />
      </van-popup>
      <cx-input
        :name="`${name}All`"
        :value.sync="addressAll"
        class="hide-element"
      />
    </div>
  </div>
</template>

<script>
import { Picker, Popup, DatetimePicker, Area } from "vant";
import CxInput from "./cx-input.vue";
import areaList from "./assets/js/area.js";
//import codeMap from "./"
export default {
  name: "CxPicker",
  components: {
    CxInput,
    "van-picker": Picker,
    "van-popup": Popup,
    "van-datetime-picker": DatetimePicker,
    "van-area": Area,
  },
  props: {
    eleType: {
      type: String,
      default: "commPicker",
    },
    visible: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: Number | String,
      default: "",
    },
    labelWidth: {
      type: String,
    },
    colon: {
      type: Boolean,
    },
    value: {
      type: String | Number | Boolean | Object,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: true,
    },
    leftIcon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rightIcon: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: function () {
        return [];
      },
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      default: function () {
        return [];
      },
    },
    datetimePickerType: {
      type: String,
      default: "date",
    },
    currentDate: {
      type: String | Date,
      default: function () {
        return new Date();
      },
    },
    minDate: {
      type: String | Date,
      default: function () {
        let today = new Date();
        return new Date(
          today.getFullYear() - 50,
          today.getMonth(),
          today.getDate()
        );
      },
    },
    maxDate: {
      type: String | Date,
      default: function () {
        let today = new Date();
        return new Date(
          today.getFullYear() + 50,
          today.getMonth(),
          today.getDate()
        );
      },
    },
    addressList: {
      type: Object,
    },
    addressValue: {
      type: String,
    },
    provinceCode: {
      type: String,
    },
    columnsNum: {
      type: Number,
    },
  },
  data() {
    return {
      currentValue: this.value,
      pickerDefaultIndex: 0, // commPicker选中项索引
      showPicer: false,
      initPickerDate: this.currentDate, // datetimepicker选中的日期
      areaPickerList:
        this.addressList && this.addressList.city_list
          ? this.addressList
          : areaList,
      addressAll: this.addressValue || "", // adresspicker完整省市区的值
    };
  },
  computed: {
    calProvinceCode(){
      if(this.addressAll){
        return this.addressAll.split("$")[0] || this.provinceCode
      }else{
        return this.provinceCode
      }
    }
  },
  methods: {
    //初始化数据
    initData() {
      if (this.eleType == "commPicker") {
        this.pickerDefaultIndex = this.getIndex();
      }
    },
    //获得commPicker选中项
    getIndex() {
      if (this.value) {
        let tmpIndex = this.columns.indexOf(this.value);
        return tmpIndex == -1 ? 0 : tmpIndex;
      } else {
        return 0;
      }
    },
    //日期格式字符串转日期
    parseDate(strDate) {
      let temp = strDate.replace(/-/g, "/");
      return new Date(temp);
    },
    //日期转字符串
    dateFtt(fmt, date) {
      //author: meizz
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    },
    //显示picker
    doShowPicker() {
      if (!this.disabled) this.showPicer = true;
    },
    //picker确认按钮操作
    pickerOnConfirm(data) {
      let chooseValue = "";
      if (this.eleType === "commPicker") {
        chooseValue = data;
      }
      if (this.eleType === "datetimePicker") {
        if (this.datetimePickerType === "date") {
          chooseValue = this.dateFtt("yyyy-MM-dd", data);
        } else if (this.datetimePickerType === "month-day") {
          chooseValue = this.dateFtt("MM-dd", data);
        } else if (this.datetimePickerType === "time") {
          chooseValue = this.dateFtt("hh:mm", data);
        } else if (this.datetimePickerType === "datetime") {
          chooseValue = this.dateFtt("yyyy-MM-dd hh:mm", data);
        } else if (this.datetimePickerType === "datehour") {
          chooseValue = this.dateFtt("MM-dd hh", data);
        } else {
          chooseValue = this.dateFtt("yyyy-MM-dd", data);
        }
      }
      if (this.eleType === "addressPicker") {
        chooseValue = data
          .filter((item) => !!item)
          .map((item) => item.name)
          .join(" ");
        let addressArr = [];
        data.forEach((element) => {
          addressArr.push(element.code);
          addressArr.push(element.name);
        });
        this.addressAll = addressArr.join("$");
        //this.$emit("update:addressValue", this.addressAll);
      }
      this.showPicer = false;
      this.$emit("confirm", chooseValue);
      this.$emit("update:value", chooseValue);
    },
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal;
      this.initData();
    },
    currentValue(newVal) {
      this.$emit("update:value", newVal);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initData();
    });
  },
};
</script>

<style lang='less' scoped>
.cx-picker {
}
.hide-element {
  height: 0;
  overflow: hidden !important;
  padding: 0 !important;
  border:0 !important;
}
</style>
