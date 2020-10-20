// smzdm.js
const { default: Axios } = require('axios')

let url = 'https://zhiyou.smzdm.com/user/checkin/jsonp_checkin'
let cookie =
  '__ckguid=NcR4hoRTJKeaYV3Ke1Erci; __jsluid_s=085eb563cc800a6bf26a5949914f80f3; device_id=23469661121596181572146631fdf59723e3cf883da70342a40fec0b70; homepage_sug=i; r_sort_type=score; sess=ZGY0MTF8MTYwODI5Mzg3OHw4MzUzNDUzMTI0fGM0ZWMwNWQyMjZlMWNlNjIwOGM3MmE5ZjNhYjE5YzUy; user=user%3A8353453124%7C8353453124; smzdm_id=8353453124; _zdmA.uid=ZDMA.QLdsZCqx8.' +
  new Date().getTime() +
  '.2419200'
Axios.get(url, {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
    Cookie: cookie
  }
})
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })
