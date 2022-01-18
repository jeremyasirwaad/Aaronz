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
      <div
         style={{
            marginTop: "100px",
            marginLeft: "400px",
            marginRight: "50px",
            marginBottom: "40px  "
         }}
      >
         <h2 style={{ marginBottom: "20px" }}>Commission Calculator:</h2>
         <TableContainer component={Paper}>
            <Table
               sx={{
                  border: 2,
               }}
               aria-label="simple table"
            >
               <TableBody>
                  <TableRow
                     sx={{
                        "&:last-child td, &:last-child th": { border: 5 },
                        borderBottom: 1.5,
                     }}
                  >
                     <TableCell sx={{ width: "50%" }} component="th" scope="row">
                        <Typography> Enter in the Deal value:</Typography>{" "}
                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           type="number"
                           label="Value"
                           value={dealValue}
                           onChange={(e) => setdealValue(e.target.value)}
                           variant="outlined"
                        />
                     </TableCell>
                     <TableCell component="th" sx={{ width: "50%" }} scope="row">
                        <Typography> Enter the Buyer/Tenant commission percentage</Typography>{" "}
                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={ComBuyer}
                           onKeyUp={handleComChange}
                           onFocus={handleComChange}
                           onChange={(e) => {
                              setComBuyer(e.target.value);
                              setagentPer(0);
                           }}
                           label="Value"
                           variant="outlined"
                        />
                     </TableCell>
                  </TableRow>

                  <TableRow
                     sx={{ "&:last-child td, &:last-child th": { border: 0 }, borderBottom: 1.5 }}
                  >
                     <TableCell sx={{ width: "50%" }} component="th" scope="row">
                        <Typography> Commission from landlord %</Typography>{" "}
                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={ComLand}
                           onKeyUp={handleComChange}
                           onFocus={handleComChange}
                           onChange={(e) => {
                              setComLand(e.target.value);
                              setagentPer(0);
                           }}
                           label="Value"
                           variant="outlined"
                        />
                     </TableCell>
                     <TableCell sx={{ width: "50%" }} component="th" scope="row">
                        <Typography> Total commission %</Typography>{" "}
                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={totalCom}
                           variant="outlined"
                        />
                     </TableCell>
                  </TableRow>

                  <TableRow
                     sx={{ "&:last-child td, &:last-child th": { border: 0 }, borderBottom: 1.5 }}
                  >
                     <TableCell sx={{ width: "50%" }} component="th" scope="row">
                        <Typography> Total commission %</Typography>{" "}
                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={totalCom}
                           variant="outlined"
                        />
                     </TableCell>
                     <TableCell sx={{ width: "50%" }} component="th" scope="row">
                        <Typography> Total commission Amount</Typography>{" "}
                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={totalComAm}
                           variant="outlined"
                        />
                     </TableCell>
                  </TableRow>

                  <TableRow
                     sx={{ "&:last-child td, &:last-child th": { border: 0 }, borderBottom: 1.5 }}
                  >
                     <TableCell component="th" scope="row">
                        <Typography>Commission to aaronz </Typography>

                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={ComToAaronz}
                           variant="outlined"
                        />
                     </TableCell>
                     <TableCell component="th" scope="row">
                        <Typography>Remaning commission </Typography>

                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={RemCom}
                           variant="outlined"
                        />
                     </TableCell>
                  </TableRow>

                  <TableRow
                     sx={{ "&:last-child td, &:last-child th": { border: 0 }, borderBottom: 1.5 }}
                  >
                     <TableCell component="th" scope="row">
                        <Typography>Enter in your commission percentage %</Typography>{" "}
                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={agentPer}
                           onChange={(e) => setagentPer(e.target.value)}
                           variant="outlined"
                        />
                     </TableCell>
                     <TableCell component="th" scope="row">
                        <Typography variant="h5">Your earning on this deal</Typography>{" "}
                        <TextField
                           sx={{ marginTop: "20px", width: "80%" }}
                           id="standard-basic"
                           value={`${agentAmount}  AED`}
                           variant="outlined"
                        />
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default AgentTools;