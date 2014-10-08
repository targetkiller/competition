$('.frame1-link').bind('click',function(){
	$('.frame1').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame2').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame2-tips').bind('click',function(){
	$(this).addClass('hide');
});

$('.frame2-btn-price').bind('click',function(){
	$(this).css('opacity',1);
	$('.frame2-alert').removeClass('hide').css('opacity',1);
	setTimeout(function(){
		$('.frame2-alert').css('opacity',0);
		setTimeout(function(){
			$('.frame2-alert').addClass('hide');
		},300);
	},500);
});

$('.frame3-btn-buy').bind('click',function(){
	$('.frame3-alert').removeClass('hide').css('opacity',1);
	setTimeout(function(){
		$('.frame3-alert').css('opacity',0);
		setTimeout(function(){
			$('.frame3-alert').addClass('hide');
		},300);
	},500);
});

$('.frame2-list-link').bind('click',function(){
	$('.frame2').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame3').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame3-btn-list').bind('click',function(){
	$('.frame3').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame4').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame4-btn-send').bind('click',function(){
	$('.frame4').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame6').css({'-webkit-transform':'translateX(0)','opacity':1});
});

// $('.frame5-btn-pay').bind('click',function(){
// 	$('.frame5').css({'-webkit-transform':'translateX(-100%)','opacity':0});
// 	$('.frame6').css({'-webkit-transform':'translateX(0)','opacity':1});
// });

$('.frame6-btn-pay').bind('click',function(){
	$('.frame6-cover').css({'opacity':1});
	$('.frame6-dialog').css({'-webkit-transform':'translateY(260px)'});
	$('.frame6-keyboard').css({'-webkit-transform':'translateY(-400px)'});
	var keyboardIndex = 1;
	var codeIndex = 1;
	setTimeout(function(){
		var keyboardInter = setInterval(function(){
			$('.frame6-keyboard-code'+keyboardIndex).removeClass('hide');
			$('.frame6-dialog-code'+codeIndex).removeClass('hide');
			var tmpIndex = keyboardIndex;
			setTimeout(function(){
				$('.frame6-keyboard-code'+tmpIndex).addClass('hide');
			},200);
			keyboardIndex++;
			codeIndex++;
			if(codeIndex>6){
				clearInterval(keyboardInter);
				$('.frame6').css({'-webkit-transform':'translateX(-100%)','opacity':0});
				$('.frame8').css({'-webkit-transform':'translateX(0)','opacity':1});

				// RESET
				$('.frame6-cover').css({'opacity':0});
				$('.frame6-dialog').css({'-webkit-transform':'translateY(-260px)'});
				$('.frame6-keyboard').css({'-webkit-transform':'translateY(216px)'});	
				$('.frame6-dialog-code').addClass('hide');
			}
		},400);
	},200);
});

$('.frame8-btn-share').bind('click',function(){
	$('.frame8-tips').removeClass('hide');
});

$('.frame8-btn-share2').bind('click',function(){
	$('.frame8').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame9').css({'-webkit-transform':'translateX(0)','opacity':1});

});

$('.frame9-btn-select').bind('click',function(){
	$('.frame9-select').removeClass('hide');
	setTimeout(function(){
		$('.frame9').css({'-webkit-transform':'translateX(-100%)','opacity':0});
		$('.frame10').css({'-webkit-transform':'translateX(0)','opacity':1});
		$('.frame9-select').addClass('hide');
		setTimeout(function(){
			$('.frame10-msg').css({'-webkit-transform':'translateY(-252px)'});
		},300);
	},200);
});

$('.frame10-msg').bind('click',function(){
	$('.frame10').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame11').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame11-btn-open').bind('click',function(){
	$('.frame11').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame12').css({'-webkit-transform':'translateX(0)','opacity':1});
	setTimeout(function(){
		$('.frame12-dialog').css({'-webkit-transform':'translateY(-108px)','opacity':1});
	},300);
});

// 返回
$('.frame2 .btn-back').bind('click',function(){
	$('.frame2').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame1').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame3 .btn-back').bind('click',function(){
	$('.frame3').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame2').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame4 .btn-back').bind('click',function(){
	$('.frame4').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame3').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame5 .btn-back').bind('click',function(){
	$('.frame5').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame4').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame6 .btn-back').bind('click',function(){
	$('.frame6').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame5').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame7 .btn-back').bind('click',function(){
	$('.frame7').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame6').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame8 .btn-back').bind('click',function(){
	$('.frame8').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame7').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame9 .btn-back').bind('click',function(){
	$('.frame9').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame8').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame10 .btn-back').bind('click',function(){
	$('.frame10').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame9').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame11 .btn-back').bind('click',function(){
	$('.frame11').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame10').css({'-webkit-transform':'translateX(0)','opacity':1});
	$('.frame10-msg').css({'-webkit-transform':'translateY(306px)'});
	setTimeout(function(){
			$('.frame10-msg').css({'-webkit-transform':'translateY(-306px)'});
	},300);
});

$('.frame12 .btn-back').bind('click',function(){
	$('.frame12').css({'-webkit-transform':'translateX(100%)','opacity':0});
	$('.frame11').css({'-webkit-transform':'translateX(0)','opacity':1});
});
// 返回 end