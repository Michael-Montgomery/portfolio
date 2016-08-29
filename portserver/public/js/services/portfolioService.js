var app = angular.module('launch.portfolioService', []);

app.service('portfolioList', function() {
    this.projects = [
        {
            clientName: "Mustard's Last Stand",
            url: 'http://http://www.mustardslaststand.us',
            description: "Mustard's Last Stand is a Melbourne, Florida based hot dog restaurant.",
            imgUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--MyzQPOqi--/c_scale,fl_progressive,q_80,w_800/1495521693809802643.jpg'
        },
        {
            clientName: "Lovebug's Bakery",
            url: 'http://http://http://www.lovebugsbakery.com',
            description: "Lovebug's bakery is a Melbourne, Florida-based restaurant specializing in ridiculously delicious cupcakes.",
            imgUrl: 'http://feelgrafix.com/data_images/out/28/1001822-cupcakes.jpg'
        },
        {
            clientName: "Luna",
            url: 'http://http://www.mustardslaststand.us',
            description: "Luna Marie is a model specializing in tattoo-focused projects.",
            imgUrl: 'http://i.imgur.com/zrV2glv.jpg'
        },
        {
            clientName: "Yeti",
            url: 'http://http://www.mustardslaststand.us',
            description: "Yeti is a manufacturer of ultra-insulated drinkware.",
            imgUrl: 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/630/354/75/wdpromedia.disney.go.com/media/wdpro-assets/things-to-do/more/sports-and-recreation-centers/campfires/campfires-09.jpg?24092014074854'
        }
    ]
})