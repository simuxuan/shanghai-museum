<!-- 首页 -->
<template>
  <div class="main">
    <div class="left">
      <div class="left_fan">几个扇形图</div>
      <div class="left_bar">柱状图</div>
    </div>
    <div class="mid"></div>
    <div class="right">
      <div class="right_bar"></div>
      <div class="right_line"></div>
      <div class="right_line2"></div>
    </div>
  </div>
</template>
<script></script>
<style Lang="less" scoped>
.main {
  display: flex;
}
.left {
  /* 总宽度： 499px    总高度：964px*/
  width: 5.4625rem;
  height: 11.75rem;
  margin-left: .3rem;
  margin-right: .475rem;
  margin-bottom: .3rem;
}
.left_fan {
  width: 5.4625rem;
  height: 5.6625rem;
  margin-bottom: .6rem;
  background-color: #42b983;
}
.left_bar {
  width: 5.4625rem;
  height: 5.4875rem;
  background-color: #42b983;
}
.mid {
  width: 11.2375rem;
  height: 11.75rem;
  margin-bottom: .3rem;
  background-color: cadetblue;
}
.right {
  width: 5.725rem;
  height: 11.75rem;
  margin-left: .5rem;
  margin-right: .3rem;
  margin-bottom: .3rem;
}
.right_bar {
  width: 5.725rem;
  height: 3.75rem;
  /* margin-bottom: 24px; */
  margin-bottom: .1875rem;
  background-color: burlywood;
}
.right_line {
  width: 5.725rem;
  height: 3.75rem;
  margin-bottom: .1875rem;
  background-color: burlywood;
}
.right_line2 {
  width: 5.725rem;
  height: 3.75rem;
  margin-bottom: .1875rem;
  background-color: burlywood;
}
</style>