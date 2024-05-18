const { sequelize } = require('../config/database');
const { v4: uuid } = require("uuid");
const errorModule = require('../modules/error.module');
const behaviorModule = require('../modules/behavior.module');
const pvuvModule = require('../modules/pvuv.module');
const router = require('koa-router')()

router.prefix('/monitor')
/** 
 *  错误上报 
 */
router.post("/error/report", async function (ctx, next) {
  const { request: { body } } = ctx;
  console.log(body);

  const model = await errorModule();
  const reuslt = await model.create(Object.assign(
    body,
    {
      createTime: new Date()
    }
  ))
  console.log(Array.isArray(reuslt));
  console.log("reuslt", JSON.stringify(reuslt));
  ctx.body = body;
})
/**
 *  错误列表
 */
router.get("/error/list", async function (ctx, next) {
  const { request: { query } } = ctx;
  console.log(query);
  console.log("ErrorModule", ErrorModule);
  const reuslt = await ErrorModule.findAll({
    attributes: ["*"]
  })
  console.log(Array.isArray(reuslt));
  console.log("reuslt", JSON.stringify(reuslt));
  ctx.body = reuslt;
})
/**
 *  操作上报
 */
router.post("/behavior/report", async function (ctx, next) {
  const { request: { body } } = ctx;
  const model = await behaviorModule();
  const reuslt = await model.create(Object.assign(
    body,
    {
      createTime: new Date()
    }
  ))
  ctx.body = reuslt;
})
/**
 *  操作列表
 */
router.get("/behavior/list", function (ctx, next) {
  const { request: { query } } = ctx;
  console.log(query);

  ctx.body = query;
})

/**
 *  pv uv 上报
 */
router.post("/pvuv/report", async function (ctx, next) {
  const { request: { body } } = ctx;
  console.log(body);
  const model = await pvuvModule();
  model.create(Object.assign(
    body,
    {
      createTime: new Date()
    }
  ))
  ctx.body = body;
})
/**
 *  pv 列表
 */
router.post("/pv/list", function (ctx, next) {
  const { request: { query } } = ctx;
  console.log(query);
  ctx.body = query;
})
/**
 *  uv 列表
 */
router.post("/uv/list", function (ctx, next) {
  const { request: { query } } = ctx;
  console.log(query);
  ctx.body = query;
})

module.exports = router
