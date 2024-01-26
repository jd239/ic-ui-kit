import React, { useState } from "react";
import { IcButton } from "@ukic/react";
import { IcDateInput } from "../../components";

type updateValueProp = {
  updatedValue: string | undefined;
};

export const DateInputUpdateValue = ({ updatedValue }: updateValueProp) => {
  const [value, setValue] = useState<string | undefined>("31/08/2025");
  const handleClick = () => {
    setValue(updatedValue);
  };
  return (
    <>
      <IcDateInput label="Test label" value={value} />
      <IcButton onClick={handleClick}>Clear</IcButton>
    </>
  );
};
