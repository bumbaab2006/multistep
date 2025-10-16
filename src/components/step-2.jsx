import React, { useContext } from "react";
import { Input } from "./input";
import { FormContext } from "../hooks/formContext";
import { handleContinue } from "../hooks/errorChecker";
import { ChevronRightIcon } from "../assets/icons/chevron-right";
import { ChevronLeftIcon } from "../assets/icons/chevron-left";

export const StepTwo = () => {
  const {
    handleChange,
    incrementStep,
    decrementStep,
    formData,
    setError,
    error,
    currentStep,
  } = useContext(FormContext);

  return (
    <div className="display">
      <div className="mainbox ">
        <div className="maincontainer">
          <div className="headercontainer">
            <div className="logo"></div>
            <div className="joinus">Join Us! 😎</div>
            <p className="description">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="inputbox">
            <Input
              className={`border ${error.email ? "error" : ""}`}
              label="Email"
              value={formData.email || ""}
              onChange={handleChange("email")}
            />
            {error.email && <p className="error-message">{error.email}</p>}
            <Input
              className={`border ${error.phoneNumber ? "error" : ""}`}
              label="Phone number"
              value={formData.phoneNumber || ""}
              onChange={handleChange("phoneNumber")}
            />
            {error.phoneNumber && (
              <p className="error-message">{error.phoneNumber}</p>
            )}
            <Input
              className={`border ${error.password ? "error" : ""}`}
              label="Password"
              type="password"
              value={formData.password || ""}
              onChange={handleChange("password")}
            />
            {error.password && (
              <p className="error-message">{error.password}</p>
            )}
            <Input
              className={`border ${error.confirmPassword ? "error" : ""}`}
              label="Confirm password"
              type="password"
              value={formData.confirmPassword || ""}
              onChange={handleChange("confirmPassword")}
            />
            {error.confirmPassword && (
              <p className="error-message">{error.confirmPassword}</p>
            )}
          </div>
        </div>
        <div className="buttonbox">
          <button onClick={decrementStep} className="backbutton ">
            <ChevronLeftIcon />
            <p> Back</p>
          </button>
          <button
            onClick={() =>
              handleContinue(formData, setError, incrementStep, currentStep)
            }
            className="nextbutton2 "
          >
            <p>Continue 2/3 </p>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
