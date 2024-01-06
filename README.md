# **Extype**

Extype is a command line tool that calculates the file type based on its extension.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![check-code](https://github.com/nelEcheverria01/extype/actions/workflows/test.yml/badge.svg)](https://github.com/nelEcheverria01/extype/actions/workflows/test.yml)

# motivation

while i was learning backend development, with node, i realized that there were many files that i had no idea what class they were, like workflow.yml etc...

So, i decided to create a simple command line tool that would help me solve this.

# installation

can you install extype with npm:

```bash
npm install -g extype 
```
# usage

when installing it globally, you can run it like this:

```bash
extype index.html
```
or run it with npx:

```bash
npx extype index.html
```
even in the package.json, it would look something like this:

```json
{
    "scripts": {
        "get-extension": "extype"
    }
}
```
in the terminal:

```bash
npm run get-extension ./index.html
```
# example

```bash
extype main.css

# output
result: main.css >> CSS
```

# behavior

```bash
# help flag is ignored
extype index.html --help
```
extype ignore all positional arguments, which are after the first argument.

```bash
extype index.html --some-opt

# output
error: unsupported option, try --help to see supported options
```
extype, returns an error, if it finds an incompatible flag/option, oh that it is not inside the --help command.

# license

made under MIT license
