[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.froxlor.org)

# Documentation

Here you can find the source code of the documentation. The current version can be viewed
at [https://docs.froxlor.org/](https://docs.froxlor.org/)

## Install a local copy of the documentation

Get a local copy and start editing / view the documentation:

```shell
git clone https://github.com/Froxlor/Documentation.git
cd Documentation
npm install
```

Start the debug server :

```shell
npm run docs:dev
```

Now browse to http://localhost:5173/

## Generating api documentation from froxlor

```shell
php .generator/generate.php <?ref> <?version>
```