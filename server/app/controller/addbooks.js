'use strict';

const Controller = require('egg').Controller;

class addbooks extends Controller {
    async index() {
        let id = this.ctx.request.query.id;
        let bookList = await this.app.model.Books.findAll();
        this.ctx.body = bookList;
    }

    async create() {
        let book = this.ctx.request.body.book;
        book = [book];
        let res = await this.app.model.Books.bulkCreate(book);
        this.ctx.body = res;

    }

    async destroy() {
        let id = this.ctx.params.id;
        await this.app.model.Books.destroy({
            where: {
                id: id
            }
        })
        this.ctx.body = "删除数据"
    }

    async update() {
        let id = this.ctx.params.id;
        let sublist = this.ctx.request.body.sublist;
        await this.app.model.Books.update({
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

module.exports = addbooks;