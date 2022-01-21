[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.froxlor.org)

# Documentation

Here you can find the source code of the documentation. The current version can be viewed at [https://docs.froxlor.org/](https://docs.froxlor.org/)

## Install a local copy of the documentation

Install Jekyll as described in the documentation https://jekyllrb.com/docs/installation/#requirements

Check your Jekyll version:

```
jekyll -v
```

Get a local copy and start editing / view the documentation:

```
git clone https://github.com/Froxlor/Documentation.git
cd Documentation
bundle install
```

Start the debug server :

```
bundle exec jekyll serve --host localhost
```

Now browse to http://localhost:4000

## Generating api documentation from froxlor

```
php .generator/generate.php <version>
```