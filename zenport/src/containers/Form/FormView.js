import React from "react";
import Select from "../../components/Select";
import Input from "../../components/Input";

const FormView = ({ formFields, onFieldChange }) => (
  <div>
    {formFields && formFields.map(({ key, type, value }) => {
      switch (type) {
        case "select":
          return (
            <>
              <Select key={key} id={key} value={value}  onChange={e=> onFieldChange(key, e.target.value)} />
            </>
          );
        case "number":
          return (
            <>
              <Input onChange={e=> onFieldChange(key, e.target.value)} key={key} id={key} />
            </>
          );
        default:
          return null;
      }
    })}
  </div>
);

export default FormView;
