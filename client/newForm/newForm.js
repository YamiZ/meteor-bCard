Template.newForm.events({

	'submit form': function(event, template){

		event.preventDefault();
		let firstName = template.find('#firstName').value;
		let lastName = template.find('#lastName').value;
		let quote = template.find('#quote').value;
		let gender = template.find('#gender').value;
		let githublink = template.find('#githubLink').value;

		Session.set('firstName', firstName);
		Session.set('lastName', lastName);
		Session.set('quote',quote);
		Session.set('githublink', githubLink);

		Router.go(`/${firstName}`);
	}
});