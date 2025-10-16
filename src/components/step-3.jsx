import React, { useContext, useRef } from "react";
import { Input } from "./input";
import { handleContinue } from "../hooks/errorChecker";
import RemoveIcon from "../assets/RemoveImageButton.svg";
import Imageicon from "../assets/image.png";
import { FormContext } from "../hooks/formContext";
import { ChevronRightIcon } from "../assets/icons/chevron-right";
import { ChevronLeftIcon } from "../assets/icons/chevron-left";

export const StepThree = () => {
  const {
    handleChange,
    incrementStep,
    decrementStep,
    formData,
    error,
    setError,
    currentStep,
  } = useContext(FormContext);

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="display">
      <div className="mainboxStep3 ">
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
              className={`border ${error.dateOfBirth ? "error" : ""}`}
              label="Date Of Birth"
              type="date"
              onChange={handleChange("dateOfBirth")}
              value={formData.dateOfBirth || ""}
            />
            {error.dateOfBirth && (
              <p className="error-message">{error.dateOfBirth}</p>
            )}
            <Input
              label="Profile image"
              className="imageInput"
              type="file"
              ref={fileInputRef}
              onChange={handleChange("profileImage")}
              accept="image/*"
            />

            <div
              className={"profile-preview"}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              {formData.profileImage ? (
                <>
                  <img
                    className="profile-image"
                    src={formData.profileImage}
                    alt="Profile Preview"
                  />
                  <button
                    className="image-remove-button "
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChange("profileImage")({
                        target: { value: "", files: [] },
                      });
                    }}
                  >
                    <img src={RemoveIcon} alt="Remove" />
                  </button>
                </>
              ) : (
                <div className="w-[416px] h-[200px] flex flex-col gap-2 justify-center items-center text-gray-400 bg-[rgba(127,127,128,0.05)] rounded-md">
                  <div className="w-7 h-7 rounded-full rotate-0 opacity-100 p-2 gap-[10px] bg-white">
                    <img src={Imageicon} />
                  </div>
                  <p> No image selected. Click to upload.</p>
                </div>
              )}
            </div>
            {error.profileImage && (
              <p className="error-message">{error.profileImage}</p>
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
            <p>Continue 3/3 </p>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
