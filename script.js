
		$(document).ready(function() {
			$(location).attr('href');
			var pathname = window.location;
			alert(pathname);
			var search = pathname.search.split('=')
			var result = search[search.length-1];
			result = result.replace('+', ' ').toLowerCase();
			
			$("section a").css("display", "none");
			$("section a").css("display", "none");
			var govload = $.ajax({
				url: 'liberal.html',
				success: function(data) {
					$("#govcontent").html($(data).find('p'));
				}
			});
			var sovload = $.ajax({
			url: 'sovereignty.html',
			success: function(data) {
			$("#sovcontent").html($(data).find('p'));
			}
			});
					            		
			govload.abort();
			sovload.abort();
			
			alert(result);
			$("#govcontent p:contains('result')").html("Found instances of your search term in the Liberal Government page.").css("text-transform", "none");
			$("#sovcontent p:contains('result')").html("Found instances of your search term in the Struggle for Sovereignty page.").css("text-transform", "none");
			});
