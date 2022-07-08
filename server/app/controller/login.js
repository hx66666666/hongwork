'use strict';

const Controller = require('egg').Controller;

class login extends Controller {
    async index() {
        let id = this.ctx.request.query.id;
        let loginList = await this.app.model.User.findAll();
        this.ctx.body = loginList;
    }

    async create() {
        let login = this.ctx.request.body.login;
        let loginList = await this.app.model.User.findAll();
        let a = '没有';
        loginList.forEach((item) => {
            if (login.role == '用户') {
                if (login.username == item.username && login.password == item.password && login.role == item.role && login.sex == item.sex && login.userid == item.userid) {
                    a = '用户';
                }
            }
            else if (login.role == '后台工作人员') {
                if (login.username == item.username && login.password == item.password && login.role == item.role && login.sex == item.sex && login.userid == item.userid) {
                    a = '后台工作人员';
                }
            }

        })
        this.ctx.body = a;

    }

    async destroy() {
        let id = this.ctx.params.id;
        await this.app.model.User.destroy({
            where: {
                id: id
            }
        })
        this.ctx.body = "删除班级数据"
    }

    async update() {
        let id = this.ctx.params.id;
        let sublist = this.ctx.request.body.sublist;
        let loginList = await this.app.model.User.findAll();
        loginList.forEach((item) => {
            if (item.username == sublist.username && item.sex == sublist.sex && item.role == sublist.role) {
                id = item.id;
            }
        })
        await this.app.model.User.update({
            password: sublist.password,

        }, {
            where: {
                id: id
            }
        })
        this.ctx.body = "修改成功"
    }
}

module.exports = login;