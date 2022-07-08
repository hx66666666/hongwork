'use strict';

const Controller = require('egg').Controller;

class unsub extends Controller {
    async index() {
        let id = this.ctx.request.query.id;
        let bookList = await this.app.model.Borrowbook.findAll();
        this.ctx.body = bookList;
    }

    //退订
    async create() {
        let unsub1 = this.ctx.request.body.unsub1;
        let bookList = await this.app.model.Borrowbook.findAll();
        let bookList1 = await this.app.model.Books.findAll();
        let id = 0;
        let id1 = 0;
        //获得订阅书籍表的id
        bookList.forEach((item) => {
            if (item.userid == unsub1.userid && item.name == unsub1.name) {
                id = item.id;
            }
        });


        //返回原书籍表中退订书籍的id
        bookList1.forEach((item) => {
            if (item.name == unsub1.name) {
                id1 = item.id;
            }
        });
        this.ctx.body = [id, id1];

    }

    async destroy() {
        let id = this.ctx.params.id;
        // await this.app.model.Borrowbook.destroy({
        //     where: {
        //         id: id
        //     }
        // });
        if (id == 0) {
            this.ctx.body = '未借出';
        } else {
            await this.app.model.Borrowbook.destroy({
                where: {
                    id: id
                }
            });
            this.ctx.body = '删除成功';
        }

    }

    //修改退订后原书籍表中的状态
    async update() {
        let id = this.ctx.params.id;


        if (id == 0) {
            this.ctx.body = "未找到该书籍";
        } else {
            await this.app.model.Books.update({
                state: '未借出',
            }, {
                where: {
                    id: id
                }
            })
            this.ctx.body = "修改成功";
        }

    }
}

module.exports = unsub;