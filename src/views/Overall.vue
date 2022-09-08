<template>
  <div class="main-Container">
    <div class="main-Up">
      <div class="upLeft">
        <div class="leftTitle">温度波动范围</div>
        <div class="leftNote">前一天区域温度的最大值、最小值和平均值</div>
        <!-- bar1 -->
        <div class="leftbar" >
            <OverallBar1></OverallBar1>
        </div>
      </div>
      <div class="upMid">
        <div class="midTitle">湿度波动范围</div>
        <div class="midNote">前一天区域湿度的最大值、最小值和平均值</div>
        <!-- bar2 -->
        <div class="midbar" >
            <OverallBar2></OverallBar2>
        </div>
      </div>
      <div class="upRight">
        <div class="rightTitle">区域稳定性</div>
        <div class="rightNote">稳定性系数通过方差运算获得</div>
        <!-- bar3 -->
        <div class="rightbar" >
            <OverallBar3></OverallBar3>
        </div>
      </div>
    </div>
    <div class="main-Down">
      <div class="downTitle">日均统计</div>
      <div class="downMenu">
        <el-menu class="bottomMenu" mode="horizontal">
          <el-menu-item index="1">温度</el-menu-item>
          <el-menu-item index="2">湿度</el-menu-item>
          <el-menu-item idnex="3">光照</el-menu-item>
          <el-menu-item index="4">二氧化碳</el-menu-item>
          <el-menu-item index="5">二氧化硫</el-menu-item>
          <el-menu-item index="6">有机物</el-menu-item>
        </el-menu>
      </div>
      <!-- line -->
      <div class="Line" >
        <OverallLine></OverallLine>
      </div>
    </div>
  </div>
</template>

<script>
import OverallBar1 from '@/components/Analysis/OverallBar1.vue'
import OverallBar2 from '@/components/Analysis/OverallBar2.vue'
import OverallBar3 from '@/components/Analysis/OverallBar3.vue'
import OverallLine from '@/components/Analysis/OverallLine.vue'

export default {
  components:{
    OverallBar1,
    OverallBar2,
    OverallBar3,
    OverallLine
  },
  methods: {
  },
  mounted() {

  }
}
</script>

<style Lang="less" scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.main-Up {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  height: 5.625rem;
  margin: .125rem auto;
}
.main-Up .upLeft {
  width: 6.5rem;
  height: 5.125rem;
  /* background-color: pink; */
  background-image: url('../assets/image/bg／wu.png');
  background-size: 100% 100%;
  margin-right: .125rem;
}
.main-Up .upLeft .leftTitle {
  font-size: .3rem;
  font-family: MicrosoftYaHei;
  line-height: .2625rem;
  display: flex;
  justify-content: center;
}
.main-Up .upLeft .leftNote {
  font-size: .225rem;
  font-family: MicrosoftYaHei;
  line-height: .2625rem;
  display: flex;
  justify-content: center;
  margin-top: .1875rem;
  margin-bottom: .1875rem;
}
.main-Up .upMid {
  width: 6.5rem;
  height: 5.125rem;
  /* background-color: pink; */
  background-image: url('../assets/image/bg／wu.png');
  background-size: 100% 100%;
  margin-right: .125rem;
}
.main-Up .upMid .midTitle {
  font-size: .3rem;
  font-family: MicrosoftYaHei;
  line-height: .2625rem;
  display: flex;
  justify-content: center;
}
.main-Up .upMid .midNote {
  font-size: .225rem;
  font-family: MicrosoftYaHei;
  line-height: .2625rem;
  display: flex;
  justify-content: center;
  margin-top: .1875rem;
  margin-bottom: .1875rem;
}
.main-Up .upRight {
  width: 6.5rem;
  height: 5.125rem;
  background-image: url('../assets/image/bg／wu.png');
  background-size: 100% 100%;
}
.main-Up .upRight .rightTitle {
  font-size: .3rem;
  font-family: MicrosoftYaHei;
  line-height: .2625rem;
  display: flex;
  justify-content: center;
}
.main-Up .upRight .rightNote {
  font-size: .225rem;
  font-family: MicrosoftYaHei;
  line-height: .2625rem;
  display: flex;
  justify-content: center;
  margin-top: .1875rem;
}
.main-Down {
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 5.625rem;
  margin: .125rem auto .1875rem auto;
  background-image: url('../assets/image/bg／wu.png');
  background-size: 100% 100%;
}
.main-Down .downTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .3rem;
  font-family: MicrosoftYaHei;
  line-height: .2625rem;
}
.main-Down .downMenu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: .125rem;
  margin-right: .25rem;
}
.main-Down .downMenu .el-menu {
  background-color: #ecf1ff;
  border-bottom: 0 !important;
}
.leftbar,.midbar,.rightbar {
    width:6.25rem;
    height:4.375rem;
}
.Line {
    width: 19.375rem;
    height: 4.375rem;
}
</style>
