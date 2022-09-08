<!-- 首页 -->
<template>
  <div class="main">
    <!-- 左边menu -->
    <div class="left">
      <div class="left_select">
        <div class="left_select_title">当前位置</div>
        <div class="left_select_1">
          <el-select v-model="selectedRoom" placeholder="一展厅">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="left_select_2">
          <el-select v-model="selectedrelic" placeholder="青铜馆">
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
          ref="menu"
          background-color="transparent"
          text-color="black"
          active-text-color="blue"
          :default-active="bindNavDetails"
          show-timeout="10"
          hide-timeout="10"
          unique-opened="true"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
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
                  <span>第一展览厅</span>
                </div>
              </template>
            </el-menu-item>
            <el-submenu index="1-2">
              <template slot="title">
                <div class="secondmenu">
                  <span>中国古代青铜馆</span>
                </div>
              </template>
              <el-menu-item index="镶红铜">
                <span>镶红铜</span>
              </el-menu-item>
              <el-menu-item index="铁铜复合兵器">
                <span>铜铁复合兵器</span>
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
                <span>第二展览厅</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-2">
              <template>
                <span>中国古代陶瓷馆</span>
              </template>
            </el-menu-item>
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
                <span>中国历代书法馆</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3-2">
              <template>
                <span>中国历代绘画馆</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3-3">
              <template>
                <span>中国历代印章馆</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <!--4.一级菜单-->
          <el-submenu index="4">
            <template slot="title">
              <div class="firstmenu">
                <span>4层展厅</span>
              </div>
            </template>
            <!--二级菜单-->
            <el-menu-item index="4-1">
              <template>
                <span>中国历代钱币馆</span>
              </template>
            </el-menu-item>
            <el-menu-item index="4-2">
              <template>
                <span>中国少数民族工艺馆</span>
              </template>
            </el-menu-item>
            <el-menu-item index="4-3">
              <template>
                <span>中国古代玉器馆</span>
              </template>
            </el-menu-item>
            <el-menu-item index="4-4">
              <template>
                <span>中国明清家具馆</span>
              </template>
            </el-menu-item>
            <el-submenu index="4-5">
              <template slot="title">
                <div class="secondmenu">
                  <span>第三展览厅</span>
                </div>
              </template>
              <el-menu-item index="4-5-1">
                <span>沈寿刺绣《花鸟图》</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <!-- 中间图标 -->
    <div class="mid">
      <!-- 溯源信息 -->
      <div class="mid_up">
        <div class="mid_up_title">文物保存环境风险事件信息</div>
        <!-- 表格 -->
        <el-descriptions
          class="mid_up_descriptions"
          :column="2"
          :size="size"
          border
          contentStyle="text-align:center"
        >
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              文物名称
            </template>
            {{ this.traceDataForm.name }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              文物质地
            </template>
            <el-tag size="small">{{ this.traceDataForm.type }}</el-tag>
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              发生时间
            </template>
            {{ this.traceDataForm.time }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              发生地点
            </template>
            {{ this.traceDataForm.location }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              文物级别
            </template>
            <el-tag size="small">{{ this.traceDataForm.level }}</el-tag>
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              文物本体病害信息
            </template>
            {{ this.traceDataForm.disease }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              风险等级
            </template>
            <el-tag size="small">{{ this.traceDataForm.risklevel }}</el-tag>
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              风险源
            </template>
            <el-tag size="small">{{ this.traceDataForm.risksource1 }}</el-tag>
            <el-tag size="small">{{ this.traceDataForm.risksource2 }}</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <!-- 决策信息 -->
      <div class="mid_down">
        <div class="mid_down_title">辅助决策方案</div>
        <el-table
          :show-header="false"
          :data="tableData"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column
            width="180"
            prop="name"
            align="center"
          ></el-table-column>
          <el-table-column prop="amount1" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: "",
      // 溯源详细信息
      /**这里表格不规范，后续使用slot插槽等 */
      /* 这四个模拟数据 */
      traceDataForm1: {
        name: "镶红铜",
        time: "2022-9-1 17:52",
        location: "中国古代青铜馆2022捐赠展5号展柜",
        type: "青铜器",
        level: "二级",
        disease: "锈蚀",
        risklevel: "良",
        risksource1: "湿度较高",
        risksource2: "SO2含量较高",
      },
      traceDataForm2: {
        name: "铁铜复合兵器",
        time: "2022-8-31 12:37",
        location: "中国古代青铜馆2022捐赠展1号展柜",
        type: "青铜器",
        level: "一级",
        disease: "锈蚀",
        risklevel: "中",
        risksource1: "湿度较高",
        risksource2: "有机污染物含量较高",
      },

      // 决策详细信息(表格数据)  实际上这里应该是请求得来的数据，先模拟
      tableDataForm1: {
        // 详细调控方案
        details:
          "加入一盒调湿剂，优先调控湿度；经常性人工排污，再加入一盒吸附剂，做好展柜密封管理，考虑增添净化设施",
        // 设备
        devices: "恒温恒湿+化学净化空调1台",
        // 所需资源
        resources: "调湿剂1盒，吸附剂1盒",
        // 人力
        manpower: "2人",
        // 其他备注
        others:
          "条件允许的情况下，考虑增添一台净化设施；若经常性发生污染事件，可考虑人工手持测试仪器找到污染源所在，彻底排除",
      },
      tableDataForm2: {
        // 详细调控方案
        details: "调整净化设施参数控制二氧化硫浓度",
        // 设备
        devices: "恒温恒湿+化学净化空调1台",
        // 所需资源
        resources: "吸附剂1盒",
        // 人力
        manpower: "1人",
        // 其他备注
        others:
          "若经常性发生污染事件，可考虑人工手持测试仪器找到污染源所在，彻底排除",
      },
      // 位置信息  左上角dropdown
      options1: [],  //定位的展厅数据
      options2: [],  //定位的文物
      selectedRoom: "",       // 选中的展馆
      selectedrelic:"",       // 选中的文物

      // 与导航菜单绑定：具体文物
      bindNavDetails: "",
      // 处于风险状态，即需要溯源决策的文物展厅关联表（需要后端获得）这里暂时模拟
      dictList: {
        中国古代青铜馆: ["镶红铜", "铁铜复合兵器"],
        第三展览厅: ["沈寿刺绣《花鸟图》"],
      },

      // 展示的数据
      traceDataForm: {}, // 溯源
      tableDataForm: {}, // 决策
    };
  },
  methods: {
    // 展开，收起触发事件
    handleOpen(key, keyPath) {
      console.log("===1===");
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("===2===");
      console.log(key, keyPath); // 1 【‘1’】
    },
    handleSelect(key, keyPath) {
      console.log("===3===");
      // key 为菜单的选中的栏，keypath为多级菜单全部路径
      console.log(key, keyPath);
      console.log(this.$root.indexName);
      // console.log("============================", this.$refs.menu);
      // console.log(this.dictList[this.$root.indexName][0]) // 注意这里不由报警点进来，就为默认值，这里报错，导致页面加载不出来。

      // 注意，这里

      // 刷新图表（借助computed改变时即可刷新原理，改变数据源即可）
      // 此处应该判断是哪个文物，再去查对应的表
      if (key == "镶红铜") {
        this.traceDataForm = this.traceDataForm1;
        this.tableDataForm = this.tableDataForm1;
      } else if (key == "铁铜复合兵器") {
        this.traceDataForm = this.traceDataForm2;
        this.tableDataForm = this.tableDataForm2;
      }
    },
    // 绑定到对应展厅的第一个文物，刷新右边图表
    bindNav() {
      /*
                this.dictList为处于风险状态的展厅与文物关联表 
                this.$root.indexName为相应展厅
                this.dictList[this.$root.indexName][0]为相应展厅第一个文物
                这是默认点击报警信号进来的
            */
      // 读取展厅
      // 读取展厅第一个文物
      this.bindNavDetails = this.dictList[this.$root.indexName][0];
      // 下面是进入之后，默认的文物对应的表格，这里是在mount挂载之后要使用的，不能缺
      if (this.bindNavDetails == "镶红铜") {
        this.traceDataForm = this.traceDataForm1;
        this.tableDataForm = this.tableDataForm1;
      } else if (this.bindNavDetails == "铁铜复合兵器") {
        this.traceDataForm = this.traceDataForm2;
        this.tableDataForm = this.tableDataForm2;
      }
    },
  },
  computed: {
    /* 辅助决策方案图表的数据 */
    tableData() {
      return [
        {
          name: "调控方案",
          amount1: this.tableDataForm.details,
        },
        {
          name: "设备使用情况",
          amount1: this.tableDataForm.devices,
        },
        {
          name: "资源分配",
          amount1: this.tableDataForm.resources,
        },
        {
          name: "人力分配",
          amount1: this.tableDataForm.manpower,
        },
        {
          name: "备注",
          amount1: this.tableDataForm.others,
        },
      ];
    },
  },
  // 一般在此数据初始化：可以调用data和method，但是此时还是虚拟dom，真是dom还没生成，$el 还不可用。
  created() {
    // this.bindNav()
  },
  // 挂载完数据
  mounted() {
    this.bindNav();
  },
};
</script>
<style Lang="less" scoped>
.main {
  display: flex;
  flex-direction: row;
}
.left {
  width: 5.325rem;
  height: 11.75rem;
  margin-left: 0.3rem;
  margin-right: 0.5rem;
  margin-bottom: 0.3rem;
  background-image: url("../assets/image/bg／san.png");
  /* background-color: aqua; */
}
/* .left_fan {
  width: 287px;
  height: 453px;
  margin-bottom: 48px;
}
.left_bar {
  width: 287px;
  height: 439px;
} */
.left_select {
  height: 0.4625rem;
  width: 4.525rem;
  margin-top: 0.3rem;
  margin-right: 0.5rem;
  margin-bottom: 0.3rem;
  margin-left: 0.3rem;
  display: flex;
  flex-direction: row;
}
.left_select_title {
  display: flex;
  justify-content: center;
  font-size: 0.2rem;
  color: #332f6c;
  font-family: MicrosoftYaHei;
  margin-top: 0.1rem;
}
.left_select_1 {
  height: 0.4625rem;
  width: 1.2125rem;
  margin-left: 0.0625rem;
  margin-right: 0.1375rem;
  display: flex;
  justify-content: center;
  background-image: url(../assets/image/bg／t.png);
}
/* /deep/.el-input__inner {
  background-color: #eaedfc;
} */
.left_select_2 {
  height: 0.4625rem;
  width: 1.2125rem;
  display: flex;
  justify-content: center;
  background-image: url(../assets/image/bg／r.png);
}
.left_nav {
  height: 10.6875rem;
}
.firstmenu {
  width: 1.5875rem;
  height: 0.55rem;
  background-image: url(../assets/image/bg／list_r.png);
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
.mid {
  width: 16.8625rem;
  height: 11.75rem;
  margin-bottom: 0.3rem;
}
.mid_up {
  width: 16.8625rem;
  height: 3.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.125rem;
}
.mid_up_title {
  font-size: 0.3125rem;
  margin-bottom: 0.5625rem;
}
.el-descriptions__body .el-descriptions__table {
  background-color: #f2f5ff !important;
}

.mid_down {
  width: 16.8625rem;
  height: 7.5rem;
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}
.mid_down_title {
  font-size: 0.3125rem;
  margin-bottom: 0.625rem;
}
.right {
  width: 1.975rem;
  height: 11.75rem;
  margin-left: 0.5rem;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
}
.right_bar {
  width: 1.975rem;
  height: 3.75rem;
  /* margin-bottom: 24px; */
  margin-bottom: 0.1875rem;
}
.right_line {
  width: 1.975rem;
  height: 3.75rem;
  margin-bottom: 0.1875rem;
}
.right_line2 {
  width: 1.975rem;
  height: 3.75rem;
  margin-bottom: 0.1875rem;
}
</style>
