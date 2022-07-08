'use strict';

const Controller = require('egg').Controller;

class borrowbook extends Controller {
    async index() {
        let id = this.ctx.request.query.id;
        let bookList = await this.app.model.Borrowbook.findAll();
        this.ctx.body = bookList;
    }

    async create() {
        let book = this.ctx.request.body.book;
        book = [book];
        let res = await this.app.model.Borrowbook.bulkCreate(book);
        this.ctx.body = res;

    }

    async destroy() {
        let id = this.ctx.params.id;
        await this.app.model.BorrowBook.destroy({
            where: {
                id: id
            }
        })
        this.ctx.body = "删除数据"
    }

    async update() {
        let id = this.ctx.params.id;
        let book = this.ctx.request.body.book;

        let bookList = await this.ctx.model.Books.findByPk(id);
        if (bookList.state == '以借阅') {
            this.ctx.body = '以借阅';
        } else {
            await this.app.model.Books.update({
                name: book.name,
                position: book.position,
                author: book.author,
                state: book.state,
                type: book.type,
            }, {
                where: {
                    id: id
                }
            })
            this.ctx.body = "修改成功";
        }
    }
}

module.exports = borrowbook;