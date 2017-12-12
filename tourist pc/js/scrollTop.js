
$(function(){
	//杩斿洖椤堕儴鏁堟灉锛堝垽鏂槸鍚﹀湪椤堕儴浠ラ殣钘忔樉绀烘寜閽級
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#scrollTop_wrap').fadeIn();
		} else {
			$('#scrollTop_wrap').fadeOut(0);
		}
	});

	// 鐐瑰嚮杩斿洖椤堕儴婊氬姩
	$('#scrollTop').click(function () {
		
		$(this).parent().animate({"bottom":1000,"opacity":0},400,function(){
			$('#scrollTop_wrap').css("opacity",1).fadeOut(0).css("bottom",200);
		});
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	});
		
	
	
})
