import Mock from "mockjs";
export default {
    getMenu: (config) => {
        const { username, password } = JSON.parse(config.body);
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === "wtq" && password === "wtq") {
            return {
                code: 20000,
                data: {
                    menu: [{
                            path: "/home",
                            name: "home",
                            label: "管理员信息",
                            icon: "s-home",
                            url: "home/index",
                        },
                        {
                            path: "/test",
                            name: "test",
                            label: "心理测试管理",
                            icon: "video-play",
                            url: "test/index",
                        },
                        {
                            path: "/user",
                            name: "user",
                            label: "用户预约管理",
                            icon: "user",
                            url: "User/index",
                        },
                        // {
                        //     path: "/query",
                        //     name: "query",
                        //     label: "问卷调查",
                        //     icon: "s-order",
                        //     url: "query/index",
                        // },
                        {
                            label: "用户管理",
                            icon: "s-order",
                            children: [{
                                    path: "/student",
                                    name: "student",
                                    label: "学生个人信息",
                                    icon: "s-order",
                                    url: "other/student",
                                },
                                {
                                    path: "/teacher",
                                    name: "teacher",
                                    label: "教师个人信息",
                                    icon: "s-order",
                                    url: "other/teacher",
                                },
                            ],
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: "获取成功",
                },
            };
        } else if (username === "stu" && password === "stu") {
            return {
                code: 20000,
                data: {
                    menu: [{
                            path: "/",
                            name: "home",
                            label: "首页",
                            icon: "s-home",
                            url: "home/index",
                        },
                        {
                            path: "/video",
                            name: "video",
                            label: "sss",
                            icon: "video-play",
                            url: "test/index",
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: "获取成功",
                },
            };
        } else {
            return {
                code: -999,
                data: {
                    message: "密码错误",
                },
            };
        }
    },
};