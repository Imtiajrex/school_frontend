/* eslint-disable eqeqeq */
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
    student_payment_fees = [],
    payment_category_list,
    error,
  } = props;
  const [payment_category, setPaymentCategory] = useState("");
  const [payment_info_type, setPaymentInfoType] = useState("");
  const [payment_info_options, setPaymentInfoOptions] = useState("");

  const new_value = {
    payment_category: "",
    payment_info: "",
    payment_amount: "",
    paid_amount: "",
  };
  const [vals, setValues] = useState(new_value);
  React.useEffect(() => {
    const payment_cat = payment_category_list.filter(
      (element) => element.category_name == payment_category
    );
    if (payment_cat.length > 0) {
      setPaymentInfoType(payment_cat[0]["info_type"]);
      setPaymentInfoOptions(payment_cat[0]["info_options"]);

      const std_fees = student_payment_fees.filter(
        (element) => element.payment_category == payment_cat[0].category_name
      );
      let fees = "";
      if (std_fees.length == 0) fees = payment_cat[0]["default_amount"];
      else fees = std_fees[0]["student_default_fees"];
      setValues({
        ...vals,
        payment_amount: fees,
        payment_info: payment_cat[0].info_type == "select" ? -1 : "",
      });
    }
  }, [payment_category]);
  React.useEffect(() => {
    if (clear) {
      setValues(new_value);
      setclear(false);
    }
  }, [clear]);

  const fields = [
    {
      placeholder: "Payment Category",
      type: "select",
      name: "payment_category",
      options: payment_category_list,
      setState: setPaymentCategory,
      required: true,
    },
    {
      placeholder: "Payment Info",
      type: payment_info_type,
      name: "payment_info",
      options: payment_info_options,
      required: false,
    },
    {
      placeholder: "Fees",
      type: "number",
      name: "payment_amount",
      required: true,
    },
    {
      placeholder: "Amount",
      type: "number",
      name: "paid_amount",
      required: true,
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    vals[name] = value;
    handleInputChange(index, vals);
  };
  return (
    <div className="bg-dark px-4 py-4 my-4 mx-4" style={{ borderRadius: 10 }}>
      {fields.map((input, index) => (
        <InputField
          key={index}
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          handleChange={handleChange}
          value={vals[input.name]}
          error={error[input.name]}
          disabled={disabled}
          options={input.options}
          setState={input.setState}
        />
      ))}
    </div>
  );
}
