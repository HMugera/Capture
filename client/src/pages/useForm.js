import { useState, useEffect } from "react";
import Axios from "axios";

const useForm = (validate) => {
	let initialValues = { fullname: "", email: "", mobile: "", message: "" };
	const [values, setValues] = useState(initialValues);

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	return { handleChange, values, errors, setErrors, setValues, initialValues };
};

export default useForm;
