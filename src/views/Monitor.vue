<template>
  <div class="main">
    <!-- 菜单导航栏 -->
    <div class="left">
      <div class="left_select">
        <div class="left_select_title">当前位置:</div>
        <div class="left_select_1">
          <el-select v-model="value1" placeholder="一展厅">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="left_select_2">
          <el-select v-model="value2" placeholder="青铜馆">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="left_nav">
        <!--导航栏-->
        <el-menu
          background-color="transparent"
          text-color="black"
          active-text-color="blue"
          default-active="/searchgoods/searchgoodschildren"
          show-timeout="10"
          hide-timeout="10"
          router
        >
          <!--1.一级菜单-->
          <el-submenu index="1">
            <template slot="title">
              <div class="firstmenu">
                <span> 1层展厅 </span>
              </div>
            </template>
            <!--二级菜单-->
            <el-menu-item index="1-1">
              <template>
                <div class="secondmenu">
                  <span>临展</span>
                </div>
              </template>
            </el-menu-item>
            <el-submenu index="1-2">
              <template slot="title">
                <div class="secondmenu">
                  <span>青铜陈列馆</span>
                </div>
              </template>
              <el-menu-item index="/searchgoods/searchgoodschildren1">
                <span>蛙式鼓-二氧化碳85</span>
              </el-menu-item>
              <el-menu-item index="/searchgoods/searchgoodschildren">
                <span>镶红铜-光照紫外93</span>
              </el-menu-item>
              <el-menu-item index="/searchgoods/searchgoodschildren2">
                <span>铜矿石-温湿度121</span>
              </el-menu-item>
              <el-menu-item index="/searchgoods/searchgoodschildren2">
                <span>金属范畴造-温湿度121</span>
              </el-menu-item>
              <el-menu-item index="/searchgoods/searchgoodschildren2">
                <span>砺石-温湿度123</span>
              </el-menu-item>
              <el-menu-item index="/searchgoods/searchgoodschildren2">
                <span>绳纹提梁焚失法铸造-温湿度124</span>
              </el-menu-item>
              <el-menu-item index="/searchgoods/searchgoodschildren2">
                <span>铜铁复合兵器-温湿度125</span>
              </el-menu-item>
              <el-menu-item index="/searchgoods/searchgoodschildren2">
                <span>铜铁表面白亮处理-温湿度126</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <!--2.一级菜单-->
          <el-submenu index="2">
            <template slot="title">
              <div class="firstmenu">
                <span>2层展厅</span>
              </div>
            </template>
            <!--二级菜单-->
            <el-menu-item index="2-1">
              <template>
                <span>临展1</span>
              </template>
            </el-menu-item>
            <el-submenu index="2-2">
              <template slot="title">
                <span>临展2</span>
              </template>
              <el-menu-item index="2-2-1">
                <template>
                  <span>2021生肖展</span>
                </template>
              </el-menu-item>
              <el-submenu index="2-2-2">
                <template slot="title">
                  <span>江南文化展</span>
                </template>
                <el-menu-item index="2-2-2-1">
                  <span>唐丝绸</span>
                </el-menu-item>
                <el-menu-item index="2-2-2-2">
                  <span>石狮</span>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-submenu>
          <!--3.一级菜单-->
          <el-submenu index="3">
            <template slot="title">
              <div class="firstmenu">
                <span>3层展厅</span>
              </div>
            </template>
            <!--二级菜单-->
            <el-menu-item index="3-1">
              <template>
                <span>临展1</span>
              </template>
            </el-menu-item>
            <el-submenu index="3-2">
              <template slot="title">
                <span>临展2</span>
              </template>
              <el-menu-item index="3-2-1">
                <template>
                  <span>2021生肖展</span>
                </template>
              </el-menu-item>
              <el-submenu index="3-2-2">
                <template slot="title">
                  <span>江南文化展</span>
                </template>
                <el-menu-item index="3-2-2-1">
                  <span>唐丝绸</span>
                </el-menu-item>
                <el-menu-item index="3-2-2-2">
                  <span>石狮</span>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <!-- 图表部分 -->
    <!-- 中间 -->
    <div class="mid">
      <div class="mid1">
        <!--风险统计-->
        <div class="mid1_title title">状态波动</div>
        <div class="echart1" style="height: 5.5rem; width: 8.5rem">
          <MidLine></MidLine>
        </div>
      </div>
      <div class="mid2">
        <!--当前状态-->
        <div class="mid2_title title">当前状态</div>
        <div class="mid2_contaniner">
          <!-- 左 -->
          <div class="con_left">
            <div class="descript">
              <div class="descriptor">文物:{{ this.selectThingName }}</div>
              文物类别:<br />
              位置点:一层展厅a展馆034柜头
            </div>
            <div class="echart2" style="height: 4rem; width: 4rem">
              <MidRadar></MidRadar>
            </div>
          </div>
          <!-- 右 -->
          <div class="con_right">
            <div class="QRcode">
              <img src="../assets/image/code-red.png" alt="" />
            </div>
            <div class="params">
              <div class="paramsTitle">检测指标</div>
              温度: 26℃<i class="spaceA"></i>湿度: 60%<br />
              光照: 510lux<i class="spaceA"></i>霜点: 22.3℃<br />
              二氧化硫: 4.3ppb<i class="spaceB"></i>有机挥发物: 9.5ppb
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边 -->
    <div class="right">
      <div class="right1">
        <!--历史数据-->
        <div class="right1_title title">历史数据</div>
        <div class="echart3" style="height: 5.5rem; width: 8.5rem">
          <RightLine></RightLine>
        </div>
      </div>
      <div class="right2">
        <!--文物占比-->
        <div class="right2_title title">文物占比</div>
        <div class="echar4" style="height: 5.5rem; width: 8.5rem">
          <RightBar></RightBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MidLine from "@/components/Monitor/MidLine";
