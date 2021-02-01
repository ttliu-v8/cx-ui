<template>
  <div class="demo1">
    <my-title :title.sync="pTitle" />
    <my-content v-model="pContent"/>
    <div>标题：{{pTitle}}</div>
    <div>内容：{{pContent}}</div>
  </div>
</template>

<script>
import MyTitle from './MyTitle.vue'
import MyContent from './MyContent.vue'

export default {
  name: "Demo1",
  components: {
    MyTitle,
    MyContent
  },
  data() {
    return {
      pTitle:"这是标题",
      pContent:"这是内容"
    };
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="less">
.demo1{
  padding:15px;
  div{
    margin:10px;
  }
}
</style>