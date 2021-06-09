<h1 align="center">Insect Catcher Bot</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-green.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
</p>
<hr />

> Want to catch insects virtually? Want to be great at it? This bot will do the job for you.

## Clone and Install

```sh
git clone https://github.com/AdityaBhattacharya1/InsectCatcherBot.git

npm install
```

## ⚠ Warning for Usage

This bot involves an infinite loop (commented out by default. Do **not** uncomment the infinite loop unless you know what you are doing) and after some time, your browser will inevitably begin to slow down causing your system (depends on the type of browser and the system resources available) to start lagging.

Use the bot at your own responsibility. The creator of the bot will not be responsible for any physical damage that may be incurred to your system while using this bot.

## Usage

For hosting the bot, you have 3 options:

-   use the [Serve](https://www.npmjs.com/package/serve) npm package
```sh
# Using npx, temporarily install serve in the project directory
  npx serve
```

-   run it locally on your own server (for example, using the [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension of VSCode). Make sure that you change the `goto` link in `bot.js`
-   Open the `index.html` file in your browser of choice and then in `bot.js` edit the `goto` link to the link of the file (eg: `file:///.../insectCatcherTest/index.html`)

```sh
node ./bot.js
```

## Author

👤 **Aditya Bhattacharya**

-   Github: [@AdityaBhattacharya1](https://github.com/AdityaBhattacharya1)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AdityaBhattacharya1/InsectCatcherBot/issues).

## Show your support

Give a ⭐️ if you like useless automation like this
