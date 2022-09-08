<template>
  <div class="main">
    <!-- 左边 -->
    <div class="left">
      <el-aside width="3.125rem">
        <el-menu background-color="#ecf1ff">
          <el-menu-item>用户管理</el-menu-item>
        </el-menu>
      </el-aside>
    </div>
    <!-- 中间 -->
    <div class="mid">
      <div class="mid_up">
        <el-card class="search-card">
      <el-row type="flex" justify="space-between" class="first-row">
        <!-- <el-col :span='7'><div class='search-card-input'><span class='search-title'>用户姓名</span><el-input placeholder="请输入用户姓名" clearable @clear='getUserList()' v-model='queryInfo.query'></el-input></div></el-col>
                <el-col :span='7'><div class='search-card-input'><span class='search-title'>手机号码</span><el-input placeholder="请输入用户手机号码" clearable @clear='getUserList()' v-model='queryInfo.query'></el-input></div></el-col>
                <el-col :span='7'><div class='search-card-input'><span class='search-title'>状态</span><el-input placeholder="请输入用户状态" clearable></el-input></div></el-col> -->
        <!-- 临时修改 -->
        <el-col :span="7"
          ><div class="search-card-input"><span class="search-title">用户姓名</span><el-input placeholder="请输入用户姓名" clearable @clear="getUserList()" v-model="searchUserForm.username"></el-input></div
        ></el-col>
        <el-col :span="7"
          ><div class="search-card-input"><span class="search-title">手机号码</span><el-input placeholder="请输入用户手机号码" clearable @clear="getUserList()" v-model="searchUserForm.phoneNumber"></el-input></div
        ></el-col>
        <el-col :span="7"
          ><div class="search-card-input"><span class="search-title">状态</span><el-input placeholder="请输入用户状态" clearable v-model="searchUserForm.status"></el-input></div
        ></el-col>
      </el-row>
      <el-row class="second-row" type="flex" justify="start">
        <el-col :span="7">
          <div class="search-card-input">
            <span class="search-title">创建时间</span>
            <!-- <el-date-picker v-model="value1" type="date" placeholder="开始时间"></el-date-picker> -->
            <el-date-picker v-model="searchUserForm.startTime" type="date" placeholder="开始时间"></el-date-picker>
            <span class="search-node">——</span>
            <!-- <el-date-picker v-model="value1" type="date" placeholder="结束时间"></el-date-picker> -->
            <el-date-picker v-model="searchUserForm.endTime" type="date" placeholder="结束时间"></el-date-picker>
          </div>
        </el-col>
        <el-col :span="3.5"><el-button  class="searchButton" @click="searchHandler">搜索</el-button></el-col>
        <el-col :span="3.5"><el-button  class="resetButton" @click="resetHandler">重置</el-button></el-col>
        <el-col :span="3.5"><el-button  class="addUserButton" @click="addDialogVisible = true">添加用户</el-button></el-col>
      </el-row>
    </el-card>
      </div>
      <div class="mid_bottom">
        <el-card>
          <el-table :data="data" style="width: 100%">
            <el-table-column prop="index" label="序号" width="width">
            </el-table-column>
            <el-table-column prop="prop" label="姓名" width="width">
            </el-table-column>
            <el-table-column prop="prop" label="角色" width="width">
            </el-table-column>
            <el-table-column prop="prop" label="状态" width="width">
            </el-table-column><el-table-column prop="prop" label="label" width="width">
            </el-table-column>
            <el-table-column prop="prop" label="操作" width="width">
              <template>
                 <el-button type="edit">编辑</el-button>
                <el-button type="delete">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

      if (regEmail.test(value)) {
        // 合法邮箱
        return cb()
      }

      cb(new Error('请输入合法的邮箱'))
    }
    // 验证手机号的规则
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

      if (regMobile.test(value)) {
        return cb()
      }

      cb(new Error('请输入合法的手机号'))
    }
    return {
      data:[],
      //临时写，没用。添加搜索信息
      searchUserForm: {
        username: '',
        phoneNumber: '',
        status: '',
        startTime: '',
        endTime: ''
      },
      // 获取用户列表的参数
      queryInfo: {
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 5
      },
      userList: [
        // {
        //   username: '张明',
        //   email: '18362086167@163.com',
        //   mobile: '18362086167',
        //   role_name: '管理员',
        //   mg_state: '未在线'
        // }
      ],
      total: 0,
      // 控制添加用户对话框的显示与隐藏
      addDialogVisible: false,
      // 添加用户的表单数据
      addUserForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      // 添加表单的验证规则对象
      addUserFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名的长度在3~10个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { min: 6, max: 15, message: '用户密码的长度在6~15个字符之间', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          //   { min: 4, max: 15, message: '用户邮箱的长度在4~15个字符之间', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          //   { min: 4, max: 15, message: '用户邮箱的长度在4~15个字符之间', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      },
      // 控制修改用户对话框的显示与隐藏
      editDialogVisible: false,
      // 查询到的用户信息对象
      editForm: {},
      // 修改表单的验证规则对象
      editFormRules: {
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入用户手机', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="less">
.el-menu {
  background-color: transparent;
  border-right: 0;
  /* margin-left: 25px; */
}
.el-menu-item {
  background-image: url('../assets/image/bg／list_r.png');
  background-size: 100% 100%;
  width: 2.5125rem;
  height: .55rem;
  display: flex;
  justify-content: flex-start;
  //align-items: center;
  font-size: .25rem;
  margin-top: .25rem;
  // color: #6778bf !important;
  letter-spacing: .0072rem; /* 字符间距 */
}
.el-menu-item.is-active {
  /* background-image: url('../assets/image/ActiveNavItem1.png'); */
  background-size: 100% 100%;
}
/* main */
.main {
  width: 100%;
  display: flex;
  overflow: auto;
  .left {
    width: 5rem;
    // height: 5.125rem;
    border: 1px solid red;
    padding: 0.25rem 0;
  }

  .mid {
    padding: 0.25rem 0;
    width: 17.5rem;
    // height: 5.125rem;
    border: 1px solid red;
    .mid_up {
      border: 1px solid red;
    }
    .mid_bottom {
      border: 1px solid red;
    }
  }
}

.el-card {
  background-color: transparent;
  // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
  // border: 1px solid #238ede;
  margin: .375rem .25rem;
}

.searchButton,
.resetButton,
.addUserButton {
  box-shadow: -1px 2px 23px 0px #e4e7ed !important;
  width: 1.65rem;
  height: .55rem;
  background: #e4e7ed;
  font-size: .25rem;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  color: #606266;
  line-height: .325rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchButton {
  margin-left: 1.25rem;
}
.resetButton {
  margin-left: .625rem;
}
.addUserButton {
  margin-left: .625rem;
}
.searchButton:focus {
  background: rgba(97, 216, 255, 0.25);
  color: #61d8ff;
}
.resetButton:focus {
  background: rgba(97, 216, 255, 0.25);
  color: #61d8ff;
}
.addUserButton:focus {
  background: rgba(97, 216, 255, 0.25);
  color: #61d8ff;
}
.searchButton:hover {
  background: rgba(97, 216, 255, 0.25);
}
.resetButton:hover {
  background: rgba(97, 216, 255, 0.25);
}
.addUserButton:hover {
  background: rgba(97, 216, 255, 0.25);
}
.first-row {
  margin-top: 40px;
}
.second-row {
  margin: 35px 0 30px 0;
}
.search-card-input {
  display: flex;
  color: #61d8ff;
  .search-title {
    width: 85px;
    margin-right: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .search-node {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }
}
/deep/.el-input__inner {
  background-color: transparent;
  box-shadow: -1px 2px 23px 0px rgba(97, 216, 255, 0.25) !important;
  border: 1px solid #3ba1e9 !important;
  color: #61d8ff;
}
</style>
