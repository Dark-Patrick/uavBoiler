<template>
  <div class="tablesContent">
    <div>{{time}}</div>
    <div class="trackingContent">{{describe}}</div>
    <div class="btn_cl" @click="handle(time)">
      处理
    </div>
  </div>
</template>

<script>
export default {
  name: "aiRecord",
  props:["time", "describe"],
  data() {
    return {};
  },
  methods: {
    handle: function (mark){
        this.$emit('handle', mark);
        console.log("emit:" + mark);
    }
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  background-image: url(../assets/img/login-bac.jpg);
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
        height:190px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        // border: 1px solid red;
        margin:auto;
        margin-top:20px;
        .videoTitle{
          width:90%;
          height:20px;
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
