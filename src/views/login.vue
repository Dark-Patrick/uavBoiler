<template>
  <div class="login-container">
    <div class="right">
      <div class="title">
<!--        <img src="../assets/img/logo.png" alt="" />-->
      </div>
      <div class="login-box">
        <h1 style="color: #FFFFFF">员工流动信息监控系统</h1>
        <el-form v-model="form" class="input-form">
          <el-form-item class="el-form-item">
            <div class="formText">
              <div class="username">账号：</div>
              <input
                class="inputText"
                style="background-color: transparent; color: #fff"
                v-model="form.userName"
              />
            </div>
          </el-form-item>
          <el-form-item class="el-form-item">
            <div class="formText">
              <div class="username">密码：</div>
              <input
                class="inputText"
                style="background-color: transparent; color: #fff"
                type="password"
                v-model="form.password"
                @keyup.enter="login"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <div class="submit" @click="login">
              <img src="../assets/img/btn_login.png" alt="" />
            </div>
<!--             <el-button type="primary" @click="login">登录</el-button>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    //登录接口
    login(){
      let _this = this;
      axios({
        method: 'post',
        url: 'http://192.168.31.240:8081/login',
        data: {
          userName: this.form.userName,
          password: this.form.password,
        }
      }).then(function (response){
        if(response.data.success === "true"){
          localStorage.setItem("access-admin", JSON.stringify(response.data))
          console.log(response);
          _this.$router.push({ path: "/home" });
          return;
        }
         alert(response.data.userName);
      })
    }
  },

};
</script>
<style lang="scss" scoped>
.login-container {
  background-image: url(../assets/img/back.jpeg);
  background-color: #f1f3f6;
  background-size: 100% 980px;
  background-repeat: no-repeat;
  position: relative;
  height: 980px;
  width: 100%;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
  /deep/.el-input {
    display: inline-block;
    height: 47px;
    min-width: 333px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: transparent;
      height: 47px;
      caret-color: transparent;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px transparent inset !important;
        -webkit-text-fill-color: transparent !important;
      }
    }
  }

  /deep/.el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    // background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .right {
    width: 609px;
    height: 100px;
    // background: url("../assets/img/login-input-bac.png") no-repeat;
    // background-size: 100% 100%;
    position: absolute;
    top: 100px;
    right: 30%;
    .title {
      display: flex;
      align-items: center;
      position: absolute;
      top: -30px;
      left: 60%;
      transform: translateX(-50%);
      img {
        width: 609px;
        height: 100px;
        background: #0a112b;
        vertical-align: middle;
      }
    }
  }
  .login-box {
    width: 746px;
    height: 452px;
    position: absolute;
    top: 56px;
    left: 60%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    flex-wrap: wrap;
    transform: translateX(-50%);
    background: url("../assets/img/box_login.png") no-repeat;
    background-size: 100% 100%;
    .input-form {
      margin: 0 auto;
      box-sizing: border-box;
      padding: 64px 64px 0;
      width: 502px;
      height: 326px;
      position: absolute;
      left: 18%;
      top: 10%;
      .submit {
        width: 320px;
        height: 58px;
        margin-left: 60px;
        cursor: pointer;
        img {
          width: 320px;
          height: 58px;
        }
      }
      // background-color: #04c9e9;
    }
    /deep/.el-form {
      margin: 0 auto;
      box-sizing: border-box;
      padding: 64px 64px 0;
      width: 502px;
      height: 326px;
      background-color: red;
      /deep/.el-form-item {
        width: 400px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        // border: 1px solid red;
        font-size: 20px;
        color: #ffffff;
        /deep/.el-form-item__content {
          width: 400px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: nowrap;
          // background: #2fd637;
          // border: 1px solid #c2ffe0;
          font-size: 20px;
          color: #ffffff;
          .username {
            width: 80px;
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #ffffff;
            margin: 0;
            padding: 0;
            position: relative;
          }
          .username::before {
            content: "|";
            color: #fff;
            position: absolute;
            right: 5px;
            top: -12px;
          }
          .inputText {
            width: 80%;
          }
          .el-input__inner,
          .el-textarea__inner {
            background-color: transparent !important;
            border: none !important;
          }
        }
        i {
          font-size: 20px;
          color: #04c9e9;
        }
      }
    }
    .formText {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      // background-color: red;
    }
    .username {
      width: 80px;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      margin: 0;
      padding: 0;
      position: relative;
    }
    // .username::before {
    //   content: "|";
    //   color: #fff;
    //   position: absolute;
    //   right: 5px;
    //   top: -12px;
    // }
    .inputText {
      height: 30px;
      width: 100%;
      background-color: red;
    }
    h1 {
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      margin-bottom: 56px;
      text-align: center;
      color: #7175d7;
    }
    h4 {
      font-size: 30px;
      color: #343434;
      text-align: center;
      margin-bottom: 60px;
    }
    /deep/ .el-form-item {
      margin-bottom: 32px;
    }
    /deep/ .el-button {
      width: 100%;
      height: 36px;
      background: #18b165;
      border: 1px solid #18b165;
      border-radius: 5px;
      font-size: 16px;
      color: #fff;
    }
    .purple-color {
      color: #7276d8;
    }
    p {
      text-align: center;
      margin-top: 59px;
    }
    .grey-color {
      color: #7f7f7f;
    }
  }
  /deep/ .el-input__inner,
  .el-textarea__inner {
    box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;
  }
  input {
    /*背景透明*/
    background-color: transparent;
    /*去边框*/
    border: 1px solid #23e1fd;
    border-radius: 2px;
    /*去外边框*/
    outline: none;
    /*文本颜色*/
    color: white;
    font-size: 14px;
  }

  input:-webkit-autofill {
    /*自动填入文本颜色*/
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0 1000px rgba(28, 255, 252, 0.1) inset;
    /*自动填入光标颜色*/
    caret-color: white;
    /*背景透明；原理：动画由透明变有背景色；参数：背景色属性、动画时间、动画速度曲线、延迟时间*/
    transition: background-color 0s linear 3600s;
    background-image: none;

    font-size: 14px;
  }
}
</style>
