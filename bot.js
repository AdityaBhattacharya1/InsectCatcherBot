const puppeteer = require('puppeteer')

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

;(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    // Website link
    await page.goto('http://localhost:5500')
    await page.click('#start-btn')
    await page.click(
        `.insects-list > li:nth-child(${getRandomNumberBetween(1, 4)})`
    )
    while (true) {
        await (await page.waitForSelector('.insect')).evaluate((e) => e.click())
    }
})()
