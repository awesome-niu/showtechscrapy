## 代码提交 ##
* 每次提交，做message限制，不写message不允许提交，否则，大家都不知道提交了什么内容
* add（增加新的文件）, modify（修改一些逻辑）, fix（bug修复），delete（删除代码）区分
* 无关代码（本地调试代码，日志）不要提交

## 代码中存在的共性 ##
* 无用代码未删除
* 函数功能单一，举个例子：findviewbyid()函数中，除了初始化view，还做了一些额外的工作
* 不要使用魔数，简单的数字0，1，2，不能代表具体的含义
* 每个类，作者，描述，时间，未统一
* 如果类废弃，使用@Deprecated或者直接删除
* exception未记录到日志，打印出栈的信息多余的新能浪费，不便于后续分析问题
* 类中或者model有些变量用来做什么，未有注释
* 函数中有传递list的，应该做空判断



## 建议 ##
* model对象类太多了，后续如果业务变化，很有可能不断增加
* response对象类太多，后续如果业务变化，很有可能不断增加
* http服务端的请求地址过多，后续如果业务变化，很有可能不断增加，那么服务端接口维护会是个大坑
* 统一封装一个logger类
* project的编码格式一致--utf-8
* token不应该写死，token应该有过期限制，需要服务端给出相应的服务
* 性能：进行内存泄漏的排查
* 性能：进行过度渲染的排查
* 变量命名规则的统一，驼峰，下划线分割，还是混合使用（控件的变量用下划线方式，其他变量用驼峰）
* gradle的依赖管理基本没有用
* view的初始化方式未统一
* http的请求，成功，失败都需要处理，不能单单处理成功的部分
* model中的字段，不建议用缩写，除非是约定俗成的缩写，比如message的msg，image的img
* 常量类中的字段，需要用final标识，不可修改


## QicheChaorenApplication ##
* 与application无关的代码是否可以移到一个独立的类中，比如：cartCount, SHOW_TYPE, SD_PATH, BASE_PATH, BASE_IMAGE_CACHE
* 是否可以区分开发模式和生产模式
* 登录相关的参数，是否可以放到一个单独的类来处理
* 屏幕的宽度和高度是否可以放到其他类，从appliacton中剥离
* 初始化工作是否可以放到splashactivity中
* 注释与实际使用不一致，单例模式，但是实际中并没有采用单例--instance
* 目标：一个类只做一个功能，多个功能都写入一个类，随着后续的业务调整，这个类会不断变大，会导致不容易维护

## HomeActivityNew ##
* system.out.println函数只限于debug阶段，生产环境代码需要删除

## FragmentTabAdapter ##
* 命名不合适，常规用法会用于某些控件的setAdapter()函数中，但是这个adapter用法明显不是

## HttpMethod ##
* 常量类，不应该有代码

## ToastUtil ##
* 工具类，不应该有public的构造函数
* 为什么需要用到handler
* 为什么需要用到thread

## HttpUtil ##
* delayToast()函数不应该放入这个类中，应该放入ToastUtil中
* toLogin()函数不应该放入这个类中
* getInstance()函数，应该返回HttpUtil的实例对象

## GlobalConfig ##
* 所有的变量都只用到一次，没必要把这些变量放在这个类内，放到使用的类内部就可以了
* 这些变量应该使用final，限定为常量

## MD5Util ##
* 应该提供文件和字符串的md5加密接口（建议）
* 16进制的表示，还应该包括小写字母"abcdef"（建议）

## MyBeanUtil ##
* 没有地方使用

## PayResult ##
* 不是工具类，是一个model，地方放的不对

## PayUtil ##
* 使用方式不是工具类，不应该归入工具类包（工具类不应该使用new的方式，而是使用static调用）

## RSAUtil ##
* 跟MD5Util的功能冲突
* 有多余的main函数

## Util ##
* 功能多杂，应该拆分出几个工具类：SizeUtil，DateUtil，JPushUtil

## MyReceiver ## 
* 不应放置在application这个包下，放置不合理

## NetBroadcastReceiver ##
* 不应放置在application这个包下，放置不合理


## UserCouponBean ##
* model类中，不应该放置公外部使用的静态常量，需抽离

## TranOrderItemBean 与 TranOrderItemBean2 ##
* 两者有什么区别，未有说明

## StoreServerBean 与 StoreServiceBean ##
* 两者有什么区别，未有说明

## StoreBean ## 
* model类中，不应该有枚举类的定义