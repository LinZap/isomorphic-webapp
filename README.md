# Isomorphic Webapp

使用 Node.js 前端後端一次搞定！您可以基於這個基本包撰寫自己的 Webapp，不需要再煩惱開發複雜的開發環境！

## Composition
* Node.js (v7.2.0)
* Express
* Webpack
* Babel
* React
* Redux
* ReactRouter
* ReduxSaga

## Installation

basic
```
git clone https://github.com/LinZap/isomorphic-webapp.git
cd isomorphic-webapp
npm install
```

install [nodemon](https://github.com/remy/nodemon)
```
npm install -g nodemon
```

## Launch
dev mode
```
npm start
```
  
production
```
webpack
npm run server
```
>> 可以將 `config.json` 中的 `DEBUG` 改為 `false`


## Config
`config.json` 說明
* `PORT`: express running on this port
* `DEBUG`: dev or production mode
* `API`: api path

## More Documentation
comming soon

## License
Copyright 2016 Zap [MIT](http://www.opensource.org/licenses/mit-license.php)