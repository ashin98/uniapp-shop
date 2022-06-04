var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  })
})
// 首页推荐数据
router.get('/api/index_list', function (req, res, next) {
  res.send({
    "code": 0,
    "data": {
      topBar: [{
        id: 1,
        name: "推荐"
      },
      {
        id: 2,
        name: "运动户外"
      },
      {
        id: 3,
        name: "服饰内衣"
      },
      {
        id: 4,
        name: "家具数码"
      },
      {
        id: 5,
        name: "美妆护肤"
      },
      {
        id: 6,
        name: "鞋靴箱包"
      },
      {
        id: 7,
        name: "食品母婴"
      }
      ],
      data: [{
        type: "swiperList",
        data: [{
          imgUrl: '/static/swiper-img/swiper1.jpg'
        },
        {
          imgUrl: '/static/swiper-img/swiper2.jpg'
        },
        {
          imgUrl: '/static/swiper-img/swiper3.jpg'
        }
        ]
      },
      {
        type: "recommendList",
        data: [{
          bigUrl: "/static/children-img/Children.jpg",
          data: [{
            imgUrl: "/static/children-img/Children1.jpg"
          },
          {
            imgUrl: "/static/children-img/Children2.jpg"
          },
          {
            imgUrl: "/static/children-img/Children3.jpg"
          }
          ]
        },
        {
          bigUrl: "/static/recommend-img/Furnishing.jpg",
          data: [{
            imgUrl: "/static/recommend-img/Furnishing1.jpg"
          },
          {
            imgUrl: "/static/recommend-img/Furnishing2.jpg"
          },
          {
            imgUrl: "/static/recommend-img/Furnishing3.jpg"
          }
          ]
        }
        ]
      },
      {
        type: "commodityList",
        data: [{
          id: 1,
          imgUrl: "/static/commodity-img/commodity1.jpg",
          name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 2,
          imgUrl: "/static/commodity-img/commodity2.jpg",
          name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 3,
          imgUrl: "/static/commodity-img/commodity3.jpg",
          name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 4,
          imgUrl: "/static/commodity-img/commodity4.jpg",
          name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        }
        ]
      }
      ]
    }
  })
})

