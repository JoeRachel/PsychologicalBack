var sqlMap = {
    Stu: {
        add: "insert into questions(id,name,a,b,c,d,e) values (?,?,?,?,?)",
        show: "select * from questions",
        del: "delete from questions where id = ?",
        update: "update questions set id = ?,name = ?,a = ?,b = ?,c = ?,d = ?,e = ? where id = ?",
    },
    Appoint: {
        show: "select * from appointment",
        del: "delete from appointment where id = ?",
    },
};

module.exports = sqlMap;