import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, resetForm } from "./fromSlice";

function FormComponent() {
  const form = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  console.log(form, "this is the formr");

  const handleChange = (e) => {
    const { name, value } = e.target; // destructuring the e.target to get the values of name and email inside the variables.
    console.log(name, value, "this is the name and value");
    dispatch(updateField({ name, value }));
  };

  return (
    <div>
      <p>Enter Your Name</p>
      <input type="text" name="name" id="" onChange={handleChange} />
      <br />
      <p>Enter Your Email </p>
      <input type="text" name="email" onChange={handleChange} />
<br />
      <button onClick={() => dispatch(resetForm())}>Reset</button>
    </div>
  );
}

export default FormComponent;
