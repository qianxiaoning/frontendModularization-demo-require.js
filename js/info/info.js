//第一个require加载配置公共模块的config文件 进到common文件夹里的config.js
require(['../common/config'], function (config) {
    //第二个require加载从config配置文件过来的公共模块 如jq和我们的common.js
    //回调函数中的参数function($,c)都是有返回值的情况 有些模块没有返回值就没有参数
    require(['jquery','common'],function($,c){
        $(function(){
            //调用区域
            console.log('我是jq方法文档加载完毕后显示');
            c.ajax();
            c.bootstrapTabel();
            c.layer();
            info1();
            info2();
        });
        //home.js页面的方法 区域
        function info1(){
            console.log('我是info页面独有的方法1');
        }
        function info2(){
            console.log('我是info页面独有的方法2');
        }
    });
});