import * as cheerio from 'cheerio';

// const response = await fetch('https://books.toscrape.com/');
const response = await fetch('https://deshsanchar.com')
console.log("response: \n",response)

const html = await response.text();
console.log("html: \n", html)

const $ = cheerio.load(html);
console.log("$:\n", $)


const titles = $('article.product_pod h3 a')
  .map((_, el) => $(el).attr('title'))
  .get();

console.log("titles: \n",JSON.stringify(titles, null, 2));