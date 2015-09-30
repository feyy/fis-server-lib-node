# fis-server-lib-node
replace fis-command-server/lib/node for transpond function
##[fis-command-server](https://github.com/fex-team/fis-command-server)
修改自[fis-command-server](https://github.com/fex-team/fis-command-server)的2015年8月12日提交（d6443d1cedda1d34579838ac435dba056c54c68e）的lib/node

##使用方法
* 下载后拷贝到fis3下的fis-command-server下的lib/node目录，选择覆盖，如果先删除了该目录，则需要npm install安装相关依赖

* mac下默认路径：/usr/local/lib/node_modules/fis3/node_modules/fis-command-server/lib/node

* 拷贝后需要重新清理本地测试服务器空间,再重新启动（其实就是把server.tar重新解压到测试服务器空间）
		
		fis3 server clean
		fis3 server start

* 需要再node server下运行，如果默认启动的不是fis3的node server 则需要如下命令

		fis3 server start --type node

* 转发规则依赖于transpond-config.js文件，项目下有样例

* 转发日志文件存储在fis3 server 根目录下的server.log中

##开发说明
* git clone
* npm install
* 修改代码
* ./build.sh 构建生成并替换server.tar
* 测试
* 提交