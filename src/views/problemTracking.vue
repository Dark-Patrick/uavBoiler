<template>
  <div class="login-container">
   <routerHead :active="2"></routerHead>
    <div class="headSearch">
       <div class="input">
        <span>员工ID：</span>
        <el-input
          type="text"
          placeholder="请输入"
          v-model="search.name"
          clearable
        />
       </div>
        <div class="input">
          <span> 活动时间：</span>
<!--          <el-time-select-->
<!--            v-model="search.dataTime"-->
<!--            :picker-options="{-->
<!--              start: '08:30',-->
<!--              step: '00:15',-->
<!--              end: '18:30'-->
<!--            }"-->
<!--            placeholder="选择时间">-->
<!--          </el-time-select>-->
          <el-date-picker
            v-model="search.dataTime"
            type="date"
            placeholder="选择查询日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
       </div>
        <div class="searchBtn" @click="change()">
          查询
        </div>
        <div class="addVideo">
          轨迹追踪
        </div>
     </div>
      <div class="baiduMap" id="container"></div>
  </div>
</template>

<script>
import routerHead from '@/components/routerHead.vue'
import axios from "axios";

export default {
  name: 'problemTracking',
  components:{
    routerHead
  },
  data() {
    return{
      search:{
        name:'',
        dataTime:'2023-04-23'
      },
      pos:[
        {
          locx:'115.520094',
          locy:'38.891623',
          cname:'南门',
          name:'李成浩',
          des:'员工到岗',
          time:''
        },
        {
          locx:'115.520056',
          locy:'38.892036',
          cname:'教九A',
          name:'李成浩',
          des:'无异常行为',
          time:''
        },
        {
          locx:'115.520496',
          locy:'38.892018',
          cname:'教十A',
          name:'李成浩',
          des:'边界入侵！员工无访问权限',
          time:''
        },
      ],
      map:'',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){
      this.map = new window.BMapGL.Map("container");
      let point = new window.BMapGL.Point(115.519514, 38.893462);
      this.map.centerAndZoom(point, 18);
      this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      // this.map.setHeading(64.5);   //设置地图旋转角度
      // this.map.setTilt(73);       //设置地图的倾斜角度
      // this.map.addEventListener('click', function(e) {
      //   alert('click!')
      // });
    },

    async search_path(){
      await axios({
        method: 'post',
        url: 'getPath',
        data: {
          id: this.search.name,
          time: this.search.dataTime
        }
      }).then((rep)=>{
        if(rep.data.success){
          this.pos = rep.data.msg;
          return;
        }
        alert("无查询结果！")
      })
    },

     async change(){
      await this.search_path();
      let _this = this;
      this.map.clearOverlays();

      let pointArray = [];
      for(let i = 0; i < this.pos.length; i++){
        pointArray.push(new BMapGL.Point(this.pos[i].locx, this.pos[i].locy))
      }

      let polyline = new BMapGL.Polyline(pointArray, {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
      this.map.addOverlay(polyline);

      for(let i = 0; i < pointArray.length; i++){
        let marker = new BMapGL.Marker(pointArray[i])
        this.map.addOverlay(marker);
        let opts = {
          width : 250,     // 信息窗口宽度
          height: 250,     // 信息窗口高度
          title : this.pos[i].cname , // 信息窗口标题
        }
        let message = '<div class="little_title"></div>' +
          '<div class="infoScroll" style="height:230px;overflow-y:scroll;font-size:0.2rem;margin-top:1vh;"><table>'+
          '<tr><td style="color:grey">'+'员工：'+ '</td><td><span>'+this.pos[i].name+'</span></td></tr>'+
          '<tr><td style="color:grey">'+'位置：'+ '</td><td><span>'+this.pos[i].cname+'</span></td></tr>'+
          '<tr><td style="color:grey">'+'坐标：'+ '</td><td><span>'+this.pos[i].locx+','+this.pos[i].locy+'</span></td></tr>'+
          '<tr><td style="color:grey">'+'识别信息：'+ '</td><td><span>'+this.pos[i].des+'</span></td></tr>'+
          '<tr><td style="color:grey">'+'时间：'+ '</td><td><span>'+this.pos[i].time+'</span></td></tr>';
        let infoWindow = new BMapGL.InfoWindow(message, opts);  // 创建信息窗口对象
        marker.addEventListener("click", function(){
          _this.map.openInfoWindow(infoWindow, pointArray[i]);
        });
      }
    },
  }
}
</script>
<style lang="scss" scoped>

.baiduMap{
  height: 80%;
  width: 95%;
  border: #001F44 1px solid;
  margin: 0 auto;
}

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
  .tableList{
    width: 95%;
    margin: auto;
    color: #ffff;
    background-color: rgba(58,97,194,0.2);
  }
  .pages {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  /deep/ .el-pagination .btn-next, .el-pagination .btn-prev{
    background-color: transparent !important;
  }
  /deep/ .el-table {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 32px;
    .cell{
      text-align: center;
   }
    tr {
    background-color: transparent;
    }
    .el-table__row--striped{
      background-color: transparent;
    }
    tbody tr:hover>td{
      background-color: transparent !important;
    }
    thead {
      text-align: center;
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 28px;
    }
    .el-table__row{
       border-bottom-color: transparent !important;
    }

    .span {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #19E8E8;
      line-height: 30px;
      padding: 0 5px;
      cursor: pointer;
    }
    .span:last-of-type{
      color: #FF6666;
    }
  }
  /deep/ .el-table::before{
    display: none !important;
  }
  /deep/ .el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf{
     border-bottom-color: transparent !important;
  }
  /deep/ .el-pagination button:disabled{
   background-color: transparent !important;
  }
  /deep/ .el-pagination__jump{
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  opacity: 0.5;
  }
  /deep/ .el-input__inner{
  background: #03154E !important;
  border-radius: 2px;
  border:none ;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  opacity: 0.5;
  }
  /deep/ .el-table,
  .el-table__expanded-cell {
    background-color: transparent !important;
  }
  /deep/ .el-table td,
  .el-table--border th,.el-table th.is-leaf {
    border-bottom-color: transparent !important;
  }
  /deep/ .el-table--border, .el-table--group{
    border-color: transparent !important;
  }
  /deep/ .el-table--border::after, .el-table--group::after, .el-table::before{
     border-bottom-color: transparent !important;
  }
  /deep/ .el-table td.is-center, .el-table th.is-center {
    text-align: center;
  }
  .cell{
    text-align: center;
  }
  /deep/ .el-table__row.statistics-warning-row {
  background: rgba(0,160,254,0.2);
  }
}
</style>
