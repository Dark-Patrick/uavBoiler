<template>
  <div class="content">
    <div class="leftLogo">
<!--      <img src="../assets/img/logo.png" alt="" />-->
      <div class="routerLink">
        <h1 style="color: #FFFFFF">员工流动信息监控系统</h1>
        <p style="color: #FFFFFF;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; N C E P U - L C H</p>
      </div>
    </div>
    <div class="routerName">
      <ul>
        <li class="active" @click="changeRouter(0)">
          <div class="routerLink">
            <h3>首页</h3>
            <p>Home page</p>
          </div>
          <img src="../assets/img/router-Arrow.png" alt="" />
          <img v-if="active==0" class="showActive" src="../assets/img/selected.png" alt="" />
        </li>
        <li @click="changeRouter(1)">
          <div class="routerLink">
            <h3>视频上传</h3>
            <p>Video uploading</p>
          </div>
          <img src="../assets/img/router-Arrow.png" alt="" />
          <img v-if="active==1" class="showActive" src="../assets/img/selected.png" alt="" />
        </li>
        <li @click="changeRouter(2)">
          <div class="routerLink">
            <h3>轨迹跟踪</h3>
            <p>Issue tracking</p>
          </div>
          <img src="../assets/img/router-Arrow.png" alt="" />
          <img v-if="active==2" class="showActive" src="../assets/img/selected.png" alt="" />
        </li>
        <li @click="changeRouter(3)">
          <div class="routerLink">
            <h3>设备管理</h3>
            <p>Boiler management</p>
          </div>
          <img src="../assets/img/router-Arrow.png" alt="" />
          <img v-if="active==3" class="showActive" src="../assets/img/selected.png" alt="" />
        </li>
        <li @click="changeRouter(4)">
          <div class="routerLink">
            <h3>性能监控</h3>
            <p>Task management</p>
          </div>
          <img src="../assets/img/router-Arrow.png" alt="" />
          <img v-if="active==4" class="showActive" src="../assets/img/selected.png" alt="" />
        </li>
      </ul>
    </div>
    <div class="rightWeather">
      <div class="time">
        <p>{{ dateNowTime }}</p>
        <p>{{ dateTime }}</p>
      </div>
      <div class="weather">
        <div class="cloud">
          <img src="../assets/img/tq_top_sunny.png" alt="" />
        </div>
        <div class="temp">
          <p>欢 迎</p>
          <p>{{ user.userName }}</p>
<!--          <p>{{ tem }} | {{type}}</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "routerHead",
  props: ["active"],
  data() {
    return {
      user: "",
      dateTime: "",
      dateNowTime: "",
      timeNow: null,
      tem:"",
      type:""
    };
  },
  created() {
    this.user = JSON.parse(window.localStorage.getItem("access-admin"))

    //获取实时时间
    this.timeNow = setInterval(() => {
      setTimeout(() => {
        ///调取接口获取数据
        this.getTime();
      }, 0);
    }, 1000);
    //获取实时天气
    this.getTem();
  },
  methods: {
    //获取实时时间
    getTime() {
      // clearTimeout(this.timeNow);
      let date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      this.dateTime = year + "." + month + "." + day;
      this.dateNowTime = hour + ":" + minute + ":" + second;
      // console.log(this.dateNowTime)
    },
    //获取实时天气
    getTem() {
      axios
        .get(
          "http://apis.juhe.cn/juhe/simpleWeather/query?city=%E5%8D%97%E4%BA%AC&key=0f1b43c402f5831916c58dfe5bf909dd",
          {}
        )
        .then((response) => {
          this.tem = response.data.data.forecast[0].high;
          this.type = response.data.data.forecast[0].type;
        })
        .catch(function (err) {});
    },
    //切换路由
    changeRouter(index){
      this.active = index
     if(index==0){
      this.$router.push({ path: "/home" });
     }else if(index==1){
      this.$router.push({ path: "/videoUpload" });
     }else if(index==2){
      this.$router.push({ path: "/problemTracking" });
     }else if(index==3){
      this.$router.push({ path: "/boilerManagement" });
     }else if(index==4){
      this.$router.push({ path: "/taskManagemen" });
     }
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 85px;
  position: sticky;
  top: 0;
  left: 0;
  //   background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .leftLogo {
    width: 30%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img/cube_top.png") no-repeat;
    background-size: 100% 100%;
    img {
      width: 362px;
      height: 67px;
    }
  }
  .routerName {
    width: 50%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    // border: 1px solid red;
    ul {
      width: 100%;
      height: 85px;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 20%;
        height: 100%;
        display: inline-block;
        background: url("../assets/img/router-Arrow.png") no-repeat;
        background-size: 100% 100%;
        margin: 0;
        padding: 0;
        // border: 1px solid red;
        position: relative;
        .routerLink {
          width: 85%;
          height: 90%;
          position: absolute;
          left: 0;
          bottom: 10px;
          // display: flex;
          // justify-content: center;
          text-align: center;
          vertical-align: center;
          // flex-wrap: wrap;
          font-family: "微软雅黑";
          font-weight: 400;
          color: #ffffff;
          cursor: pointer;
          // border: 1px solid red;
          h3 {
            font-size: 20px;
            padding: 0;
            margin-top: 10px;
          }
          p {
            font-size: 13px;
            padding: 0;
            margin: 0px;
          }
        }
        img {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        .showActive {
          position: absolute;
          left: 0;
          top: 0;
          cursor: pointer;
        }
      }
    }
  }
  .rightWeather {
    width: 20%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    // border: 1px solid red;
    .time {
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // flex-wrap: wrap;
      text-align: center;
      width: 50%;
      height: 100%;
      font-family: "微软雅黑";
      font-weight: 400;
      p {
        margin: 0;
        padding: 0;
        font-size: 19px;
        font-family: PangMenZhengDao;
        font-weight: 400;
        color: #ffffff;
        margin-top: 15px;
      }
      p:last-of-type {
        font-size: 16px;
        font-family: PangMenZhengDao;
        font-weight: 400;
        color: #ffffff;
        opacity: 0.4;
      }
    }
    // .time:last-of-type
    .weather {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      flex-wrap: wrap;

      .cloud {
        width: 50px;
        height: 41px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .temp {
        width: 55%;
        height: 100px;
        font-size: 19px;
        font-family: PangMenZhengDao;
        font-weight: 400;
        color: #ffffff;
        p {
          margin-top: 10px;
          padding: 0;
        }
      }
    }
  }
}
</style>
