'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources("login", "/login", controller.login)
  router.resources("sign", "/sign", controller.sign)
  router.resources("addbooks", "/addbooks", controller.addbooks)
  router.resources("borrowbook", "/borrowbook", controller.borrowbook)
  router.resources("unsub", "/unsub", controller.unsub)

};
