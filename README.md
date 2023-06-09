# Safe Account Name

Simple package to prevent users from entering server-breaking strings as usernames.

```js
import { CheckName } from "safe-account-name";

checkName("cyber"); // package will throw error if user attempts banned word:
//throw Error("Sorry that name has been blocked by the server host");
//      ^
//Error: Sorry that name has been blocked by the server host

```
## Installation

[download and install Node.js](https://nodejs.org/en/download/).

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

```console
$ npm install safe-account-name
```
## Creator note
This is my first NPM package and am more than happy to hear feedback. If you know of more banned words or popular server hosts with the same issue or if you want to get in touch you can find me on linkedIn and through my github issues page, Thank you!

## People

The original author of safe-account-name is [Maxwell Alvord](https://github.com/maxwellalvord)

## License

  ISC License

Copyright 2023 Maxwell Alvord

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.