<template>
<div class='home m'>
    <el-row class="home" :gutter='20'>
    <el-row :span='8' style='margin-top:20px'>
      <el-card shadow='hover'>
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">毛狗狗^.^</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
            <p>上次登录时间:<span>2022/3/3</span></p>
           <p>上次登录地点:<span>福建-福州</span></p>
        </div>
      </el-card>
    </el-row>
  </el-row>
  
</div>

  
</template>

<script>
export default {
    name:'home',
    data() {
        return {
          userImg:require('../../src/assets/images/meinv.png')
            
        }
    },

}
</script>

<style>

</style>