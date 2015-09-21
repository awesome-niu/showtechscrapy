# 命名风格
## 版本说明
* 作者：竺欢焕（android）
* 所属团队：特维轮无线团队
* 版本：1.0.2
* 参考文献：http://google-styleguide.googlecode.com/svn/trunk/javaguide.html（需翻墙）
* 参考文献：http://www.hawstein.com/posts/google-java-style.html（上文的中文版）
* 参考文献：http://source.android.com/source/code-style.html（需翻墙）
* 说明：如果与参考文献有冲突的地方，以本文档为准

## JAVA类命名风格
* 采用大驼峰式命名法，尽量避免缩写，除非该缩写是众所周知的，比如HTML，URL,如果类名称包含单词缩写，则单词缩写的每个字母均应大写；
* 如果是Android SDK提供的Android应用组成部分，那么类名应该是类的作用的英文全称或者缩写＋ Android SDK基类的名字，比如：MainActivity，DownloadService， StoreAdapter
* 工具类的话，统一用Util结尾


## 变量命名风格
* 变量除了大家都知道的缩写，一般情况下，不建议用缩写
* bean类的变量，使用标准的java命名方法，比如：private String userName；
* bean类中对于布尔型变量的获取，统一采用isXXXX()方式
* 控件实例命名，类中控件名称与xml布局id保持一致，比如：布局文件中Button的id为：btn_pay, private Button btn_pay;
* 其他类的变量命名，使用google的m命名方法，非public的、非static的字段名称以m开头，比如：private int mCount；
* 布尔变量名应该包含is，这意味着YES/NO或者TRUE/FALSE值
* 即使对于可能仅出现在几个代码行中的生存期很短的变量，仍然使用有意义的名称。仅对于短循环索引使用单字母变量名，如 i 或 j。  

## 常量命名风格
* 常量使用全大写字母加下划线的方式命名，比如：public static final String STATUS_SUCCESS = "success"；

## 方法命名风格
* 动词或动名词，采用小驼峰命名法，比如：private void initView()

## 编码风格
* 统一使用UTF-8编码，避免乱码问题（android studio中统一设置）

## 注释
### 类注释
* 应该包含作者，创建时间，Email以及用途（android studio中统一设置）
### 函数注释
* 应该包含参数说明，返回结果说明以及用途
### 成员变量注释
* bean类中的属性，统一用/*****/的java方式
* 其他类中普通变量，统一用行注释//
* 其他类中的静态变量，统一用/*****/的java方式

## 代码行长度限制
* android studio自带的那根竖线为界（大约100个字符的长度），不要超过它
* 例外：import行可以超过限制，因为很少有人会去阅读它
* 例外：如果注释行的命令示例或者URL文字，为了便于剪切和复制，其长度可以超过100个字符。

## Java Annotation的风格
*  Annotation应该位于Java语言元素的其它修饰符之前。 简单的marker annotation（@Override等）可以和语言元素放在同一行。 如果存在多个annotation，或者annotation是参数化的，则应按字母顺序各占一行来列出。
*  @Deprecated：只要某个语言元素已不再建议使用了，就必须使用@Deprecated annotation。如果使用了@Deprecated annotation，则必须同时进行@deprecated Javadoc标记，并且给出一个替代的实现方式。此外请记住，被@Deprecated的方法仍然是能正常执行的。
*  @Override:只要某个方法覆盖了已过时的或继承自超类的方法，就必须使用@Override annotation。
*  @SuppressWarnings：@SuppressWarnings annotation仅用于无法消除编译警告的场合。 如果警告确实经过测试“不可能消除”，则必须使用@SuppressWarnings annotation，以确保所有的警告都能真实反映代码中的问题。当需要使用@SuppressWarnings annotation时，必须在前面加上TODO注释行，用于解释“不可能消除”警告的条件。

## 缩写约定
* infomation - info
* image - img
* length - len
* message - msg
* password - pwd
* background - bg
* button - btn
* textview - tv
* edittext - et
* imageview - iv
* imagebutton - imgBtn
* listview - lv
* checkbox - chk

## 布局文件命名风格
* 全部小写，采用下划线命名法
### activity layout
* activity开头，下划线，业务界面名或者描述，比如：activity_home.xml
### fragment layout
* fragment开头，下划线，业务界面名或者描述，比如：fragment_home.xml
### dialog layout
* dialog开头，下划线，业务名或者描述，比如：dialog_evaluation.xml（评价对话框）
### adapter layout
* adapter开头，下划线，业务名或者描述，比如：adapter_main.xml
### 列表项listitem
* listitem开头，下划线，业务名或者描述，比如：listitem_city.xml
### 资源文件命名规则
* 文件后缀	状态
* \_normal	(default_state)
* \_pressed	state\_pressed
* \_focused	state\_focused
* \_disabled	state\_enabled(false)
* \_checked	state\_checked
* \_selected	state\_selected
* \_hovered	state\_hovered
* \_checkable	state\_checkable
* \_activated	state\_acticated
* \_windowfocused	state\_window\_focused


## 平时代码中需要注意的风格
### if使用风格
* 无论是多行还是一行代码，if内的语句必须用大括号，杜绝潜在出bug的可能

### 字符串使用风格
* 对字符串使用_+_操作符时，会在后台以默认大小（16个字符）缓冲区创建一个StringBuilder对象，并且可能还会创建一些其它的临时String对象。换句话说，显式创建StringBuilders对象的代价并不会比用'+'操作符更高（事实上效率还将会提高很多）。还要记住，即使不会再去读取这些日志，调用Log.v()的代码也将编译进发行版中并获得执行，包括创建字符串的代码。
* 建议使用String.format()这个函数来进行字符串的拼接

### 异常处理
* 不要在catch异常的代码块留空，常规做法：
 - log记录，并返回一个默认值
 - log记录，并抛出一个新的异常
 - log记录，并忽略该异常，但是必须把原因注释出来
* 不要捕获顶级的Exception（极少数情况例外），比捕获顶级Exception更好的方案
 - 分开捕获每一种异常，在一条try语句后面跟随多个catch 语句块。这样可能会有点别扭，但总比捕获所有Exception要好些。请小心别在catch语句块中重复执行大量的代码。
 - 重新组织一下代码，使用多个try块，使错误处理的粒度更细一些，根据各自的情况进行单独的错误处理。
 - 再次抛出异常。很多时候在你这个级别根本就没必要捕获这个异常，只要让方法抛出该异常即可。

### 使用TODO注释
*  对那些临时性的、短期的、够棒但不完美的代码，请使用TODO注释。
*  如果TODO注释是“将来要做某事”的格式，则请确保包含一个很明确的日期（“在2015年11月会修正”），或是一个很明确的事件（“在所有代码整合人员理解了V7协议之后删除本段代码”）。


## 建议的代码布局顺序（一个activity或者fragement），普通类去除生命周期函数就行
* 常量
* 静态变量
* 局部变量
* 生命周期函数
* 需要继承或者实现的方法和接口
* 自定义的函数
* 自定义接口或者内部类