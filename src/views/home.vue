<template>
  <div class="login-container">
    <routerHead :active="0"></routerHead>
    <div class="leftTroduce">
      <div class="navPlate">
        <div class="navTitle">
            IP摄像头
        </div>
        <div class="videoShow">
          <div class="videoTitle">
              <div class="videoNo">
                <div class="videoindex">
                  No1
                </div>
                <p>一厂区101栋</p>
              </div>
              <div class="videoauto">
                <img src="../assets/img/btn_bf.png" alt="" @click="changeVideo(1)"/>
                <img src="../assets/img/btn_sj.png" alt="" />
              </div>
          </div>
          <div class="videoTitle">
              <div class="videoNo">
                <div class="videoindex">
                  No2
                </div>
                <p>一厂区102栋</p>
              </div>
              <div class="videoauto">
                <img src="../assets/img/btn_bf.png" alt="" @click="changeVideo('videoName')"/>
                <img src="../assets/img/btn_sj.png" alt="" />
              </div>
          </div>
          <div class="videoTitle">
              <div class="videoNo">
                <div class="videoindex">
                  No3
                </div>
                <p>一厂区103栋</p>
              </div>
              <div class="videoauto">
                <img src="../assets/img/btn_bf.png" alt="" />
                <img src="../assets/img/btn_sj.png" alt="" />
              </div>
          </div>
          <div class="videoTitle">
              <div class="videoNo">
                <div class="videoindex">
                  No4
                </div>
                <p>二厂区201栋</p>
              </div>
              <div class="videoauto">
                <img src="../assets/img/btn_bf.png" alt="" />
                <img src="../assets/img/btn_sj.png" alt="" />
              </div>
          </div>
          <div class="videoTitle">
              <div class="videoNo">
                <div class="videoindex">
                  No5
                </div>
                <p>二厂区202栋</p>
              </div>
              <div class="videoauto">
                <img src="../assets/img/btn_bf.png" alt="" />
                <img src="../assets/img/btn_sj.png" alt="" />
              </div>
          </div>
          <div class="videoTitle">
            <div class="videoNo">
              <div class="videoindex">
                No5
              </div>
              <p>三厂区301栋</p>
            </div>
            <div class="videoauto">
              <img src="../assets/img/btn_bf.png" alt="" />
              <img src="../assets/img/btn_sj.png" alt="" />
            </div>
          </div>
        </div>
      </div>
