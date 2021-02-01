<template>
  <div class="demo-index">
   <!--标准表单-->
   <!-- <cx-form 
          v-bind="demoMap.formConfig" 
          :element-map="demoMap.elementMap" 
          @submit="doSubmit" @failed="doFailed" 
        /> -->
   <!---带自定义表单元素的表单-->
   <cx-form v-bind="demoMap.formConfig" @submit="doSubmit" @failed="doFailed">
      <cx-form-element v-for="item in demoMap.elementMap"
          :key="item.id"
          :ele-config="item"
          :label-width="demoMap.formConfig.labelWidth"
          :colon="demoMap.formConfig.colon"
          :value.sync="item.value">
          <template>
            <element-recommender 
              v-if="item.eleType=='customer'&&item.name=='recommender'" 
              v-bind="item"/>
          </template>
          </cx-form-element>
   </cx-form>
  </div>
</template>

<script>
import CxForm from '@/components/base/cx-form/cx-form.vue'
import demoMap from './form-config.js'
import CxFormElement from '@/components/base/cx-form/cx-form-element.vue'
import ElementRecommender from './ElementRecommender.vue'
export default {
  name: "FormDemo",
  components: {
   CxForm,
   CxFormElement,
   ElementRecommender
  },
  watch: {},
  data() {
    return {
      demoMap:demoMap
    };
  },
  created(){
  },
  mounted() {
  },
  methods: {
    doSubmit(data){
      console.log(data)
    },
    doFailed(data){
      console.log(data)
    }
  },
};
</script>
<style scoped lang="less">

</style>