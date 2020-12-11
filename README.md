## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install dial-pad@latest --save
```

## Angular json

"styles": [

    "node_modules/dial-pad/dist/dial-pad.css",

    "src/styles.scss"

    ],

"scripts": [

    "node_modules/dial-pad/dist/dial-pad.js",

],


## Browser

```html
  
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../lib/dial-pad.css">
        <script src="../lib/dial-pad.js"></script>
        <script src="./main.js"></script>
        <title>Document</title>
    </head>
    <body>
        <button id="dial-pad-picker">Open Dial</button>
    </body>
    </html>

```

In your javascript file

```javascript
    main.emitter({
        eventValue: (value) => {
        console.log(value);
        }
    });

```
    