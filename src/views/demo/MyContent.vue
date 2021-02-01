<template>
  <div>
    <div>内容：<textarea v-model="myContent"></textarea></div>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  components: {},
  props: {
    value:String,
  },
  data() {
    return {
      myContent:this.value
    };
  },
  watch: {
    title(val){
      this.myContent = val
    },
    myContent(val){
      this.$emit("input",val)
    }
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="less">
div{
  margin:10px;
}
</style>