function f_submit() {
			var name = document.getElementById("name");

				if (name.value == "") {
					window.alert("Введите имя");
					name.focus();
				return false;

				}

			return true;
		}

$(document).ready(function() {
	$("#menu a").on("click", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
			$('body, html').animate({scrollTop: top}, 1000);
	});

	$(".first").click(function() {
		$(".sub-menu").toggleClass("open");
	});

	$(".two").click(function() {
		$(".sub-menu-two").toggleClass("open");
	});

	$(".three").click(function() {
		$(".sub-menu-three").toggleClass("open");
	});

	$(".four").click(function() {
		$(".sub-menu-four").toggleClass("open");
	});

	$(".five").click(function() {
		$(".sub-menu-five").toggleClass("open");
	});

	$(".six").click(function() {
		$(".sub-menu-six").toggleClass("open");
	});

	$(".seven").click(function() {
		$(".sub-menu-seven").toggleClass("open");
	});

	$(".eigth").click(function() {
		$(".sub-menu-eigth").toggleClass("open");
	});

	$(".nine").click(function() {
		$(".sub-menu-nine").toggleClass("open");
	});

	$(".ten").click(function() {
		$(".sub-menu-ten").toggleClass("open");
	});

});