import * as React from "react";
import GrayBackgroundText from "../../../GrayBackgroundText";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";

import { useFormContext } from "react-hook-form";
import "./styles.css";
import { Grid } from "@mui/material";

export default function Review() {
  const { getValues } = useFormContext();

  return (
    <div>
      <GrayBackgroundText>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>Review</div>
          <EditIcon />
        </div>
      </GrayBackgroundText>
      <div className="my-4">
        <Divider textAlign="left" className="reviewDivider">
          Admission Information
        </Divider>

        <div className="reviewBox">
          <Grid container spacing={2}>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Applicant Type</div>
                <div>{getValues().applicationType}</div>
              </Stack>
            </Grid>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Admission Semester</div>
                <div>{getValues().admissionSemester}</div>
              </Stack>
            </Grid>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Course Applied</div>
                <div>{getValues().courseApplied}</div>
              </Stack>
            </Grid>
          </Grid>
        </div>
        {/* Personal Information */}
        <Divider textAlign="left" className="reviewDivider">
          Applicant Details
        </Divider>

        <div className="reviewBox">
          <Grid container spacing={2}>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Name</div>
                <div>
                  {getValues().firstName} {getValues().lastName}
                </div>
              </Stack>
            </Grid>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Email</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues().email}
                </div>
              </Stack>
            </Grid>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Contact</div>
                <div>{getValues().contact}</div>
              </Stack>
            </Grid>

            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Gender</div>
                <div>{getValues().gender}</div>
              </Stack>
            </Grid>

            <Grid xs={8} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Address</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues().address1}, {getValues().address2},{" "}
                  {getValues().city}, {getValues().state}
                </div>
              </Stack>
            </Grid>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Postal Code</div>
                <div> {getValues().postalCode}</div>
              </Stack>
            </Grid>
          </Grid>
        </div>

        {/* Preview Documents  */}
        <Divider textAlign="left" className="reviewDivider">
          Educational Background
        </Divider>

        <div className="reviewBox">
          <Grid container spacing={2}>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">High School</div>
                <div>{getValues().lastHighSchool}</div>
              </Stack>
            </Grid>

            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Year Graduated</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues().yearGraduated}
                </div>
              </Stack>
            </Grid>

            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Year Graduated</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues().yearGraduated}
                </div>
              </Stack>
            </Grid>

            <Grid xs={8} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">High School Address</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues().highSchoolAddress}, {getValues().highSchoolCity},{" "}
                  {getValues().highSchoolState}, {getValues().highSchoolCountry}
                </div>
              </Stack>
            </Grid>
            <Grid xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Postal Code</div>
                <div> {getValues().highSchoolPostalCode}</div>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
