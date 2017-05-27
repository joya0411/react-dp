# fetch

## 参考文章：

* [https://github.com/github/fetch](https://github.com/github/fetch)

## GET

```
    var result = fetch('/api/1', {
            credentials: 'include', //跨域请求
            headers: { 'Accept': 'application/json, text/plain, */*'}
        });
```

## POST

```
var result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意 post 时候参数的形式
        body: "a=100&b=200" 
    });
```

```
    result.then(res=>{
        return res.json()
    }).then(json=>{
        this.state({
            data:json
        })
    })
```