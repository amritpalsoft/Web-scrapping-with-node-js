const request = require('request');

const cheerio=require('cheerio')

const chalk=require('chalk')

request('http://www.worldometers.info/coronavirus', function (error, response, body) {
if (error) {
    
    console.error('error:', error); // Print the error if one occurred
}  else{

    handleBody(body);
}
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});


function handleBody(body){
    //cheerio is used to search page (also called parse)
    //in variable 'selectorTool all the content of body is loaded 
    let selectorTool=cheerio.load(body);
    
    //here we are capturing the id: #maincounter-wrap span in variable contentArray
    let contentArray=selectorTool('#maincounter-wrap span');
    let totalCases=selectorTool(contentArray[0]).text();
    let totalDeath=selectorTool(contentArray[1]).text();
    let totalRecovered=selectorTool(contentArray[2]).text();
    
    //we downloaded chalk from npm i chalk
    //chalk gives different color to lines
    console.log(chalk.yellow('Total Cases: ',totalCases));
    console.log(chalk.red('Total Death: ',totalDeath));
    console.log(chalk.green('Total Recovered: ',totalRecovered));
    // console.log(h1s.length);
}
