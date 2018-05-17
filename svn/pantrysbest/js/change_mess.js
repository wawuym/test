$(function(){
	var wid=$(window).width();
		if (wid<768) {
			$('.name').css('width','100%')
			$('.email').css('width','100%')
			$('.add').css('width','100%')
			$('.ma').css('width','100%')
			$('.sp').css('width','100%')
			$('#name').attr('placeholder','')
			$('.input_text').css('width','100%')
		}else{
			$('.name').css('width','45%')
			$('.email').css('width','45%')
			$('.add').css('width','45%')
			$('.ma').css('width','45%')
			$('.sp').css('width','45%')
			$('#name').attr('placeholder','请输入2-18个中文字符或英文字母')
			$('.input_text').css('width','13%')
		}
	$(window).on('resize',function(){
		var wid=$(window).width();
		if (wid<768) {
			$('.name').css('width','100%')
			$('.email').css('width','100%')
			$('.add').css('width','100%')
			$('.ma').css('width','100%')
			$('.sp').css('width','100%')
			$('#name').attr('placeholder','')
			$('.input_text').css('width','100%')
		}else{
			$('.name').css('width','45%')
			$('.email').css('width','45%')
			$('.add').css('width','45%')
			$('.ma').css('width','45%')
			$('.sp').css('width','45%')
			$('#name').attr('placeholder','请输入2-18个中文字符或英文字母')
			$('.input_text').css('width','13%')
		}
	})
})