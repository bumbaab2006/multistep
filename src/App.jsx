import { FormContext } from "./hooks/formContext";
import { FormProvider } from "./hooks/FormProvider";
import { StepOne } from "./components/step-1";
import { StepTwo } from "./components/step-2";
import { useContext } from "react";
import { StepThree } from "./components/step-3";
import { StepFour } from "./components/step-4";


const Content = () => {
  const { currentStep } = useContext(FormContext);

  return (
    <div className="w-screen h-screen justify-center items-center flex gap-4">
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
    </div>
  );
};

function App() {
  return (
    <FormProvider>
      <Content />
    </FormProvider>
  );
}

export default App;
