<template>
  <div>
    <span></span>
    <br />
    <el-table v-loading="loading" style="width: 100%" :data="tableData">
      <el-table-column prop="id" label="ID" width="200"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="200"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="150"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="200"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="300"> </el-table-column>
      <el-table-column prop="message" label="留言" width="300">
      </el-table-column>
      <el-table-column
        prop="selection"
        label="选择老师"
        width="200"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="medium" @click="delAppoint(scope.row)"
            >点击已阅</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "User",
  data() {
    return {
      loading: false,
      visible: false,
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
      ],
    };
  },

  methods: {
    showAppoint() {
      this.loading = true;
      request.get("/Appoint/showAppoint").then((res) => {
        console.log(res);
        this.tableData = res.data;
        this.loading = false;
      });
    },
    delAppoint(row) {
      request
        .delete("/Appoint/delAppoint", { params: { id: row.id } })
        .then((res) => {
          console.log(res);

          this.showAppoint();
        });
    },
  },

  created() {
    this.showAppoint();
  },
};
</script>

<style lang="less"></style>
