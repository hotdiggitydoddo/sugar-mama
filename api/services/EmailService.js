exports.sendContactEmail = function(options) {
	var Mailbot = require('mailbot');

	var person = {
		email: "deborah@sugarmamaskinsugartan.com",
		customKey1: 'Hello'
	};

	var smartMail = {
		to: [person],
		from: options.email,
		subject: options.subject,
		html: "You have a new message from <a href=\"mailto:" + options.email + "\">" + 
			   options.email + "</a>: <br/><br/>" + options.body
	};

	console.log(smartMail);

	var myBot = Mailbot.newBot('SMTP', {
		service: 'Gmail',
		auth: {
			user: 'deborah@sugarmamaskinsugartan.com',
			pass: 'sugarmama'
		}
	});

	myBot.send(smartMail, function(err, res) {
		if(err)
			console.log("ERROR: " + err);
		else
			console.log('OK: ' + res.message);
		myBot.kill;
	});
}