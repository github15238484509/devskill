

function queryOrder(){

	var begintime =$("#query_date_range").val().split("至")[0];
	var endtime = $("#query_date_range").val().split("至")[1];
	if(begintime!=undefined){
		begintime = begintime.trim();
	}
	if(endtime!=undefined){
		endtime = endtime.trim();
	}
	if(bpersonname!=undefined){
		bpersonname = bpersonname.trim();
	}
	if(epersonname!=undefined){
		epersonname = epersonname.trim();
	}
	
};


$(document).ready(function(){

	// 这就是时间
	$('#searchBtn').on( 'click', queryOrder);
	
	var d=new Date(); 
	
	var startDate="";
	
	var endDate = "";
	
	startDate += d.getFullYear();
	
	if((d.getMonth()+1)<10){
		startDate +="-0"+(d.getMonth()+1)+"-01"
	}else{
		startDate +="-"+(d.getMonth()+1)+"-01"
	}
	
	endDate += d.getFullYear();
	
	if((d.getMonth()+1)<10){
		if(d.getDate()<10){
			endDate +="-0"+(d.getMonth()+1)+"-0"+d.getDate();
		}else{
			endDate +="-0"+(d.getMonth()+1)+"-"+d.getDate();
		}
	}else{
		if(d.getDate()<10){
			endDate +="-"+(d.getMonth()+1)+"-0"+d.getDate();
		}else{
			endDate +="-"+(d.getMonth()+1)+"-"+d.getDate();
		}
	}
	
	var dateRange = new pickerDateRange('query_date_range', {
	 	startDate : startDate,
    	endDate : endDate,
        isTodayValid : true,
        stopToday:false,
        defaultText : ' 至 ',
        inputTrigger : 'query_date_range',
        theme : 'ta',
        success : function(obj) {}
    });


})