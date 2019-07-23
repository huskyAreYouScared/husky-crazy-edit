<!--  -->
<template>
  <div class='outside'>
    <div class="main-container">
      <div class="left-container"></div>
      <div class="right-container">
        <div class="right-container-tool">
          <button type="button" @click="boldMethod">
            <svg t="1563888838351" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1761" width="32" height="32">
            <path d="M807.384615 374.153846c0-118.153846-94.523077-216.615385-206.76923-216.615384H275.692308c-21.661538 0-39.384615 17.723077-39.384616 39.384615v649.846154c0 21.661538 17.723077 39.384615 39.384616 39.384615h324.923077C712.861538 886.153846 807.384615 787.692308 807.384615 669.538462c0-57.107692-21.661538-108.307692-57.107692-147.692308 35.446154-39.384615 57.107692-90.584615 57.107692-147.692308zM600.615385 748.307692H374.153846v-157.538461h226.461539c37.415385 0 70.892308 37.415385 70.892307 78.769231s-33.476923 78.769231-70.892307 78.76923z m0-295.384615H374.153846v-157.538462h226.461539c37.415385 0 70.892308 37.415385 70.892307 78.769231s-33.476923 78.769231-70.892307 78.769231z" p-id="1762" fill="#ffffff"></path>
            </svg>
          </button>
        </div>
        <div class="right-container-write" ref="writeContainer" contenteditable="true"></div>
      </div>
    </div>
    <div  class="tool-package" contenteditable="false"></div>
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
    rachTextExec (command, options) {
      document.execCommand(command, false, options || null)
      // this.$refs.writeContainer.focus()
    },
    boldMethod () {
      this.rachTextExec('bold')
    }
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style  scoped>
.outside{
  width: 100%;
  height: 100vh;
}
.main-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: stretch;
  box-sizing: border-box;
}

/* left-container style */
.left-container{
  box-shadow: rgba(255, 255, 255, 0.8) inset 0 0 2px;
  background: rgb(37, 37, 37);
  min-width: 350px;
}

/* right-container style */
.right-container{
  box-shadow: rgba(255, 255, 255, 0.8) inset 0 0 2px;
  background: rgb(37, 37, 37);
  width: 100%;
  box-sizing: border-box;
}
.right-container-tool{
  width: 100%;
  height:50px;
  box-shadow: rgba(255, 255, 255, 0.8) inset 0 0 2px;
  background: rgb(37, 37, 37);
  line-height: 50px;
}
.right-container-write{
  color: #fff;
  font-size: 20px;
  font-family: 'serif';
  height:calc(100% - 70px);
  padding: 10px;
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
button{
   background: rgb(37, 37, 37);
   border: rgb(37, 37, 37) 0px solid;
   margin-top: 7px;
   margin-left: 1px;
}
</style>
