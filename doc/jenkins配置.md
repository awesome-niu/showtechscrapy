# jenkins配置
## 版本说明
* 作者：竺欢焕（android）
* 所属团队：特维轮无线团队
* 版本：1.0.0

## jenkins下载与安装
* 去官网下载最新版本的jenkins，各个系统下载对应的版本

## jenkins基本配置
### 打开允许注册功能
* 路径：首页--系统管理--Configure Global Security
* ![注册功能](./jenkins/register.jpg) 
* 点击“应用”，注册自己的账户

### 账户权限控制
* 路径：首页--系统管理--Configure Global Security
* ![权限功能](./jenkins/power.jpg)
* 点击“应用”

### 插件下载与安装
* 路径：首页--系统管理--管理插件
* ![插件安装](./jenkins/plugin.jpg)
* 分别安装：svn，gradle，android-lint
* 如果某个插件安装失败，或者连接网络失败，排除依赖其他插件问题后，下载该插件的.hpi文件，手动上传安装
* ![手动安装插件](./jenkins/plugin-upload.jpg)

### 系统配置
* 路径：首页--系统管理--系统设置
* ![配置android](./jenkins/config-android.jpg)
* ![配置gradle](./jenkins/config-gradle.jpg)
* ![配置admin-email](./jenkins/config-adminemail.jpg)
* ![配置notify-email](./jenkins/config-notifyemail.jpg)
* 点击“应用”

### 新建任务
* 路径：首页--新建
* ![新建任务](./jenkins/newjob.jpg)
* 点击“OK”
* 具体的项目配置请参考我的jenkins服务中的配置:http://172.16.1.245:8080
* ![构建任务](./jenkins/buildjob.jpg)