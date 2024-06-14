import React, { startTransition } from "react";
import { useSelector } from "react-redux";

function Header() {
  const count = useSelector((state) => state.counter.value);
  const form = useSelector((state) => state.form.formData)
  console.log(form)
  return (
    <div>
      Header
      <h1>{count}</h1>
      <h1>Name Is {form.name}</h1>
      <h1>Email Is {form.email}</h1>
    </div>
  );
}

export default Header;
