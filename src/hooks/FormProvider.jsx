import { useState } from "react";
import { FormContext } from "./formContext";

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const incrementStep = () => setCurrentStep((prev) => prev + 1);
  const decrementStep = () => setCurrentStep((prev) => prev - 1);
  const handleChange = (input) => (e) => {
    const value =
      e.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;
    setFormData({ ...formData, [input]: value });
  };

  const [error, setError] = useState({});

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        incrementStep,
        decrementStep,
        currentStep,
        error,
        setError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
