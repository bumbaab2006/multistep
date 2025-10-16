import React, { useContext } from "react";
import { Input } from "./input";
import { FormContext } from "../hooks/formContext";
import { handleContinue } from "../hooks/errorChecker";
import { ChevronRightIcon } from "../assets/icons/chevron-right";

export const StepOne = () => {
  const {
    handleChange,
    incrementStep,
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
              className="border"
              label="First name "
              star="*"
              value={formData.firstName || ""}
              onChange={handleChange("firstName")}
            />
            {error.firstName && (
              <p className="error-message">{error.firstName}</p>
            )}
            <Input
              className="border"
              label="Last name"
              star="*"
              value={formData.lastName || ""}
              onChange={handleChange("lastName")}
            />
            {error.lastName && (
              <p className="error-message">{error.lastName}</p>
            )}
            <Input
              className="border"
              value={formData.userName || ""}
              label="User name"
              star="*"
              onChange={handleChange("userName")}
            />
            {error.userName && (
              <p className="error-message">{error.userName}</p>
            )}
          </div>
        </div>
        <div>
          <button
            onClick={() =>
              handleContinue(formData, setError, incrementStep, currentStep)
            }
            className="nextbutton1 "
          >
            <p>Continue 1/3</p>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
