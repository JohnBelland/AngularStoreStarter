angular.module('app').controller("MainController", function () {
    var vm = this;
    vm.title = 'We Hate T-Shirts ( Actually We Love Them)';
    vm.slogan = 'An endless selection of t-shirts. Come back often and see whats new';
    vm.productOneDesc = 'Check out this Hillarious T-Shirt.   People never know who real ninjas are and now you can show them.';
    vm.productOneAmazonBuyNowLink = 'http://www.amazon.com/gp/product/B009ZEYA8U/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B009ZEYA8U&linkCode=as2&tag=wehatetshir-20&linkId=RIY2LADOHH4VEIVJ';
    vm.productOneImageSrc = 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B009ZEYA8U&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=wehatetshir-20';
    vm.productOneSalesSrc = 'http://ir-na.amazon-adsystem.com/e/ir?t=wehatetshir-20&l=as2&o=1&a=B009ZEYA8U';
    //ToDo: Add product Two information here
    vm.siteHref = 'http://www.wehatetshirts.com';
    vm.sitewww = 'www.wehatetshirts.com';
});