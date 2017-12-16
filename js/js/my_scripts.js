!(function($){
$(document).ready(function(){
	$(".categorychecklist").find(
		"input[type=radio]").prop('required',true);
        
    $("#post").click(function(){
    	
    	checked = $(".categorychecklist").find(
		"input[type=radio]").is(':checked');
		if(!checked) {	
            $("#post").validate({ 
    	invalidHandler: function() { 
    		$('#publish').removeClass(
    			'button-primary-disabled'); 
    		$('#ajax-loading').css('visibility', 'hidden'); 
    		 alert("You must check at least one category.");
            return false;
    	} 
		});
           
		} 
    });




});
})(window.jQuery);



//    