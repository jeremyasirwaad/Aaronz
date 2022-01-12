import React from 'react'
import './Viewrequest.css'
import { Sidenav } from '../SideNav/Sidenav'
import Viewcard from './Viewreqcard/Viewcard'
import { Viewcard2 } from './Viewreqcard2/Viewcard2'
// import stairs from "./man-climbing-stairs.png";
// import profilelogo from "./User-Profile-PNG-High-Quality-Image.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import { Card } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from 'react'
const Viewrequest = () => {

    const style = {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
     
        bgcolor: "background.paper",
     
        boxShadow: 24,
        p: 4,
     };
   
    const [sentorrecieve, setSentorrecieve] = useState(true);
    const [delstate, setDelstate] = useState(false);
    const managesentor = () => {
        if(sentorrecieve === true){
            setSentorrecieve(false);
        }
        if(sentorrecieve === false){
            setSentorrecieve(true);
        }
        console.log(sentorrecieve);
    }

    const managedeclinestate = (declinestate,declineprops) => {
            setDelstate(declinestate);
            console.log(declineprops);
    }
  

    const manageclosedelstate = () => {
        setDelstate(false);
    }



    return (
        <div>
            <div className='viewreqcard'>
                {/* <h4 className='viewreqtitle'>View Requests</h4> */}
                <div className='allcontainer'>
                    <div className="viewreqcontainer">
                        <div className="sortdiv">
                        <i class='bx bxs-filter-alt'></i>
                        <span>Sort</span>
                        </div>
                        <div className="sendrecieve">
                            <div onClick={() => { managesentor(); }}  className= { sentorrecieve ? "send" : "send bgwhite" }>
                                <span>Sent</span>
                            </div>
                        </div>
                        <div className="gridsendres">
                            <div className={ sentorrecieve ? "gridsend" : "gridsend none" } >
                                    <Viewcard getBack = { managedeclinestate }  Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"  />
                                    <Viewcard getBack = { managedeclinestate } Date = "9/10" budget = "15000" Name = "Burj Al Arab" Bedrooms = "6" Maid = "No"  />
                                    <Viewcard  getBack = { managedeclinestate } Date = "17/8" budget = "35000" Name = "Marina" Bedrooms = "2" Maid = "Yes"  />
                                    <Viewcard getBack = { managedeclinestate } Date = "22/9" budget = "45000" Name = "Cayan Group" Bedrooms = "4" Maid = "No"  />
                                    <Viewcard getBack = { managedeclinestate } Date = "31/4" budget = "85000" Name = "The Tower" Bedrooms = "1" Maid = "Yes"  />
                                    <Viewcard getBack = { managedeclinestate } Date = "15/3" budget = "45000" Name = "Elite Residence" Bedrooms = "2" Maid = "Yes"  />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
               className="modal-for-decline"
               open={delstate}
               onClose={manageclosedelstate}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Please select a Reason for decline
                  </Typography>
                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                     <InputLabel id="demo-simple-select-autowidth-label" style = {{ "marginTop" : "10px"}}>Choose</InputLabel>
                     <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        // value={select}
                        // onChange={handleChangefordel}
                        autoWidth
                        label="Age"
                     >
                        <MenuItem value={10}>Deal done within Aaronz</MenuItem>
                        <MenuItem value={21}>No one has responded</MenuItem>
                        <MenuItem value={22}>Deal done outside Aaronz</MenuItem>
                        <MenuItem value={22}>Property not with me anymore</MenuItem>
                        <MenuItem value={22}>Others</MenuItem>
                     </Select>

                     <Button variant="contained" style={{marginTop:"10px"}}>Done</Button>
                  </FormControl>
               </Box>
            </Modal>

            </div>
        </div>
    )
}

export default Viewrequest
