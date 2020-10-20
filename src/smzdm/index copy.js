const puppeteer = require('puppeteer')

let cookie =
  '__ckguid=NcR4hoRTJKeaYV3Ke1Erci; __jsluid_s=085eb563cc800a6bf26a5949914f80f3; device_id=23469661121596181572146631fdf59723e3cf883da70342a40fec0b70; homepage_sug=i; r_sort_type=score; sess=ZGY0MTF8MTYwODI5Mzg3OHw4MzUzNDUzMTI0fGM0ZWMwNWQyMjZlMWNlNjIwOGM3MmE5ZjNhYjE5YzUy; user=user%3A8353453124%7C8353453124; smzdm_id=8353453124; _zdmA.uid=ZDMA.QLdsZCqx8.' +
  new Date().getTime() +
  '.2419200'
async function smzdm() {
  // 启动puppeteer
  const browser = await puppeteer.launch()
  // 新建一个页面
  const page = await browser.newPage()
  await page.setCookie(cookie)
  // await page.once('load', () => console.log('Page loaded!'))
  // 跳转至Url
  await page.goto('https://www.smzdm.com/')
  const btn = await page.$eval('.J_punch', (e) => e.innerHTML)
  console.log(btn)

  await browser.close()
}
smzdm()
