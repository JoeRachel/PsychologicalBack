<template>
  <div>
    <el-descriptions
      title="教师个人信息"
      direction="vertical"
      :column="4"
      border
    >
      <el-descriptions-item label="用户名">黄文</el-descriptions-item>
      <el-descriptions-item label="手机号">13597386529</el-descriptions-item>
      <el-descriptions-item label="居住地" :span="2"
        >成都市青羊区</el-descriptions-item
      >
      <el-descriptions-item label="备注">
        <el-tag size="medium ">教授</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="职务"> 心理咨询教授</el-descriptions-item>
      <el-descriptions-item label="评分">
        <el-rate v-model="value1"></el-rate>
      </el-descriptions-item>
    </el-descriptions>

    <br />
    <br />
    <el-descriptions direction="vertical" :column="4" border>
      <el-descriptions-item label="用户名">张萌</el-descriptions-item>
      <el-descriptions-item label="手机号">13467918465</el-descriptions-item>
      <el-descriptions-item label="居住地" :span="2"
        >成都市双流区</el-descriptions-item
      >
      <el-descriptions-item label="备注">
        <el-tag size="medium">教师</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="职务">心理咨询教师</el-descriptions-item>
      <el-descriptions-item label="评分">
        <el-rate v-model="value2"></el-rate>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "teacher",
  data() {
    return {
      value1: null,
      value2: null,
    };
  },
};
</script>

<style></style>
