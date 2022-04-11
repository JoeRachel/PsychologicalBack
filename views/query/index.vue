<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="name" label="姓名" width="150">
    </el-table-column>
    <el-table-column prop="id" label="学号" width="120"> </el-table-column>
    <el-table-column prop="a1" label="问题1" width="120"> </el-table-column>
    <el-table-column prop="city" label="问题1" width="120"> </el-table-column>
    <el-table-column prop="address" label="问题1" width="300">
    </el-table-column>
    <el-table-column prop="zip" label="问题1" width="120"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
          >查看</el-button
        >
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   province: "上海",
        //   city: "普陀区",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   zip: 200333,
        // },
      ],
    };
  },
};
</script>
