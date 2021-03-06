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




.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
 
 $stateProvider
  .state('tab', {
    url: '/tab',
    templateUrl: 'templates/tabs.html',
    abstract: true,
  })

  // setup an abstract state for the tabs directive
//  .state('tab', {
//  url: '/tab',
//  
//  templateUrl: 'templates/tabs.html'
//})

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('tab.home-welcome', {
    url: '/home/welcome',
    views: {
    'tab-home': {	
    templateUrl: 'templates/home-welcome.html',
    controller: 'WelcomeCtrl'
    	}
    }
  })
  .state('tab.mycourse', {
      url: '/mycourse',
      views: {
        'tab-mycourse': {
          templateUrl: 'templates/tab-mycourse.html',
          controller: 'CourseCtrl'
        }
      }
    })
  
  .state('tab.personal', {
      url: '/personal',
      views: {
        'tab-personal': {
          templateUrl: 'templates/tab-personal.html',
          controller: 'PersonalCtrl'
        }
      }
    })
  
   .state('tab.personal-register', {
      url: '/personal/register',
      views: {
        'tab-personal': {
          templateUrl: 'templates/tab-register.html',
          controller: 'PersonalCtrl'
        }
      }
    })
  .state('tab.personal-change', {
    url: '/personal/change',
    views: {
      'tab-personal': {
        templateUrl: 'templates/personal-change.html',
        controller: 'PersonalCtrl'
      }
    }
  })

  .state('tab.lessonlist', {
    url: '/lessonlist',
    views: {
      'tab-lessonlist': {
        templateUrl: 'templates/tab-lessonlist.html',
        controller: 'LessonListCtrl'
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
  // if none of the above states are matched, use this as the fallback
//$urlRouterProvider.otherwise('/intro');

  $urlRouterProvider.otherwise("/tab/home");

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
})

    






