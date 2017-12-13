angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($ionicSideMenuDelegate, $scope, locals, $rootScope, HomeGoodlistRow, HomeNewLists, HomechooseLists) {

    if (!(locals.get("isLoad") == "isLoad")) {
      window.location.href = "#/tab/firstEnter";
    }

    //轮播图数据
    $scope.lunbopics = [{
      "id": 0,
      "imgsrc": "slideimage01.png"
    },
    {
      "id": 1,
      "imgsrc": "slideimage02.png"
    },
    {
      "id": 2,
      "imgsrc": "slideimage03.png"
    }];

    $scope.homeGoodlistRows = HomeGoodlistRow.all();

    $scope.tz_study = function (myId) {
      window.location = "#/tab/homeStudy/" + myId
    };
    
    //最新课程数据返回代码
    $scope.homeNewLists = HomeNewLists.all();
    ////猜你喜欢
    $scope.homechooseLists = HomechooseLists.all();
    //点击滑出侧边栏
    $scope.toggleLeftSideMenu = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };
  })

  .controller('LessonlistCtrl', function ($scope, courseLists) {
    $scope.tz_study = function (myId) {
      window.location = "#/tab/homeStudy/" + myId
    };
    $scope.lists = courseLists.page(1);

    $scope.courseListBtns = [
      { id: 0, btnName: "全部" },
      { id: 1, btnName: "逗" },
      { id: 2, btnName: "唻" },
      { id: 3, btnName: "咪" },
      { id: 4, btnName: "发" },
      { id: 5, btnName: "嗖" }
    ];

    $scope.priceBtns = [
      { id: 0, btnName: "全部" },
      { id: 1, btnName: "免费" },
      { id: 2, btnName: "收费" }
    ]
    //课程列表点击事件
    $scope.lilist = false;
    $scope.lcolor = { color: "#333" };
    $scope.courselist = function () {
      $scope.lilist = !$scope.lilist;
      $scope.prlist = false;
      $scope.pcolor = { color: "#333" };
      if ($scope.lilist == true) {
        $scope.lcolor = { color: "#63aafc" };
      } else {
        $scope.lcolor = { color: "#333c" };
      }
    }
    //价格点击事件
    $scope.lcolor = { color: "#333" };
    $scope.price = function () {
      $scope.prlist = !$scope.prlist;
      $scope.lilist = false;
      $scope.lcolor = { color: "#333" };
      if ($scope.prlist == true) {
        $scope.pcolor = { color: "#63aafc" };
      } else {
        $scope.pcolor = { color: "#333c" };
      }
    };
    //  上拉加载
    $scope.moredata = true;
    $scope.loadMore = function () {
      var newList = courseLists.page(1);
      $scope.lists = $scope.lists.concat(newList);
      if (newList.lengtht == 0) {
        $scope.moredata = false;
      }
      $scope.$broadcast("scroll.infiniteScrollComplete")
    };

    $scope.$on("$stateChangeSuccess", function () {
      $scope.loadMore();
    });
    //下拉刷新

    // 课程列表筛选
    $scope.courseSearch = function (searcchText) {
      $scope.listS = courseLists.courseSearch(searcchText);
      $scope.lilist = false;
    }
    // 价格筛选
    $scope.priceSearch = function (searcchText) {
      $scope.listS = courseLists.courseSearch(searcchText);
      $scope.prlist = false;
    }
  })

  .controller('MycourseCtrl', function ($scope, courseFirst, courseSecond) {
    $scope.tz_study = function (myId) {
      window.location = "#/tab/homeStudy/" + myId
    };
    // 我的课程
    $scope.mycou = true;
    $scope.mycol = false;
    $scope.color = { color: "#63aafc" };
    $scope.colorc = { color: "#333" };
    $scope.mylesson = function () {
      $scope.data.showDelete = false;
      $scope.mycou = true;
      $scope.mycol = false;
      $scope.color = { color: "#63aafc" };
      $scope.colorc = { color: "#333" };
    };
    //收藏课程
    $scope.course = function () {
      $scope.data.showDelete = false;
      $scope.mycou = false;
      $scope.mycol = true;
      $scope.color = { color: "#333" };
      $scope.colorc = { color: "#63aafc" };
    };
    $scope.itemFir = courseFirst.all();
    $scope.data = {
      showDelete: false
    };
    //分享功能 弹出该课程的id
    $scope.share = function (item) {
      alert("Share Item:" + item.id);
    }
    //删除课程
    $scope.onItemDelete = function (list, item) {
      $scope[list].splice($scope[list].indexOf(item), 1)
    };
    $scope.itemSec = courseSecond.all();
  })

  .controller('PersonalCtrl', function ($scope) {
    $scope.loginuser = {
      name: '',
      password: ''
    };
    $scope.doLogin = function () {
      if (!!$scope.loginuser.name && !!$scope.loginuser.password) {
        window.location.href = "#/tab/information"
      }
    }
  })

  .controller("InformationCtrl", function ($scope, $http) {
    $http.get("json/json.txt")
      .then(function (res) {
        console.log(res.data)
        $scope.name = res.data.records[1].name;
        $scope.email = res.data.records[1].email;
        $scope.phone = res.data.records[1].phone;
      });
    $scope.quit = function () {
      window.location.href = "#/tab/personal"
    }
  })

  .controller("RegisterCtrl", function ($scope, $ionicPopup) {
    $scope.infor = {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwort: ''
    };
    $scope.register = function (infor) {
      var email_yz = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var photo_yz = /^1\d{10}$/;
      if (!!infor.name && !!infor.email && !!infor.phone && !!infor.password && !!infor.passwordt) {
        if (!email_yz.test(infor.email)) {
          $ionicPopup.alert({
            title: '提示信息!',
            template: '邮箱格式不正确，请重新输入'
          });
        } else if (!photo_yz.test(infor.phone)) {
          $ionicPopup.alert({
            title: '提示信息!',
            template: '请输入正确手机号码'
          });
        } else if (infor.password != infor.passwordt) {
          $ionicPopup.alert({
            title: '提示信息!',
            template: '两次密码不相同，请重新输入'
          });
        } else {
          window.location = "#/tab/personal"
        }
      } else {
        $ionicPopup.alert({
          title: '提示信息！',
          template: '请输入内容'
        })
      }
    }
  })

  .controller("ForgetCtrl", function ($scope) {
    $scope.infor = {
      name: '',
      phone: '',
      password: '',
      passwort: ''
    };
    $scope.forget = function (infor) {
      var photo_yz = /^1\d{10}$/;
      if (!!infor.name && !!infor.phone && !!infor.password && !!infor.passwordt) {
        if (!photo_yz.test(infor.phone)) {
          $ionicPopup.alert({
            title: '提示信息!',
            template: '请输入正确手机号码'
          });
        } else if (infor.password != infor.passwordt) {
          $ionicPopup.alert({
            title: '提示信息!',
            template: '两次密码不相同，请重新输入'
          });
        } else {
          window.location.href = "#/tab/personal"
        }
      } else {
        $ionicPopup.alert({
          title: '提示信息！',
          template: '请输入内容'
        })
      }
    }
  })

  .controller("StudyCtrl", function ($scope, studyList,pingjiaList,$ionicModal) {
    $scope.studymulu = studyList.all();
    $scope.aList = pingjiaList.all();
    console.log($scope.aList);
    // 目录和详情的标签切换
    $scope.mymulu = true;
    $scope.myxiangqing = false;
    $scope.color = {color:"#63aafc"};
    $scope.my_left = function () {
      $scope.myxiangqing = false;
      $scope.mymulu = true;
      $scope.color = {color:"#63aafc"};
      $scope.colorc = {color:"#333"};
    };
    $scope.xq_right = function () {
      $scope.myxiangqing = true;
      $scope.mymulu = false;
      $scope.color = {color:"#333"};
      $scope.colorc = {color:"#63aafc"};
    };
    $ionicModal.fromTemplateUrl("templates/modal.html",{
      scope:$scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // 接受TaskCtrl控制器传过来的评价数据
    $scope.$on("evaluate",function (event,data) {
      var newDate = new Date();
      var date = newDate.getFullYear() + "-" + ((newDate.getMonth() + 1) >= 10 ? (newDate.getMonth() + 1) : ("0" + (newDate.getMonth() + 1))) + "-" + (newDate.getDate() >= 10 ? newDate.getDate() : ("0" + newDate.getDay()));
      var evaluate = {
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: date,
        cont: data.evaluate,
      }
      console.log(evaluate);
      $scope.aList.push(evaluate);
    })
  })

  .controller("TaskCtrl",function ($scope,$ionicPopup) {
    // 评价窗口关闭事件
    $scope.close = function () {
      $scope.modal.hide();
    }
    // 评价的添加事件
    $scope.createContact = function (textareaValue) {
      //向父级控制器中发送新的评价数据
      var myComments = {
        evaluate:textareaValue
      }
      console.log(myComments)
      console.log(myComments.evaluate)

      if(!myComments.evaluate){
        $ionicPopup.alert({
          title:"提示信息",
          template:"请输入内容！"
        })
      }else{
        $scope.$emit("evaluate",myComments);
        $scope.modal.hide()
      }
    }
  })

  .controller("FirstEnterCtrl", function ($scope, locals) {
    $scope.toIndex = function () {
      locals.set("isLoad", "isLoad");
      window.location.href = "#/tab/home";
    }
  })
  /*----------------------------自定义服务------------------------------*/
  /*去掉下面tabs 的自定义指令*/
  .directive('hideTabs', function ($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function () {
          $rootScope.hideTabs = attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function () {
          $rootScope.hideTabs = false;
        });
      }
    };
  })
  /*本地的数据储存 服务*/
  .factory('locals', ['$window', function ($window) {
    return {
      //存储单个属性
      set: function (key, value) {
        $window.localStorage[key] = value;
      },
      //读取单个属性
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      }
    }
  }])