import MidRadar from "@/components/Monitor/MidRadar";
import RightBar from "@/components/Monitor/RightBar";
import RightLine from "@/components/Monitor/RightLine";
export default {
  name: "",
  components: { MidLine, MidRadar, RightBar, RightLine },
  data() {
    return {
      // 选中的文物
      selectThingName: "青铜鼎",
      // select
      options1: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: "",
      options2: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value2: "",
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: row;
  overflow: auto;
}
/* 导航栏 */
.left {
  width: 5.325rem;
  height: 11.75rem;
  margin-left: 0.3rem;
  margin-right: 0.5rem;
  background-image: url("../assets/image/bg／san.png");

  .left_select {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 0.4625rem;
    width: 4.525rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    margin-left: 0.3rem;

    .left_select_title {
      // display: flex;
      // flex-direction: column;
      height: 0.4625rem;
      line-height: 0.4625rem;
      font-size: 0.2rem;
      color: #332f6c;
      font-family: MicrosoftYaHei;
      margin-top: 0.1rem;
    }

    .left_select_1 {
      height: 0.4625rem;
      width: 1.2125rem;
      margin-left: 0.0625rem;
      margin-right: 0.4rem;
      //display: flex;
      //justify-content: center;
      // background-image: url(../assets/image/bg／t.png);
    }

    .left_select_2 {
      height: 0.4625rem;
      width: 1.2125rem;
      display: flex;
      justify-content: center;
      // background-image: url(../assets/image/bg／r.png);
    }

    .left_nav {
      height: 10.6875rem;
    }
  }
}
/* menu  */
.firstmenu {
  width: 1.5875rem;
  height: 0.55rem;
  background-image: url(../assets/image/bg／list_r.png);
  background-size: 100%;
  font-size: 0.25rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: black;
  line-height: 0.35rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.secondmenu {
  font-size: 0.225rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: black;
  line-height: 0.35rem;
}
/* 中间图表 */
.mid {
  display: flex;
  flex-direction: column;
  width: 8.8625rem;
  height: 11.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.3rem;

  .mid1 {
    height: 5.7125rem;
    width: 100%;
    margin-bottom: 0.3rem;
    //background-image: url("../assets/image/bg／wu.png");
  }

  .mid2 {
    width: 100%;
    height: 5.7375rem;
    //background-image: url("../assets/image/bg／liu.png");

    .mid2_contaniner {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .con_left {
        width: 3.75rem;
        margin-right: 1.875rem;
        font-size: 0.2rem;
        font-family: MicrosoftYaHei;
        color: rgb(101, 92, 92);
        line-height: 0.375rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .descript {
          margin: 0.1rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .descriptor {
          font-size: 0.225rem;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: rgb(101, 92, 92);
          line-height: 0.375rem;
        }
      }

      .con_right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
/* 右边图表 */
.right {
  width: 8.2125rem;
  height: 11.75rem;
  margin-left: 0.3rem;
  margin-bottom: 0.3rem;

  .right1 {
    height: 5.7125rem;
    margin-bottom: 0.3rem;
    //background-image: url("../assets/image/bg／ba.png");
  }

  .right2 {
    height: 5.7375rem;
    //background-image: url("../assets/image/bg.png");
  }
}
/* 图表标题 */
.title {
  height: 0.4125rem;
  text-align: center;
  font-size: 0.3rem;
  font-weight: 500;
  font-family: MicrosoftYaHei;
  line-height: 0.4125rem;
  padding-top: 0.3rem; /* 注意padding和margin的区别*/
  color: #332f6c;
}
/* select */
@deep: ~">>>";

.left_select_1 {
  @{deep} .el-select {
    width: 1.4rem;
  }
  /* selecte 框的高度设置，默认是 40px*/
  @{deep} .el-input__inner {
    height: 0.5rem;
  }
  /* 下面设置右侧按钮居中 */
  @{deep} .el-input__suffix {
    top: 0.1rem;
  }
  @{deep}.el-input__icon {
    line-height: inherit;
  }
  @{deep} .el-input__suffix-inner {
    display: inline-block;
  }
}
.left_select_2 {
  @{deep} .el-select {
    width: 1.4rem;
  }
  /* selecte 框的高度设置，默认是 40px*/
  @{deep} .el-input__inner {
    height: 0.5rem;
  }
  /* 下面设置右侧按钮居中 */
  @{deep} .el-input__suffix {
    top: 0.1rem;
  }
  @{deep}.el-input__icon {
    line-height: inherit;
  }
  @{deep} .el-input__suffix-inner {
    display: inline-block;
  }
}
</style>