<!--      <div class="navPlate">-->
<!--        <div class="navTitle">-->
<!--            问题统计-->
<!--        </div>-->
<!--        <div class="echartData">-->
<!--          <div class="allData">-->
<!--            <h2>4500</h2>-->
<!--            <p>共计</p>-->
<!--          </div>-->
<!--           <div class="allStatistics">-->
<!--            <div class="statistics">-->
<!--              <span>待处理</span>-->
<!--              <span class="number">3200</span>-->
<!--              <span class="percentage">80%</span>-->
<!--            </div>-->
<!--            <div class="progress">-->
<!--               <el-progress :percentage="80" :show-text="false" :stroke-width="8"></el-progress>-->
<!--            </div>-->
<!--              <div class="statistics">-->
<!--              <span>待处理</span>-->
<!--              <span class="number">3200</span>-->
<!--              <span class="percentage">80%</span>-->
<!--            </div>-->
<!--            <div class="progress">-->
<!--               <el-progress :percentage="80" :show-text="false" :stroke-width="8"></el-progress>-->
<!--            </div>-->
<!--              <div class="statistics">-->
<!--              <span>待处理</span>-->
<!--              <span class="number">3200</span>-->
<!--              <span class="percentage">80%</span>-->
<!--            </div>-->
<!--            <div class="progress">-->
<!--               <el-progress :percentage="50" :show-text="false" :stroke-width="8"></el-progress>-->
<!--            </div>-->
<!--           </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="navPlate">
        <div class="navTitle">
            问题跟踪动态
        </div>
        <div class="trackingTitle">
          <span>日期</span>
          <span>问题动态</span>
        </div>
        <div class="trackingDynamics">
          <span>2020-09-26</span>
          <span class="trackingProblem">设备离线</span>
        </div>
        <div class="trackingDynamics">
          <span>2020-09-26</span>
          <span class="trackingProblem">设备离线</span>
        </div>
        <div class="trackingDynamics">
          <span>2020-09-26</span>
          <span class="trackingProblem">设备离线</span>
        </div>
        <div class="trackingDynamics">
          <span>2020-09-26</span>
          <span class="trackingProblem">设备离线</span>
        </div>
        <div class="trackingDynamics">
          <span>2020-09-26</span>
          <span class="trackingProblem">设备离线</span>
        </div>
      </div>
    </div>
    <div class="rightTroduce">
        <div class="navTitle">
            AI实时分析
        </div>
        <div class="tables">
          <div class="tablesTitle">
            <div class="titleName">
              <span>时间</span>
            </div>
            <div class="titleResult">
               <span>分析结果</span>
            </div>
            <div class="titleName">
               <span>操作</span>
            </div>
          </div>
           <div class="tablesContent">
              <div>2019-01-24</div>
              <div class="trackingContent">汽水分离装置、给水装置、 蒸汽清洗装置脱落、开焊</div>
              <div class="btn_cl">
                处理
              </div>
          </div>
           <div class="tablesContent">
              <div>2019-01-24</div>
              <div class="trackingContent">汽水分离装置、给水装置、 蒸汽清洗装置脱落、开焊</div>
              <div class="btn_cl">
                处理
              </div>
          </div>
           <div class="tablesContent">
              <div>2019-01-24</div>
              <div class="trackingContent">汽水分离装置、给水装置、 蒸汽清洗装置脱落、开焊</div>
              <div class="btn_cl">
                处理
              </div>
          </div>
          <AiRecord v-for="(item, index) in messages" :describe="item.des" :time="item.id" :key="index"
                    @handle="handleIt(item.id)"></AiRecord>
        </div>
    </div>
    <div class="cnenterTroduce">
      <div class="cnenterVideo">
<!--        <my-video></my-video>-->
        <video id="video" class="video" controls autoplay style=""  ></video>
      </div>
      <div class="cnenterOperation">
        <video id="video_left" class="video" controls autoplay style="width: 50%; height: 100%; float: left" ></video>
        <video id="video_right" class="video" controls autoplay style="width: 50%; height: 100%; float: right" ></video>
<!--        <div class="navTitle">-->
<!--          飞行数据-->
<!--        </div>-->
<!--        <div class="uavShow">-->
<!--          <div class="uavShow-detail">-->
<!--            <div class="detail">-->
<!--              <p>飞手</p>-->
<!--              <p>张三</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="uavShow-detail">-->
<!--           <div class="detail">-->
<!--              <p>时间</p>-->
<!--              <p>2020.07.24 12:30</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="uavShow-detail">-->
<!--           <div class="detail">-->
<!--              <p>设备编号</p>-->
<!--              <p>RT008</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="uavShow-detail">-->
<!--           <div class="detail">-->
<!--              <p>设备型号</p>-->
<!--              <p>大疆无人机CT-0678</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="uavShow-detail">-->
<!--           <div class="detail">-->
<!--              <p>轨迹</p>-->
<!--              <p>偏向5°</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="uavShow-detail">-->
<!--           <div class="detail">-->
<!--              <p>经纬度</p>-->
<!--              <p>113.51667，25.09847</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="uavHeight">-->
<!--          <div class="uavDriction">-->
<!--             <h2>180°</h2>-->
<!--            <p>航向</p>-->
<!--          </div>-->
<!--          <div class="uavDrict">-->
<!--             <h2>50<span>km/h</span></h2>-->
<!--              <p>速度</p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="cnenterOperationShow">-->
<!--            <div class="arrowShow">-->
<!--              <img src="../assets/img/btn_reduce.png" alt="" />-->
<!--              <p>变倍</p>-->
<!--              <img src="../assets/img/btn_add.png" alt="" />-->
<!--            </div>-->
<!--            <div class="arrowShowHiden">-->
<!--              <div class="arrowSpace">-->
<!--                <img src="../assets/img/upleft.png" alt="" />-->
<!--                <img src="../assets/img/upright.png" alt="" />-->
<!--                <img src="../assets/img/downleft.png" alt="" />-->
<!--                <img src="../assets/img/downright.png" alt="" />-->
<!--                <img src="../assets/img/left.png" alt="" />-->
<!--                <img src="../assets/img/up.png" alt="" />-->
<!--                <img src="../assets/img/right.png" alt="" />-->
<!--                <img src="../assets/img/down.png" alt="" />-->
<!--                <img src="../assets/img/update.png" alt="" />-->
<!--              </div>-->
<!--              <div class="turnUp">-->
<!--                <div class="turn">-->
<!--                  开灯-->
<!--                </div>-->
<!--                <div class="turndown">-->
<!--                  关灯-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="arrowShow">-->
<!--              <img src="../assets/img/btn_height_add.png" alt="" />-->
<!--              <p>高度</p>-->
<!--              <img src="../assets/img/btn_height_reduce.png" alt="" />-->
<!--            </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>


