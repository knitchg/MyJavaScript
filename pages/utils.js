module.exports = function (client){
    this.openBrowser = function (){
        client 
            .windowMaximize()
            .url('https://tourism1-uat.sites.silverstripe.com/')
            .waitForElementVisible('body',1000);
        return client
    };
    this.closeBrowser = function(){
        client
            .end();
    };
   return this; 
}