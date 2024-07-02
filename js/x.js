//jQuery时间
$(document).ready(function() {
	function updateDate() {
		var today = new Date();
		var options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		var date = today.toLocaleDateString('zh-CN', options) + ' ' + today.toLocaleTimeString('zh-CN');
		$('#currentDate').text(date);
	}

	// 调用函数以更新日期
	updateDate();

	// 如果您想要日期实时更新（例如，每秒更新），可以设置setInterval
	setInterval(updateDate, 1000);
});
// 导航调用日期
$(document).ready(function() {
	function updateDate() {
		var today = new Date();
		var options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		var date = today.toLocaleDateString('zh-CN', options);
		$('#dateDisplay').text(date);
	}
	// 调用函数以更新日期
	updateDate();
	// 如果您想要日期实时更新（例如，每秒更新），可以设置setInterval
	// setInterval(updateDate, 1000);
});
// haerbin.html的图片切换
			$(function() {
				// 绑定鼠标悬停事件到所有具有 'specific-image' 类的图片元素  
				// 当鼠标指针移动到这些图片上时，执行以下功能  
				$('.specific-image').mousemove(function() {
					// 更改当前图片元素的src属性，使其指向 'img/s1.jpg' 这张图片  
					$(this).attr('src', 'img/heb/2.png');
				});
				// 当鼠标指针从这些图片上移开时，执行以下功能  
				$('.specific-image').mouseout(function() {
					// 更改当前图片元素的src属性，使其指向 'img/1.jpeg' 这张图片  
					$(this).attr('src', 'img/heb/1.jpeg');
				});
			});

//小脚丫
$(function() {
	// 当文档加载完成后，执行以下函数  
	$(document).mousemove(function(e) {
		// 为整个文档绑定一个鼠标移动事件监听器  
		// 当鼠标在文档上移动时，会触发这个事件，并传入一个事件对象e  
		$('#pic1').css('left', e.pageX + 3 + 'px');
		// 获取页面上ID为'pic1'的元素，并设置其CSS的'left'属性  
		// e.pageX表示鼠标当前的水平坐标（相对于文档）  
		// +3是为了让图片稍微偏离鼠标当前的位置  
		// 'px'是CSS属性值的单位  
		$('#pic1').css('top', e.pageY + 3 + 'px');
		// 类似地，设置ID为'pic1'的元素的CSS的'top'属性  
		// e.pageY表示鼠标当前的垂直坐标（相对于文档）  
		// 同样，+3是为了让图片稍微偏离鼠标当前的位置  
	});
});


// 弹窗
$(function() {
	// 需求：广告ad部分先滑入，再滑出，然后淡入。之后绑定事件，当点击span时弹出。  
	// 步骤：  

	// 选择所有class为"ad"的元素，并使用slideDown方法使这些元素在1000毫秒（即1秒）内滑入视图。  
	$(".ad").slideDown(1000).

	// 在元素滑入视图之后，使用slideUp方法使这些元素在1000毫秒内滑出视图。  
	slideUp(1000).

	// 在元素滑出视图之后，使用fadeIn方法使这些元素在1000毫秒内淡入视图。  
	fadeIn(1000).

	// 选择所有class为"ad"的元素的子元素span，并为它们绑定click事件处理函数。  
	children("span").click(function() {
		// 当span被点击时，使用fadeOut方法使它的父元素（即class为"ad"的元素）在1000毫秒内淡出视图。  
		$(this).parent().fadeOut(1000);
	});
});



// 下拉风格
$(document).ready(function() {
    // 当有类名为"btn-slide"的元素被点击时
    $(".btn-slide").click(function() {
        // 找到ID为"panel"的元素，并使用slideToggle方法切换其显示和隐藏状态
        // "slow"参数表示动画效果持续时间为慢速
        $("#panel").slideToggle("slow");
        // 为当前点击的元素（即按钮）添加或移除"active"类名
        // 以此来切换按钮的激活状态样式
        $(this).toggleClass("active");
    });
});

// 隐藏
$(document).ready(function() {
    // 为类名为"accordion"的元素内的第一个h3元素添加"active"类
    // 通常这会改变该元素的样式，使其看起来是激活状态
    $(".accordion h3:first").addClass("active");
    // 隐藏所有类名为"accordion"的元素内除了第一个p元素之外的所有p元素
    // 这意味着初始状态下，只有第一个内容块是可见的
    $(".accordion p:not(:first)").hide();

    // 当类名为"accordion"的元素内的h3元素被点击时
    $(".accordion h3").click(function() {
        // 找到当前点击的h3元素紧随其后的p元素，并使用slideToggle方法切换其显示和隐藏状态
        // "slow"参数表示动画效果持续时间为慢速
        $(this).next("p").slideToggle("slow")
            // 找到所有可见的p元素（即已经展开的内容块），并使用slideUp方法将它们隐藏
            .siblings("p:visible").slideUp("slow");
        // 为当前点击的h3元素切换"active"类名，以改变其样式
        $(this).toggleClass("active");
        // 找到当前点击的h3元素的所有兄弟h3元素，并移除它们的"active"类名
        // 这样可以确保只有一个标题处于激活状态
        $(this).siblings("h3").removeClass("active");
    });
});

// liaoning
$(document).ready(function() {
    // 当有类名为"pane"的元素内的类名为"delete"的元素被点击时
    $(".pane .delete").click(function() {
        // 找到当前点击的元素（即删除按钮）的所有祖先元素中第一个类名为"pane"的元素
        // 并使用animate方法改变其透明度，使其逐渐消失
        // 'hide'是一个特殊的值，表示将透明度设置为0
        // "slow"参数表示动画效果持续时间为慢速
        $(this).parents(".pane").animate({
            opacity: 'hide'
        }, "slow");
    });
});

// beijing
$(document).ready(function() { // 当文档（DOM）完全加载后，执行这个函数内的代码
	$("h2").append("<em></em>"); // 在所有的h2标签内追加一个<em>标签
	$(".thumbs a").mouseover(function() { // 当鼠标悬停在类名为thumbs的元素内的a标签上时，执行以下函数
		var lujing = $(this).attr("href"); // 获取当前a标签的href属性值，并赋值给变量lujing
		var biaoti = $(this).attr("title"); // 获取当前a标签的title属性值，并赋值给变量biaoti
		$("#largeImg").attr({ // 修改id为largeImg的元素的属性
			src: lujing, // 将src属性设置为变量lujing的值
			alt: biaoti // 将alt属性设置为变量biaoti的值
		});
		$("h2 em").html(" (" + biaoti + ")"); // 将所有的h2标签内的em标签的内容设置为包含biaoti变量的字符串
	});
}); // 文档就绪函数结束

// 个人简历
$(function() {
  // hover: 二合一事件，第一个参数是鼠标进入，第二个参数是鼠标离开
  $("#jl").hover(function() {
    $(this).css('opacity', '0.6');
  }, function() {
    $(this).css('opacity', '1');
  });
});
``