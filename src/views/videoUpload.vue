<template>
  <div class="login-container">
     <routerHead :active="1"></routerHead>
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
        <div class="addVideo" @click="addVideo">
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
          <el-table-column prop="boilerName" label="设备名称"></el-table-column>
          <el-table-column prop="id" label="设备编码"></el-table-column>
          <el-table-column prop="detectionDuration" label="工作时间"></el-table-column>
          <el-table-column prop="detectionTime" label="设备位置"></el-table-column>
          <el-table-column  label="设备类型">
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
          <el-table-column label="所属单位">
            <!-- <template slot-scope="scope">
              <span>{{ scope.row.startWork }} - {{ scope.row.endWork }}</span>
            </template> -->
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <span class="span" @click="edit(scope.row)">查看</span>
              <span class="span" @click="deleteData(scope.$index, scope.row)">删除</span>
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
        :open.sync="addVideoDialog"
        class-name="model"
        :is-footer="true"
        @closeDialog="closeDialog"
        title="修改设备"
        :form="form"
        @submitDialog="submitDialog"
        >
        <el-form :model="form">
          <el-form-item label="锅炉名称：" :label-width="formLabelWidth">
            <el-input v-model="form.boilerName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="设备位置：" :label-width="formLabelWidth">
            <el-select v-model="form.detectionTime" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="检测时长：" :label-width="formLabelWidth">
            <el-input v-model="form.detectionDuration" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="视频：" :label-width="formLabelWidth">
            <el-upload
              class="upload-demo"
              action="http://172.19.209.96:8081/file/save"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="uploadFileSuccess"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary"><i class="el-icon-upload2"></i>上传</el-button>
            </el-upload>
           </el-form-item>
        </el-form>
      </dialogForm>

        <dialogForm
        :open.sync="seeVideoDialog"
        class-name="model"
        :is-footer="false"
        @closeDialog="closeSeeDialog"
        title="修改设备"
        :form="form"
        @submitDialog="submitDialog"
        >
          <video ref="videoOnChange" id="videoOnChange" controls = "controls"  :src="videoSrc" style="height: 400px; width: 100%; align-content: center; align-items: center"></video>
        <el-form :model="form">
          <el-form-item label="锅炉名称：" :label-width="formLabelWidth">
            <el-input v-model="form.boilerName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="检测时间：" :label-width="formLabelWidth">
            <el-select v-model="form.detectionTime" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="检测时长：" :label-width="formLabelWidth">
            <el-input v-model="form.detectionDuration" autocomplete="off"></el-input>
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
  name: 'videoUpload',
  components:{
    routerHead,
    dialogForm
  },
  data () {
    return {
    addVideoDialog:false,
    seeVideoDialog:false,
    total:0,
    pageSize:10,
    current:1,
    videoSrc: '',
    tableData:[
      {
      id: '1',
      boilerName:'112',
      detectionTime:'3:40',
      detectionDuration:'shanghai',
      videoId:'e3f4146f-6619-418b-959e-d9101b7f952e.mp4'
      },
      {
        id: '2',
        boilerName:'113',
        detectionTime:'3:40',
        detectionDuration:'shanghai',
        videoId:'e3f4146f-6619-418b-959e-d9101b7f952.mp4'
      },
      {
        id: '3',
        boilerName:'114',
        detectionTime:'3:40',
        detectionDuration:'shanghai',
        videoId:'e3f4146f-6619-418b-959e-d9101b7f952e.mp4'
      }],

     search:{
      name:'',
      dataTime:''
     },
    form:{
      boilerName:'',
      detectionTime:'',
      detectionDuration:'',
      videoId:''
    },
    fileList:[],
    formLabelWidth:'120px',
    }
  },
  created() {
    //获取列表数据
    this.getList();
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
    //新增视频弹窗
    addVideo(){
      this.addVideoDialog = true;
    },
    //关闭新增视频弹窗
    closeDialog(value){
      this.addVideoDialog = value;
    },
    //上传成功
    uploadFileSuccess(response){
      console.log(response);
      if(response.success){
        //alert(response.path);
        this.form.videoId = response.path;
      }else{
        this.$message.error("文件上传失败！！！");//文件上传错误提示
      }
    },
    handlePreview(){

    },
    handleRemove(){

    },
    beforeRemove(){

    },
    handleExceed(){

    },
    //弹窗提交
    submitDialog(){
      //alert("axios");
      let _this = this;
      axios({
        method: 'post',
        url: 'http://172.19.222.67:8081/file/upload',
        data: {
          boilerName: this.form.boilerName,
          detectionTime: this.form.detectionTime,//检查时间对应再数据库中表示的是设备位置，前端的锅
          detectionDuration: this.form.detectionDuration,
          videoId: this.form.videoId
        }
      }).then(function (data){
        if(data){
          //alert("上传成功！");
          _this.getList();
          return ;
        }
        alert("上传失败，请稍后再试");
      })

      this.addVideoDialog = false;
    },
    getList() {
      let _this = this;
      axios({
        method: 'get',
        url: 'http://172.19.222.67:8081/file/list',
      }).then((response)=>{
        console.log(response);
        if(response.data.success){
          this.tableData = response.data.msg;
        }
      })
    },
    //查看数据
    edit: function(data){
      let root = 'http://172.19.222.67:8081/upload/';
      this.videoSrc = root + data.videoId;
      this.seeVideoDialog = true;
    },
    closeSeeDialog(){
      this.addVideoDialog = false;
    },
    //删除数据
    deleteData: function (index, data){
      console.log(data);
      this.tableData.splice(index, 1);
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
