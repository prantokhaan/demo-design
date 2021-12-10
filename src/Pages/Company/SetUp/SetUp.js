import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from '@mui/system';
import CompanyAddress from './CompanyAddress';

const SetUp = () => {
    const steps = [
      "Payment",
      "Billing Address",
      "Company",
    ];
    const StyledStep = styled("StepLabel")({
      color: "#1976D2",
    });
    return (
      <div style={{ marginLeft: "150px", marginTop: "70px" }}>
        <Stepper
          activeStep={3}
          alternativeLabel
          style={{ marginLeft: "100px" }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel style={{ color: "#1976D2" }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid
          container
          spacing={2}
          style={{ marginLeft: "80px", marginTop: "30px" }}
        >
          <Grid item xs={12} md={6}>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "#1976D2" }}>Company</h2>
              <form>
                <label
                  htmlFor="company"
                  style={{
                    color: "#2B3743",
                    fontSize: "13px",
                    marginLeft: "10px",
                  }}
                >
                  Company Name:
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="company"
                  style={{
                    padding: "10px 70px",
                    marginTop: "10px",
                    marginBottom: "30px",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 8px #00000040",
                    border: "1px solid #BFBFBF",
                    backgroundColor: "#fff",
                  }}
                />
                <i
                  className="fas fa-times"
                  style={{
                    color: "#2B374380",
                    marginLeft: "-25px",
                    marginTop: "5px",
                    fontSize: "12px",
                  }}
                ></i>
                <br />
                <label
                  htmlFor="website"
                  style={{
                    color: "#2B3743",
                    fontSize: "13px",
                    marginLeft: "10px",
                  }}
                >
                  Website:
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="website"
                  style={{
                    padding: "10px 70px",
                    marginTop: "10px",
                    marginBottom: "30px",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 8px #00000040",
                    border: "1px solid #BFBFBF",
                    backgroundColor: "#fff",
                  }}
                />
                <i
                  className="fas fa-times"
                  style={{
                    color: "#2B374380",
                    marginLeft: "-25px",
                    marginTop: "5px",
                    fontSize: "12px",
                  }}
                ></i>
              </form>
            </div>

            <div
              style={{
                backgroundColor: "#F4F4F4",
                marginLeft: "150px",
                marginRight: "120px",
                borderRadius: "10px",
              }}
            >
              <h4 style={{ color: "#194785", marginLeft: "20px" }}>
                Company Contact
              </h4>
              <form style={{ marginLeft: "30px" }}>
                <label
                  htmlFor="name"
                  style={{
                    color: "#bfbfbf",
                    fontSize: "13px",
                    marginLeft: "10px",
                  }}
                >
                  Name:
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="name"
                  style={{
                    padding: "10px 50px",
                    marginTop: "10px",
                    marginBottom: "20px",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 8px #00000040",
                    border: "1px solid #BFBFBF",
                    backgroundColor: "#fff",
                  }}
                />
                <i
                  className="fas fa-times"
                  style={{
                    color: "#2B374380",
                    marginLeft: "-25px",
                    marginTop: "5px",
                    fontSize: "12px",
                  }}
                ></i>
                <br />
                <label
                  htmlFor="email"
                  style={{
                    color: "#bfbfbf",
                    fontSize: "13px",
                    marginLeft: "10px",
                  }}
                >
                  E-mail Address:
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="email"
                  style={{
                    padding: "10px 50px",
                    marginTop: "10px",
                    marginBottom: "20px",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 8px #00000040",
                    border: "1px solid #BFBFBF",
                    backgroundColor: "#fff",
                  }}
                />
                <i
                  className="fas fa-times"
                  style={{
                    color: "#2B374380",
                    marginLeft: "-25px",
                    marginTop: "5px",
                    fontSize: "12px",
                  }}
                ></i>
                <br />
                <label
                  htmlFor="phone"
                  style={{
                    color: "#bfbfbf",
                    fontSize: "13px",
                    marginLeft: "10px",
                  }}
                >
                  Phone Number:
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="website"
                  style={{
                    padding: "10px 50px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 8px #00000040",
                    border: "1px solid #BFBFBF",
                    backgroundColor: "#fff",
                  }}
                />
                <i
                  className="fas fa-times"
                  style={{
                    color: "#2B374380",
                    marginLeft: "-25px",
                    marginTop: "5px",
                    fontSize: "12px",
                  }}
                ></i>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <CompanyAddress />
          </Grid>
        </Grid>
      </div>
    );
};

export default SetUp;