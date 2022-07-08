'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
      <div>hello</div>
    `;
  } 

  async create() {
    // let name = this.ctx.request.body.name;
    // await this.app.model.Clazz.create({
    //     name: name
    // })
    // this.ctx.body = "添加成功"
    let text = this.ctx.request.body.text;
    // await console.log(text);
    this.ctx.body = text;
}
}

module.exports = HomeController;
