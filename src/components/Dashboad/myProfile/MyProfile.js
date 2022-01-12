import { Avatar, Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MyProfile = () => {
   const [select, setselect] = useState("");
   const [selectInterest, setselectInterest] = useState("");
   const [dateValue, setdateValue] = useState("");

   const Style = {
      border: "1px",
      marginTop: "100px",
      marginLeft: "300px",
      marginRight: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      p: "20px",
      top: "50%",
      left: "50%",
      width: "40vw",
      // marginBottom: "40px"
   };

   return (
      <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
      <Card sx={Style}>
         <CardHeader title="Edit Profile" />
         <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 80, height: 80, bgcolor: "skyblue", marginLeft: "10px" }}
         />

         <TextField
            sx={{ padding: "10px", marginTop: "5px" }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
         />
         <TextField
            sx={{ padding: "10px", marginTop: "5px" }}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
         />

         <TextField
            id="date"
            label="Date of birth"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220, padding: "10px", marginTop: "10px" }}
            InputLabelProps={{
               shrink: true,
            }}
         />
         <TextField
            id="date"
            label="Date of joining"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220, padding: "10px", marginTop: "20px" }}
            InputLabelProps={{
               shrink: true,
            }}
         />
         <TextField
            sx={{ padding: "10px", marginTop: "5px" }}
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
         />
         <TextField
            sx={{ padding: "10px", marginTop: "5px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
         />

         <InputLabel sx={{ marginLeft: "10px" }} id="demo-multiple-name-label">
            Area of expertise
         </InputLabel>
         <Select
            sx={{ marginLeft: "10px" }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={select}
            onChange={(e) => {
               setselect(e.target.value);
            }}
            autoWidth
            label="Age"
         >
            <MenuItem value={1}>Rental</MenuItem>
            <MenuItem value={2}>Sale</MenuItem>
            <MenuItem value={3}>Both</MenuItem>
         </Select>

         <InputLabel sx={{ marginLeft: "10px", marginTop: "10px" }} id="demo-multiple-name-label">
            Interests
         </InputLabel>
         <Select
            sx={{ marginLeft: "10px" }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectInterest}
            onChange={(e) => {
               setselectInterest(e.target.value);
            }}
            autoWidth
            label="Age"
         >
            <MenuItem value={1}>Residential</MenuItem>
            <MenuItem value={2}>Commercial</MenuItem>
            <MenuItem value={3}>Both</MenuItem>
         </Select>
      </Card>
      </div>
   );
};

export default MyProfile;
