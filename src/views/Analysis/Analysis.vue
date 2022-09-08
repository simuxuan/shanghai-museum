<!-- 首页 -->
<template>
  <div class="main">
    <el-container>
      <el-container>
        <el-aside width="3.125rem">
          <el-menu background-color="#ecf1ff" router default-active="/dataanalysis/overall">
            <el-menu-item index="/analysis/overall">总览</el-menu-item>
            <el-menu-item index="/analysis/peak">展馆监测峰值</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script></script>
<style Lang="less" scoped>
.main {
  display: flex;
  flex-direction: row;
  overflow: auto;
}
.el-aside {
  padding: .25rem 0;
  width: 2.5rem !important ;
}
.el-main {
  padding: .25rem 0;
  width: 100%;
}
.el-menu {
  background-color: transparent;
  border-right: 0;
  /* margin-left: 25px; */
}
.el-menu-item {
  background-image: url('../../assets/image/bg／list_r.png');
  background-size: 100% 100%;
  width: 2.5125rem;
  height: .55rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: .25rem;
  margin-top: .25rem;
  color: #6778bf !important;
  letter-spacing: .0072rem;
}
.el-menu-item.is-active {
  /* background-image: url('../assets/image/ActiveNavItem1.png'); */
  background-size: 100% 100%;
}
</style>
