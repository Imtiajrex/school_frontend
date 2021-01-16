/* eslint-disable react-hooks/exhaustive-deps */
import InputField from "components/controls/InputField";
import React, { useState } from "react";

export default function PaymentInput(props) {
  let {
    clear,
    setclear,
    handleInputChange,
    disabled,
    index,
    base_value,
    error,
  } = props;

  const new_value = {
    payment_category: "",
    payment_info: "",
    payment_amount: "",
    paid_amount: "",
  };
  const [vals, setValues] = useState(base_value);
  React.useEffect(() => {
    if (clear) {
      setValues(new_value);
      setclear(false);
    }
  }, [clear]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    vals[name] = value;
    handleInputChange(index, vals);
  };
  return (
    <div className="bg-dark px-4 py-4 my-4 mx-4" style={{ borderRadius: 10 }}>
      <InputField
        type="text"
        placeholder="Payment Category"
        name="payment_category"
        handleChange={handleChange}
        value={vals["payment_category"]}
        error={error["payment_category"]}
        disabled={true}
      />
      <InputField
        type="text"
        placeholder="Payment Info"
        name="payment_info"
        handleChange={handleChange}
        value={vals["payment_info"]}
        error={error["payment_info"]}
        disabled={true}
      />
      <InputField
        type="text"
        placeholder="Due Amount"
        name="payment_amount"
        handleChange={handleChange}
        value={vals["payment_amount"]}
        error={error["payment_amount"]}
        disabled={true}
      />
      <InputField
        type="text"
        placeholder="Paid Amount"
        name="paid_amount"
        handleChange={handleChange}
        value={vals["paid_amount"]}
        error={error["paid_amount"]}
        disabled={disabled}
      />
    </div>
  );
}
