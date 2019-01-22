//select all checkboxes
$("#select_all").change(function(){  //"select all" change
	var status = this.checked; // "select all" checked status
	$('.checkbox').each(function(){ //iterate all listed checkbox items
		this.checked = status; //change ".checkbox" checked status
	});
});

$('.checkbox').change(function(){ //".checkbox" change
	//uncheck "select all", if one of the listed checkbox item is unchecked
	if(this.checked == false){ //if this item is unchecked
		$("#select_all")[0].checked = false; //change "select all" checked status to false
	}

	//check "select all" if all checkbox items are checked
	if ($('.checkbox:checked').length == $('.checkbox').length ){
		$("#select_all")[0].checked = true; //change "select all" checked status to true
	}
});

//select all checkboxes
$("#select_all").change(function(){  //"select all" change
    $(".checkbox").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
});

//".checkbox" change
$('.checkbox').change(function(){
	//uncheck "select all", if one of the listed checkbox item is unchecked
    if(false == $(this).prop("checked")){ //if this item is unchecked
        $("#select_all").prop('checked', false); //change "select all" checked status to false
    }
	//check "select all" if all checkbox items are checked
	if ($('.checkbox:checked').length == $('.checkbox').length ){
		$("#select_all").prop('checked', true);
	}
});

var select_all = document.getElementById("select_all"); //select all checkbox
var checkboxes = document.getElementsByClassName("checkbox"); //checkbox items

//select all checkboxes
select_all.addEventListener("change", function(e){
	for (i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = select_all.checked;
	}
});


for (var i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener("change", function(e){ //".checkbox" change
		//uncheck "select all", if one of the listed checkbox item is unchecked
		if(this.checked == false){
			select_all.checked = false;
		}
		//check "select all" if all checkbox items are checked
		if(document.querySelectorAll('.checkbox:checked').length == checkboxes.length){
			select_all.checked = true;
		}
	});
}