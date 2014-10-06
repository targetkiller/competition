$('.frame1-list-link').bind('click',function(){
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

});

$('.frame2-move-tips').bind('click',function(){
	$(this).addClass('hide');
});

$('.frame2-btn-detail').bind('click',function(){
	$('.frame2').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame3').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame2-btn-buy').bind('click',function(){
	$('.frame2').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame4').css({'-webkit-transform':'translateX(0)','opacity':1});
	// 更改后面的价格
	var price = $('.frame2-price .num').text();
	$('.frame4-price').text('￥'+price);
});

$('.frame4-choose').bind('click',function(){
	var $icon = $('.frame4-icon-choose');
	if($icon.hasClass('hide')){
		$icon.removeClass('hide');
	}
	else{
		$icon.addClass('hide');
	}
});

$('.frame4-icon-choose').bind('click',function(){
	$(this).addClass('hide');
});

$('.frame4-btn-ok').bind('click',function(){
	$('.frame4').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame5').css({'-webkit-transform':'translateX(0)','opacity':1});
});

$('.frame5-btn-pay').bind('click',function(){
	$('.frame5-cover').css({'opacity':1});
	$('.frame5-dialog').css({'-webkit-transform':'translateY(260px)'});
	$('.frame5-keyboard').css({'-webkit-transform':'translateY(-216px)'});
	var keyboardIndex = 1;
	var codeIndex = 1;
	setTimeout(function(){
		var keyboardInter = setInterval(function(){
			$('.frame5-keyboard-code'+keyboardIndex).removeClass('hide');
			$('.frame5-dialog-code'+codeIndex).removeClass('hide');
			var tmpIndex = keyboardIndex;
			setTimeout(function(){
				$('.frame5-keyboard-code'+tmpIndex).addClass('hide');
			},200);
			keyboardIndex++;
			codeIndex++;
			if(codeIndex>6){
				clearInterval(keyboardInter);
				$('.frame5').css({'-webkit-transform':'translateX(-100%)','opacity':0});
				$('.frame6').css({'-webkit-transform':'translateX(0)','opacity':1});

				// RESET
				$('.frame5-cover').css({'opacity':0});
				$('.frame5-dialog').css({'-webkit-transform':'translateY(-260px)'});
				$('.frame5-keyboard').css({'-webkit-transform':'translateY(216px)'});	
				$('.frame5-dialog-code').addClass('hide');
			}
		},400);
	},200);
});

$('.frame6-btn-buy').bind('click',function(){
	$('.frame6-cover').css({'opacity':1,'bottom':0});
	$('.frame6-dialog').css({'-webkit-transform':'translateY(420px)'});
});

$('.frame6-dialog-ok').bind('click',function(){
	$('.frame6').css({'-webkit-transform':'translateX(-100%)','opacity':0});
	$('.frame7').css({'-webkit-transform':'translateX(0)','opacity':1});
			
});

$('.frame7-btn-select').bind('click',function(){
	$('.frame7-select').removeClass('hide');
	setTimeout(function(){
		$('.frame7').css({'-webkit-transform':'translateX(-100%)','opacity':0});
		$('.frame8').css({'-webkit-transform':'translateX(0)','opacity':1});
		$('.frame7-select').addClass('hide');
		setTimeout(function(){
			$('.frame8-msg').css({'-webkit-transform':'translateY(-306px)'});
		},300);
	},200);
});



// move bar
var device_width = document.body.clientWidth;
var adjustClientX = (device_width-320)/2;
var touch_start = 16;
var touch_end = 242;
var frame2Bar = $('#frame2Bar')[0];
frame2Bar.addEventListener('touchstart',touchStart,false);
frame2Bar.addEventListener('touchmove',touchMove,false);
frame2Bar.addEventListener('touchend',touchEnd,false);

function touchStart(event){
  var event = event || window.event;
}

function touchMove(event){
  event.preventDefault();
  var event = event || window.event;
  var distance = event.touches[0].clientX-adjustClientX;
  if(distance < touch_end && distance > touch_start){
    $('#frame2Bar').css('left',distance);
    $num = $('.frame2-move-bar .num');
    $num2 = $('.frame2-price .num');
    if(distance>242){$num.text(10);$num2.text('25.00')}
    else if(distance>225){$num.text(9);$num2.text('25.00')}
    else if(distance>196){$num.text(8);$num2.text('25.00')}
    else if(distance>168){$num.text(7);$num2.text('25.00')}
    else if(distance>139){$num.text(6);$num2.text('26.00')}
    else if(distance>111){$num.text(5);$num2.text('26.00')}
    else if(distance>73){$num.text(4);$num2.text('27.00')}
    else if(distance>44){$num.text(3);$num2.text('27.00')}
    else{$num.text(2);$num2.text('29.00')}
  }
}

function touchEnd(event){
  var event = event || window.event;
}
// move bar end

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
	$('.frame2').css({'-webkit-transform':'translateX(0)','opacity':1});
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
	$('.frame8-msg').css({'-webkit-transform':'translateY(306px)'});
});
// 返回 end


