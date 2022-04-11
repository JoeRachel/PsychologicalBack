const models = require("../db/db");
const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const $sql = require("../db/sqlMap");

// 连接数据库
const conn = mysql.createConnection(models.mysql);
conn.connect();
const jsonWrite = function(res, ret) {
    if (typeof ret === "undefined") {
        res.json({
            code: "1",
            msg: "操作失败",
        });
    } else {
        res.json(ret);
    }
};
// 接口：增加信息
router.post("/addStu", (req, res) => {
    const sql = $sql.Stu.add;
    const params = req.body;
    console.log("添加", params);
    conn.query(
        sql, [params.stu_name, params.stu_sex, params.stu_college, params.stu_class],
        function(err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                jsonWrite(res, result);
            }
        }
    );
});

// 接口：查询全部
router.get("/showStu", (req, res) => {
    const sql = $sql.Stu.show;
    const params = req.body;
    console.log(params);
    conn.query(
        sql, [params.id, params.name, params.a, params.b, params.c, params.d, params.e],
        function(err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                jsonWrite(res, result);
            }
        }
    );
});
router.get("/showAppoint", (req, res) => {
    const sql = $sql.Appoint.show;
    const params = req.body;
    console.log(params);
    conn.query(
        sql, [
            params.id,
            params.name,
            params.sex,
            params.age,
            params.email,
            params.message,
            params.selection,
        ],
        function(err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                jsonWrite(res, result);
            }
        }
    );
});

// 接口：删除信息
router.delete("/delAppoint", (req, res) => {
    const sql = $sql.Appoint.del;
    const params = req.query;
    console.log("删除成功", params);
    conn.query(sql, [params.id], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    });
});

// 接口：修改信息
router.post("/updStu", (req, res) => {
    const sql = $sql.Stu.update;
    const params = req.body;
    console.log("修改", params);
    conn.query(
        sql, [params.id, params.name, params.a, params.b, params.c, params.d, params.e],
        function(err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                jsonWrite(res, result);
            }
        }
    );
});

module.exports = router;