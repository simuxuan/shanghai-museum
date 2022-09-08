<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="home_nav">
          <div class="nav_left">
            <el-menu
              class="homeleft_menu"
              router
              :default-active="activePath"
              mode="horizontal"
            >
              <el-menu-item class="item first_item" index="/home">
                <span class="iconfont icon-home-fill icon" style=""></span
                >&thinsp;
                <span class="word">首页</span>
              </el-menu-item>
              <el-menu-item class="item" index="/monitor">
                <span class="iconfont icon-fund-fill icon" style=""></span
                >&thinsp;
                <span class="word">实时监测</span>
              </el-menu-item>
              <el-menu-item class="item" index="/analysis">
                <span class="iconfont icon-data icon" style=""></span>&thinsp;
                <span class="word">数据分析</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="nav_mid">
            <span class="info1">上海博物馆监控平台</span>
          </div>
          <div class="nav_right">
            <el-menu
              class="homeright_menu"
              mode="horizontal"
              router
              :default-active="activePath"
            >
              <el-menu-item class="item" index="/decision">
                <span class="iconfont icon-signal-fill icon" style=""></span
                >&thinsp;
                <span class="word">溯源决策</span>
              </el-menu-item>
              <el-menu-item class="item" index="/system">
                <span class="iconfont icon-view-grid icon" style=""></span
                >&thinsp;
                <span class="word">系统管理</span>
              </el-menu-item>
            </el-menu>
            <!-- setting -->
            <el-dropdown @command="handleCommandMore" class="set">
              <el-button type="primary">
                <!-- <span class="dropDownMore">···</span> -->
                <span class="iconfont set">&#xe980;</span>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item command="q">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // 被激活的链接地址
      activePath: "",
    };
  },
  methods: {
    // 退出登录
    handleCommandMore(command) {
      if (command === "q") {
        window.sessionStorage.clear();
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  // background: url("../assets/image/bg／one.png");
  /* background-image: url('../assets/image/bg／two.png'); */
  background-color: #f2f5ff;
  background-size: 100% 100%;
}
.el-container {
  height: 100%;
  width: 100%;
}
/* 头部 */
.el-header {
  padding: 0;
  height: 116px !important;
}

.home_nav {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .nav_left {
    width: 7.5rem; //
  }

  .homeleft_menu {
    width: 100%;
    height: 92px;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-menu-item {
      font: bold 0.3rem "Microsoft YaHei";
      line-height: 1.625rem !important;
      width: 2.375rem;
      height: 80px !important;
      display: flex;
      /*justify-content: center;*/
      align-items: center;
      margin-left: 0.125rem !important;
      margin-top: 0.2rem !important;
      color: #6778bf !important;
      padding: 0.25rem 0.2rem;
      background: transparent !important;
    }

    .item {
      width: 1.875rem !important;
      height: 100%;
      position: relative;
      line-height: 80px;
      margin-right: 0.5rem;
      .icon {
        position: absolute;
        top: -0.3rem;
        left: 0px;
        font-size: 0.6rem;
      }
      .word {
        margin-left: 0.625rem;
      }
    }
    .first_item {
      margin-right: 0px;
    }
  }
}
.nav_right {
  width: 7.5rem;

  .homeright_menu {
    width: 100%;
    height: 92px;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-menu-item {
      font: bold 0.3rem "Microsoft YaHei";
      line-height: 1.625rem !important;
      width: 2.375rem;
      height: 80px !important;
      display: flex;
      /*justify-content: center;*/
      align-items: center;
      margin-left: 0.125rem !important;
      margin-top: 0.2rem !important;
      color: #6778bf !important;
      padding: 0.25rem 0.2rem;
      background: transparent !important;
    }

    .item {
      width: 1.875rem !important;
      height: 100%;
      position: relative;
      line-height: 1rem;
      margin-right: 0.5rem;
      text-align: center;
      .icon {
        position: absolute;
        top: -0.3rem;
        left: 0px;
        font-size: 0.7rem;
      }
      .word {
        margin-left: 0.625rem;
      }
    }
  }
}
.el-menu {
  background: transparent !important;
  border-bottom: none !important;
}
.el-menu-item.is-active {
  background: transparent !important;
  border-bottom: none !important;
}
.nav_mid {
  margin-left: 0px;

  .info1 {
    width: 4.5rem;
    height: 56px;
    display: block;
    overflow-wrap: break-word; // 允许中断换行
    z-index: 4;
    color: rgba(51, 47, 108, 1);
    font-size: 0.5rem;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 56px;
    text-align: center;
    margin: 0.225rem 0 0 0px;
  }
}
/* set */
.set {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  font-size: 0.5rem;
  color: #6778bf;

  .el-button--primary {
    color: #6778bf;
    font-size: 0.3rem;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
  }
}
</style>
