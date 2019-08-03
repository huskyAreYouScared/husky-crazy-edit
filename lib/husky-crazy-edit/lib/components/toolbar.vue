<!--  -->
<template>
  <div class=''>
    <select @change="fontSize" ref="fontsizeCtrl">
      <option value="1">12px</option>
      <option value="2">13px</option>
      <option value="3">14px</option>
      <option value="4">16px</option>
      <option value="5">18px</option>
      <option value="6">20px</option>
      <option value="7">22px</option>
    </select>
    <button type="button" @click="boldMethod">
      <svg t="1563888838351" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1761" width="32" height="32">
      <path d="M807.384615 374.153846c0-118.153846-94.523077-216.615385-206.76923-216.615384H275.692308c-21.661538 0-39.384615 17.723077-39.384616 39.384615v649.846154c0 21.661538 17.723077 39.384615 39.384616 39.384615h324.923077C712.861538 886.153846 807.384615 787.692308 807.384615 669.538462c0-57.107692-21.661538-108.307692-57.107692-147.692308 35.446154-39.384615 57.107692-90.584615 57.107692-147.692308zM600.615385 748.307692H374.153846v-157.538461h226.461539c37.415385 0 70.892308 37.415385 70.892307 78.769231s-33.476923 78.769231-70.892307 78.76923z m0-295.384615H374.153846v-157.538462h226.461539c37.415385 0 70.892308 37.415385 70.892307 78.769231s-33.476923 78.769231-70.892307 78.769231z" p-id="1762" fill="#ffffff"></path>
      </svg>
    </button>
    <input type="color" @change="hiliteColor" ref="hiliteColorCtrl">

  </div>
</template>

<script>
export default {
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
    // 加粗字体或减去加粗效果
    boldMethod () {
      this.rachTextExec('bold')
    },
    // 制定字体大小
    fontSize () {
      let fontsize = this.$refs.fontsizeCtrl.value
      this.rachTextExec('fontSize', fontsize)
    },
    // 更改背景颜色
    hiliteColor () {
      let hiliteColorCtrl = this.$refs.hiliteColorCtrl.value
      alert(hiliteColorCtrl)
      this.rachTextExec('hiliteColor', hiliteColorCtrl)
    }
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style  scoped>
button{
  background: rgb(37, 37, 37);
  border: rgb(37, 37, 37) 0px solid;
  margin-top: 7px;
  margin-left:5px;
}
select{
  background: rgb(77, 77, 77);
  border: rgb(194, 194, 194) 0px solid;
  border-radius: 6px;
  width: 100px;
  height: 30px;
  margin-left: 1px;
  color: #fff;
  font-size: 20px;
  position: relative;
  bottom: 10px;
  left: 5px;
}
input{
  background: rgb(77, 77, 77);
  border: rgb(194, 194, 194) 0px solid;
  border-radius: 6px;
  width: 30px;
  height: 30px;
  margin-left: 1px;
  color: #fff;
  font-size: 20px;
  position: relative;
  bottom: 5px;
  left: 5px;
}
</style>
