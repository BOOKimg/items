/*jQ easying 杩愬姩鍑芥暟 鎵╁睍*/

$.extend(jQuery.easing,{
	
	easeIn: function(x,t, b, c, d){  //鍔犻€熸洸绾�
		return c*(t/=d)*t + b;
	},
	easeOut: function(x,t, b, c, d){  //鍑忛€熸洸绾�
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(x,t, b, c, d){  //鍔犻€熷噺閫熸洸绾�
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(x,t, b, c, d){  //鍔犲姞閫熸洸绾�
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(x,t, b, c, d){  //鍑忓噺閫熸洸绾�
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(x,t, b, c, d){  //鍔犲姞閫熷噺鍑忛€熸洸绾�
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(x,t, b, c, d, a, p){  //姝ｅ鸡琛板噺鏇茬嚎锛堝脊鍔ㄦ笎鍏ワ級
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(x,t, b, c, d, a, p){    //姝ｅ鸡澧炲己鏇茬嚎锛堝脊鍔ㄦ笎鍑猴級
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(x,t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(x,t, b, c, d, s){     //鍥為€€鍔犻€燂紙鍥為€€娓愬叆锛�
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(x,t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //鍥炵缉鐨勮窛绂�
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(x,t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(x,t, b, c, d){    //寮圭悆鍑忔尟锛堝脊鐞冩笎鍑猴級
		return c - this['bounceOut'](x,d-t, 0, c, d) + b;
	},       
	bounceOut: function(x,t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(x,t, b, c, d){
		if (t < d/2) {
			return this['bounceIn'](x,t*2, 0, c, d) * 0.5 + b;
		}
		return this['bounceOut'](x,t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
	
});