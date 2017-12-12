/* 李小龙   2017-10-11 create*/
var GLOBLE = GLOBLE || {};
$(function(){
	//链入加载头部和底部
	$(".head").load("head.html");
    $(".foot").load("foot.html");
	
	//banner轮播
	//首先获取元素 并且赋值给变量
    (function(){
        var oDiv = $('.banner_wrap');
        var oPrev = oDiv.find(".prev");
        var oNext = oDiv.find(".next");
        var aSpan = oDiv.find(".middle span");
        var animateFater = null;
        var nowIndex = 0;

       //第一部分的轮播图效果
        animateFater = $(".banner_one").eq(0);
        animateImage();

        oNext.click(function(){
            if( nowIndex < ($(".banner_change .middle span").length-1) ){
                nowIndex++;
            }else{
                nowIndex = 0;
            }
            bannerAnimate();
        });

        oPrev.click(function(){
            if( nowIndex >0 ){
                nowIndex--;
            }else{
                nowIndex = ($(".banner_change .middle span").length-1)
            }
            bannerAnimate();
        });

        aSpan.click(function(){
            nowIndex = $(this).index();
            bannerAnimate();
        })

        function bannerAnimate(){

            $(".banner_change .middle span").removeClass("now");
            $(".banner_change .middle span").eq(nowIndex).addClass("now");
            $(".banner_one").fadeOut(200);
            animateFater = $(".banner_one").eq(nowIndex);
            animateFater.fadeIn(200);
            animateImage()
        }

        function animateImage(){
            animateFater.find(".image01").show().addClass("animated  fadeInLeft");
            setTimeout(function(){
                animateFater.find(".image02").show().addClass("animated  bounceInRight");
                animateFater.find(".image03").show().addClass("animated  fadeIn");
            },300);
        }


    })();
	
	
	//主要产品的轮播效果
	(function(){
		var oDiv = $('#chanping01');
		var oPrev = oDiv.find(".prev");
		var oNext = oDiv.find(".next");
		var aDot = oDiv.find(".now_linebtn_one");
		var aSpan = oDiv.find(".now_line span");
		var aContents = oDiv.find(".content_one");
		var nowIndex = 0;
		
		
		oNext.click(function(){
			nowIndex++;
			if(nowIndex>=aDot.length){
				nowIndex = 0;
			}
			doFade("fadeInRight");
		});
		oPrev.click(function(){
			nowIndex--;
			if(nowIndex<0){
				nowIndex = aDot.length-1;
			}
			doFade("fadeInLeft");
		});
		aSpan.click(function(){
			var index = aDot.index($(this).parent());
			var action = (nowIndex>index)?"fadeInLeft":"fadeInRight";
			nowIndex = index;
			doFade(action);
		});
		
		function doFade(action){
			aDot.removeClass("now").eq(nowIndex).addClass("now");
			aContents.fadeOut(0).eq(nowIndex).fadeIn(200);
			aContents.eq(nowIndex).find("h1, p, img").attr("class","").addClass("animated "+action);
		}
	})();
	
	
	
	
	//业务范围内的动画效果 
	
	(function(){
		var oDiv = $('.yewu');
		var aCenterimgs = oDiv.find(".centerimg");
		var aIcons = oDiv.find(".shousuo_icon");
		var aDitails = oDiv.find(".yewucontent_ditail");
		var nowIndex = 0;
		
		//放到图片上会小小的旋转一下
		aCenterimgs.add(aIcons).hover(function(){
			$(this).addClass("animated tada");
		},function(){
			$(this).removeClass("animated tada");
		});
		
		//点击右边的xx可以收放
		aIcons.click(function(){
			nowIndex = aIcons.index($(this));
			doSlide();
		})
		
		//点击左边的图片可以收放效果
		aCenterimgs.click(function(){
			nowIndex = aCenterimgs.index($(this));
			doSlide();
		})
		
		//封装一个文字的收放函数
		function doSlide(){
			if(aIcons.eq(nowIndex).hasClass("zhankai")){
				aDitails.stop().slideUp(300);
				aIcons.removeClass("zhankai");
			}else{
				aDitails.stop().slideUp(300).delay(300).eq(nowIndex).slideDown(300);
				aIcons.removeClass("zhankai").eq(nowIndex).addClass("zhankai");
			}
		}
		
	})();
	
	
	
	
	
	
	
	
	
	//团队介绍轮播图 外加向右弹弹弹的效果
	(function(){
		var oDiv = $('.teamcontent_wrap');
		var oPrev = oDiv.find(".prev");
		var oNext = oDiv.find(".next");
		var moveDiv = oDiv.find(".team_move");
		var timer = null;
		var nextTimer = null;
		var prevTimer = null;
		var nowIndex = 0;
		
		oPrev.click(function(){
			clearTimeout( prevTimer );
			prevTimer = setTimeout(function(){
				doPrev();
			},200)
			
		});
		oNext.click(function(){
			clearTimeout( nextTimer );
			nextTimer = setTimeout(function(){
				doNext();
			},200)
			
		});
		oDiv.hover(function(){
				clearInterval( timer );
		}, autoMove)
		
		function autoMove(){
			clearInterval( timer );
			timer = setInterval(function(){
					doNext();
				},5500)
			
		}
		autoMove();
		
		function doPrev(){
		
			moveDiv.find(".twoteam_wrap:last").insertBefore(moveDiv.find(".twoteam_wrap:first"));
			moveDiv.animate({"left": "-1100px"},0);
			moveDiv.animate({"left": "0px"},1000,'backOut');
			
			nowIndex--;
			if(nowIndex < 0){
				nowIndex = oDiv.find(".middle_points").find("span").length -1;
			}
			oDiv.find(".middle_points").find("span").removeClass("now").eq(nowIndex).addClass("now");
		
		}
		
		function doNext(){
		
			moveDiv.animate({"left": "-1100px"},1000,'backIn',function(){
				moveDiv.find(".twoteam_wrap:first").appendTo(moveDiv);
				moveDiv.animate({"left": "0px"},0);
			});
			
			nowIndex++;
			if(nowIndex >= oDiv.find(".middle_points").find("span").length){
				nowIndex = 0;
			}
			oDiv.find(".middle_points").find("span").removeClass("now").eq(nowIndex).addClass("now");
		
		}
	})();
	

	
	
		
	
	
})
