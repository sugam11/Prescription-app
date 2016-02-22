Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'

});

Router.route('/', {name:'home'});
Router.route('/doctor_home', {name:'doctor_home'});
Router.route('/doctor_registration', {name:'doctor_registration'});
Router.route('/patient_home', {name:'patient_home'});
Router.route('/patient_profile', {name:'patient_profile'});
Router.route('/prescription', {name:'prescription'});
Router.route('/register', {name:'register'});
