/**
 * Created by yubing on 2016/10/25.
 */
var ServiceProvider = require("../.tmp/src/ServiceProvider");
var assert = require("assert");

describe("服务提供者测试用例",function(){
   describe("创建服务提供者信息",function () {
       it("正确创建服务提供者信息",function(){
           new ServiceProvider.ServiceProvider("192.168.1.1",8080,"1.0");
       });
       it("不正确创建服务提供者信息",function(){
           var thr = false;
           try{
               new ServiceProvider.ServiceProvider("",8080,"1.0");
               thr = true;
           }
           catch (e){}

           try{
               new ServiceProvider.ServiceProvider("192.168.1.1",0,"1.0");
               thr = true;
           }
           catch (e){}

           try{
               new ServiceProvider.ServiceProvider("192.168.1.1",8080,"");
               thr = true;
           }
           catch (e){}

           if(thr){
               throw "Error!";
           }
       })
   })
});