<script>
import routerHead from '../components/routerHead';
import DialogForm from "../components/dialogForm";
import AiRecord from "../components/aiRecord";
import Video from "../components/video";
import MyVideo from "../components/video";

let socket;
export default {
  name: 'Home',
  components:{
    MyVideo,
    Video,
    DialogForm,
    routerHead,
    AiRecord,
  },
  data () {
    return {
      user: {'username': 'lch', 'age': 18},
      chatUser: 'lizi',
      text: "测试测试测试测试",
      url:"webrtc://101.42.0.24/live/address", //直播视频流地址
      url_left:"rtmp://101.42.0.24/live/videoName",
      messages: [
        {
          "category": "描述1",
          "cl": "2020-02-17",
          "des": "json格式测试-01",
          "id": "1001"
        },
        {
          "category": "描述2",
          "cl": "2020-02-17",
          "des": "json格式测试-02",
          "id": "1002"
        }
      ]
    }
  },
  created() {
    this.init()
  },
  mounted() {
    var video = document.getElementById('video');
    var player = new JSWebrtc.Player(this.url, { video: video, autoplay: true,  });
    new JSWebrtc.Player(this.url_left, { video: document.getElementById('video_left'), autoplay: true,  });
    new JSWebrtc.Player(this.url, { video: document.getElementById('video_right'), autoplay: true,  });
  },
  methods: {
    handleIt: function (mark) {
      console.log("点击了处理按钮" + mark);
      this.send();
    },
    init() {
      this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
      //let username = this.user.username;
      let flag = new Date().getSeconds();
      let username = "LCH" + flag;
      let _this = this;

      if (typeof (WebSocket) == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        let socketUrl = "ws://192.168.43.21:8081/server/" + username;
        if (socket != null) {
          socket.close();
          socket = null;
        }
        // 开启一个websocket服务
        socket = new WebSocket(socketUrl);
        //打开事件
        socket.onopen = function () {
          console.log("websocket已打开");
        };
        //  浏览器端收消息，获得从服务端发送过来的文本消息
        socket.onmessage = function (msg) {
          console.log("收到数据====" + msg.data);
          let data = JSON.parse(msg.data);  // 对收到的json数据进行解析， 类似这样的： {"users": [{"username": "zhang"},{ "username": "admin"}]}
          let yy = new Date().getFullYear();
          let mm = new Date().getMonth()+1;
          let dd = new Date().getDate();
          let hh = new Date().getHours();
          let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
          let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
          data.id = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
          _this.messages.unshift(data);


          // if (data.users) {  // 获取在线人员信息
          //   _this.users = data.users.filter(user => user.username !== username)  // 获取当前连接的所有用户信息，并且排除自身，自己不会出现在自己的聊天列表里
          // } else {
          //   // 如果服务器端发送过来的json数据 不包含 users 这个key，那么发送过来的就是聊天文本json数据
          //   //  // {"from": "zhang", "text": "hello"}
          //   if (data.from === _this.chatUser) {
          //     _this.messages.push(data)
          //     // 构建消息内容
          //     _this.createContent(data.from, null, data.text)
          //   }
          // }
        };
        //关闭事件
        socket.onclose = function () {
          console.log("websocket已关闭");
        };
        //发生了错误事件
        socket.onerror = function () {
          console.log("websocket发生了错误");
        }
      }
    },
    send() {
      if (typeof (WebSocket) == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        // 组装待发送的消息 json
        // {"from": "zhang", "to": "admin", "text": "聊天文本"}
        let message = {from: this.user.username, to: this.chatUser, text: this.text}
        socket.send(JSON.stringify(message));  // 将组装好的json发送给服务端，由服务端进行转发
        // this.messages.push({user: this.user.username, text: this.text})
        // this.text = '';
      }
    },
    changeVideo(index){
      this.url = "webrtc://192.168.43.15/live/livestream/" + index;
      // console.log("切换源");
      var video = document.getElementById('video');
      var player = new JSWebrtc.Player(this.url, { video: video, autoplay: true,  });
    },
  }
}
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
  .leftTroduce{
    width:25%;
    height:85%;
    float:left;
    margin-left:40px;
    margin-top:10px;
    background: rgba(58,97,194,0.2);
    // opacity: 0.2;
    // border: 1px solid red;
    .navPlate{
      margin-bottom:20px;
      .navTitle{
        width:45%;
        height:43px;
        text-align: center;
        margin:auto;
        background: url("../assets/img/title_box.png") no-repeat;
        background-size: 100% 100%;
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        line-height: 50px;
        color: #FFFFFF;
        // border: 1px solid red;
        }
        .videoShow{
          width:90%;
          height:350px;
          display:flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          // border: 1px solid red;
          margin:auto;
          margin-top:20px;
          .videoTitle{
          width:90%;
          height:50px;
          display:flex;
          justify-content: space-between;
          align-items: center;
          // border: 1px solid red;
          margin:auto;
          // margin-top:10px;
          .videoNo{
            width:70%;
            height: 20px;
            display:flex;
            // justify-content: space-between;
            align-items: center;
            // border: 1px solid red;
            color: #ffffff;
            .videoindex{
              width:32px;
              height: 20px;
              font-size: 10px;
              font-family: DINPro;
              font-weight: 500;
              color: #00A0FE;
              text-align: center;
              line-height: 20px;
              background: url("../assets/img/box_px.png") no-repeat;
              background-size: 100% 100%;
            }
            p{
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              margin-left:20px;
            }
          }
          .videoauto{
            width:20%;
            height: 20px;
            display:flex;
            justify-content: space-around;
            align-items: center;
              img{
                width:20px;
                height: 20px;
              }
          }
        }
      }
      .echartData{
        width:90%;
        height:170px;
        margin:auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        // border: 1px solid red;
        .allData{
          width:181px;
          height:154px;
          text-align:center;
          // border: 1px solid red;
          background: url("../assets/img/data_zj.png") no-repeat;
          background-size: 100% 100%;
          h2{
            margin-bottom:10px;
            padding:0;
            font-size: 40px;
            font-family: DINPro;
            font-weight: 500;
            color: #FF9C0C;
          }
          p{
            margin:0;
            padding:0;
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
        .allStatistics{
          width:181px;
          height:154px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 79px;
          // border: 1px solid red;
          .statistics{
            width:90%;
            height:25px;
            margin:auto;
            display:flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            padding:0;
            line-height: 20px;
            .number{
              font-size: 13px;
              font-family: DINPro;
              font-weight: 500;
              color: #00A0FE;
            }
            .percentage{
              font-size: 13px;
              font-family: DINPro;
              font-weight: 500;
              color: #19E8E8;
            }
          }
          .progress{
            width:90%;
            margin:auto;
            margin-bottom:20px;
          }
        }
      }
      .trackingTitle{
        width:70%;
        height:30px;
        font-size: 16px;
        font-family: '思源黑体';
        font-weight: 500;
        color: #00A0FE;
        display:flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        // border: 1px solid red;
        margin-top:20px;
      }
      .trackingDynamics{
        width:90%;
        height:30px;
        font-size: 16px;
        font-family: '思源黑体';
        font-weight: 500;
        color: #00A0FE;
        margin:auto;
        display:flex;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;
        background: rgba(28, 255, 252, 0.08);
        border: 1px solid #0A434B;
        margin-top:10px;
        span{
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #CCDCDE;
          margin-left:25px;
        }
        .trackingProblem{
          margin-left:40px;
        }
      }
    }
  }
   .rightTroduce{
    width:25%;
    height:85%;
    float:right;
    margin-right:40px;
    margin-top:10px;
    background: rgba(58,97,194,0.2);
    // border: 1px solid red;
    .navTitle{
      width:45%;
      height:43px;
      text-align: center;
      margin:auto;
      background: url("../assets/img/title_box.png") no-repeat;
      background-size: 100% 100%;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      line-height: 50px;
      color: #FFFFFF;
      }
      .tables{
        width:100%;
        height:95%;
        // border: 1px solid green;
        .tablesTitle{
          width:100%;
          height: 38px;
          display:flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: nowrap;
          // border: 1px solid green;
          .titleName{
            width:30%;
            height: 38px;
            display:flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(90deg, rgba(0,160,254,0.6) 0%, rgba(1,216,255,0.6) 46%, rgba(0,160,254,0.6) 98%);
            // opacity: 0.6;
            span{
              font-size: 16px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 28px;
              opacity: 1;
             }
            }
            .titleResult{
              width:39%;
              height: 38px;
              display:flex;
              justify-content: center;
              align-items: center;
              background: linear-gradient(90deg, rgba(0,160,254,0.6) 0%, rgba(1,216,255,0.6) 46%, rgba(0,160,254,0.6) 98%);
              // opacity: 0.6;
              span{
              font-size: 16px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 28px;
              opacity: 1;
              }
            }
        }
        .tablesContent{
          width:100%;
          height: 60px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #00A0FE;
          margin:auto;
          display:flex;
          justify-content: left;
          align-items: center;
          flex-wrap: nowrap;
          // background: rgba(28, 255, 252, 0.08);
          // border: 1px solid #0A434B;
          margin-top:10px;
          div{
            width:75px;
            font-size: 14px;
            font-family: DINPro;
            font-weight: 400;
            color: #FFFFFF;
            margin-left:20px;
          }
          .trackingContent{
            width:40%;
            height:60px;
            font-size: 14px;
            display:flex;
            justify-content: center;
            align-items: center;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #CCDCDE;
            margin-left:25px;
          }
          .btn_cl{
            width:76px;
            height:28px;
            text-align:center;
            line-height: 25px;
            background: url("../assets/img/btn_cl.png") no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
          }
        }
        .tablesContent:nth-of-type(odd){
          background: rgba(0,160,254, 0.2);
        }
        .tablesContent:hover{
           background: rgba(0,160,254, 0.5);
        }
      }
  }
  .cnenterTroduce{
    width:43%;
    height:85%;
    margin-left:10px;
    margin-top:10px;
    // border: 1px solid red;
    float:left;
    .cnenterVideo{
      width:100%;
      height:60%;
      // border: 1px solid red;
      video{
        width:100%;
        height:100%;
      }
    }
    .cnenterOperation{
      width:100%;
      height:40%;
      background: rgba(58,97,194,0.2);
      // border: 1px solid red;
      .navTitle{
        width:45%;
        height:43px;
        text-align: center;
        margin:auto;
        background: url("../assets/img/title_box.png") no-repeat;
        background-size: 100% 100%;
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        line-height: 50px;
        color: #FFFFFF;
        // border: 1px solid red;
      }
      .uavShow{
        width:40%;
        height:243px;
        float:left;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        // border: 1px solid red;
        margin-top:20px;
        .uavShow-detail{
          width:60%;
          height:33%;
          display: flex;
          justify-content: center;
          align-items: center;
          // border: 1px solid red;
          .detail{
          width:95%;
          height:40px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF;
          border-left: 4px solid rgba(2,225,254,0.6);
          p{
            margin:0;
            padding:0;
            margin-left:10px;
          }
          p:last-of-type{
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #01D8FF;
            line-height: 38px;
          }
          }
        }
        .uavShow-detail:nth-of-type(odd){
          width:38%;
        }
      }
      .uavHeight{
        width:16%;
        height:263px;
        float:left;
        margin-top:10px;
        // border: 1px solid red;
        .uavDriction{
          width:100px;
          height:90px;
          display: flex;
          justify-content: center;
          // align-items: center;
          flex-wrap: wrap;
          background: url("../assets/img/box_blue.png") no-repeat;
          background-size: 100% 100%;
          h2{
            width:100%;
            text-align:center;
            font-size: 48px;
            font-family: Roboto;
            font-weight: 400;
            color: #01D8FF;
            margin:0;
            margin-top:10px;
          }
          p{
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 0px;
            margin: 0;
          }
        }
        .uavDrict{
          width:100px;
          height:90px;
          margin-top:40px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background: url("../assets/img/box_orange.png") no-repeat;
          background-size: 100% 100%;
          h2{
            width:100%;
            text-align:center;
            font-size: 48px;
            font-family: Roboto;
            font-weight: 400;
            color: #FF9C0C;
            margin:0;
            margin-top:10px;
            span{
              font-size: 18px;
            }
          }
          p{
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            margin:0;
            margin-bottom:10px;
            line-height: 0px;
          }
        }
      }
      .cnenterOperationShow{
        width:44%;
        height:263px;
        float:left;
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top:10px;
        // border: 1px solid red;
        .arrowShow{
          width:50px;
          height:100%;
          // border: 1px solid red;
          img{
            width:50px;
            height:50px;
          }
          p{
            text-align:center;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            margin:30px 0;
          }
        }
        .arrowShowHiden{
          width:177px;
          height:100%;
          // border: 1px solid red;
          .arrowSpace{
            width:177px;
            height:177px;
            // border: 1px solid red;
            background: url("../assets/img/middle.png") no-repeat;
            background-size: 100% 100%;
            position: relative;
            img:nth-child(1){
              width: 78px;
              height: 78px;
              position: absolute;
              top: 0;
              left: 0;
              cursor: pointer;
            }
             img:nth-child(2){
              width: 78px;
              height: 78px;
              position: absolute;
              top: 0;
              right: 0;
              cursor: pointer;
            }
             img:nth-child(3){
              width: 78px;
              height: 78px;
              position: absolute;
              bottom: 0;
              left: 0;
              cursor: pointer;
            }
             img:nth-child(4){
              width: 78px;
              height: 78px;
              position: absolute;
              bottom: 0;
              right: 0;
              cursor: pointer;
            }
            img:nth-child(5){
              width: 36px;
              height: 47px;
              position: absolute;
              top: 37%;
              left: 10%;
              cursor: pointer;
            }
            img:nth-child(6){
              width: 47px;
              height: 36px;
              position: absolute;
              top: 10%;
              right: 37%;
              cursor: pointer;
            }
            img:nth-child(7){
              width: 36px;
              height: 47px;
              position: absolute;
              top: 37%;
              right: 10%;
              cursor: pointer;
            }
            img:nth-child(8){
              width: 47px;
              height: 36px;
              position: absolute;
              bottom: 10%;
              right: 37%;
              cursor: pointer;
            }
            img:nth-child(9){
              width: 56px;
              height: 56px;
              position: absolute;
              bottom: 35%;
              right: 35%;
              cursor: pointer;
            }
          }
          .turnUp{
            width:177px;
            height:67px;
            display:flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: nowrap;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            // border: 1px solid red;
            .turn{
              width: 78px;
              height: 29px;
              text-align: center;
              background: rgba(0,149,255,1);
              border: 1px solid #0095FF;
              cursor: pointer;
              line-height: 30px;
            }
            .turndown{
              width: 78px;
              height: 29px;
              text-align: center;
              background: rgba(0,149,255,0.6);
              border: 1px solid #0095FF;
              cursor: pointer;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
