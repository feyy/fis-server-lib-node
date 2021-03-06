//转发规则——静态服务器没有响应的或者忽略的请求将根据一下规则转发
exports.TranspondRules = {
    //目标服务器的ip和端口，域名也可，但注意不要被host了
    targetServer: {
       "host": "192.168.3.252",
       "port": "8080"
    },
    //特殊请求转发，可选配置，内部的host、port和attachHeaders为可选参数
    regExpPath: {
       // "/": {
       //     "host": "192.168.3.252",
       //     "port": "8080",
       //     "path": "/"
       // }
    },  
    "ajaxOnly": false,  // 是否只转发application/json请求
    "hackHeaders": false  // 是否修改headers中的host,referer
};