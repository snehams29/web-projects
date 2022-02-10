var item = [
			{"name":"Apple", "price":200, "qty":15},
			{"name":"banana", "price":300, "qty":150},
			{"name":"mango", "price":400, "qty":15},
			{"name":"grapes", "price":500, "qty":15},
			{"name":"watermelon", "price":600, "qty":15}
			];
		   
	function listitem()
	{
		var data="";
		for(var i=0; i<item.length; i++)
		{
			data = data + "<tr>";
			data = data + "<td>"+ item[i].name +"</td>";
			data = data + "<td>"+ item[i].price +"</td>";
			data = data + "<td>"+ item[i].qty +"</td>";
			data = data + "<td> <button onclick='delitem("+i+")'> delete </button> </td>";
			data = data + "</tr>";
		
		
		}
		//alert(data);
		document.getElementById("itemlist").innerHTML=data;
		document.getElementById("total").innerText = "Total Item : "+item.length;
	}
	
		function save()
		{
			var n = document.getElementById("iname").value.trim();
			var p = document.getElementById("price").value.trim();
			var q = document.getElementById("qty").value.trim();
			//alert( n + p + q);
			var newitem = {"name":n, "price":p, "qty":q};
			item = item.concat(newitem);
			listitem(); //to reload the list
			
			
		//toclear the textbox
			document.getElementById("iname").value="";
			document.getElementById("price").value="";
			document.getElementById("qty").value="";
			
			//to show messgae 
			document.getElementById("msg").innerHTML = "item added successfully";
		}
		
		function delitem(index)
		{
			//alert(index);
			var status = confirm("are u sure ?");
			if(status==true){
			item.splice(index , 1);
			listitem();// for reloading
			document.getElementById("msg").innerHTML = "Item deleted succesfully!";
		}
		}