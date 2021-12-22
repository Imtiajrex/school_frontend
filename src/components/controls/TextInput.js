import React, { useRef } from "react";
import { FormGroup, FormFeedback, Input } from "reactstrap";

export default function TextInput(props) {
	const {
		name,
		value,
		placeholder,
		invalid_msg = "",
		valid_msg = "",
		handleChange,
		type = "text",
		error,
		...other
	} = props;
	let input_field = useRef();
	return (
		<FormGroup>
			<Input
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChange}
				invalid={error}
				valid={!error}
				ref={input_field}
				row="5"
				{...other}
				onFocus={(e) => {
					window.scrollTo(0, input_field.current.offsetTop);
					console.log(input_field.current);
					// input_field.current.scrollIntoView();
				}}
			/>
			<FormFeedback>{error ? invalid_msg : valid_msg}</FormFeedback>
		</FormGroup>
	);
}
