var Random = Mock.Random

var imgs = [
  "https://cdn.cultofmac.com/wp-content/uploads/2018/10/mimix3.0.jpg",
  "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/iphone_8/red/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png",
  "https://www.att.com/catalog/en/idse/Samsung/Samsung%20Galaxy%20Note9/Ocean%20Blue-hero-zoom.png",
  "https://www.androidcentral.com/sites/androidcentral.com/files/topic_images/2014/Cell-Phone-Plans-topic-page-graphic.png",
  "https://i03.hsncdn.com/is/image/HomeShoppingNetwork/prodgrid230/samsung-galaxy-s8-64gb-unlocked-gsm-android-smartphone-d-20170817143632477~8510978w_26X.jpg",
  "https://www.gazelle.com/packs/images/cell-phone-f76fcdb429aeb7ac22cdf453a14c4b3a.png",
  "https://www.androidcentral.com/sites/androidcentral.com/files/topic_images/2014/Cell-Phone-Plans-topic-page-graphic.png",
  "https://i03.hsncdn.com/is/image/HomeShoppingNetwork/prodgrid230/samsung-galaxy-s8-64gb-unlocked-gsm-android-smartphone-d-20170817143632477~8510978w_26X.jpg",
  "http://media.graytvinc.com/images/810*455/cellphone+image+mgn.jpg",
  "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5709/5709991_sa.jpg",
  "http://img.bbystatic.com/BestBuy_US/images/products/5872/5872532_sa.jpg",
  "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6259/6259644cv11d.jpg;maxHeight=640;maxWidth=550",
  "https://images-na.ssl-images-amazon.com/images/I/411pk7p6slL.jpg"
]

var banners = [
  "https://www.incimages.com/uploaded_files/image/1940x900/getty_813099398_2000133320009280347_354236.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u-y9HpIfM7H0KvZtSF8srwG7wotaCC1ktLVFfOxMSssguW_b"
]

var intros = [
  "Apple iPhone 8", "SAMSUNG Galaxy Note9", "Latest Samsung Smartphone | Samsung LEVANT", "LG V30+ Smartphone", "What is smartphone?"
]

var titles = ["Samsung", "Apple", "Huawei", "Nokia", "Sony", "LG", "HTC", "Motorola"]

var index = Mock.mock('http://api.com/index', {
  

  "swiper|3":[
    {
      'imgPath|1': imgs,
      'id':'@id'
    }
  ],

  'section1':{
   


    'list|4':[
      {
        'imgPath|1': imgs,
        'id':'@id'
      }
    ],
    
    'banner|1': banners
  },








  'section2|10':{
    'list|10':[{
        'title|1':titles,
        'price|99-1000':100,
        'intro|1': intros,
        'imgPath|1': imgs,
        'id':'@id'
      }],
      'banner|1': banners
  },


  
  'section3':{
    'list|4':[{
      'title|1':titles,
      'start':Random.time('HH:mm'),
      

      // end data -- rendom seletction 
      'imgPath|1':imgs,
      'id':'@id',
      'price|99-1000':100,
      'end|1':['2017/09/23 02:00:00','2017/09/23 11:00:00','2017/09/23 14:00:00','2017/09/23 13:00:00'],
    }],
    'banner|1': banners
  },


 


 
  'section4':{
    'list|4':[{
      'title|1':titles,
      'imgPath|1':imgs,
      'price|99-1000':100,
      'intro|1': intros,
      'id':'@id'
    }],
    'banner|1': banners
  }


});

/*----------------detail------------------*/

var viewIphone = {
  'title': 'Iphone7 Best',
  'intro': "Iphone7 is beautiful",
  'id':'@id',
  'price|99-1000':100,
  'chose|3':[{
    'col|+1':['While','Black','Blue'],
    'size|+1':['64Gb','128GB','256GB']
  }]
}

var swiperIphoneImage = [
  "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5709/5709991_sa.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/411pk7p6slL.jpg",
  "https://www.gazelle.com/packs/images/cell-phone-f76fcdb429aeb7ac22cdf453a14c4b3a.png",
  "http://socialcompare.com/u/1709/apple-iphone8plus_e6c960c20fd6097bc6f72e1666a24d2e.jpg",
]

var swiperIphone = {
  'imgSrc|1':swiperIphoneImage,
  'id':'@id'
}

var contentImgIphone = [
  "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5709/5709991_sa.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/411pk7p6slL.jpg",
  "https://www.gazelle.com/packs/images/cell-phone-f76fcdb429aeb7ac22cdf453a14c4b3a.png",
  "http://socialcompare.com/u/1709/apple-iphone8plus_e6c960c20fd6097bc6f72e1666a24d2e.jpg",
]

var detail = Mock.mock('http://api.com/detail', {
  "view|1": [viewIphone],

  'swiper|2':[swiperIphone],

  'contentImgSrc|2':[{
    'imgSrc|1':contentImgIphone
  }]
});



/*----------------category------------------*/

var iphones = {
  'title': 'Apple',
  'list': [
    {
      'title':'phone1',
      'imgPath':"http://socialcompare.com/u/1709/apple-iphone8plus_e6c960c20fd6097bc6f72e1666a24d2e.jpg",
      },
      {
        'title':'phone2',
        'imgPath':"https://images-na.ssl-images-amazon.com/images/I/411pk7p6slL.jpg",
      },
      {
        'title':'phone3',
        'imgPath':"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5709/5709991_sa.jpg",
      },
      {
        'title':'phone4',
        'imgPath':"https://images-na.ssl-images-amazon.com/images/I/411pk7p6slL.jpg",
      },
      {
        'title':'phone5',
        'imgPath':"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5709/5709991_sa.jpg",
      },
      {
        'title':'phone6',
        'imgPath': "https://www.gazelle.com/packs/images/cell-phone-f76fcdb429aeb7ac22cdf453a14c4b3a.png",
      },
  ]    
}

var samsung = {
  'title': 'Samsung',
  'list': [
    {
      'title':'Samsung1',
      'imgPath':"https://ss7.vzw.com/is/image/VerizonWireless/SAMSUNG_Galaxy_S9_Blue?$device-lg$",
      },
      {
        'title':'Samsung2',
        'imgPath':"https://ss7.vzw.com/is/image/VerizonWireless/SAMSUNG_Galaxy_S9_Blue?$device-lg$",
      },
      {
        'title':'Samsung3',
        'imgPath':"https://www.91-img.com/pictures/125460-v5-samsung-galaxy-j6-mobile-phone-large-1.jpg",
      }
  ]    
}


var category = Mock.mock('http://api.com/category', {
    'aside':[iphones, samsung]
});
 
export {index,detail,category}
