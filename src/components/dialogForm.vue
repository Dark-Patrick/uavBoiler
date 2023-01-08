<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="innerVisible"
      :custom-class="className"
      @close="closeDialog"
      :closeOnClickModal="closeOnClickModal"
      :width="width"
      :showClose="headerbtn"
      append-to-body
      :center="true"
      :top="!headerbtn ? '35vh':'5vh'"
    >
      <slot></slot>
      <span slot="footer" v-if="!headerbtn">
        <el-button @click="logout()">退出登录</el-button>
      </span>
      <span slot="footer" class="dialog-footer" v-if="isFooter">
        <el-button type="primary" @click="query()">确 定</el-button>
        <el-button @click="cancel()">取 消</el-button>
      </span>
      <!--自定义底部插槽-->
      <slot name="footer"></slot>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name:"dialogForm",
  model: {
    prop: "visible", // 修改 v-model 绑定的props名称
    event: "toggle",
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    form: {
      type: Object,
      default: () => {}, // es6的箭头函数
    },
    //弹窗标题
    title: {
      type: String,
      default: "",
    },
    //宽度
    width: {
      type: String,
      default: "50%",
    },
    //  是否显示头部按钮
    headerbtn: {
      type: Boolean,
      default: true,
    },
     //  是否显示底部按钮
    isFooter: {
      type: Boolean,
      default: true,
    },
    //点击弹窗关闭
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    //自定义类名
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    innerVisible: {
      get: function () {
        return this.open;
      },
      set: function (val) {
        this.$emit("update:open", val);
      },
    },
  },
  methods: {
    //点击提交
    query() {
      this.$emit("submitDialog", this.form, this.title);
    },
    //点击取消
    cancel() {
      this.$emit("closeDialog", false);
    },
    //点击取消
    closeDialog() {
      this.$emit("closeDialog", false);
    },
    //点击退出
      logout() {
      // logout().then(res => {
      //   if (res.code != 200) {
      //     return this.$message.error(res.message)
      //   }
      //   this.$message.success(res.message)
      localStorage.clear();
      this.$router.push("/login");
      // })
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog {
    width: 800px;
    background: #001F44;
    border-radius: 6px;
    .el-dialog__header{
        height: 35px;
        color: #fff;
        background: #103A6D;
        border-radius: 6px 6px 0px 0px;
        .el-dialog__title{
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            float: left;
            line-height: 18px;
        }
        .el-icon-close{
           width: 20px;
           height: 20px;
           color: #FFFFFF;
        }
    }
    .el-dialog__footer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dialog-footer{
      width: 100%;
      display: block;
      margin: auto;
    }
    .el-button--primary{
      background: rgba(0, 160, 254, 0.6);
      border: 1px solid #00A0FE;
    }
    .el-button--default{
      color: #fff;
      background: rgba(0, 160, 254, 0.2);
      border: 1px solid #00A0FE;
    }
    .el-dialog__body{
       color: #FFFFFF !important;
       .el-form-item__label{
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF !important;
       }
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
        .el-input__inner{
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
      .el-form{
        width: 80%;
        // border: 1px solid red;
        margin: auto;
      }
      .el-button--small{
        // font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #19E8E8;
        background: rgba(28, 255, 252, 0.08);
        border: 1px solid transparent;
      }
      .el-input__inner{
        width: 400px;
        height: 40px;
        /*去外边框*/
        outline: none;
        color: white;
        /*文本颜色*/
        font-size: 14px;
        background: rgba(28, 255, 252, 0.08);
        border: 1px solid #0A434B;
      }
    }

}
</style>
