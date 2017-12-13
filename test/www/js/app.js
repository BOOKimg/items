// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  /*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  /*用于修改安卓tab居下 --结束*/


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:
    //首页
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })
      //课程列表页
      .state('tab.lessonlist', {
        url: '/lessonlist',
        views: {
          'tab-lessonlist': {
            templateUrl: 'templates/tab-lessonlist.html',
            controller: 'LessonlistCtrl'
          }
        }
      })
      //我的课程页面
      .state('tab.mycourse', {
        url: '/mycourse',
        cache:'false',
        views: {
          'tab-mycourse': {
            templateUrl: 'templates/tab-mycourse.html',
            controller: 'MycourseCtrl'
          }
        }
      })

      //个人信息页面登录
      .state('tab.personal', {
        url: '/personal',
        cache:'false',
        views: {
          'tab-personal': {
            templateUrl: 'templates/tab-personal.html',
            controller: 'PersonalCtrl'
          }
        }
      })
      //个人信息
      .state('tab.information', {
        url: '/information',
        cache:'false',
        views: {
          'tab-personal': {
            templateUrl: 'templates/tab-information.html',
            controller: 'InformationCtrl'
          }
        }
      })
      //注册页面
      .state('tab.register', {
        url: '/register',
        views: {
          'tab-personal': {
            templateUrl: 'templates/tab-register.html',
            controller: 'RegisterCtrl'
          }
        }
      })
      //忘记密码页面
      .state('tab.forget', {
        url: '/forget',
        views: {
          'tab-personal': {
            templateUrl: 'templates/tab-forget.html',
            controller: 'ForgetCtrl'
          }
        }
      })


      //首次进入的轮播
      .state('tab.firstEnter', {
        url: '/firstEnter',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-firstEnter.html',
            controller: 'FirstEnterCtrl'
          }
        }
      })

      //首页学习页面
      .state('tab.homeStudy', {
        url: '/homeStudy/:myId',
        cache:'false',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-study.html',
            controller: 'StudyCtrl'
          }
        }
      })

      //课程列表学习页面
      .state('tab.lesslistStudy', {
        url: '/lesslistStudy/:myId',
        cache:'false',
        views: {
          'tab-lessonlist': { /*只修改了这里*/
            templateUrl: 'templates/tab-study.html',
            controller: 'StudyCtrl'
          }
        }
      })

      //我的课程学习页面
      .state('tab.myStudy', {
        url: '/myStudy/:myId',
        cache:'false',
        views: {
          'tab-mycourse': {
            templateUrl: 'templates/tab-study.html',
            controller: 'StudyCtrl'
          }
        }
      })
//设置页面
      .state('setInfor', {
        url: '/setInfor',
        cache:false,
        templateUrl: 'templates/tab-setInfor.html',
        controller: 'SetInforCtrl'
      })

// if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');
});
