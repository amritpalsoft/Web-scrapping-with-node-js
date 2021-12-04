const request=require("request");
const chalk=require('chalk')
const url="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/india-vs-pakistan-16th-match-group-2-1273727/ball-by-ball-commentary"

const cheerio=require("cheerio");


request(url, function (error, response, html) {
  if (error) {
      console.log('error occured ');
  }
  else{
      extractHTML(html)
  }
});

function extractHTML(html){
    $=cheerio.load(html);
    let elemArr=$(".match-comment-long-text.match-comment-padder")
    let text=$(elemArr[0]).text();
    let htmlData=$(elemArr[0]).html();

    console.log(chalk.green("text data",text));
    console.log(chalk.yellowBright("body data",htmlData));
}