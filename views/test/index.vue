<template>
  <div>
    <el-dialog :visible.sync="isShow" title="修改信息">
      <el-form>
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名字" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="问题1" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="问题2" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="问题3" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="问题4" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="问题5" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </el-dialog>
    <span></span>
    <br />
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column fixed prop="id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="200"> </el-table-column>
      <el-table-column prop="a" label="问题1" width="230"> </el-table-column>
      <el-table-column prop="b" label="问题2" width="230"> </el-table-column>
      <el-table-column prop="c" label="问题3" width="230"> </el-table-column>
      <el-table-column prop="d" label="问题4" width="230"> </el-table-column>
      <el-table-column prop="e" label="问题5" width="230"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" size="medium" type="success"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "test",
  components: {},
  data() {
    return {
      isShow: false,
      loading: false,
      tableData: [],
      operateType: "edit",
      formLabelWidth: "120px",
      dialogFormVisible: false,
    };
  },

  methods: {
    // 查询全部数据
    handleEdit(row) {
      console.log(row.id);
      this.isShow = true;
    },
    showStu() {
      this.loading = true;
      request.get("/stu/showStu").then((res) => {
        console.log(res);
        this.tableData = res.data;
        this.loading = false;
      });
    },
    updStu() {
      request.get("/stu/updStu", { params: { id: row.id } }).then((res) => {
        console.log(res);
        this.isShow = false;
        this.showStu();
      });
    },
  },

  mounted() {
    this.showStu();
  },
};
</script>

<style lang="less"></style>
