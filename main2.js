$('.frame1-banner').bind('click',function(){
	$('.frame1').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame2').css({'-webkit-transform':'translateX(0)','opacity':1});
	
	// 倒计时
	frame2_second = 59;
	setInterval(function(){
		$('.frame2-second').text(frame2_second--);
		if(frame2_second<0){
			frame2_second = 59;
		}
	},1000);
	// 倒计时 end

	// 好友消息展示
	setTimeout(function(){
		$('.frame2-friend-support').css({left:0});
		$('.frame2-friend-avatar').addClass('frame2-friend-avatar-active');
	},1500);
	
});

$('.frame2-btn-baizhi').bind('click',function(){
	var num = parseInt($('.frame2-num1 .num').text());
	console.log(num);
	if(num>298650){
		alert('你已经支持过了！');
		setTimeout(function(){
			$('.frame2').css({'-webkit-transform':'translateX(-100%)','opacity':0});
			$('.frame3').css({'-webkit-transform':'translateX(0)','opacity':1});
		},1000);
	}
	else{
		$('.frame2-num1 .num').text(298651);
		$('.frame2-suppoert-bar').css({'left':0});
		setTimeout(function(){
			$('.frame2').css({'-webkit-transform':'translateX(-100%)','opacity':0});
			$('.frame3').css({'-webkit-transform':'translateX(0)','opacity':1});
		},1000);
	}
});

$('.frame3-choose').bind('click',function(){
	var $icon = $('.frame3-icon-choose');
	if($icon.hasClass('hide')){
		$icon.removeClass('hide');
	}
	else{
		$icon.addClass('hide');
	}
});

$('.frame3-icon-choose').bind('click',function(){
	$(this).addClass('hide');
});

$('.frame3-btn-ok').bind('click',function(){
	$('.frame3').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame4').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame4-btn-pay').bind('click',function(){
	$('.frame4-cover').css({'opacity':1});
	$('.frame4-dialog').css({'-webkit-transform':'translateY(260px)'});
	$('.frame4-keyboard').css({'-webkit-transform':'translateY(-216px)'});
	var keyboardIndex = 1;
	var codeIndex = 1;
	setTimeout(function(){
		var keyboardInter = setInterval(function(){
			$('.frame4-keyboard-code'+keyboardIndex).removeClass('hide');
			$('.frame4-dialog-code'+codeIndex).removeClass('hide');
			var tmpIndex = keyboardIndex;
			setTimeout(function(){
				$('.frame4-keyboard-code'+tmpIndex).addClass('hide');
			},200);
			keyboardIndex++;
			codeIndex++;
			if(codeIndex>6){
				clearInterval(keyboardInter);
				$('.frame4').css({'-webkit-transform':'translateX(-100%)','opacity':0});
				$('.frame5').css({'-webkit-transform':'translateX(0)','opacity':1});
				setTimeout(function(){
					$('.frame5-cover').css({'opacity':1});
					$('.frame5-option').css({'-webkit-transform':'translateY(-416px)','opacity':1});
				},200);

				// RESET
				$('.frame4-cover').css({'opacity':0});
				$('.frame4-dialog').css({'-webkit-transform':'translateY(-260px)'});
				$('.frame4-keyboard').css({'-webkit-transform':'translateY(216px)'});	
				$('.frame4-dialog-code').addClass('hide');
			}
		},400);
	},200);
});

$('.frame5-btn-share').bind('click',function(){
	$('.frame5-icon-share').removeClass('hide');
	$('.frame5').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame6').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame5-btn-cancel').bind('click',function(){
	$('.frame5-cover').css({'opacity':0});
	$('.frame5-option').css({'-webkit-transform':'translateY(416px)','opacity':0});
});

$('.frame6-btn-select').bind('click',function(){
	$('.frame6-select').removeClass('hide');
	setTimeout(function(){
		$('.frame6').css({'-webkit-transform':'translateX(-100%)','opacity':0});
		$('.frame7').css({'-webkit-transform':'translateX(0)','opacity':1});
		$('.frame6-select').addClass('hide');
		setTimeout(function(){
			$('.frame7-msg').css({'-webkit-transform':'translateY(-306px)'});
		},300);
	},200);
});

$('.frame7-msg').bind('click',function(){
	$('.frame7').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame8').css({'-webkit-transform':'translateX(0)','opacity':1});
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
	$('.frame7-msg').css({'-webkit-transform':'translateY(306px)'});
	setTimeout(function(){
			$('.frame7-msg').css({'-webkit-transform':'translateY(-306px)'});
	},300);
});
// 返回 end