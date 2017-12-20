angular.module('starter.services', [])

.factory('List', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  list = [
	  [{
	    id: 0,
	    lie:1,
	    title: '苏格兰精神的代表',
	    text: '爱丁堡城堡：苏格兰精神的代表',
	    Url: 'img/A12-5.png'
	  }, {
	    id: 1,
	    lie:1,
	    title: '美丽的马达京 完美的浮潜',
	    text: '二赴马达京岛与海龟的完美邂逅',
	    Url: 'img/A15-4.png'
	  }
  ],
  [ 
	  {
	    id: 2,
	    lie:2,
	    title: '俄国历史上杰出的沙皇',
	    text: '圣彼得堡，处处弥漫着彼得大帝的气息',
	    Url: 'img/A13-1.png'
	  }, {
	    id: 3,
	    lie:2,
	    title: '黄金海岸最美海滩',
	    text: '澳大利亚的眼睛是蓝色的宝石',
	    Url: 'img/A18-1.png'
	  }
  ]
//, [{
//  id: 4,
//  title: 'Mike Harrington',
//  text: 'This is wicked good ice cream.',
//  Url: 'img/mike.png'
//}]
  ];
  

  return {
    all: function() {
      return list;
    }
//  list:function() {
//  	return lessonlist;
//  }
  };
})

.factory('Lesson', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  lesson = [
	  [{
	    id: 4,
	    lie:1,
	    title: '波斯卡尚 庭院深深深几许',
	    text: '波斯小记，卡尚——庭院深深深几许！',
	    Url: 'img/A8-2.png'
	  }, {
	    id: 5,
	    lie:1,
	    title: '悬崖步道，满足你的圣托里尼的全部幻想',
	    text: '圣托里尼的精华所在！',
	    Url: 'img/A9-1.png'
	  }
  ],
  [ 
	  {
	    id: 6,
	    lie:2,
	    title: '粉色之城 斋普尔',
	    text: '风之宫殿，少女心爆棚的粉色系公主',
	    Url: 'img/A10-2.png'
	  }, {
	    id: 7,
	    lie:2,
	    title: '美丽的马达京 完美的浮潜',
	    text: '二赴马达京岛与海龟的完美邂逅',
	    Url: 'img/A11-1.png'
	  }
  ]
//, [{
//  id: 4,
//  title: 'Mike Harrington',
//  text: 'This is wicked good ice cream.',
//  Url: 'img/mike.png'
//}]
  ]; 

  return {
    shit: function() {
      return lesson;
    }
//  list:function() {
//  	return lessonlist;
//  }
  };
})

.factory('List2', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  list2 = [
	  {
	    id: 8,
	    lie:1,
	    title: '刺激滑雪',
	    text: '瑞士人在滑雪',
	    Url: 'img/A15-5.png'
	  }, {
	    id: 9,
	    lie:1,
	    title: '刺激滑雪',
	    text: '瑞士人在滑雪',
	    Url: 'img/A15-5.png'
	  },{
	    id: 10,
	    lie:2,
	    title: '刺激滑雪',
	    text: '瑞士人在滑雪',
	    Url: 'img/A15-5.png'
	  }, {
	    id: 11,
	    lie:2,
	    title: '刺激滑雪',
	    text: '瑞士人在滑雪',
	    Url: 'img/A15-5.png'
	  },{
    id: 12,
    title: '刺激滑雪',
    text: '瑞士人在滑雪',
    Url: 'img/A15-5.png'
	}
  ]; 

  return {
    all: function() {
      return list2;
    }
//  list:function() {
//  	return lessonlist;
//  }
  };
})

.factory('List3', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  list3 = [
	  {
	    id: 001,
	    lie:1,
	    title: '学院鼻祖应天学院',
	    text: '学院鼻祖应天书院 象牙塔们认祖归宗',
	    Url: 'img/A1-2.png'
	  }, {
	    id: 002,
	    lie:1,
	    title: '拉萨河边下午茶',
	    text: '拉萨河边静怡的一杯下午茶',
	    Url: 'img/A2-4.png'
	  },{
	    id: 003,
	    lie:2,
	    title: '羌山',
	    text: '大山深处的秘密',
	    Url: 'img/A3-2.png'
	  }, {
	    id: 004,
	    lie:2,
	    title: '中国好望角',
	    text: '成山头，中国海岸的第一道曙光',
	    Url: 'img/A4-3.png'
	  },{
    id: 005,
    title: '中国好望角',
    text: '成山头，中国海岸的第一道曙光',
    Url: 'img/A4-1.png'
	},{
	    id: 006,
	    lie:1,
	    title: '苏格兰精神的代表',
	    text: '爱丁堡城堡：苏格兰精神的代表',
	    Url: 'img/A7-4.png'
	  }, {
	    id: 007,
	    lie:1,
	    title: '苏格兰精神的代表',
	    text: '爱丁堡城堡：苏格兰精神的代表',
	    Url: 'img/A7-1.png'
	  },{
	    id: 008,
	    lie:2,
	    title: '波斯卡尚 庭院深深深几许',
	    text: '波斯小记，卡尚——庭院深深深几许',
	    Url: 'img/A8-3.png'
	  }, {
	    id: 009,
	    lie:2,
	    title: '圣托里尼的精华所在',
	    text: '悬崖步道，满足你的圣托里尼的全部幻想',
	    Url: 'img/A9-5.png'
	  },{
    id: 010,
    title: '美丽的马达京 完美的浮潜',
    text: '二赴马达京岛与海龟的完美邂逅',
    Url: 'img/A10-2.png'
	}
  ]; 

  return {
  	page:function(page){
  		return list3.splice((page-1)*6,(page-1)*6+6)
  	},
    all: function() {
      return list3;
    }
//  list:function() {
//  	return lessonlist;
//  }
  };
})







