/**
 * Created by yubing on 2016/10/25.
 */
export class ServiceConsumer{
    private _host:string;
    private _port:number;
    private _version:string;
    private _tcp_port:number;

    constructor(host:string,port:number,tcp_port:number,version?:string){
        if(host == null || host == ""){
            throw "Provider host name can not be empty!";
        }
        if(port <= 1000){
            throw "Provider port must big than 1000!";
        }
        if(tcp_port <= 1000){
            throw "Provider tcp port must big than 1000!";
        }

        this._host = host;
        this._port = port;
        this._version = version;
        this._tcp_port = tcp_port;
    }

    get host(): string {
        return this._host;
    }

    get port(): number {
        return this._port;
    }

    get version(): string {
        return this._version;
    }

    get tcp_port(): number {
        return this._tcp_port;
    }
}