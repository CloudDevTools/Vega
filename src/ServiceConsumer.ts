/**
 * Created by yubing on 2016/10/25.
 */
/**
 * 服务消费者描述类
 */

export class ServiceConsumer{
    //消费者地址
    private _host:string;
    //消费者lib库的版本
    private _version:string;
    //消费者需要的版本
    private _version_need:string;
    //tcp连接的端口
    private _tcp_port:number;

    constructor(host:string,tcp_port:number,version:string,version_need?:string){
        if(host == ""){
            throw "Consumer host name can not be empty!";
        }
        if(tcp_port <= 1000){
            throw "Consumer tcp port must big than 1000!";
        }
        if(version == ""){
            throw "Consumer version can not be empty!";
        }

        this._host = host;
        this._version = version;
        this._tcp_port = tcp_port;
        this._version_need = version_need;
    }

    get host(): string {
        return this._host;
    }

    get version(): string {
        return this._version;
    }

    get tcp_port(): number {
        return this._tcp_port;
    }

    get version_need(): string {
        return this._version_need;
    }
}