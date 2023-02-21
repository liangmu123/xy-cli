### 校园业务脚手架

#### 安装
```node
// 全局安装
npm i @shuping/xy-cli -g

// 本地安装
npm i @shuping/xy-cli -D
```

#### 一.多环境配置
> 默认读取当前目录下env文件夹中的配置文件.env,可自行增加文件.env.[文件名]，配置mode之后，会去读取对应文件的配置，并于.env文件进行合并，最后挂载到process.env['XY-ENV']上，默认不输出，可指定输出及输出文件。

<image src="./assets/env.png" />

##### 1.基本使用
> 普通运行
```node
xy-cli run env
```
> 指定配置环境
```node
xy-cli run env -m development
xy-cli run env --mode development
```
> 指定是否输出，输出默认地址为当前目录XY-ENV.js
```node
xy-cli run env -m development -o
xy-cli run env --mode development --output xy-env.js
```

##### 2.小程序中使用

<image src="./assets/weapp.png" />

##### 3.webpack中使用

```node
new webpack.DefinePlugin(process.env['XY-ENV'])
```