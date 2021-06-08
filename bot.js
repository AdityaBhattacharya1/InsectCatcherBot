const puppeteer = require('puppeteer')

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

;(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    // Website link
    await page.goto('http://localhost:5000')
    await page.click('#start-btn')
    await page.click(
        `.insects-list > li:nth-child(${getRandomNumberBetween(1, 4)})`
    )
    // CAUTION: uncommenting the below code will start an infinite loop and if left running for long periods of time, can cause overheating in your system.
    // Use this at your own responsibility. The creator of the bot will not be responsible for any physical damage that may be incurred to your system while using this bot.
    // while (true) {
    //     await (await page.waitForSelector('.insect')).evaluate((e) => e.click())
    // }
    for (let i = 0; i < 1000; i++) {
        await (await page.waitForSelector('.insect')).evaluate((e) => e.click())
    }
    await browser.close()
})()
