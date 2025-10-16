const nameRegex = /^[A-Za-z]+$/;
const userNameRegex =
  /^(?=.{3,16}$)(?![._])(?!.*[._]{2})[a-zA-Z0-9._]+(?<![._])$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegex = /^(\+976)?[89][0-9]{7}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#+\-_=])[A-Za-z\d@$!%*?&#+\-_=]{8,}$/;


const setFieldError = (setError, field, message) => {
  setError((prev) => ({ ...prev, [field]: message }));
};

const validateField = (value, regex, emptyMsg, invalidMsg, setError, field) => {
  if (!value) {
    setFieldError(setError, field, emptyMsg);
    return false;
  }
  if (regex && !regex.test(value)) {
    setFieldError(setError, field, invalidMsg);
    return false;
  }
  setFieldError(setError, field, "");
  return true;
};

export const handleContinue = (
  formData,
  setError,
  incrementStep,
  currentStep
) => {
  let hasError = false;

  if (currentStep === 1) {
    const { firstName, lastName, userName } = formData;

    const validFirst = validateField(
      firstName,
      nameRegex,
      "First name cannot be empty.",
      "First name should contain only letters.",
      setError,
      "firstName"
    );

    const validLast = validateField(
      lastName,
      nameRegex,
      "Last name cannot be empty.",
      "Last name should contain only letters.",
      setError,
      "lastName"
    );

    const validUsername = validateField(
      userName,
      userNameRegex,
      "Username cannot be empty.",
      "Invalid username. Please try again.",
      setError,
      "userName"
    );

    hasError = !(validFirst && validLast && validUsername);
  } else if (currentStep === 2) {
    const {
      email = "",
      phoneNumber = "",
      password = "",
      confirmPassword = "",
    } = formData;

    const validEmail = validateField(
      email.trim(),
      emailRegex,
      "Email cannot be empty.",
      "This isn't a valid email.",
      setError,
      "email"
    );

    const validPhone = validateField(
      phoneNumber.trim(),
      phoneNumberRegex,
      "Phone number cannot be empty.",
      "This isn't a valid phone number.",
      setError,
      "phoneNumber"
    );

    const validPassword = validateField(
      password.trim(),
      passwordRegex,
      "Password cannot be empty.",
      "Password does not meet requirements.",
      setError,
      "password"
    );

    let validConfirm = true;
    if (confirmPassword.trim() !== password.trim()) {
      setFieldError(setError, "confirmPassword", "Passwords do not match.");
      validConfirm = false;
    } else {
      setFieldError(setError, "confirmPassword", "");
    }

    hasError = !(validEmail && validPhone && validPassword && validConfirm);
  } else if (currentStep === 3) {
    const { profileImage, dateOfBirth } = formData;

    const validImage = validateField(
      profileImage,
      null,
      "Profile image cannot be empty.",
      "",
      setError,
      "profileImage"
    );

    const validDob = validateField(
      dateOfBirth,
      null,
      "Date of Birth cannot be empty.",
      "",
      setError,
      "dateOfBirth"
    );

    hasError = !(validImage && validDob);
  }

  if (!hasError) incrementStep();
};
