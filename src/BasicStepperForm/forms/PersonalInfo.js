import React, { useState } from "react";
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import GrayBackgroundText from "../../GrayBackgroundText";
import { Controller, useFormContext } from "react-hook-form";
import htmlText from "../../utils/htmlText";

const PersonalInformation = () => {
  const [gender, setGender] = useState("");

  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <div>
      <GrayBackgroundText text="Personal Details" />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="First Name"
                  id="outlined-helperText"
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.firstName)}
                  onBlur={() => trigger("firstName")}
                />
                {errors?.firstName?.message && (
                  <FormHelperText error={Boolean(errors?.firstName)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="middleName"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Middle Name"
                  id="outlined-helperText"
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.middleName)}
                  onBlur={() => trigger("middleName")}
                />
              </>
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Last Name"
                  required
                  id="outlined-helperText"
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.lastName)}
                  onBlur={() => trigger("lastName")}
                />

                {errors?.lastName?.message && (
                  <FormHelperText error={Boolean(errors?.lastName)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: htmlText.thisFieldIsRequired,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Email"
                  required
                  bold
                  type="email"
                  id="outlined-helperText"
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.email)}
                  onBlur={() => trigger("email")}
                />

                {errors?.email?.message && (
                  <FormHelperText error={Boolean(errors?.email)}>
                    {errors?.email?.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="contact"
            control={control}
            rules={{
              required: htmlText.thisFieldIsRequired,
              pattern: {
                value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                message: "Invalid contact number",
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Phone Number"
                  required
                  id="outlined-helperText"
                  fullWidth
                  margin="normal"
                  size="small"
                  type="tel"
                  {...field}
                  error={Boolean(errors?.contact)}
                  onBlur={() => trigger("contact")}
                />

                {errors?.contact?.message && (
                  <FormHelperText error={Boolean(errors?.contact)}>
                    {errors?.contact?.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl
            fullWidth
            required
            id="outlined-helperText"
            size="small"
            margin="normal"
          >
            <InputLabel>Gender</InputLabel>

            <Controller
              name="gender"
              control={control}
              rules={{ required: htmlText.thisFieldIsRequired }}
              render={({ field, fieldState }) => (
                <>
                  <Select
                    value={gender || null}
                    onChange={(event) => setGender(event.target.value)}
                    label="Gender"
                    {...field}
                    error={Boolean(errors?.gender)}
                    onBlur={() => trigger("gender")}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                  {errors?.gender?.message && (
                    <FormHelperText error={Boolean(errors?.gender)}>
                      {htmlText.thisFieldIsRequired}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="address1"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Address Line 1"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.address1)}
                  onBlur={() => trigger("address1")}
                />

                {errors?.address1?.message && (
                  <FormHelperText error={Boolean(errors?.address1)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="address2"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Address Line 2"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.address2)}
                  onBlur={() => trigger("address2")}
                />

                {errors?.address2?.message && (
                  <FormHelperText error={Boolean(errors?.address2)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            name="country"
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
                  error={Boolean(errors?.country)}
                  onBlur={() => trigger("country")}
                />

                {errors?.country?.message && (
                  <FormHelperText error={Boolean(errors?.country)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            name="state"
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
                  error={Boolean(errors?.state)}
                  onBlur={() => trigger("state")}
                />

                {errors?.state?.message && (
                  <FormHelperText error={Boolean(errors?.state)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            name="city"
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
                  error={Boolean(errors?.city)}
                  onBlur={() => trigger("city")}
                />

                {errors?.city?.message && (
                  <FormHelperText error={Boolean(errors?.city)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            name="postalCode"
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
                  error={Boolean(errors?.postalCode)}
                  onBlur={() => trigger("postalCode")}
                />

                {errors?.postalCode?.message && (
                  <FormHelperText error={Boolean(errors?.postalCode)}>
                    {errors?.postalCode?.message}
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
export default PersonalInformation;
