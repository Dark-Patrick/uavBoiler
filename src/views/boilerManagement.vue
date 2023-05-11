<template>
  <div class="login-container">
     <routerHead :active="3"></routerHead>
      <div class="headSearch">
       <div class="input">
        <span>设备名称：</span>
        <el-input
          type="text"
          placeholder="请输入"
          v-model="search.name"
          clearable
        />
       </div>
        <div class="input">
          <span> 上线时间：</span>
          <el-date-picker
            v-model="search.dataTime"
            type="date"
            placeholder="选择查询日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
       </div>
        <div class="searchBtn">
          查询
        </div>
        <div class="addVideo" @click="addCamera">
          新增设备
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
          <el-table-column prop="cname" label="设备名称"></el-table-column>
          <el-table-column prop="cid" label="设备编码"></el-table-column>
          <el-table-column prop="level" label="设备等级"></el-table-column>
          <el-table-column prop="ip" label="IP地址"></el-table-column>
          <el-table-column prop="locx" label="经度"></el-table-column>
          <el-table-column prop="locy" label="纬度"></el-table-column>
          <el-table-column prop="time" label="上线时间"></el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
<!--              <span class="span" @click="edit(scope.row)">查看</span>-->
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

    <dialogForm
      :open.sync="addCameraDialog"
      class-name="model"
      :is-footer="true"
      @closeDialog="closeDialog"
      title="新增设备"
      :form="form"
      @submitDialog="submitDialog"
    >
      <el-form :model="form">
        <el-form-item label="设备名称：" :label-width="formLabelWidth">
          <el-input v-model="form.cname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="IP地址：" :label-width="formLabelWidth">
          <el-input v-model="form.ip" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="经度：" :label-width="formLabelWidth">
          <el-input v-model="form.locx" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="纬度：" :label-width="formLabelWidth">
          <el-input v-model="form.locy" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="设备等级：" :label-width="formLabelWidth">
          <el-select v-model="form.level" placeholder="请选择等级">
            <el-option label="一级" value=1></el-option>
            <el-option label="二级" value=2></el-option>
            <el-option label="三级" value=3></el-option>
            <el-option label="四级" value=4></el-option>
            <el-option label="五级" value=5></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上线时间：" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.time"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
      </el-form>
    </dialogForm>
  </div>
</template>

<script>
import routerHead from '@/components/routerHead.vue'
import dialogForm from '@/components/dialogForm.vue'
import axios from "axios";
export default {
  name: 'boilerManagemen',
  components:{
    routerHead,
    dialogForm
  },
  data () {
    return {
      addCameraDialog:false,
      total:50,
      pageSize:10,
      current:1,
      tableData:[{
        cid:'1',
        ip:'192.168.12.101',
        level:'2',
        locx:'115.519514',
        locy:'38.893462',
        time:'2023-4-11',
        cname:'一区11号楼'
      },{
        cid:'1',
        ip:'192.168.12.101',
        level:'2',
        locx:'115.519514',
        locy:'38.893462',
        time:'2023-4-11',
        cname:'一区11号楼'
      }],
      search:{
        name:'',
        dataTime:''
      },
      form:{
        ip:'',
        level:'',
        locx:'',
        locy:'',
        time:'',
        cname:''
      },
      formLabelWidth:'120px',
    }
   },
  created() {
    this.getList(1, 10);
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
      this.getList(index, this.pageSize);
    },
    handleSizeChange(index) {
    this.pageSize = index;
    },
    getList(index, size) {
      axios({
        method: 'get',
        url: 'camera/list',
        params:{
          index: index,
          size: size
        }
      }).then((response)=>{
        if(response.data.success){
          this.tableData = response.data.msg;
        }
      })
    },
    deleteData(data){
      let _this = this;
      axios({
        method: 'post',
        url: 'camera/delete',
        data: {
          cid: data.cid
        }
      }).then(function (data){
        if(data){
          alert("设备已移除！");
          _this.current = 1;
          _this.getList(1, 10);
          return ;
        }
        alert("删除失败，请稍后再试");
      })
    },
     addCamera(){
       this.addCameraDialog = true;
     },

     closeDialog(value){
       this.addCameraDialog = value;
     },
     submitDialog(){
       axios({
         method: 'post',
         url: 'camera/insert',
         data: {
           cname: this.form.cname,
           ip: this.form.ip,
           locx: this.form.locx,
           locy: this.form.locy,
           time: this.form.time,
           level: this.form.level
         }
       }).then(function (data){
         if(data){
           alert("上传成功！");
           return ;
         }
         alert("上传失败，请稍后再试");
       })
       this.addVideoDialog = false;
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