//首页其他topBar内容的数据
router.get('/api/index_list/2/data/1', function (req, res, next) {
  res.send({
    code: "0",
    data: [{
      type: "bannerList",
      imgUrl: '/static/sportIcon-img/banner1.jpg'
    },
    {
      type: 'iconsList',
      data: [
        {
          imgUrl: '/static/sportIcon-img/icons1.png',
          name: '运动户外'
        },
        {
          imgUrl: '/static/sportIcon-img/icons2.png',
          name: '运动户外'
        },
        {
          imgUrl: '/static/sportIcon-img/icons3.png',
          name: '运动户外'
        },
        {
          imgUrl: '/static/sportIcon-img/icons4.png',
          name: '运动户外'
        },
        {
          imgUrl: '/static/sportIcon-img/icons5.png',
          name: '运动户外'
        },
        {
          imgUrl: '/static/sportIcon-img/icons6.png',
          name: '运动户外'
        },
        {
          imgUrl: '/static/sportIcon-img/icons7.png',
          name: '运动户外'
        },
        {
          imgUrl: '/static/sportIcon-img/icons8.png',
          name: '运动户外'
        },
      ]
    },
    {
      type: 'hotList',
      data: [{
        id: 1,
        imageUrl: '/static/commodity-img/commodity1.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '779',
        oprice: '999',
        discount: '5.2'
      },
      {
        id: 2,
        imageUrl: '/static/commodity-img/commodity2.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '479',
        oprice: '699',
        discount: '5.2'
      },
      {
        id: 3,
        imageUrl: "/static/commodity-img/commodity3.jpg",
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '999',
        oprice: '1999',
        discount: '5.2'
      },
      {
        id: 4,
        imageUrl: '/static/commodity-img/commodity4.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '779',
        oprice: '999',
        discount: '7.2'
      },
      {
        id: 5,
        imageUrl: '/static/commodity-img/commodity4.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '179',
        oprice: '499',
        discount: '6.2'
      }
      ]
    },
    {
      type: 'shopList',
      data: [
        {
          bigUrl: '/static/shop-img/shop.jpg',
          data: [

            {
              id: 1,
              imageUrl: '/static/shop-img/shop1.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 2,
              imageUrl: '/static/shop-img/shop2.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 3,
              imageUrl: '/static/shop-img/shop3.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 4,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 5,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            }
          ]
        },
        {
          bigUrl: '/static/shop-img/shop.jpg',
          data: [

            {
              id: 1,
              imageUrl: '/static/shop-img/shop1.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 2,
              imageUrl: '/static/shop-img/shop2.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 3,
              imageUrl: '/static/shop-img/shop3.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 4,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 5,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            }
          ]
        },
        {
          bigUrl: '/static/shop-img/shop.jpg',
          data: [

            {
              id: 1,
              imageUrl: '/static/shop-img/shop1.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 2,
              imageUrl: '/static/shop-img/shop2.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 3,
              imageUrl: '/static/shop-img/shop3.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 4,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 5,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            }
          ]
        }

      ],
    },

    {
      type: 'commodityList',
      data: [{
        id: 1,
        imageUrl: '/static/commodity-img/commodity1.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '779',
        oprice: '999',
        discount: '5.2'
      },
      {
        id: 2,
        imageUrl: '/static/commodity-img/commodity2.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '479',
        oprice: '699',
        discount: '5.2'
      },
      {
        id: 3,
        imageUrl: "/static/commodity-img/commodity3.jpg",
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '999',
        oprice: '1999',
        discount: '5.2'
      },
      {
        id: 4,
        imageUrl: '/static/commodity-img/commodity4.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '779',
        oprice: '999',
        discount: '7.2'
      },
      {
        id: 5,
        imageUrl: '/static/commodity-img/commodity4.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '179',
        oprice: '499',
        discount: '6.2'
      }
      ]
    }
    ]
  })
})

router.get('/api/index_list/3/data/1', function (req, res, next) {
  res.send({
    code: "0",
    data: [{
      type: "bannerList",
      imgUrl: '/static/sportIcon-img/banner1.jpg'
    },
    {
      type: 'iconsList',
      data: [
        {
          imgUrl: '/static/sportIcon-img/icons1.png',
          name: '服饰内衣'
        },
        {
          imgUrl: '/static/sportIcon-img/icons2.png',
          name: '服饰内衣'
        },
        {
          imgUrl: '/static/sportIcon-img/icons3.png',
          name: '服饰内衣'
        },
        {
          imgUrl: '/static/sportIcon-img/icons4.png',
          name: '服饰内衣'
        },
        {
          imgUrl: '/static/sportIcon-img/icons5.png',
          name: '服饰内衣'
        },
        {
          imgUrl: '/static/sportIcon-img/icons6.png',
          name: '服饰内衣'
        },
        {
          imgUrl: '/static/sportIcon-img/icons7.png',
          name: '服饰内衣'
        },
        {
          imgUrl: '/static/sportIcon-img/icons8.png',
          name: '服饰内衣'
        },
      ]
    },
    {
      type: 'hotList',
      data: [{
        id: 1,
        imageUrl: '/static/commodity-img/commodity1.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '779',
        oprice: '999',
        discount: '5.2'
      },
      {
        id: 2,
        imageUrl: '/static/commodity-img/commodity2.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '479',
        oprice: '699',
        discount: '5.2'
      },
      {
        id: 3,
        imageUrl: "/static/commodity-img/commodity3.jpg",
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '999',
        oprice: '1999',
        discount: '5.2'
      },
      {
        id: 4,
        imageUrl: '/static/commodity-img/commodity4.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '779',
        oprice: '999',
        discount: '7.2'
      },
      {
        id: 5,
        imageUrl: '/static/commodity-img/commodity4.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '179',
        oprice: '499',
        discount: '6.2'
      }
      ]
    },
    {
      type: 'shopList',
      data: [
        {
          bigUrl: '/static/shop-img/shop.jpg',
          data: [

            {
              id: 1,
              imageUrl: '/static/shop-img/shop1.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 2,
              imageUrl: '/static/shop-img/shop2.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 3,
              imageUrl: '/static/shop-img/shop3.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 4,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 5,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            }
          ]
        },
        {
          bigUrl: '/static/shop-img/shop.jpg',
          data: [

            {
              id: 1,
              imageUrl: '/static/shop-img/shop1.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 2,
              imageUrl: '/static/shop-img/shop2.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 3,
              imageUrl: '/static/shop-img/shop3.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 4,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 5,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            }
          ]
        },
        {
          bigUrl: '/static/shop-img/shop.jpg',
          data: [

            {
              id: 1,
              imageUrl: '/static/shop-img/shop1.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 2,
              imageUrl: '/static/shop-img/shop2.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 3,
              imageUrl: '/static/shop-img/shop3.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 4,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            },
            {
              id: 5,
              imageUrl: '/static/shop-img/shop4.jpg',
              content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
              pprice: '779',
              oprice: '999',
              discount: '5.2'
            }
          ]
        }

      ],
    },

    {
      type: 'commodityList',
      data: [{
        id: 1,
        imageUrl: '/static/commodity-img/commodity1.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '779',
        oprice: '999',
        discount: '5.2'
      },
      {
        id: 2,
        imageUrl: '/static/commodity-img/commodity2.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '479',
        oprice: '699',
        discount: '5.2'
      },
      {
        id: 3,
        imageUrl: "/static/commodity-img/commodity3.jpg",
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '999',
        oprice: '1999',
        discount: '5.2'
      },
      {
        id: 4,
        imageUrl: '/static/commodity-img/commodity4.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '779',
        oprice: '999',
        discount: '7.2'
      },
      {
        id: 5,
        imageUrl: '/static/commodity-img/commodity4.jpg',
        content: '大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
        pprice: '179',
        oprice: '499',
        discount: '6.2'
      }
      ]
    }
    ]
  })
})


module.exports = router
