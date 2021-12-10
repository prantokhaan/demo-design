import { Radio } from '@mui/material';
import React from 'react';

const CompanyAddress = () => {
    return (
      <div style={{ marginTop: "10px" , paddingBottom: '20px' }}>
        <p style={{ color: "#2B3743", fontSize: "14px" }}>
          {" "}
          <Radio
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
          Same as Billing Address
        </p>

        <div
          style={{
            backgroundColor: "#F4F4F4",
            marginRight: "240px",
            borderRadius: "10px",
          }}
        >
          <h4 style={{ color: "#194785", marginLeft: "20px" }}>
            Company Address
          </h4>
          <form style={{ marginLeft: "30px", paddingBottom: "20px" }}>
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
            <br />
            <label
              htmlFor="address"
              style={{
                color: "#bfbfbf",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              Street Address:
            </label>{" "}
            <br />
            <input
              type="text"
              id="address"
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
            <br />
            <label
              htmlFor="suite"
              style={{
                color: "#bfbfbf",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              Apt. Suite (Optional):
            </label>{" "}
            <br />
            <input
              type="text"
              id="suite"
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
            <br />
            <label
              htmlFor="code"
              style={{
                color: "#bfbfbf",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              Zip Code:
            </label>{" "}
            <br />
            <input
              type="text"
              id="code"
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
            <br />
            <label
              htmlFor="city"
              style={{
                color: "#bfbfbf",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              City:
            </label>{" "}
            <br />
            <input
              type="text"
              id="city"
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
            <br />
            <label
              htmlFor="state"
              style={{
                color: "#bfbfbf",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              State:
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
            <br />
            <label
              htmlFor="coutry"
              style={{
                color: "#bfbfbf",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              Country:
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
          </form>
        </div>
        <button style={{ marginTop: "10px", backgroundColor: "#1976D2", border: '1px solid #1976d2', borderRadius: '40px', padding: '10px 40px', textTransform: 'uppercase', color: 'white', marginLeft: '20%'}}>
          Save
        </button>
      </div>
    );
};

export default CompanyAddress;