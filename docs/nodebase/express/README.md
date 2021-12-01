# express基本使用
**官网:https://www.expressjs.com.cn/**
基本使用:

```javascript
const express = require('express');
// app实际上是一个函数,用于处理请求
// express内部使用了http模块
const app = express();

app.get('/news/:id', (req, res) => {
    // 请求
    //req和res是被express封装过的
    console.log(req.headers);//请求头
    console.log(req.query);//请求参数 
    console.log('params', req.params);//{id:xxx}

    //响应
    // res.setHeader('a', '123')
    // res.send({
    //     name: 'xxx',
    //     id: 123,
    //     age: 18

    // })
    //302临时重定向
    // res.status(302).header('location', "https://www.baidu.com").end();
    // res.status(302).location("https://www.baidu.com").end();
    // res.redirect(302, 'https://www.baidu.com');
    res.send('123234')
})

app.listen(port, () => {
    console.log(`listen ${port}`);
})
```
