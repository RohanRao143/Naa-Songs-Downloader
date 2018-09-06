var request = require('request');
var url = require('url');
var sys = require('sys')
var exec = require('child_process').exec;

var cheerio = require('cheerio');

var targetUrl = url.parse('https://naasongs.com/vishwaroopam-2-telugu.html');


// console.log(targetUrl);
request(targetUrl.href, function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
        //   console.log(html);
          $('.entry-content', '#primary').find('p').each(function(){
            if($(this).find('a').length>0){
              exec('mkdir '+targetUrl.pathname.split('-')[0].replace('/', ''), function(err, stdout, stderr){
                if(err){
                  console.log(err);
                }
              })
            }
              $(this).find('a').each(function(){
                  console.log($(this).attr('href'));
                  // var cmd = exec("mkdir )
                  exec('cd '+targetUrl.pathname.split('-')[0].replace('/', '')+ ' && wget '+"'" +$(this).attr('href')+ "'" );
              })
          })
      }
});

const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string&q=s#hash');

// console.log(myURL);

dir = exec("ls -la", function(err, stdout, stderr) {
    if (err) {
      // should have err.code here?  
    }
    // console.log(stdout);
  });

  exec("mkdir ../example && cd ../example && mkdir cango",  function(err, stdout, stderr) {
    if (err) {
      // should have err.code here?  
    }
    // console.log(stdout);
    exec("ls -la", function(err, stdout, stderr) {
        if (err) {
          // should have err.code here?  
        }
        // console.log(stdout);
      });
  });

  dir.on('exit', function (code) {
    // exit code is code
  });