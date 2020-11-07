# peloton-statistics

A CLI to retrieve statistics related to your Peloton account

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/peloton-statistics.svg)](https://npmjs.org/package/peloton-statistics)
[![Codecov](https://codecov.io/gh/stephencweiss/peloton-statistics/branch/master/graph/badge.svg)](https://codecov.io/gh/stephencweiss/peloton-statistics)
[![Downloads/week](https://img.shields.io/npm/dw/peloton-statistics.svg)](https://npmjs.org/package/peloton-statistics)
[![License](https://img.shields.io/npm/l/peloton-statistics.svg)](https://github.com/stephencweiss/peloton-statistics/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g peloton-statistics
$ pelo-stats COMMAND
running command...
$ pelo-stats (-v|--version|version)
pelo-stats/0.0.0 darwin-x64 node-v12.19.0
$ pelo-stats --help [COMMAND]
USAGE
  $ pelo-stats COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`peloton-statistics hello [FILE]`](#peloton-statistics-hello-file)
- [`peloton-statistics help [COMMAND]`](#peloton-statistics-help-command)

## `peloton-statistics hello [FILE]`

describe the command here

```
USAGE
  $ pelo-stats hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ peloton-statistics hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/stephencweiss/peloton-statistics/blob/v0.0.0/src/commands/hello.ts)_

## `peloton-statistics help [COMMAND]`

display help for peloton-statistics

```
USAGE
  $ peloton-statistics help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

<!-- commandsstop -->
