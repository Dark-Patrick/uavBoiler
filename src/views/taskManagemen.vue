<template>
  <div class="login-container">
     <routerHead :active="4"></routerHead>
    <br/><br/><br/>
    <div class="leftTroduce">
      <div class="navPlate">
        <div class="navTitle">
          SRS/4.0.269
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">运行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="trackingProblem">{{ srs_uptime }}</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">CPU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="trackingProblem">{{ CPU }}%/200%</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">内存&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="trackingProblem">{{ mem * 2048 / 100 }}MB/2GB</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">网络(入网带宽)</span>
          <span class="trackingProblem">{{ recv_30s }}kbps</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">网络(出网带宽)</span>
          <span class="trackingProblem">{{ send_30s }}kbps</span>
        </div>
      </div>
      <br/><br/><br/>
      <div class="navPlate">
        <div class="navTitle">
          其他信息
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">CPU&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="trackingProblem">2 / 2</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">PID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="trackingProblem">8695</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">PPID&nbsp;&nbsp;&nbsp;</span>
          <span class="trackingProblem">1</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">Ready&nbsp;</span>
          <span class="trackingProblem">是</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">server</span>
          <span class="trackingProblem">vid-5z51rt3</span>
        </div>
      </div>
    </div>
    <div class="rightTroduce">
      <div class="navTitle">
        负载信息
      </div>
      <div class="tables">
        <div class="tablesContent">
          <div class="trackingContent">外网:0Kbps / 0Kbps</div>
          <div class="trackingContent">内网:9Kbps / 14Kbps</div>
        </div>
        <div class="tablesContent">
          <div>总连接</div>
          <div class="trackingContent">{{ conn_sys }}</div>
        </div>
        <div class="tablesContent">
          <div>ESTABLISHED</div>
          <div class="trackingContent">{{ conn_sys_et }}</div>
        </div>
        <div class="tablesContent">
          <div>TIME_WAIT</div>
          <div class="trackingContent">{{ conn_sys_tw }}</div>
        </div>
        <div class="tablesContent">
          <div>UPD端口</div>
          <div class="trackingContent">{{ conn_sys_udp }}</div>
        </div>
        <div class="tablesContent">
          <div>磁盘上传速度</div>
          <div class="trackingContent">{{ disk_read_KBps }}KBps</div>
        </div>
        <div class="tablesContent">
          <div>磁盘下载速度</div>
          <div class="trackingContent">{{ disk_write_KBps }}KBps</div>
        </div>
      </div>
    </div>
    <div class="cnenterTroduce">
      <div class="navPlate">
        <div class="navTitle">
          OS信息
        </div>
        <div class="echartData">
          <div class="allData">
            <h2>{{ conn_srs }}</h2>
            <p>客户端</p>
          </div>
          <div class="allStatistics">
            <div class="statistics">
              <span>CPU</span>
              <span class="number">100%</span>
              <span class="percentage">{{CPU}}%</span>
            </div>
            <div class="progress">
              <el-progress :percentage=CPU :show-text="false" :stroke-width="8"></el-progress>
            </div>
            <div class="statistics">
              <span>内存</span>
              <span class="number">2GB</span>
              <span class="percentage">{{mem}}%</span>
            </div>
            <div class="progress">
              <el-progress :percentage=mem :show-text="false" :stroke-width="8"></el-progress>
            </div>
            <div class="statistics">
              <span>虚拟内存</span>
              <span class="number">128MB</span>
              <span class="percentage">{{mem_swap}}%</span>
            </div>
            <div class="progress">
              <el-progress :percentage=mem_swap :show-text="false" :stroke-width="8"></el-progress>
            </div>
            <div class="statistics">
              <span>磁盘</span>
              <span class="number">100%</span>
              <span class="percentage">{{disk}}%</span>
            </div>
            <div class="progress">
              <el-progress :percentage=disk :show-text="false" :stroke-width="8"></el-progress>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div class="navPlate">
        <div class="trackingDynamics">
          <span class="trackingProblem">OS上线时间</span>
          <span class="trackingProblem">{{ osUpTime}}</span>
        </div>
        <div class="trackingDynamics">
          <span class="trackingProblem">视频流统计&nbsp;</span>
          <span class="trackingProblem">{{streams}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import routerHead from '@/components/routerHead.vue'
import axios from "axios"
export default {
  name: 'taskManagemen',
  components:{
    routerHead
  },
   data () {
    return {
      // search:{
      //   name:'',
      //   dataTime:''
      // },
      CPU: 0,
      mem: 0,
      mem_swap: 0,
      disk: 0,
      conn_sys: 84,
      conn_sys_et: 59,
      conn_sys_tw: 3,
      conn_sys_udp: 5,
      srs_uptime:0,
      disk_read_KBps:0,
      disk_write_KBps:0,
      uptime:0,
      conn_srs:0,
      recv_30s:0,
      send_30s:0,
      streams:0,

      osUpTime:'',

    }
   },
  created() {
    setInterval(() => {
      setTimeout(() => {
        ///调取接口获取数据
        this.getMsg();
        this.getVhost();
      }, 0);
    }, 3000);
  },
  methods: {
    getMsg() {
      let _this = this;
      axios({
        method: 'get',
        url: 'http://101.42.8.217:1985/api/v1/summaries'
      }).then((rep)=>{
        _this.CPU = (rep.data.data.system.cpu_percent) * 100;
        _this.mem = (rep.data.data.system.mem_ram_percent) * 100;
        _this.disk = (rep.data.data.system.disk_busy_percent) * 100;
        _this.mem_swap = (rep.data.data.system.mem_swap_percent) * 100;
        _this.uptime = (rep.data.data.system.uptime);
        _this.srs_uptime = (rep.data.data.self.srs_uptime);
        _this.disk_write_KBps = (rep.data.data.system.disk_write_KBps);
        _this.disk_read_KBps = (rep.data.data.system.disk_read_KBps);
        _this.disk_write_KBps = (rep.data.data.system.disk_write_KBps);
        _this.conn_srs = (rep.data.data.system.conn_srs);

        let d = Math.floor(_this.uptime / 86400);
        let h = Math.floor((_this.uptime - d * 86400) / 3600);
        let m = Math.floor((_this.uptime - d * 86400 - h * 3600) / 60);
        let s = Math.floor(_this.uptime - d * 86400 - h * 3600 - m * 60);
        _this.osUpTime = d + '天 ' + h +'h ' + m + 'm ' + s + 's';
      })
    },
    getVhost(){
      let _this = this;
      axios({
        method: 'get',
        url: 'http://101.42.8.217:1985/api/v1/vhosts'
      }).then((rep)=>{
        _this.recv_30s = (rep.data.vhosts[0].kbps.recv_30s);
        _this.send_30s = (rep.data.vhosts[0].kbps.send_30s);
        _this.streams = (rep.data.vhosts[0].streams);
      })
    },
    //编辑数据
    edit(){

    },
    //删除数据
    deleteData(){

    }
  },
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
  .headSearch{
    width: 95%;
    height: 80px;
    display: flex;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    position: relative;
    background: rgba(58,97,194,0.2);
    .input{
      width: 350px;
      height: 40px;
      // border: 1px solid red;
      float: left;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 60px;
      .searchBtn{
        margin-left: 0;
        width: 88px;
        height: 40px;
        background: rgba(25, 232, 232, 0.2);
      }
      span{
        width: 150px;
        text-align: right;
      }
      /deep/ .el-input__inner{
        width: 250px;
        height: 40px;
        /*去外边框*/
        outline: none;
        color: white;
        /*文本颜色*/
        font-size: 14px;
        background: rgba(28, 255, 252, 0.08);
        border: 1px solid #0A434B;
      }
       margin-left: 20px;
    }
    .searchBtn{
      text-align: center;
      margin-left: 80px;
      width: 88px;
      height: 40px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 40px;
      background: rgba(25, 232, 232, 0.2);
      cursor: pointer;
    }
    .addVideo{
      width: 104px;
      height: 40px;
      position: absolute;
      right: 20px;
      top: 25%;
      background: rgba(0, 160, 254, 0.2);
      text-align: center;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 40px;
      background: rgba(25, 232, 232, 0.2);
      cursor: pointer;
    }
  }

  .leftTroduce{
    width:29%;
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
        height:35px;
        font-size: 20px;
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
          font-size: 15px;
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
    width:30%;
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
        font-size: 20px;
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
          width:85px;
          font-size: 18px;
          font-family: DINPro;
          font-weight: 400;
          color: #FFFFFF;
          margin-left:30px;
        }
        .trackingContent{
          width:45%;
          height:60px;
          font-size: 16px;
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
    width:33%;
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
        height:35px;
        font-size: 20px;
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
          font-size: 15px;
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

}
</style>
