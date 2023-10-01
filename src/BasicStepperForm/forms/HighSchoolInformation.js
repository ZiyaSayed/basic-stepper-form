import React, { useState } from "react";
import {
  TextField,
  Grid,
  FormControl,
  FormHelperText,
  Slider,
  InputLabel,
} from "@mui/material";
import GrayBackgroundText from "../../GrayBackgroundText";
import { Controller, useFormContext } from "react-hook-form";
import htmlText from "../../utils/htmlText";

const HighSchoolInformation = () => {
  const defaultCGPAValue = 3;
  const [cgpa, setCgpa] = useState("");

  const handleCgpa = (value) => {
    setCgpa(value);
  };

  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <div>
      <GrayBackgroundText text="High School Information" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            name="lastHighSchool"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Name of Last High School"
                  id="outlined-helperText"
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.lastHighSchool)}
                  onBlur={() => trigger("lastHighSchool")}
                />
                {errors?.lastHighSchool?.message && (
                  <FormHelperText error={Boolean(errors?.lastHighSchool)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} className="align-items-center">
            <Grid item xs={4}>
              <InputLabel>Year Graduated *</InputLabel>
              <Controller
                name="yearGraduated"
                control={control}
                rules={{ required: htmlText.thisFieldIsRequired }}
                render={({ field, fieldState }) => (
                  <>
                    <TextField
                      required
                      id="outlined-helperText"
                      fullWidth
                      margin="normal"
                      type="date"
                      size="small"
                      sx={{ marginBottom: 0 }}
                      {...field}
                      error={Boolean(errors?.yearGraduated)}
                      onBlur={() => trigger("yearGraduated")}
                    />

                    {errors?.yearGraduated?.message && (
                      <FormHelperText error={Boolean(errors?.yearGraduated)}>
                        {htmlText.thisFieldIsRequired}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </Grid>

            <Grid item xs={7} style={{ marginLeft: "auto" }}>
              <FormControl fullWidth className="form-group">
                <div className="row align-items-end">
                  <label
                    htmlFor="cgpa"
                    id="cgpa"
                    aria-label="cgpa"
                    className="col"
                  >
                    Latest CGPA *
                  </label>
                  <div className="slider-value col">
                    {cgpa} <span>CGPA</span>
                  </div>
                </div>
                <Controller
                  name="cgpa"
                  control={control}
                  defaultValue={defaultCGPAValue}
                  rules={{ required: htmlText.thisFieldIsRequired }}
                  render={({ field, fieldState }) => (
                    <>
                      <Slider
                        aria-label="cgpa"
                        getAriaValueText={handleCgpa}
                        valueLabelDisplay="auto"
                        step={1}
                        id="cgpa"
                        marks
                        min={3}
                        max={10}
                        color="secondary"
                        {...field}
                      />

                      {errors?.cgpa?.message && (
                        <FormHelperText error={Boolean(errors?.cgpa)}>
                          {htmlText.thisFieldIsRequired}
                        </FormHelperText>
                      )}
                    </>
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="highSchoolAddress"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Address"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolAddress)}
                  onBlur={() => trigger("highSchoolAddress")}
                />

                {errors?.highSchoolAddress?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolAddress)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            name="highSchoolCountry"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Country"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolCountry)}
                  onBlur={() => trigger("highSchoolCountry")}
                />

                {errors?.highSchoolCountry?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolCountry)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            name="highSchoolState"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="State"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolState)}
                  onBlur={() => trigger("highSchoolState")}
                />

                {errors?.highSchoolState?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolState)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            name="highSchoolCity"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="City"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolCity)}
                  onBlur={() => trigger("highSchoolCity")}
                />

                {errors?.highSchoolCity?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolCity)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            name="highSchoolPostalCode"
            control={control}
            rules={{
              required: htmlText.thisFieldIsRequired,
              pattern: {
                value: /^[1-9][0-9]{5}$/,
                message: "Invalid postal codes",
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Postal Code"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  type="number"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolPostalCode)}
                  onBlur={() => trigger("highSchoolPostalCode")}
                />

                {errors?.highSchoolPostalCode?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolPostalCode)}>
                    {errors?.highSchoolPostalCode?.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default HighSchoolInformation;
