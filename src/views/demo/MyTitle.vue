<template>
  <div>
    <div>标题：<input name="title" v-model="myTitle"/></div>
  </div>
</template>

<script>
export default {
  name: "MyTitle",
  components: {},
  props: {
    title:String,
  },
  data() {
    return {
      myTitle:this.title,
    };
  },
  watch: {
    title(val){
      this.myTitle = val
    },
    myTitle(val){
      this.$emit("update:title",val)
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