.factory("courseFirst",function () {
  var itemFir = [{
    id: 0,
    imgsrc: "img/A10-3.png",
    title: "美丽的马达京 完美的浮潜",
    num: "二赴马达京岛与海龟的",
    nums: "完美邂逅"
  },
    {
      id: 2,
      imgsrc: "img/A12-1.png",
      title: "羡慕这里每晚都能看到极光",
      num: "世界最大国家公园",
      nums: "百万平方公里的净土"
    },
    {
      id: 3,
      imgsrc: "img/A13-1.png",
      title: "俄国历史上杰出的沙皇",
      num: "圣彼得堡",
      nums: "处处弥漫着彼得大帝的气息"
    }, {
      id: 4,
      imgsrc: "img/A14-1.png",
      title: "苏格兰高地 最原始的心跳？",
      num: "为爱重生的城堡",
      nums: "跳崖决绝的高地黑头羊"
    }, {
      id: 5,
      imgsrc: "img/A15-2.png",
      title: "刺激滑雪超出你想象",
      num: "瑞士人在滑雪场的",
      nums: "花样超乎你想像"
    }, {
      id: 6,
      imgsrc: "img/A11-4.png",
      title: "黄金海岸最美海滩",
      num: "澳大利亚的眼睛",
      nums: "是蓝色的宝石"
    }, {
     	id: 7,
      imgsrc: "img/A14-1.png",
      title: "苏格兰高地 最原始的心跳？",
      num: "为爱重生的城堡",
      nums: "跳崖决绝的高地黑头羊"
    }, {
      id: 8,
      imgsrc: "img/A18-2.png",
      title: "参观琥珀堡",
      num: "《功夫瑜伽》取景地",
      nums: "感受三百年沧桑"
    }, {
      id: 9,
      imgsrc: "img/A12-1.png",
      title: "羡慕这里每晚都能看到极光",
      num: "世界最大国家公园",
      nums: "百万平方公里的净土"
    },
    {
      id: 10,
      imgsrc: "img/A10-3.png",
   	 	title: "美丽的马达京 完美的浮潜",
    	num: "二赴马达京岛与海龟的",
    	nums: "完美邂逅"
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
      imgsrc: "img/A14-3.png",
      title: "苏格兰高地 最原始的心跳？",
      num: "为爱重生的城堡",
      nums: "跳崖决绝的高地黑头羊"
  },
    {
      id: 2,
      imgsrc: "img/A15-1.png",
      title: "刺激滑雪超出你想象",
      num: "瑞士人在滑雪场的",
      nums: "花样超乎你想像"
    },
    {
      id: 3,
      imgsrc: "img/A14-5.png",
      title: "苏格兰高地 最原始的心跳？",
      num: "为爱重生的城堡",
      nums: "跳崖决绝的高地黑头羊"
    }, {
      id: 4,
      imgsrc: "img/A11-2.png",
      title: "黄金海岸最美海滩",
      num: "澳大利亚的眼睛",
      nums: "是蓝色的宝石"
    }, {
      id: 5,
      imgsrc: "img/A15-2.png",
      title: "刺激滑雪超出你想象",
      num: "瑞士人在滑雪场的",
      nums: "花样超乎你想像"
    }, {
      id: 6,
      imgsrc: "img/A18-4.png",
      title: "参观琥珀堡",
      num: "《功夫瑜伽》取景地",
      nums: "感受三百年沧桑"
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
    title:"最接近天堂的地方",
    time:"15分钟"
  },
    {
      title:"青藏之路",
      time:"10分钟"
    },
    {
      title:"吃货之都-说出你想吃什么？",
      time:"30分钟"
    },
    {
      title:"我想干点什么",
      time:"8分钟"
    },
    {
      title:"东北之旅",
      time:"40分钟"
    },
    {
      title:"感受大海的召唤",
      time:"6分钟"
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