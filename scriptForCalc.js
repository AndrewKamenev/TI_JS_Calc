$(document).ready(function(){
	$('.button').on('click', function(){
		if($(this).html() === ','){
			$('input').val($('input').val()+'.');
		}
		else $('input').val($('input').val()+$(this).html());
	});
	$('.clear').on('click', function(){
		$('#expression').html('');
		$('input').val('');
	});
	$('.deleteDigit').on('click', function(){
		var tempText = $('input').val();
		var newText = tempText.split('').slice(0, tempText.length-1).join('');
		$('input').val(newText);
	});

	var res;
	var countOperations = 0;
	var arrayDigits = [];

	var res;
	var countOperations = 0;
	var arrayDigits = [];

	$('.plus, .minus, .multiplication, .divide').on('click', function(){
			$('#expression').html($('input').val()+$(this).html());
			arrayDigits[countOperations] = +$('input').val();
			countOperations++;
			$('input').val('');
		});


	$('.equal').on('click', function(){
		arrayDigits[countOperations] = +$('input').val();
		var temp = $('#expression').html().split('');
		switch(temp[temp.length-1]){
			case '-': res = arrayDigits[countOperations-1] - arrayDigits[countOperations]; break; 
			case '+': res = arrayDigits[countOperations-1] + arrayDigits[countOperations]; break; 
			case '*': res = arrayDigits[countOperations-1] * arrayDigits[countOperations]; break; 
			case '/': res = arrayDigits[countOperations-1] / arrayDigits[countOperations]; break; 
		};
		$('#expression').html($('#expression').html()+$('input').val()+'='+res);
		$('input').val(res);
	});
});