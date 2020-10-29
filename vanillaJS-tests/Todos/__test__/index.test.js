const {test,expect} = require('@jest/globals');
const puppeteer = require('puppeteer');

test("Adding todo e2e test.",async ()=>{
    let browser = await puppeteer.launch({
        headless:false,
        slowMo:80
    })
    let page = await browser.newPage();
    await page.goto("http://127.0.0.1:8000/Main/JavaScript/Web/Projects/JavaScript-Testing/vanillaJS-tests/Todos/");
    await page.click('#todoInput');
    await page.type('#todoInput',"This is todo 1");
    await page.click('#addTodoBtn')
    let text = await page.$eval('#todo1',el=>el.textContent)
    browser.close()
    expect(text).toBe('This is todo 1')
},10000)