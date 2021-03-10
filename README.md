# FETCHED-ALBUM

> jQuery 를 사용하지 않는다.

## http-server 사용하기

### VSCode 의 Live Server 플러그인 대신 http-server 라이브러리 활용해보기

```bash
$ npm init
$ npm install http-server
```

### package.json 수정하기

```diff
"scripts": {
+    "start": "http-server -p 3000"
-    "test": "echo \"Error: no test specified\" && exit 1"
},
```

### 실행

```bash
$ npm start
```


### 참고
- css flex: https://heropy.blog/2018/11/24/css-flexible-box/
- css grid: https://heropy.blog/2019/08/17/css-grid/
- css grid: https://studiomeal.com/archives/533