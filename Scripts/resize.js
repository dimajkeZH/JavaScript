function ResizeWindow(){
	//* RESIZE vacancies *//
	var item_info = $(".vacancies_info_text").outerHeight(),
	item_img = $(".vacancies_info_item_img").outerHeight(); 
	var max = Math.max(item_info,item_img); 
	$(".vacancies_info_item").height(max) ; 
	//console.log("info_h" + item_info + " img_h: " + item_img + " max:" + max);
	//* RESIZE images_text *//
	var item_info = $(".images_text_item_info").outerHeight(), 
	item_img = $(".images_text_item_img").outerHeight(); 
	var max = Math.max(item_info,item_img); 
	$(".images_text_item").height(max); 
	//console.log("info_h" + item_info + " img_h: " + item_img + " max:" + max);
}
$(window).resize(ResizeWindow);
$(function() { 
	ResizeWindow();
});