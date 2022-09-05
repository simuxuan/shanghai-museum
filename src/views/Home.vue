<template>
  <div class="main">
        <div class="left">
          <div class="left_fan">
            <div class="left_fan_title">
              <span class="title">楼层文物状态统计</span>
              <span class="time">更新时间：{{ curTime }}</span>
            </div>
            <FloorPie></FloorPie>
          </div>
          <div class="left_bar">
            <div class="left_bar_title">
              <span class="title">各类文物状态统计</span>
              <span class="time">更新时间：{{ curTime }}</span>
            </div>
            <ItemBar></ItemBar>
          </div>
        </div>
        <div class="mid">
          <div class="mid_title">
            <div class="title">博物馆地图</div>
          </div>
          <Map></Map>
        </div>
        <div class="right">
          <div class="right_bar">
            <div class="right_bar_title">
              <span class="title">展厅环境日均值</span>
              <span class="time">更新时间：{{ curTime }}</span>
            </div>
            <!-- menu -->
            <!-- <div class="right_bar_menu">
              <el-menu
                class="bottomMenu"
                mode="horizontal"
                default-active="1"
                g
              >
                <el-menu-item index="1">温度</el-menu-item>
                <el-menu-item index="2">湿度</el-menu-item>
                <el-menu-item index="3">光照</el-menu-item>
                <el-menu-item index="4">二氧化碳</el-menu-item>
                <el-menu-item index="5">二氧化硫</el-menu-item>
                <el-menu-item index="6">有机物</el-menu-item>
              </el-menu>
            </div> -->
            <!-- bar -->
            <RoomBar></RoomBar>
          </div>
          <div class="right_line">
            <div class="right_line_title">
              <span class="title">展厅环境稳定性</span>
              <span class="time">更新时间：{{ curTime }}</span>
            </div>
            <RoomLine></RoomLine>
          </div>
        </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import FloorPie from "@/components/Home/FloorPie";
import ItemBar from "@/components/Home/ItemBar";
import Map from "@/components/Home/Map";
import RoomBar from "@/components/Home/RoomBar";
import RoomLine from "@/components/Home/RoomLine";
export default {
  name: "",
  components: {
    FloorPie: FloorPie,
    ItemBar: ItemBar,
    Map: Map,
    RoomBar:RoomBar,
    RoomLine:RoomLine
  },
  data() {
    return {
      // 被激活的链接地址
      activePath: "",
      timer: null,
      curTime: "14:30:30",
    };
  },
  mounted() {
    this.startTime();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  methods: {
    // 开启定时器
    startTime() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        this.curTime = dayjs().format("HH:mm:ss");
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
/* 主区域 */
.main {
  display: flex;
  flex-direction: row;
  overflow: auto;
  /* 左 */
  .left {
    width: 5.4625rem;
    height: 11.75rem;
    margin-left: 0.3rem;
    margin-right: 0.4875rem;
    margin-bottom: 0.3rem;
    /* 左上 */
    .left_fan {
      width: 5.4625rem;
      height: 5.6625rem;
      margin-bottom: 0.6rem;
    }

    /* 左下 */
    .left_bar {
      width: 5.4625rem;
      height: 5.4875rem;
    }
  }
  /* 中（地图） */
  .mid {
    width: 11.2375rem;
    height: 11.75rem;
    margin-bottom: 0.3rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  /* 右 */
  .right {
    width: 5.725rem;
    height: 11.75rem;
    margin-left: 0.5rem;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
    /* 右上 */
    .right_bar {
      width: 5.725rem;
      height: 5.525rem;
      margin-bottom: 0.3rem;
    }
    /* 右下 */
    .right_line {
      width: 5.725rem;
      height: 5.925rem;
    }
  }
}
/* 各区域标题 */
.left_fan_title,
.left_bar_title,
.right_bar_title,
.right_line_title {
  z-index: 380;
  width: 2.4rem;
  height: 0.4125rem;
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 47, 108, 1);
  font-size: 0.3rem;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 0.4125rem;
  text-align: left;
}
.mid_title {
  z-index: 380;
  color: rgba(51, 47, 108, 1);
  font-size: 0.4rem;
  font-family: PingFangSC-Medium;
  line-height: 0.4125rem;
  .title {
    width: 100%;
    height: 100%;
  }
}
.time {
  z-index: 381;
  width: 1.575rem;
  height: 0.25rem;
  overflow-wrap: break-word;
  margin-left: 1.8rem;
  color: rgba(47, 48, 49, 1);
  font-size: 0.175rem;
  white-space: nowrap;
  line-height: 0.25rem;
  text-align: center;
  align-self: flex-end;
}
</style>
