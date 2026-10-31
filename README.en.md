**English** | [简体中文](README.md)

# FreeSql Docs

- [https://freesql.net](https://freesql.net)
- [Download: freesql.net.dist.zip](https://github.com/2881099/FreeSql.Wiki.VuePress/files/11719032/freesql.net.dist.zip)

## install

```bash
npm config set registry https://registry.npmmirror.com
npm install -g pnpm
```

```bash
pnpm install
```

## run

```bash
pnpm docs:dev
```

## build

```bash
pnpm docs:build
```

## Docker Run

```bash
docker pull igeekfan/freesql-doc:latest
docker run --name freesql-doc -d -p 8081:80 igeekfan/freesql-doc:latest
```

The documentation is then available at [http://localhost:8081](http://localhost:8081).

## Docker Build

```bash
docker stop freesql-doc
docker rm freesql-doc
docker rmi igeekfan/freesql-doc
docker build -t igeekfan/freesql-doc .
docker tag igeekfan/freesql-doc igeekfan/freesql-doc:latest
docker login
## Push to Docker Hub
docker push igeekfan/freesql-doc:latest
## Run the local image
docker run --name freesql-doc -d -p 8081:80 igeekfan/freesql-doc:latest
```

## vuepress-next

- <https://vuepress.vuejs.org/zh/guide/>

## vuepress-theme-hope

- <https://theme-hope.vuejs.press/zh/>

## Source

- GitHub [https://github.com/dotnetcore/FreeSql](https://github.com/dotnetcore/FreeSql)
- Gitee [https://gitee.com/FreeSql/FreeSql-ORM](https://gitee.com/FreeSql/FreeSql-ORM)

## Official documentation

- [https://freesql.net](https://freesql.net)
- [https://github.com/dotnetcore/FreeSql/wiki](https://github.com/dotnetcore/FreeSql/wiki)
- [API reference (China mirror)](http://124.221.134.143:8082/api/index.html)
- [API reference](https://dotnetcore.github.io/FreeSql/index.html)
