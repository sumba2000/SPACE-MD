require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFSiLVvwbzvVxQQAAFcIAAAKAAAAY3JlZHMuanNvbpVUW3OySBD9L*Oq+QS5alWqFlER74qAurUPIwwwcnVmQEnK*75FTDZ52C+b5Wlqpvv04fTpfgVZjimaoRr0X0FBcAUZao6sLhDog0EZBIiANvAhg6AP4Fwh7vjm7ORBSMltkFsvlxOPxl5G91Ld6U21VPDNSt67i2dwb4OiPCXY+wbQvaaBpN+WvO9P+ZshKezsci+jwpjzbjQbBGXvZcvrqGYT8RncG0SICc7CURGhFBGYzFC9hpj8kP56XeB6FcrrfEZTGZ+VYZSIsT5fo9Wh5by4rJpNO6rEhPxn9MlQVhewRnvHnHa889k8VOXcdrQ6kLprXzksVtmuI8SLQUwf9CkOM+SbPsoYZvWPdcejK1ZstGx5qHC9MpcMYTxe7Kb5cLERp*RkkLCwOJcJzuZnxDn6wjjL4F5kfDhbZ63asHi7r4jO*Lk6u9xa7mWnGYI5y+yvxNfkwyvx*9H9MF6lNA5NQZiZy3AxamV8vtNsu4XH4kp2Q4MtxhH1szT7oW1Ca7vJdiduOz3S3nUkj9PTPucFOuJ0XlTrNUpS0*LlkWKIn*QhK8l3LAXBctWMzy3LJrZzuwoSN3O4VuGv5HGiIYvEnBWkx2p4gdtDi5sF3pntt9nR3qslZ9ObV9siUoTEu0qccjM6VZTbg83z2x*FqDZ90OfvbUBQiCkjkOE8a+6kbhtAv7KQRxB7UxdAEk28jpm40+703ArodXRRdMdh7qywonInesli7B4r73gyn0EbFCT3EKXIn2DKclIvEKUwRBT0**yrDTJ0Y4++NdUEvg0CTCizs7JIcuh*NPXjEXpeXmbMqjNPbw6IgD73eY0Yw1lIGxnLDBIvwhXSI8go6AcwoejeBj6qsIcaPIDjLIGTZbaZo3gBtTnktpdT2FCO8uwRoqhdXpaC05OnKOKTyIvSU48T4FOvq6qewAmnrsqBNsDvI9Pk*N7VpEyzjr9bBDoqtWhjlZVVyNuN48ZvXXhIjwjy39m2wQl6cVns8hhl3wDvvLzScr8+mCXteP7BcljNb237Ngu*AD96Cvqv93*0ajB9xCBOKOgD3UxtQeKMkTk7J+rBMAZeqOmhBj71*fDpwwhhdYH67pwd7d5El415QW44Hety1+avh*g63ApW6bWw2EnU538BAX1gz4*LrZQaFdzJqwpaqLSGW2emDehSXvNk0lncHMqtYZhY2h6L842ul3PWdaJV5ItBjPZnSZXIXuPIFZ99RY9IzQ0bU3*0+WuxfAUnYy3eBWtmTZcpDq75ZTlcuTwufHjcby7xCM6vxoJ550GEZ3VvxbxIFzjI9r2WelFrZVp2NrOr00FTW5skphHbmvaYoPRtdHFjma4k8hzPcYqkCH1B*IP+ujYOhEXxK0MMtEEGm2iQ1pRhD7RB8pbGSz1VlThJlnpql1OazObhYzsk71sZvw3O67vjAozeltw75H+W*jQ*d29*wXhfm7*x1+Awl9MwFqWus95eywjLUD0U0aZkydIzpguN8zmSrfNyLQXgfv+rDYoEsiAnKegDmp4gaAOSl81omlmQf1NJ10xz+L6UEkiZ9jnuO5wiymBagD6vSIrSExVOeEStSV5MII1AH6zdWBqANkhrrSgsBtnH8gBa8xkFBve*AVBLAQIUAxQAAAgIAFSiLVvwbzvVxQQAAFcIAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAO0EAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254114140048',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'sumba2000',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
