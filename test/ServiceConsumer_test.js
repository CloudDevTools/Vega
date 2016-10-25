/**
 * Created by yubing on 2016/10/25.
 */
var ServiceConsumer = require("../.tmp/src/ServiceConsumer");
var assert = require("assert");

describe("服务消费者测试用例",function(){
    describe("创建服务消费者信息",function () {
        it("正确创建服务消费者信息",function(){
            var p = new ServiceConsumer.ServiceConsumer("192.168.1.1",8080,8888,"1.0");
            assert.equal(p.host,"192.168.1.1");
            assert.equal(p.port,8080);
            assert.equal(p.version,"1.0");
            assert.equal(p.tcp_port,8888);
            p = new ServiceConsumer.ServiceConsumer("192.168.1.1",8080,8888);
            assert.equal(p.version,undefined);
        });
        it("不正确创建服务消费者信息",function(){
            var thr = false;
            try{
                new ServiceConsumer.ServiceConsumer("",8080,8888,"1.0");
                thr = true;
            }
            catch (e){}

            try{
                new ServiceConsumer.ServiceConsumer("192.168.1.1",0,8888,"1.0");
                thr = true;
            }
            catch (e){}

            try{
                new ServiceConsumer.ServiceConsumer("192.168.1.1",8080,0,"1.0");
                thr = true;
            }
            catch (e){}

            if(thr){
                throw "Error!";
            }
        })
    })
});