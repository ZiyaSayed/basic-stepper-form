import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.css";
import Review from "./forms/Review";
import { FormProvider, useForm } from "react-hook-form";
import AcademicDetails from "./forms/AcademicDetails";
import PersonalInformation from "./forms/PersonalInfo";
import HighSchoolInformation from "./forms/HighSchoolInformation";

const formArray = [
  {
    id: 0,
    name: "Applicant Details",
    heading: "We want to know you more",
    component: <PersonalInformation />,
  },
  {
    id: 1,
    name: "Admission Information",
    heading: "Let's get started",
    component: <AcademicDetails />,
  },
  {
    id: 2,
    name: "Educational Background",
    heading: "High School Education",
    component: <HighSchoolInformation />,
  },

  {
    id: 3,
    name: "Review",
    heading: "Confirm your details",
    component: <Review />,
  },
];

const BasicStepperForm = () => {
  const [currentForm, setCurrentForm] = React.useState(0);

  const handleBack = (e) => {
    e.preventDefault();
    if (currentForm > 0) {
      setCurrentForm(currentForm - 1);
    }
  };

  const academicDetailsValues = [
    "applicationType",
    "admissionSemester",
    "courseApplied",
  ];

  const educationalBackground = [
    "lastHighSchool",
    "yearGraduated",
    "cgpa",
    "highSchoolAddress",
    "highSchoolCountry",
    "highSchoolState",
    "highSchoolCity",
    "highSchoolPostalCode",
  ];

  const personalDetailsValues = [
    "firstName",
    // "middleName",
    "lastName",
    "email",
    "contact",
    "gender",
    "address1",
    "address2",
    "city",
    "state",
    "country",
    "postalCode",
  ];

  const methods = useForm();

  const validateForm = (obj) => {
    console.log(obj);
    if (currentForm === 0) {
      let flag = true;
      for (let i = 0; i < personalDetailsValues.length; i++) {
        let val = obj[personalDetailsValues[i]];
        if (!val || val.length < 1) {
          flag = false;
        }
      }

      if (!flag) return false;
    } else if (currentForm === 1) {
      let flag = true;
      for (let i = 0; i < academicDetailsValues.length; i++) {
        let val = obj[academicDetailsValues[i]];
        if (!val || val.length < 1) {
          flag = false;
        }
      }

      if (!flag) return false;
    } else if (currentForm === 2) {
      let flag = true;
      for (let i = 0; i < educationalBackground.length; i++) {
        let val = obj[educationalBackground[i]];
        if (!val || val.length < 1) {
          flag = false;
        }
      }

      if (!flag) return false;
    }
    return true;
  };

  const handleContinue = (e) => {
    e.preventDefault();
    methods.trigger();
    const validated = validateForm(methods.getValues());

    if (validated) {
      if (currentForm < formArray.length - 1) {
        setCurrentForm(currentForm + 1);
      }
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    console.log(methods.getValues());
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        {formArray.map((form, id) => {
          return (
            <div
              key={id}
              className={`form-step  ${form.id && "form-step-active"} ${
                form.id === currentForm
                  ? "form-step-active"
                  : form.id < currentForm
                  ? "form-step-completed"
                  : "form-step-pending"
              }`}
            >
              <div className="step-icon">
                {form.id === currentForm ? (
                  <RadioButtonCheckedIcon fontSize="small" />
                ) : form.id < currentForm ? (
                  <CheckIcon fontSize="small" />
                ) : (
                  <RadioButtonUncheckedIcon fontSize="small" />
                )}
              </div>

              <div className="step-name">{form.name}</div>
            </div>
          );
        })}
      </div>
      <div className="main-content">
        <div className="form-heading">{formArray[currentForm].heading}</div>
        <div className="form-component">
          <FormProvider {...methods}>
            <form method="POST">
              {formArray[currentForm].component}

              <div className="nav-buttons">
                {currentForm > 0 && (
                  <button className="nav-back" onClick={handleBack}>
                    <KeyboardBackspaceIcon /> Back
                  </button>
                )}

                {currentForm === formArray.length - 1 ? (
                  <button
                    className="nav-next"
                    onClick={handleConfirm}
                    type="submit"
                  >
                    Confirm
                  </button>
                ) : (
                  <button className="nav-next" onClick={handleContinue}>
                    Continue
                  </button>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default BasicStepperForm;
