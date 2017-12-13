angular.module('starter.services', [])

.factory("HomeGoodlistRow", function () {
  var homeGoodlistRows = [
    [
      {"id": 0, "title": "eins", "main": "这是一", "imgsrc": "shouye_02.png"},
      {"id": 1, "title": "zwei", "main": "这是二", "imgsrc": "shouye_02.png"}
    ],
    [
      {"id": 2, "title": "drei", "main": "这是三", "imgsrc": "shouye_02.png"},
      {"id": 3, "title": "vier", "main": "这是四", "imgsrc": "shouye_02.png"}
    ]
  ];
  return {
    all: function () {
      return homeGoodlistRows;
    }
  };
})
/*最新课程数据*/
.factory("HomeNewLists", function () {
  var homeNewListRow = [
    [{"id": 0, "title": "first", "main": "这是第一个", "imgsrc": "shouye_03.png"},
      {"id": 1, "title": "second", "main": "这是第二个", "imgsrc": "shouye_03.png"}],
    [{"id": 2, "title": "third", "main": "这是第三个", "imgsrc": "shouye_03.png"},
      {"id": 3, "title": "fouth", "main": "这是第四个", "imgsrc": "shouye_03.png"}]
  ];
  return {
    all: function () {
      return homeNewListRow;
    }
  };
})
/*猜你喜欢假数据*/
.factory("HomechooseLists", function () {
  var homechooseList = [
    {
      "id": 0,
      "pic": "img/shouye_02.png",
      "title": "兜兜飞",
      "main": "飞一样的感觉！",
      "imgsrc": "shouye_02.png"
    },
    {
      "id": 1,
      "pic": "img/shouye_02.png",
      "title": "棒棒棒",
      "main": "老棒了，虽然我也不知道什么棒",
      "imgsrc": "shouye_02.png"
    },
    {
      "id": 2,
      "pic": "img/shouye_02.png",
      "title": "啾啾啾",
      "main": "啾啾啾 是什么声音",
      "imgsrc": "shouye_02.png"
    },
    {
      "id": 3,
      "pic": "img/shouye_02.png",
      "title": "这是一个拳头",
      "main": "小拳拳捶你胸口",
      "imgsrc": "shouye_02.png"
    }
  ];
  return {
    all: function () {
      return homechooseList;
    }
  }
})
//课程列表
.factory('courseLists', function () {
  var chats = [{
    id: 0,
    titleEn: '0Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 1,
    titleEn: '1Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 2,
    titleEn: '2Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 3,
    titleEn: '3Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 4,
    titleEn: '4Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 5,
    titleEn: '5Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 6,
    titleEn: '6Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 7,
    titleEn: '7Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 8,
    titleEn: '81Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 9,
    titleEn: '9Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 10,
    titleEn: '10Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 11,
    titleEn: '11Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 12,
    titleEn: '12Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 13,
    titleEn: '13Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 14,
    titleEn: '14Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 15,
    titleEn: '15Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 16,
    titleEn: '16Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 17,
    titleEn: '17Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 18,
    titleEn: '18Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 19,
    titleEn: '19Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 20,
    titleEn: '20Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 21,
    titleEn: '21Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }];
  return {
    page: function (page) {
      return chats.splice((page - 1) * 5, (page - 1) * 5 + 5);
    },
    all: function () {
      return chats;
    },
    remove: function (chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function (chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    courseSearch: function (searchText) {
      return chats.splice(0, 2);
    }
  };
})
//我的课程
.factory("courseFirst",function () {
  var itemFir = [{
    id: 0,
    imgsrc: "img/ben.png",
    title: "旅游中的趣事",
    num: "旅游中的趣事",
    nums: "1"
  },
    {
      id: 2,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "2"
    },
    {
      id: 3,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "3"
    }, {
      id: 4,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "4"
    }, {
      id: 5,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "5"
    }, {
      id: 6,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "6"
    }, {
      id: 7,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "7"
    }, {
      id: 8,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "8"
    }, {
      id: 9,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "10"
    },
    {
      id: 10,
      imgsrc: "img/ben.png",
      title: "旅游中的趣事",
      num: "旅游中的趣事",
      nums: "11"
    }];
  return {
    all: function () {
      return itemFir;
    }
  };
})
/*收藏课程*/
.factory('courseSecond', function () {
  var itemSec = [{
    id: 0,
    imgsrc: "img/ben.png",
    title: "2标题0",
    num: "2节",
    nums: "15节"
  }, {
    id: 1,
    imgsrc: "img/ben.png",
    title: "2标题1",
    num: "2节",
    nums: "15节"
  }, {
    id: 2,
    imgsrc: "img/ben.png",
    title: "2标题2",
    num: "2节",
    nums: "15节"
  }, {
    id: 3,
    imgsrc: "img/ben.png",
    title: "2标题3",
    num: "2节",
    nums: "15节"
  }, {
    id: 4,
    imgsrc: "img/ben.png",
    title: "2标题4",
    num: "2节",
    nums: "15节"
  }, {
    id: 5,
    imgsrc: "img/ben.png",
    title: "标题5",
    num: "3节",
    nums: "15节"
  }];
  return {
    all: function () {
      return itemSec;
    }
  };
})
/*学习页面数据*/
  //学习页面目录数据
.factory('studyList',function() {
  var studymulu = [{
    title:"第一个",
    time:"8分钟"
  },
    {
      title:"第二个",
      time:"14分钟"
    },
    {
      title:"第三个",
      time:"2分钟"
    },
    {
      title:"第四个",
      time:"8分钟"
    },
    {
      title:"第五个",
      time:"8分钟"
    } ,
    {
      title:"第六个",
      time:"20分钟"
    }]

  return{
    all:function(){
      return studymulu;
    }
  }
})
//详情数据
.factory('pingjiaList',function() {
  
      var assesslist = [{
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: "10分钟前",
        cont: "多谢大神指点",
      },
        {
          pic: "img/study_tx.jpg",
          name: "李晓丽",
          title: "10分钟前",
          cont: "多谢大神指点",
        },
        {
          pic:"img/study_tx.jpg",
          name: "李晓丽",
          title: "8分钟前",
          cont: "多谢大神指点",
        },
        {
          pic: "img/study_tx.jpg",
          name: "李晓丽",
          title: "刚刚",
          cont: "多谢大神指点",
        }]
  
      return{
        all:function(){
          return assesslist
        }
      }
    })