# fis-server-lib-node

**适用于fis3 3.2.x及以下版本**，3.3.0及以后版本参考[fis3-server-node](https://github.com/xgfe/fis3-server-node)。

replace fis-command-server/lib/node for transpond function
##[fis-command-server](https://github.com/fex-team/fis-command-server)
修改自[fis-command-server](https://github.com/fex-team/fis-command-server)的2015年8月12日提交（d6443d1cedda1d34579838ac435dba056c54c68e）的lib/node

##使用方法
* 下载后拷贝到fis3下的fis-command-server下的lib/node目录，选择覆盖，如果先删除了该目录，则需要npm install安装相关依赖

* mac下默认路径：/usr/local/lib/node_modules/fis3/node_modules/fis-command-server/lib/node

* mac下使用nvm的路径：/usr/local/Cellar/nvm/{nvm version}/versions/node/{node version}/lib/node_modules/fis3/node_modules/fis-command-server/lib/node

* 拷贝后需要重新清理本地测试服务器空间,再重新启动（其实就是把server.tar重新解压到测试服务器空间）
		
		fis3 server clean
		fis3 server start

* 需要再node server下运行，如果默认启动的不是fis3的node server 则需要如下命令

		fis3 server start --type node

* 转发规则依赖于transpond-config.js文件，项目下有样例

		//转发规则——静态服务器没有响应的或者忽略的请求将根据一下规则转发
		exports.TranspondRules = {
		    //目标服务器的ip和端口，域名也可，但注意不要被host了
		    targetServer: {
		       "host": "192.168.3.252",
		       "port": "8080"
		    },
		    //特殊请求转发，可选配置，内部的host、port和attachHeaders为可选参数
		    regExpPath: {
		       "/": {
		           "host": "192.168.3.252",
		           "port": "8080",
		           "path": "/"
		       }
		    },  
		    "ajaxOnly": false,  // 是否只转发application/json请求
		    "hackHeaders": false  // 是否修改headers中的host,referer
		};

* 转发日志文件存储在fis3 server 根目录下的server.log中

##开发说明
* git clone
* npm install
* 修改代码
* ./build.sh 构建生成并替换server.tar
* 测试
* 提交
