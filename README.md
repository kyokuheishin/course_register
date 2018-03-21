# course_register

## 这是什么？

一个给APU学生使用的**在选课期间自动检查**想选的**一门课**是否有空位的程序。如果有空位将会自动选择并提交。目前仅支持在Windows上使用。
## 使用说明(Windows)

## 依赖

+ Chrome浏览器
+ Java运行环境 可在 https://www.java.com/zh_CN/download/ 找到 并确保Java可执行文件所在文件夹的路径已经被加入环境变量的系统变量的PATH中，具体加入方法请自行搜索。
+ Selenium Standalone Server 可在 https://www.seleniumhq.org/download/ 找到 下载链接是"Download version"右侧的版本号。
+ Chrome driver  https://sites.google.com/a/chromium.org/chromedriver/downloads 找到下载链接是 Latest Release:右侧的链接。并确保其可执行文件所在的文件夹的路径已经被加入环境变量的系统变量的PATH中，具体加入方法请自行搜索。
+ 

## 下载

进入 https://github.com/kyokuheishin/course_register/releases/ 点击 APU_course_register-win32-ia32.zip

## 使用
1. 进入下载的Selenium Standalone Server的Jar文件所在的文件夹，按住shift并右击空白处，选择“在此处打开Powershell窗口”或“在此处打开命令提示符”。之后在打开的窗口输入下述代码并等待其下载文件完毕。
```
java -jar <Selenium Standalone Server的Jar文件文件名（输入selenium后按tab键补全并回车。）>
```
2. 解压下载的APU_course_register-win32-ia32.zip压缩文件，进入目录中找到APU_course_register.exe双击运行。

3. 按照提示输入
    + 用户名
    + 密码
    +  周几
    +  几限
    +  第几Q（整个Semester的课输入1和2皆可）
    +  课程代码（可在课程时间表中找到）
    
    并按Login按钮登录即可。

## 注意事项
+ 本程序不涉及向外部服务器发送用户名与密码。**但不保证他人的修改版本亦不向外部服务器发送用户名与密码。** 如实在不放心可在使用后修改自己的密码。
+ 仅供测试使用，本人不对选不到课负任何责任。
