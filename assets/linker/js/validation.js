$(document).ready(function() {
	$('#contactForm').validate( {
		rules: {
			emailAddress: {
				required: true,
				email: true
			},
			subject: {
				required: true,
				minlength: 2
			},
			body: {
				required: true,
				minlength: 5
			}
		}
	});
});