/*first we have to npm init
then download request module by 'npm i request'
then copy code from 'npm request' site 

actually this is a web scrapping i.e. when we write www.google.com
on the browser, it makes a request from server and server sends in response
a html page, which our browser shows us 

but if we want to make request from node.js we have to use 'request module' */ 
const fs=require('fs')
const request = require('request');

//this statement will create a new file named as doodle.html
//by scrapping worldometers site
request('http://www.worldometers.info/coronavirus').pipe(fs.createWriteStream('doodle.html'))


request('http://www.worldometers.info/coronavirus', ( (error, response, body)=> {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:',  response.statusCode); // Print the response status code if a response was received
  // console.log('response:',  response); // Print the response if a response was received
  // console.log('body',body); // Print the HTML for the Worldometer homepage.
})
)