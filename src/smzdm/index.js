const puppeteer = require('puppeteer')
let cookie = [
  {
    domain: '.smzdm.com',
    expirationDate: 1633833380.533026,
    hostOnly: false,
    httpOnly: true,
    name: '__ckguid',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: 'LSk3HrfrxlWujA3Vui34kA3',
    id: 1
  },
  {
    domain: '.smzdm.com',
    expirationDate: 1605602334,
    hostOnly: false,
    httpOnly: false,
    name: '_zdmA.uid',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: 'ZDMA.T9jYJoGh3.1603183134.2419200',
    id: 2
  },
  {
    domain: '.smzdm.com',
    expirationDate: 1917657386.478284,
    hostOnly: false,
    httpOnly: false,
    name: 'device_id',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: '188326015916022973860094742c36d756d6678ab01ec53d155e85d721',
    id: 3
  },
  {
    domain: '.smzdm.com',
    expirationDate: 1918543133.758164,
    hostOnly: false,
    httpOnly: false,
    name: 'homepage_sug',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: 'h',
    id: 4
  },
  {
    domain: '.smzdm.com',
    expirationDate: 1918543133.758237,
    hostOnly: false,
    httpOnly: false,
    name: 'r_sort_type',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: 'score',
    id: 5
  },
  {
    domain: '.smzdm.com',
    expirationDate: 7909498233,
    hostOnly: false,
    httpOnly: false,
    name: 'sensorsdata2015jssdkcross',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value:
      '%7B%22distinct_id%22%3A%22175106ac110d66-06d3ad8cb09aa8-193a6152-1296000-175106ac1115cd%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.dogedoge.com%2F%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fpost.smzdm.com%2Fp%2Faz5ekeqo%2F%22%7D%2C%22%24device_id%22%3A%22175106ac110d66-06d3ad8cb09aa8-193a6152-1296000-175106ac1115cd%22%7D',
    id: 6
  },
  {
    domain: '.smzdm.com',
    expirationDate: 1608367081.945106,
    hostOnly: false,
    httpOnly: true,
    name: 'sess',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value:
      'ZGY0MTF8MTYwODM2NzA4MXw4MzUzNDUzMTI0fDY0YTQ1Y2Y4OTc2Njk2ZDc2MTA4Mjg1NTY4MTExZDUz',
    id: 7
  },
  {
    domain: '.smzdm.com',
    expirationDate: 1918543082.354904,
    hostOnly: false,
    httpOnly: false,
    name: 'smzdm_id',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: '8353453124',
    id: 8
  },
  {
    domain: '.smzdm.com',
    expirationDate: 1666234539,
    hostOnly: false,
    httpOnly: false,
    name: 'smzdm_user_source',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: '633948DB7E183ECB430697AAA7DC3C30',
    id: 9
  },
  {
    domain: '.smzdm.com',
    expirationDate: 1608367081.945169,
    hostOnly: false,
    httpOnly: false,
    name: 'user',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: 'user%3A8353453124%7C8353453124',
    id: 10
  },
  {
    domain: '.www.smzdm.com',
    expirationDate: 1603185792,
    hostOnly: false,
    httpOnly: false,
    name: '_zdmA.time',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: '1603183373448.0.https%3A%2F%2Fwww.smzdm.com%2F',
    id: 11
  },
  {
    domain: '.www.smzdm.com',
    expirationDate: 1603184934,
    hostOnly: false,
    httpOnly: false,
    name: '_zdmA.vid',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: '*',
    id: 12
  },
  {
    domain: '.www.smzdm.com',
    expirationDate: 1603787277,
    hostOnly: false,
    httpOnly: false,
    name: 'ad_date',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: '20',
    id: 13
  },
  {
    domain: '.www.smzdm.com',
    expirationDate: 1603787934,
    hostOnly: false,
    httpOnly: false,
    name: 'ad_json_feed',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: '%7B%7D',
    id: 14
  },
  {
    domain: '.www.smzdm.com',
    expirationDate: 1603787934,
    hostOnly: false,
    httpOnly: false,
    name: 'bannerCounter',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value:
      '%5B%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A4%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A4%7D%5D',
    id: 15
  },
  {
    domain: '.www.smzdm.com',
    expirationDate: 1603787934,
    hostOnly: false,
    httpOnly: false,
    name: 'footer_floating_layer',
    path: '/',
    sameSite: 'unspecified',
    secure: false,
    session: false,
    storeId: '0',
    value: '0',
    id: 16
  },
  {
    domain: 'www.smzdm.com',
    expirationDate: 1633833388.230331,
    hostOnly: true,
    httpOnly: true,
    name: '__jsluid_s',
    path: '/',
    sameSite: 'unspecified',
    secure: true,
    session: false,
    storeId: '0',
    value: 'd1fac47e7395622f993131322cdef629',
    id: 17
  }
]
async function smzdm() {
  // 启动puppeteer
  const browser = await puppeteer.launch()
  // 新建一个页面
  const page = await browser.newPage()
  await page.setCookie(...cookie)
  // await page.once('load', () => console.log('Page loaded!'))
  // 跳转至Url
  await page.goto('https://www.smzdm.com/')
  await page.waitForSelector('.J_punch')
  await page
    .tap('.J_punch')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  // const btn = await page.$eval('.J_punch', (e) => e.innerHTML)
  // console.log(btn)
  console.log('签到成功')

  await browser.close()
}
smzdm()
