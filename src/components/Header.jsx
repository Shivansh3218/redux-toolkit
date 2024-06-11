import React from "react";
import { useSelector } from "react-redux";

function Header() {
    const count = useSelector((state) => state.counter.value);
  return (
    <div>
      Header
      <h1>{count}</h1>
    </div>
  );
}

export default Header;
