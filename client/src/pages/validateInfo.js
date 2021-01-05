export default function validateInfo(values) {
	let errors = {};
	if (!values.fullname.trim()) {
		errors.fullname = "Your names are required";
	}

	//email
	if (!values.email) {
		errors.email = "Email required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Email is invalid,enter valid email";
	}

	//mobile
	if (!values.mobile) {
		errors.mobile = "Enter  mobile number";
	} else if (values.mobile.length <= 11) {
		errors.mobile = "Enter valid mobile number";
	}

	//message
	if (!values.message) {
		errors.message = "Message is required";
	}

	return errors;
}
