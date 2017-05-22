var app = require('koa')();
var router = require('koa-router')();

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad');
router.get('/api/homead',function *(next){
    this.body = homeAdData;
});

// 首页 —— 广告（天天立减）
var homeAdDelData = require('./home/adDel');
router.get('/api/homeaddel',function *(next){
    this.body = homeAdDelData;
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list');
router.get('/api/homeList/:city/:page',function *(next){
    //参数
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;
    console.log('当前城市：'+ paramsCity);
    console.log('当前页数：'+ paramsPage);
    this.body = homeListData;
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    this.body = searchListData
});


// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);