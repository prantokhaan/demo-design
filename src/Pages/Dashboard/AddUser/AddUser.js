import React from 'react';
import TextField from "@mui/material/TextField";
import { Grid, Switch } from '@mui/material';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';




const AddUser = () => {
    const roles = [
      {
        value: "Admin",
        label: "Admin",
      },
      {
        value: "Moderator",
        label: "Moderator",
      },
      {
        value: "Editor",
        label: "Editor",
      },
      {
        value: "User",
        label: "User",
      },
    ];
    const teams = [
      {
        value: "Team 1",
        label: "Elite",
      },
      {
        value: "Team 2",
        label: "Premium",
      },
      {
        value: "Team 3",
        label: "Intermediate",
      },
      {
        value: "Team 4",
        label: "Intern",
      },
    ];
    const [role, setRole] = React.useState("Admin");
    const [team, setTeam] = React.useState("Elite");
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setRole(event.target.value);
      setTeam(event.target.value);
      setChecked(event.target.checked);
    };

  
    return (
      <div style={{ marginLeft: "180px", marginTop: "10px" }}>
        <h2>Add New User</h2>
        <div
          style={{
            marginLeft: "100px",
            borderRadius: "10px",
          }}
        >
          <h4 style={{ color: "#1976D2", marginLeft: "20px" }}>
            New User Contact
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
                width: "75%",
                padding: "10px 50px",
                marginTop: "10px",
                marginBottom: "20px",
                borderRadius: "20px",
                border: "1px solid #BFBFBF",
                backgroundColor: "#fff",
              }}
            />
            <br />
            <label
              htmlFor="email"
              style={{
                color: "#bfbfbf",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              Email Address:
            </label>{" "}
            <br />
            <input
              type="text"
              id="address"
              style={{
                width: "75%",
                padding: "10px 50px",
                marginTop: "10px",
                marginBottom: "20px",
                borderRadius: "20px",
                border: "1px solid #BFBFBF",
                backgroundColor: "#fff",
              }}
            />
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
              id="suite"
              style={{
                width: "75%",
                padding: "10px 50px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "20px",
                border: "1px solid #BFBFBF",
                backgroundColor: "#fff",
              }}
            />
            <br />
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <label
                  htmlFor="filled-select-currency-native"
                  style={{
                    color: "#bfbfbf",
                    fontSize: "13px",
                    marginLeft: "10px",
                  }}
                >
                  Roles:
                </label>{" "}
                <br />
                <TextField
                  id="filled-select-currency-native"
                  select
                  width="100%"
                  value={role}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  style={{ marginTop: "10px" }}
                >
                  {roles.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <label
                  htmlFor="filled-select-currency-native"
                  style={{
                    color: "#bfbfbf",
                    fontSize: "13px",
                    marginLeft: "10px",
                  }}
                >
                  Teams:
                </label>{" "}
                <br />
                <TextField
                  id="filled-select-currency-native"
                  select
                  width="100%"
                  value={team}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  style={{ marginTop: "10px" }}
                >
                  {teams.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </form>

          <h4>
            Display financial Information.{" "}
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </h4>
          <button
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "transparent",
              border: "1px solid #FF070780",
              borderRadius: "40px",
              padding: "10px 40px",
              textTransform: "uppercase",
              color: "#FF070780",
            }}
          >
            Delete
          </button>
          <button
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "transparent",
              border: "1px solid #1976d2",
              borderRadius: "40px",
              padding: "10px 40px",
              textTransform: "uppercase",
              color: "#1976D2",
              marginLeft: "40%",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              marginTop: "10px",
              marginBottom: "50px",
              backgroundColor: "#1976D2",
              border: "1px solid #1976D2",
              borderRadius: "40px",
              padding: "10px 40px",
              textTransform: "uppercase",
              color: "white",
              marginLeft: "4%",
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
};

export default AddUser;