import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import "./styles.css";
import htmlText from "../../../utils/htmlText";
import GrayBackgroundText from "../../../GrayBackgroundText";

export default function AcademicDetails() {
  const [admissionSemester, setAdmissionSemester] = React.useState("");
  const [course, setCourse] = React.useState("");

  const handleCourse = (event) => {
    setCourse(event.target.value);
  };

  const handleSemester = (event) => {
    setAdmissionSemester(event.target.value);
  };

  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <>
      <GrayBackgroundText text="Admission Information" />
      <div className="my-4 d-flex flex-column row-gap-4">
        <FormControl fullWidth size="small" required>
          <InputLabel id="types-of-loan" variant="outlined">
            Applicant Type
          </InputLabel>
          <Controller
            name="applicationType"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <Select
                  labelId="application-type"
                  id="application-type"
                  value={admissionSemester || 0}
                  label="Application Type"
                  onChange={handleSemester}
                  {...field}
                  error={Boolean(errors?.applicationType)}
                  onBlur={() => trigger("applicationType")}
                >
                  <MenuItem value={null}>Select a type of loan</MenuItem>
                  <MenuItem value={"Freshman"}>Freshman</MenuItem>
                  <MenuItem value={"Transferee"}>Transferee</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                {errors?.applicationType?.message && (
                  <FormHelperText error={Boolean(errors?.applicationType)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth required id="outlined-helperText" size="small">
          <FormLabel>Admission Application For</FormLabel>

          <Controller
            name="admissionSemester"
            control={control}
            defaultValue="1st-semester"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setAdmissionSemester(event.target.value)}
                  label="Admission Application For"
                  {...field}
                  error={Boolean(errors?.admissionSemester)}
                  onBlur={() => trigger("admissionSemester")}
                >
                  <div className="d-flex gap-4">
                    <FormControlLabel
                      value="1st-semester"
                      control={<Radio />}
                      label="1st Semester"
                    />
                    <FormControlLabel
                      value="direct-second-year"
                      control={<Radio />}
                      label="Direct Second Year"
                    />
                  </div>
                </RadioGroup>

                {errors?.admissionSemester?.message && (
                  <FormHelperText error={Boolean(errors?.admissionSemester)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" required>
          <InputLabel id="course-applied" variant="outlined">
            Course Applied For
          </InputLabel>
          <Controller
            name="courseApplied"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <Select
                  labelId="course-applied"
                  id="course-applied"
                  value={course}
                  label="Course Applied For"
                  onChange={handleCourse}
                  {...field}
                  error={Boolean(errors?.courseApplied)}
                  onBlur={() => trigger("courseApplied")}
                >
                  <MenuItem value={null}>Select a type of course</MenuItem>
                  <MenuItem value={"Computer Science"}>
                    Computer Science
                  </MenuItem>
                  <MenuItem value={"Data Analyst"}>Data Analyst</MenuItem>
                  <MenuItem value={"Cyber Security"}>Cyber Security</MenuItem>
                  <MenuItem value={"Machine Learning"}>
                    Machine Learning
                  </MenuItem>
                </Select>
                {errors?.courseApplied?.message && (
                  <FormHelperText error={Boolean(errors?.courseApplied)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>
      </div>
    </>
  );
}
