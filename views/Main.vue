<template>
<el-container style="height:100%">
  <el-aside width="auto">
    <common-aside> </common-aside>
  </el-aside>
  <el-container>
    <el-header>
      <common-header/>
    </el-header>
    <common-tag/>
    <el-main> 
      <!-- <common-main/>  -->
      
      <router-view>
      </router-view>
    </el-main>
  </el-container>
</el-container>
  
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
import CommonTag from '../src/components/CommonTag.vue'
import CommonMain from '../src/components/CommonMain.vue'
export default {
    name:'Home',
    components:{
      CommonAside,
      CommonHeader,
      CommonTag,
      CommonMain
      
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang='less' scoped>
.el-header{
    background-color:	#fff;
}
.el-main{
    padding-top: 0;
    background-color: #F5F5F5;
    //background-color: #333;
    // .vue-particles{
    //   position:flex;
    //   z-index:-2;
    // }
}
</style>