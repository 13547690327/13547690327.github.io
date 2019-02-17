$(document).ready(function () {
    $(window).scroll(function () {
        var a = $(".demo").offset().top;
        if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height()-200)) {
            $(function(){
                $(".demo").addClass("demo_animate");
            })
        }
    });
	var search_text = document.getElementById('search_text');
	var search_button = document.getElementById('search_button');
	var baiduurl_text =  document.querySelectorAll("li div");
	var baiduurl = "https://www.baidu.com/s?wd=";
	search_button.addEventListener('click',function() {
				window.open(baiduurl + search_text.value)
		});
	for (var i = 0 ; i<baiduurl_text.length ; i++) {
		(function (arg){
			baiduurl_text[i].addEventListener('click',function() {
			//	console.log(b[arg])
				window.open(baiduurl + baiduurl_text[arg].innerHTML)
			})
		})(i);
 	};
});

	