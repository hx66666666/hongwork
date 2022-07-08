'use strict';

const Controller = require('egg').Controller;

class sign extends Controller {
    async index() {
        let id = this.ctx.request.query.id;
        let loginList = await this.app.model.User.findAll();
        this.ctx.body = loginList;
    }

    async create() {
        let sign = this.ctx.request.body.sign;
        sign = [sign];
        let res = await this.app.model.User.bulkCreate(sign);
        this.ctx.body = res;

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
        await this.app.model.Sign.update({
            username: sublist.username,
            password: sublist.password,
            sex: sublist.sex,
            type: sublist.type,
        }, {
            where: {
                id: id
            }
        })
        this.ctx.body = "修改成功"
    }
}

module.exports = sign;