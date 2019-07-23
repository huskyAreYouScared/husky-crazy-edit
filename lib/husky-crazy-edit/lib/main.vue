<!--  -->
<template>
  <div class='main' contenteditable="true">
    <div  class="tool-package"></div>
  </div>
</template>

<script>
export default {
  props: {
    // 设置卡片标题
  },
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style  scoped>
.main{
  width: 100%;
  height: 100vh;
  border: 1px dashed #ccc;
}
.tool-package{
  width: 50px;
  height: 50px;
  position: absolute;
  right: 50px;
  top: 50px;
  border: #ccc dashed 2px;
  cursor: pointer;
}
</style>
