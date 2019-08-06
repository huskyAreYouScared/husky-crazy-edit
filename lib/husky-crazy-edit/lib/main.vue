<!--  -->
<template>
  <div class='outside'>
    <div class="main-container">
      <div class="left-container"></div>
      <div class="right-container">
        <div class="right-container-tool">
          <toolbar></toolbar>
        </div>
        <div class="right-container-write" >
          <div class="write-content" ref="writeContainer" @keyup="getCurrentCotent" contenteditable="true"></div>
        </div>
      </div>
    </div>
    <div  class="rach-border"  contenteditable="false">
      <div class="rach-content" v-html="syncRachText"></div>
    </div>
  </div>
</template>

<script>
import toolbar from './components/toolbar'
export default {
  props: {
  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    toolbar
  },
  data () {
    return {
      syncRachText: ''
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getCurrentCotent () {
      this.syncRachText = this.$refs.writeContainer.innerHTML
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
  overflow: hidden;
}
.write-content{
  width: 100%;
  height: 50vh;
  min-height: 100%;
}
.rach-border{
  width: 100px;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 50px;
  cursor: pointer;
  overflow: hidden;
}
.rach-content{
  width: 100%;
  height: auto;
  color: #fff;
  /* transform: scale(0.5); */
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
