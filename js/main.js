function btn_select(obj){
	
	var choose_div = document.getElementById('choose_ul');
	var sp = document.getElementById(obj.innerText);
	if(sp != null){
		choose_div.removeChild(sp);
	}else{
//		var span = document.createElement('span');
//		span.innerText = obj.innerText;
//		span.setAttribute('id',obj.innerText);
//		span.setAttribute('class','btn');
//		choose_div.appendChild(span);
		btn_click(choose_div,obj);
	}
	
	
}

function btn_click(parent,child){
	
	var div = document.createElement('div');
	div.innerText = child.innerText;
	div.setAttribute('class','border float-left p-1 border-warning');
	div.setAttribute('id',child.innerText);
	var button = document.createElement('button');
	button.setAttribute('class','close');
	button.setAttribute('aria-label','Close');
	$(button).on('click',function(){
		var choose_div = document.getElementById('choose_ul');
		var sp = document.getElementById(child.innerText);
		if(sp != null){
			choose_div.removeChild(sp);
		}
	});
	var span = document.createElement('span');
	span.innerText = '×';
	span.setAttribute('aria-hidden','true');
	button.appendChild(span);
	div.appendChild(button);
	parent.appendChild(div);

}

function delete_self(){
	
	var choose_div = document.getElementById('choose_ul');
	var sp = document.getElementById(obj.innerText);
	if(sp != null){
		choose_div.removeChild(sp);
	}
}
