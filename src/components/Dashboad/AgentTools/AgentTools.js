import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";

const AgentTools = () => {
   const [dealValue, setdealValue] = useState(0);
   const [ComBuyer, setComBuyer] = useState(0);
   const [ComLand, setComLand] = useState(0);
   const [totalCom, settotalCom] = useState(0);
   const [totalComAm, settotalComAm] = useState(0);
   const [ComToAaronz, setComToAaronz] = useState(0);
   const [RemCom, setRemCom] = useState(0);
   const [agentPer, setagentPer] = useState(0);
   const [agentAmount, setagentAmount] = useState(0);

   const handleComChange = () => {
      var x = Number(ComLand);
      var y = Number(ComBuyer);

      settotalCom(x + y);
   };

   useEffect(() => {
      handleComAmount();
      var d = Number(totalComAm);
      setComToAaronz(Number(d / 2));
      setRemCom(Number(d / 2));

      var a = Number(RemCom);
      var b = Number(agentPer);
      var c = b / 100;
      setagentAmount(Number(a * c));
   }, [totalCom, dealValue, ComBuyer, ComLand, totalComAm, agentPer]);

   const handleComAmount = () => {
      var a = Number(dealValue);
      var b = Number(totalCom);
      var c = b / 100;
      console.log("====================================");
      console.log(b);
      console.log("====================================");
      settotalComAm(Number(a * c));
   };

   console.log(dealValue);
   console.log(ComBuyer);
   console.log(ComLand);
   console.log(totalCom);
   console.log(totalComAm);

   return (
      <div style={{ marginTop: "100px", marginLeft: "400px", marginRight: "50px" }}>
         
         <h2 style={{ "marginBottom": "40px" }}>Commission Calculator:</h2>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableBody>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography> Enter in the Deal value</Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField
                           id="standard-basic"
                           label="Value"
                           value={dealValue}
                           onChange={(e) => setdealValue(e.target.value)}
                           variant="standard"
                        />
                     </TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography> Enter the Buyer/Tenant commission percentage</Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField
                           id="standard-basic"
                           value={ComBuyer}
                           onKeyUp={handleComChange}
                           onFocus={handleComChange}
                           onChange={(e) => {
                              setComBuyer(e.target.value);
                              setagentPer(0);
                           }}
                           label="Value"
                           variant="standard"
                        />
                     </TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography> Commission from landlord %</Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField
                           id="standard-basic"
                           value={ComLand}
                           onKeyUp={handleComChange}
                           onFocus={handleComChange}
                           onChange={(e) => {
                              setComLand(e.target.value);
                              setagentPer(0);
                           }}
                           label="Value"
                           variant="standard"
                        />
                     </TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography> Total commission %</Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField id="standard-basic" value={totalCom} variant="standard" />
                     </TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography> Total commission Amount</Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField id="standard-basic" value={totalComAm} variant="standard" />
                     </TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography>Commission to aaronz </Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField id="standard-basic" value={ComToAaronz} variant="standard" />
                     </TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography>Remaning commission </Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField id="standard-basic" value={RemCom} variant="standard" />
                     </TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography>Enter in your commission percentage %</Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField
                           id="standard-basic"
                           value={agentPer}
                           onChange={(e) => setagentPer(e.target.value)}
                           variant="standard"
                        />
                     </TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        <Typography>Your earning on this deal</Typography>
                     </TableCell>
                     <TableCell>
                        {" "}
                        <TextField id="standard-basic" value={`${agentAmount}  AED`} variant="standard" />
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default AgentTools;
