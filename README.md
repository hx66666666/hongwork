#      《通信软件开发与应用》课程结业报告

本人做的是一个基于前后端交互的一个图书管理系统，前端的页面方面我使用的是Vue2框架进行搭建，配合使用前端热门组件Element-ui来进行一定的样式美化，并配合node环境下的Egg.js框架搭建一个简单的后台，同时使用axios来实现前后台的数据交互，然后通过后台调用MYSQL数据库，实现简单的增删改查功能。本系统拥有两种不同的用户，一种是普通的用户，可以注册使用该系统的查看书籍、借阅书籍、归还书籍、修改密码等，还有一种是管理人员，可以导入书籍、增加用户、修改用户、查看借阅书籍的信息等。



## 1、登录注册

首先进入本系统可以看到的是一个登录页面，唯一ID是标识用户的，当登录时，唯一ID不存在会直接提示用户不存在，这样一步直接通过axios向后台发起post请求，将登录人员数据在后台调用数据库进行循环比对，然后在.then()里面进行页面跳转，由于后台这里我们没有设置jwt验证，所有前端发送的请求都是不带token的，登录和注册安全存在问题安全存在问题。同时为了调用数据库，我们还要做一个数据的映射模型。

![image](https://user-images.githubusercontent.com/99119365/178127218-12f86c80-d494-4fb4-9732-f95a62a09d72.png)

![image](https://user-images.githubusercontent.com/99119365/178127221-13fe22f7-9315-4b5e-84f8-eb68ba28c6d8.png)

![image](https://user-images.githubusercontent.com/99119365/178127234-a6fd3e8b-4d9d-43dc-9bff-6077db198b99.png)

![image](https://user-images.githubusercontent.com/99119365/178127241-0a1cde7f-7e9d-439a-9990-8764f71e1468.png)



普通用户不存在时，可以注册成为该系统的普通用户。

![image](https://user-images.githubusercontent.com/99119365/178127249-8ac366e5-1649-4621-a29f-bf54cf28dd8a.png)

![image](https://user-images.githubusercontent.com/99119365/178127256-bbff7a36-4f12-4ac9-b6d3-594373daf8de.png)



## 2、普通用户

然后我们就可以登录该系统进行使用了，进来之后就可以看到图书馆的首页，这是一个轮播图，然后头部导航条，导航条的内容我写在个人的页面中，然后，首页轮播图、图书查询、个人中心这些功能页面我都是写在组件上面的，父组件要使用子组件就需要先注册组件，并且前端的页面跳转还需要设置前端路由，但是这里我没有设置路由守卫，所有直接通过不同页面的链接就可以直接访问。

![image](https://user-images.githubusercontent.com/99119365/178127262-fc18db65-f271-4127-9520-2c42ed664467.png)

![image](https://user-images.githubusercontent.com/99119365/178127267-c986fb09-7082-4424-894b-eb503cdc05a3.png)



图书查询功能，我们可以实现按照不同类别进行查询，如图书的名字、作者、类别等，这一步我直接调用书籍表中的书籍，进行循环遍历即可。

![image](https://user-images.githubusercontent.com/99119365/178127270-cf403bb7-6db2-432e-8dc4-59a0d093254b.png)

![image](https://user-images.githubusercontent.com/99119365/178127275-7335fdb5-a928-4975-87ce-e4e46d42e93f.png)


本系统还可以进行图书的订阅和退订，当已经订阅时会显示以订阅，为订阅时会显示为订阅。这一步就是我将订阅的书籍存入另外一个表中，然后修改原书籍表中书籍状态，同样，退订的时候，将退订书籍从订阅表中删除，同时修改原书籍表中的书籍状态。

![image](https://user-images.githubusercontent.com/99119365/178127280-2457e0a1-11a2-42d4-9309-011b5a729d4f.png)

![image](https://user-images.githubusercontent.com/99119365/178127286-f1c18db0-9c26-4485-b90f-e0b698d85bca.png)



个人中心这里可以看到我的登录人员信息，这里我使用了本地存储，在登录的时候将用户名和ID进行本地存储，但是我认为这样做是不合理的，因为，本地存储不安全，同时，如我在同一台浏览器上进行第二个用户的登录，就会覆盖掉我前面一个人员的信息。

![image](https://user-images.githubusercontent.com/99119365/178127303-b1fd3a46-61fe-4649-8524-004741058792.png)

![image](https://user-images.githubusercontent.com/99119365/178127312-b9975888-d0d9-4870-a264-2c8b75185be9.png)

![image](https://user-images.githubusercontent.com/99119365/178127317-7d3baa20-858d-48bc-b263-29678bb190a5.png)



退出界面直接就退出到登录页面，这里我在退出时设置了清空本地存储。

![image](https://user-images.githubusercontent.com/99119365/178127323-f687ba6a-60a2-4c26-a4c7-9cb1458e26e3.png)





## 3、系统管理员

本系统用于系统管理员，系统管理员登录也是如上的登录页面，然后我们进入到主页，我们可以看到本系统有用图书管理，借阅书籍查询，人员管理等。

![image](https://user-images.githubusercontent.com/99119365/178127328-58398adf-b174-47bb-8dcb-e753529f2b15.png)



这里我们可以增加书籍，包括书籍的名称、书籍的位置、书籍的作者、借阅状态。

![image](https://user-images.githubusercontent.com/99119365/178127333-c2bd4029-6363-43cb-888f-9a6a86782a67.png)

![image](https://user-images.githubusercontent.com/99119365/178127336-21161a46-393e-4743-a788-a24a750ff63b.png)

![image](https://user-images.githubusercontent.com/99119365/178127339-a31307cd-0f67-428f-890a-9c217a9dd066.png)



以借阅的图书我可以看到借阅者的ID，以及图书的详情等。

![image](https://user-images.githubusercontent.com/99119365/178127342-d40dd52e-64af-47ad-8ab9-ba9212d4c8b6.png)



人员管理中心这里可以新增加用户，也可以增加管理员，当然也可以实现对用户的删除

![image](https://user-images.githubusercontent.com/99119365/178127346-2439b144-8b27-4d5d-8099-588b0f47500a.png)

![image](https://user-images.githubusercontent.com/99119365/178127349-844519ac-7cf8-4de8-adc4-900e2312c0ba.png)

![image](https://user-images.githubusercontent.com/99119365/178127352-1b19892d-e80a-4651-aab9-981365e7d9fb.png)



# 4、总结

本次是我第一次编写前后端结合的项目，在本次开发中，我遇到了许多的问题，比如，我并不太熟悉后台开发，我的后台开发是在网上学的一个速成的教学，所有我遇到了许多的问题，比如说，后台调用数据库，然后要写一个数据映射模型，那一步我跟着Egg.js的官方教程走，但是我感觉那个教程有点省略，大量JSON数据导入数据库时，那个实例代码写得比较模糊，最后还是试探出来的，然后就是前后端的交互，第一个接触后端，对应许多接口的写法还不是很熟悉。前端方面，我Vue也算是初学，我看了Vue那个的官方文档，按照那个教程来，Element-ui方面，我也是仅仅会简单复制官方文档提供的组件，虽然本项目比较简陋，而且BUG也比较多，但终究是我第一次写，我相信通过不断地学习，我也能够更加深入了解这些技术。



# 注：
前端：vue2
后端：Egg.js

运行：
进入前端demo文件，先 npm install 下载包，然后 npm  run serve
进入后端server文件，先 npm install 下载包，然后 npm  run dev

数据库：mysql
库：mylib
具体可以在：server\config\config.default.js文件夹下查看
dialect: 'mysql',
database: 'mylib',
host: 'localhost',
port: 3306,
username: 'root',
password: '123456',
timezone: '+08:00',

