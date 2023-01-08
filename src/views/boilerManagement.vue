<template>
  <div class="login-container">
     <routerHead :active="3"></routerHead>
      <div class="headSearch">
       <div class="input">
        <span>锅炉名称：</span>
        <el-input
          type="text"
          placeholder="请输入"
          v-model="search.name"
          clearable
        />
       </div>
        <div class="input">
          <span> 检测时间：</span>
          <el-time-select
            v-model="search.dataTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
            placeholder="选择时间">
          </el-time-select>
       </div>
        <div class="searchBtn">
          查询
        </div>
        <div class="addVideo">
          新增视频
        </div>
     </div>
      <div class="tableList">
        <el-table
        :data="tableData"
         style="width: 100%;
         text-align:center;"
        :row-class-name="tableRowClassName"
         :header-cell-style="{
           background: 'linear-gradient(90deg, rgba(0,163,254,0.4), rgba(0,212,255,0.4), rgba(0,163,254,0.4))'
           }"
         >
          <el-table-column prop="name" label="设备名称"></el-table-column>
          <el-table-column prop="sn" label="设备编码"></el-table-column>
          <el-table-column prop="location" label="设备位置"></el-table-column>
          <el-table-column prop="orgName" label="所属单位"></el-table-column>
          <el-table-column prop="deviceType" label="设备类型">
            <!-- <template slot-scope="scope">
              <span v-if="scope.row.deviceType == 1">网关</span>
              <span v-if="scope.row.deviceType == 2">NVR</span>
              <span v-if="scope.row.deviceType == 3">摄像头</span>
            </template> -->
          </el-table-column>
          <el-table-column label="设备状态">
            <!-- <template slot-scope="scope">
              <span>{{ scope.row.status }}</span>
            </template> -->
          </el-table-column>
          <el-table-column label="工作时间">
            <!-- <template slot-scope="scope">
              <span>{{ scope.row.startWork }} - {{ scope.row.endWork }}</span>
            </template> -->
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <span class="span" @click="edit(scope.row)">查看</span>
              <span class="span" @click="deleteData(scope.row)">删除</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="pages">
        <div style="display: flex; align-items: center">
          <el-pagination
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            :current-page="current"
            :page-size="pageSize"
            background
            layout="prev, pager, next,sizes, jumper"
            :pager-count="5"
            :total="total"
          ></el-pagination>
        </div>
      </div>
  </div>
</template>

<script>
import routerHead from '@/components/routerHead.vue'
export default {
  name: 'boilerManagemen',
  components:{
    routerHead
  },
  data () {
    return {
      total:0,
      pageSize:10,
      current:1,
      tableData:[{
        name:'大三大四大',
        sn:'1大三大四大',
        location:'GV的双方各水电费水电费2',
        orgName:'dasdasdasd',
        deviceType:'分vdsf',
      },{
        name:'大三大四大',
        sn:'1大三大四大',
        location:'GV的双方各水电费水电费2',
        orgName:'dasdasdasd',
        deviceType:'分vdsf',
      }],
      search:{
        name:'',
        dataTime:''
      }
    }
   },
  created() {
    //获取列表数据
    // this.getList();
  },
   methods: {
    //表格斑马纹的样式
    tableRowClassName({row, rowIndex}) {
      if (rowIndex%2==0) {
      return '';
      } else {
      return 'statistics-warning-row';
      }
    },
     //翻页
    handleCurrentChange(index) {
      this.current = index;
      // this.getList();
    },
    handleSizeChange(index) {
    this.pageSize = index;
    },
    getList() {

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
