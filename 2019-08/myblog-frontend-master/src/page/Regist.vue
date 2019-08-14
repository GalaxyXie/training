<template>
<el-container>
 <el-header class="header">
        <router-link to="/">Login</router-link> |
        <router-link to="/about">Regist</router-link>
</el-header>
  <el-container>
    <el-aside width="300"> <img src="../assets/img/register.jpg" /> </el-aside>
    <el-main class="main"><div style="width: 300px; margin: 0 auto;">
        <el-form  label-width="45px" >
          <el-form-item label="姓名:" style="text-align: center">
            <el-input placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-input placeholder="请输入邮箱" ></el-input>
          </el-form-item>
          <el-form-item label="电话:">
            <el-input placeholder="请输入电话"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input  placeholder="请输入密码" show-password></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="primary">确认</el-button>
      <el-button type="primary">重置</el-button></el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'Regist',
  }
</script>

<style scoped>
.header{
    text-align: right;
    vertical-align: center;
    background: #ffc8c8;
}
.main{
    background-image: url(../assets/img/background.jpg);
    margin: 0 auto;
}
</style>