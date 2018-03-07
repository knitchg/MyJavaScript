var utils = require('../pages/utils');

module.exports = {
    '@tags': ['thumbnaillist', 'blocks', 'frontend'],
    
    before: function(client){
      utils(client).openBrowser();  // uses a basic URL but in test, url varies
    },
    'Thumbnail List block should display appropriately' : function (client) {
      client
        .url('https://tourism1-uat.sites.silverstripe.com/int/article/sprint-7/?stage=Live')
        .waitForElementVisible('body', 1000)
        .getTitle(function(title) {
            this.assert.equal(typeof title, 'string');
            this.assert.equal("Sprint 7 » TNZ [UAT]", title);
        })
        //Check title
        .assert.title('Sprint 7 » TNZ [UAT]')
        .assert.containsText('#ss-ThumbnailListBlock-418 > div > div:nth-child(1) > h2','Title of the thumbnail list')//Check if Thumbnail list title is visible
        //Check Description
        .assert.visible('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > h3') //Check Header 3
        .assert.containsText('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > h3','Suspension Bridge Header 3')//Check Header 3 content of one of the thumbnail list
        .assert.containsText('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > p:nth-child(3)','Suspension Bridge Description') //Check Description - Paragraph
        .assert.containsText('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > p:nth-child(4) > strong','Bold') //Check that the Description is Bold
        .assert.containsText('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > p:nth-child(5) > em','Italicized') //Check that the Description is Italicized
        .assert.containsText('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > ul > li:nth-child(1)','This is the first bullet') //Check the Description bullet form
        .assert.containsText('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > ol > li:nth-child(1)','First Number') //Check the Description Numbered List
        //Check Description | Links
        .assert.attributeEquals('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > p:nth-child(9) > a','data-tnzlinktype','internallink') //Check internal Link
        .assert.attributeEquals('#ss-ThumbnailListBlock-418 > div > div:nth-child(3) > div > div > p:nth-child(10) > a','data-tnzlinktype','externallink') //Check external Link
              //Check the link to a file displays the file
        .saveScreenshot('./screenshots/chromeThumbnailListIcon.jpg')  
        //Check Mobile View
        .resizeWindow(300, 600)
        .waitForElementVisible('#img-FIG-ss-Image-213',3000)
            //.assert.cssProperty('#img-FIG-ss-Image-213', '')
        //Check Different Locale
        //Check Tracking
    },
    after: function(client){
      utils(client).closeBrowser();
    }
  };