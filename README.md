# view-app

view的空项目，用于创建项目使用，内部集成了自定义控件

* 这是一个在原生js基础上开发的针对iptv行业的交互框架
* 参考了android的Application和activity实现整个页面的交互及生命周期
* 使用webpack打包
* 区分开发模式及生产模式

### 环境及npm命令

* node环境
* 使用webpack打包

#### 初始化工程

```
    npm install
```

#### 本地调试运行
使用开发模式运行，可以在页面上看到打印，在F12看到源码
```
    npm run server
    或
    npm run dev
```

#### 生产环境运行
使用生产模式运行，取消在页面上的打印，在F12看不到源码
```
    npm run pro
```

#### 打包

* 测试环境使用
  
可以在页面上看到打印，没有.map映射文件
```
  npm run build-dev
```

* 生产环境使用

取消在页面上的打印，没有.map映射文件
```
  npm run build
  或
  npm run start
  或
  npm run build-pro
```

### 开发者须知

* 1.该框架的运行环境 node，使用webpack打包
* 2.当前版在适配中需要调整编译的es版本，在必要时需要舍弃某些写法，使用其他写法，故版本中的框架核心代码都是源码
* 3.开发者有任何疑问，可以留言
* 4.如果有建议，也可留言，
  * 邮箱：269570492@qq.com
  * csdn地址：https://blog.csdn.net/zz609816880
  * qq群：700871161（View答疑交流）
* 5.目前作者只有一人，在IPTV行业有者5年开发经验，熟悉各种盒子的适配
* 6.该框架之前有一个前置版本
  * 目前仍在线使用，但适配经验在本框架中适应，
  * 该前置版本在（2020-2021）2年时间里已落地50个左右的项目，分别在全国不同地区、不同运营商落地
  * github地址：https://github.com/kanchenai/View.git
  * 该版本具有极强的适配性及功能非常稳定，可以适配当前所有盒子
  * 该版本为多页面，不同的页面之间需要通过url跳转串联

