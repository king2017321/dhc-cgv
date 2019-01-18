var QQMapWX = require('../../qqmap-wx-jssdk/qqmap-wx-jssdk.min.js');
var qqmapsdk

Page({

  data: {
    // openid: '',
    movieAddress: '苏州平江万达广场店',
    currProvince: '',
    currCity: '',
    // --------------------------------------------------------------//
    navbar: ['卖品', '会员卡'],
    currentTab: 0,
    wantFlag: false,
    // --------------------------------------------------------------//
    bannerUrls: [{
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628306053&di=94b4308ff1c464cbe5c939576eacd31b&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F69%2F40%2F89e207928e4ba2a9877b06ec87c6ab71.jpg',
      linkUrl: ''
    },
    {
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628306053&di=77c8b34af1b44fd990e6e201df49f827&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F20%2F20140320140243_5MySw.jpeg',
      linkUrl: ''
    },
    {
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628378838&di=e01f784abb225d79416180122bc456e1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0118cf5837d75ea801219c77f35e67.jpg',
      linkUrl: ''
    },
    {
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547628378837&di=6127169e3cc9a444bf43da0906e9a57b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ce8b582439aea84a0e282ba855d9.jpg',
      linkUrl: ''
    }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    },

  // --------------------goods information----------------------------

    goods: [
      {
        "name": "人气热销",
        "type": -1,
        "foods": [
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "袋袋坚果",
            "price": 10,
            "oldPrice": "15",
            "description": "袋袋坚果一袋",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "经典套餐",
        "type": 2,
        "foods": [
          {
            "name": "X-COMBO套餐",
            "price": 29,
            "oldPrice": 36,
            "description": "46OZ爆米花*1+220Z可乐*1",
            "sellCount": 17,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "现调饮料",
        "type": 1,
        "foods": [
          {
            "name": "VC无限橙果汁",
            "price": 8,
            "oldPrice": 10,
            "description": "",
            "sellCount": 15,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "还可以",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "爆米花类",
        "type": -1,
        "foods": [
          {
            "name": "大份现制爆米花",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 43,
            "Count": 0,
            "rating": 92,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "菜量还可以,味道还可以",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "大份现制爆米花",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 43,
            "Count": 0,
            "rating": 92,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "菜量还可以,味道还可以",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "大份现制爆米花",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 43,
            "Count": 0,
            "rating": 92,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "菜量还可以,味道还可以",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "瓶装饮料",
        "type": -1,
        "foods": [
          {
            "name": "八宝酱菜",
            "price": 4,
            "oldPrice": "",
            "description": "",
            "sellCount": 84,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "拍黄瓜",
            "price": 9,
            "oldPrice": "",
            "description": "",
            "sellCount": 28,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "精选套餐",
        "type": -1,
        "foods": [
          {
            "name": "红豆薏米粥套餐",
            "price": 37,
            "oldPrice": "",
            "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
            "sellCount": 3,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "皮蛋瘦肉粥套餐",
            "price": 31,
            "oldPrice": "",
            "description": "",
            "sellCount": 12,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "果拼果汁",
        "type": -1,
        "foods": [
          {
            "name": "蜜瓜圣女萝莉杯",
            "price": 6,
            "oldPrice": "",
            "description": "",
            "sellCount": 1,
            "Count": 0,
            "rating": "",
            "info": "",
            "ratings": [],
            "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "加多宝",
            "price": 6,
            "oldPrice": "",
            "description": "",
            "sellCount": 7,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "VC无限橙果汁",
            "price": 8,
            "oldPrice": 10,
            "description": "",
            "sellCount": 15,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "还可以",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "小吃主食",
        "type": -1,
        "foods": [
          {
            "name": "扁豆焖面",
            "price": 14,
            "oldPrice": "",
            "description": "",
            "sellCount": 188,
            "Count": 0,
            "rating": 96,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "葱花饼",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 124,
            "Count": 0,
            "rating": 85,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 1,
                "text": "没啥味道",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 1,
                "text": "很一般啊",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "牛肉馅饼",
            "price": 14,
            "oldPrice": "",
            "description": "",
            "sellCount": 114,
            "Count": 0,
            "rating": 91,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 1,
                "text": "难吃不推荐",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "招牌猪肉白菜锅贴/10个",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 101,
            "Count": 0,
            "rating": 78,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 1,
                "text": "不脆,不好吃",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "糊塌子",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 80,
            "Count": 0,
            "rating": 93,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      },
      {
        "name": "特色粥品",
        "type": -1,
        "foods": [
          {
            "name": "皮蛋瘦肉粥",
            "price": 10,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "很喜欢的粥",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 1,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "南瓜粥",
            "price": 9,
            "oldPrice": "",
            "description": "甜粥",
            "sellCount": 91,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "红豆薏米美肤粥",
            "price": 12,
            "oldPrice": "",
            "description": "甜粥",
            "sellCount": 86,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "红枣山药糙米粥",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 81,
            "Count": 0,
            "rating": 91,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "鲜蔬菌菇粥",
            "price": 11,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 56,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": ""
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
          },
          {
            "name": "田园蔬菜粥",
            "price": 10,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 33,
            "Count": 0,
            "rating": 100,
            "info": "",
            "ratings": [
              {
                "username": "3******c",
                "rateTime": 1469281964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "2******3",
                "rateTime": 1469271264000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              },
              {
                "username": "3******b",
                "rateTime": 1469261964000,
                "rateType": 0,
                "text": "",
                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              }
            ],
            "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
            "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ]
      }
    ],
    toView: '0',
    scrollTop: 100,
    foodCounts: 0,
    totalPrice: 0,// 总价格
    totalCount: 0, // 总商品数
    carArray: [],
    minPrice: 20,//起送價格
    payDesc: '',
    deliveryPrice: 4,//配送費
    fold: true,
    selectFoods: [{ price: 20, count: 2 }],
    cartShow: 'none'

  // --------------------------end------------------------------------

  },

  // ------------------------goods information------------------------------

  selectFoods: function() {
    wx.navigateTo({
      url: '../shop/goods/goods',
    })
  },

  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'order' + index.toString()
    })
    console.log(this.data.toView);
  },

  //移除商品
  decreaseCart: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods.forEach((good) => {
      good.foods.forEach((food) => {
        var num = this.data.goods[parentIndex].foods[index].Count;
        var mark = 'a' + index + 'b' + parentIndex
        if (food.Count > 0) {
          this.data.goods[parentIndex].foods[index].Count--
          var price = this.data.goods[parentIndex].foods[index].price;
          var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
          var carArray1 = this.data.carArray.filter(item => item.mark != mark);
          carArray1.push(obj);
          console.log(carArray1);
          this.setData({
            carArray: carArray1,
            goods: this.data.goods
          })
          this.calTotalPrice()
          this.setData({
            payDesc: this.payDesc()
          })
        }
        if (num > 0) {
          var carArray1 = this.data.carArray.filter(item => item.num > 0)
          console.log(carArray1)
          this.setData({
            carArray: carArray1,
          })
        }
      })
    })
  },

  decreaseShopCart: function (e) {
    this.decreaseCart(e);
  },

  //添加到购物车
  addCart(e) {
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].Count++;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.goods[parentIndex].foods[index].price;
    var num = this.data.goods[parentIndex].foods[index].Count;
    var name = this.data.goods[parentIndex].foods[index].name;
    var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark)
    carArray1.push(obj)
    console.log(carArray1);
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
    })
    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })
  },
  addShopCart: function (e) {
    this.addCart(e);
  },
  //计算总价
  calTotalPrice: function () {
    var carArray = this.data.carArray;
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].price * carArray[i].num;
      totalCount += carArray[i].num
    }
    this.setData({
      totalPrice: totalPrice,
      totalCount: totalCount,
      //payDesc: this.payDesc()
    });
  },
  //差几元起送
  payDesc() {
    if (this.data.totalPrice === 0) {
      // return `￥${this.data.minPrice}元起送`;
      return '请选择';
    } else if (this.data.totalPrice < this.data.minPrice) {
      let diff = this.data.minPrice - this.data.totalPrice;
      return '还差' + diff + '元起送';
    } else {
      return '选好了';
    }
  },
  //結算
  pay() {
    if (this.data.totalPrice < this.data.minPrice) {
      return;
    }
    // window.alert('支付' + this.totalPrice + '元');
    //确认支付逻辑
    var resultType = "success";
    wx.redirectTo({
      url: '../goods/pay/pay?resultType=' + resultType
    })
  },
  //彈起購物車
  toggleList: function () {
    if (!this.data.totalCount) {
      return;
    }
    this.setData({
      fold: !this.data.fold,
    })
    var fold = this.data.fold
    //console.log(this.data.fold);
    this.cartShow(fold)
  },
  cartShow: function (fold) {
    console.log(fold);
    if (fold == false) {
      this.setData({
        cartShow: 'block',
      })
    } else {
      this.setData({
        cartShow: 'none',
      })
    }
    console.log(this.data.cartShow);
  },
  listShow() {
    if (!this.data.totalCount) {
      this.data.fold = true;
      return false;
    }
    let show = !this.fold;
    // if (show) {
    //     this.$nextTick(() => {
    //         if (!this.scroll) {
    //             this.scroll = new BScroll(this.$refs.listContent, {
    //                 click: true
    //             });
    //         } else {
    //             this.scroll.refresh();
    //         }
    //     });
    // }
    return show;
  },
  // ------------------------goods information end--------------------------------    

  // ---------------------------------------------//
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  // ---------------------------------------------//

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      payDesc: this.payDesc()
    });

    qqmapsdk = new QQMapWX({
      key: 'TIDBZ-4UIEX-2A446-ZS7S5-FLU27-RQFJV'
    });
    // this.setData({
    //   openid: getApp().globalData.openid
    // })
  },

  onShow: function () {
    let vm = this;
    this.getLocation();
    qqmapsdk.getCityList({
      success: function (res) {
        console.log(res);
        console.log('省份数据：', res.result[0]); //打印省份数据
        console.log('城市数据：', res.result[1]); //打印城市数据
        console.log('区县数据：', res.result[2]); //打印区县数据
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
    // 调用接口
    qqmapsdk.search({
      keyword: 'CVG影城',
      success: function (res) {
        console.log('CVG影城:' + res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });

  },
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function (res) {
        if (res.errMsg === 'getLocation:ok') {
          // success  
          var latitude = res.latitude
          var longitude = res.longitude
          vm.getLocal(latitude, longitude);
        }
      },
      fail: function (res) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      },
    });
  },


  //获取当前地理位置
  getLocal: function (latitude, longitude) {
    var that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(JSON.stringify(res));
        if (res.status === 0) {
          that.setData({
            currProvince: res.result.address_component.province,
            currCity: res.result.address_component.city
          })
        }
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },

  //轮播高度自适应——获取图片高度
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height; //图片高度
    var imgw = e.detail.width; //图片宽度
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({
      Height: swiperH //设置高度
    })
  },

  // 购物须知跳转事件
  jumpCusInf() {
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  },

  //选择影城跳转事件
  jumpcinema() {
    wx.navigateTo({
      url: '/pages/jumpcinema/jumpcinema',
    })
  },

  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }

})
