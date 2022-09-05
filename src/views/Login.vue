<template>
  <div class="login_container">
    <div class="login_box">
      <!-- title -->
      <div class="login_title">
        <span>馆藏文物保存环境风险评估和预警系统</span>
      </div>
      <!-- form -->
      <div class="login_form">
        <!--登录表头区域-->
        <div class="login-text">
          <!--登录表单区域-->
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="form"
            auto-complete="on"
            label-position="left"
          >
            <!-- el-form-item表单下的某一项 -->
            <el-form-item class="form_item" prop="username">
              <!-- <span class="iconfont icon-container">&#xe7ae;</span> -->
              <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="Username"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
                prefix-icon="iconfont icon-user"
              />
            </el-form-item>

            <el-form-item class="form_item" prop="password">
              <!-- <span class="icon-container"> 123 </span> -->
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="Password"
                name="password"
                tabindex="2"
                auto-complete="on"
                @keyup.enter.native="handleLogin"
                prefix-icon="iconfont icon-key"
                show-password
              />
            </el-form-item>

            <el-button
              class="form_item"
              :loading="loading"
              type="primary"
              style="width: 80%; margin-bottom: 30px"
              @click.native.prevent="handleLogin"
              >登录</el-button
            >
            <!-- tip -->
            <div class="tips">
              <span style="margin-right: 20px">username: admin</span>
              <span> password: any</span>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    /* function validUsername(str) {
      const valid_map = ["admin", "editor"];
      return valid_map.indexOf(str.trim()) >= 0;
    } */
    const validateUsername = (rule, value, callback) => {
      /* if (!validUsername(value)) {
        // // 输入是否为'admin', 'editor'子字段
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      } */
      if (value.trim() === "") {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        // 默认
        username: "admin",
        password: "111111",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    // enter /登录button
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          /* this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              // 是否有参数，没参数跳到默认主页
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            }); */
          this.$router.push({ path: this.redirect || "/home" });
          this.loading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: url("../assets/image/bg／one.png");
  background-color: #283443;
  background-size: 100% 100%;

  .login_box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 6.25rem;
    height: 6.25rem;
    // border: 1px solid red;
    transform: translateY(20%);

    .login_title {
      // margin-bottom: 0.125rem;
      color: #eee;
      font-family: "Microsoft Yahei";
      font-size: 0.4rem;
      white-space: nowrap;
      z-index: 5;
    }
  }
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 4rem;
  // background-color: rgba(0,42,255,0.8);
  background-color: rgba(238, 238, 238,0.1);
  border-radius: 0.3rem;

  .form_item {
    width: 80%;
  }
  .tips {
    display: flex;
    justify-content: space-around;
    color: #eee;
    font-size: 0.15rem;
  }
}
</style>
