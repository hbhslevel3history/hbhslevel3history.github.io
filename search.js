function myFunction() {
				window.open('sovereignty.html');
				window.open('liberal.html');
				$(location).attr('href');
				var pathname = window.location;
				alert(pathname);
				var search = pathname.search.split('=')
				var result = search[search.length-1];
				result = result.replace('+', ' ');
				alert(result);
				window.find(result);
			};	
