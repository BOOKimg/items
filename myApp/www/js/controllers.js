angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$state,List,Lesson,List2) {
	$scope.list = List.all();
	$scope.lesson = Lesson.shit();
	$scope.list2 = List2.all();
	
	console.log('1');
	  if (window.localStorage.getItem("ine") === null) {
	    $state.go('tab.home-welcome');
	  }
	  $scope.toIntro = function(){
	  }
	
})
	
.controller('WelcomeCtrl', function($scope,$state) { 
	window.localStorage.setItem("ine", "jojo");
	$scope.startApp = function() {
	    $state.go('tab.home');
	  };	
})
  // Called to navigate to the tab app
	 
	
	

.controller('LessonListCtrl', function($scope, List3, $http, $ionicLoading) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
	$scope.off = true
	$scope.offed = true
	$scope.list3 = List3.page(1);
	$scope.onTap=function(){
	    $scope.off=!$scope.off
	    if($scope.offed === false){
	    	$scope.offed = true
	    }
	}
	
	
	$scope.ontouch=function(){
	    $scope.offed=!$scope.offed
	    if($scope.off === false){
	    	$scope.off = true
	    }
	}
	

	var testData = {        
	    testArrys: [],     
	    //下拉刷新函数  
	    doRefresh:function () {      
	          doRefreshMore();    
	     }    
	   }; 
	   $scope.pageContext = testData;
	   initData();
	   //初始化数据
	   function initData() {  
	      for (var i=0;i < 3;i++) {           
	           testData.testArrys.push("M"+i);     
	      }  
	  }    
	 //下拉刷新    
	 function doRefreshMore() { 
	       for (var i=0;i < 5;i++) {            
	          testData.testArrys.push("AA:"+i);  
	      }       
	    endRefreshAction();
	  } 
	  //停止刷新
	  function endRefreshAction() {  
	        $scope.$broadcast('scroll.refreshComplete');
	  }
	  
	$scope.moredata=true;
  	$scope.loadMore = function() {
  		var newList = List3.page(1);
  		$scope.list3=$scope.list3.concat(newList);
  		if(newList.length == 0){
  			$scope.moredata==false;
  		}
  		
	    $scope.$broadcast('scroll.infiniteScrollComplete');
   
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  })
    // 隐藏加载框 
    
    // 确认可以刷新  
    // 停止刷新状态  
 
  



})

.controller('PersonalCtrl', function($scope,$state, $stateParams, List) {
//$scope.list = List.get($stateParams.chatId);
	$scope.user={
		username:'',
		password:'',
		email:'',
		agpassword:'',
		phone:'',
		
	}
	
	$scope.login=function(){
		if(!!$scope.user.username&&!!$scope.user.password){
			$state.go('tab.home')
		}
	}
	
	 
})

.controller('CourseCtrl', function ($scope,$state,$ionicPopup, courseFirst, courseSecond) {
    $scope.tz_study = function (myId) {
      window.location.href='#/tab/myStudy/'+myId
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
    
     $scope.showAlert = function(res) {
     var alertPopup = $ionicPopup.alert({
       title: '信息',
       template: 'ID为'+res
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   	}
   
    //删除课程
	$scope.onItemDelete = function(i,item) {
		console.log(i)
		i.splice(i.indexOf(item), 1);
	};
  	
  	
    $scope.itemSec = courseSecond.all();
})
  


  .controller("StudyCtrl", function ($scope, $state, studyList, pingjiaList, $ionicModal) {
  	
    $scope.studymulu = studyList.all();
    $scope.aList = pingjiaList.all();
    console.log($scope.aList);
    // 目录和详情的标签切换
    $scope.mymulu = true;
    $scope.myxiangqing = false;
    $scope.color = {color:"#63aafc"};
    
     $scope.back = function ( ) {
      window.location.href='#/tab/mycourse'
    };
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

  
//.controller('PublicCtrl', function($scope, $state, $http, $ionicPopup, AuthService,$rootScope) {
////    显示控制器
//  $scope.$on('$ionicView.enter',function(){
//      $rootScope.hideTabs=false;
//  })
//  
//	$scope.show=false;//控制标题栏是否显示  
//	$scope.transrate=0;//控制标题栏透明度  
//
//})
.directive('hideTabs', function($rootScope) { 
	return { 
		restrict: 'A', 
		link: function(scope, element, attributes) { 
			scope.$on('$ionicView.beforeEnter', function() { 
				scope.$watch(attributes.hideTabs, function(value){ 
						$rootScope.hideTabs = 'tabs-item-hide'; 
					}); 
				}); 
				scope.$on('$ionicView.beforeLeave', function() { 
					scope.$watch(attributes.hideTabs, function(value){ 
					$rootScope.hideTabs = 'tabs-item-hide'; 
				}); 
				scope.$watch('$destroy',function(){ 
					$rootScope.hideTabs = false; 
				}) 
			}); 
		} 
	}; 
});