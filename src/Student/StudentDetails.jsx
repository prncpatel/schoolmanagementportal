import React from "react";
import { Grid, Typography, Paper, Avatar, Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)({
  border: "1px solid #dddddd", // Light border
  borderRadius: "8px",
  marginBottom: "20px", // Spacing below the card
});

const ProfileContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#7a33ff",
  paddingTop: "20px",
  paddingBottom: "90px", // Increase height of the background portion
  position: "relative",
  borderRadius: "8px 8px 0 0",
});

const AvatarContainer = styled(Box)({
  position: "absolute",
  top: "60px", // Adjust the top position of the avatar to give space for the header
  left:'20px'
});

const StudentDetailsCard = styled(Paper)({
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
});

const InfoContainer = styled(Box)({
  paddingTop: "60px", // Adjust padding to give space for the avatar
  textAlign: "left",
  width: "100%",
});

const InfoText = styled(Typography)({
  marginBottom: "8px",
  display: "flex",
  justifyContent: "space-between",
  color: "#666666",
  fontSize: "14px",
});

const StudentDetails = () => {
  return (
    <Grid container spacing={3} style={{ height: "100vh", overflow: "hidden" }}>
      <Grid item xs={12} lg={3}>
        <Wrapper>
          <StudentDetailsCard elevation={3}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: "bold", fontSize: "18px", textAlign: "left", color: "#666666" }}>
              Student Details
            </Typography>
            <ProfileContainer>
              <AvatarContainer>
                <Avatar
                  alt="Student Name"
                  src="/path_to_image"
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "3px solid #ffffff",
                    borderRadius: "8px",
                  }}
                />
              </AvatarContainer>
            </ProfileContainer>
            <InfoContainer>
              <InfoText variant="body2">
                <span>Student Name:</span> <span style={{ fontWeight: "bold", color: "#666666" }}>priyanl sheth</span>
              </InfoText>
              <Divider />
              <InfoText variant="body2">
                <span>Admission Number:</span> <span style={{ fontWeight: "bold", color: "#666666" }}>400</span>
              </InfoText>
              <Divider />
              <InfoText variant="body2">
                <span>Roll Number:</span> <span style={{ fontWeight: "bold", color: "#666666" }}>298</span>
              </InfoText>
              <Divider />
              <InfoText variant="body2">
                <span>Class:</span> <span style={{ fontWeight: "bold", color: "#666666" }}>6th (Eng)</span>
              </InfoText>
              <Divider />
              <InfoText variant="body2">
                <span>Section:</span> <span style={{ fontWeight: "bold", color: "#666666" }}>A</span>
              </InfoText>
              <Divider />
              <InfoText variant="body2">
                <span>Gender:</span> <span style={{ fontWeight: "bold", color: "#666666" }}>Male</span>
              </InfoText>
              <Divider />
              <InfoText variant="body2">
                <span>Behaviour Records Point:</span> <span style={{ fontWeight: "bold", color: "#666666" }}>0</span>
              </InfoText>
            </InfoContainer>
          </StudentDetailsCard>
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default StudentDetails;
