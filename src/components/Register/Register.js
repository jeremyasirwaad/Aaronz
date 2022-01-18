import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

function Copyright(props) {
   return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
         {"Copyright © "}
         <Link color="inherit" href="https://aaronz.co/">
            Aaronz
         </Link>{" "}
         {new Date().getFullYear()}
         {"."}
      </Typography>
   );
}

const theme = createTheme();

export default function SignUp() {
   const history = useHistory();

   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
         email: data.get("email"),
         password: data.get("password"),
      });
   };

   return (
      <ThemeProvider theme={theme}>
         <Grid container>
            <Grid
               item
               xs={12}
               sm={8}
               md={6}
               elevation={6}
               square
               sx={{ backgroundColor: "#700dff", height: "100%" }}
            >
               <Container component="main" maxWidth="xs" sx={{ height: "90vh" }}>
                  <CssBaseline />
                  <Box
                     sx={{
                        marginTop: 15,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                     }}
                  >
                     <Avatar sx={{ m: 1, bgcolor: "#f80066" }}>
                        <LockOutlinedIcon />
                     </Avatar>
                     <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                        Sign up
                     </Typography>
                     <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 sx={{ bgcolor: "white", borderRadius: "10px" }}
                                 autoComplete="given-name"
                                 name="firstName"
                                 required
                                 fullWidth
                                 id="firstName"
                                 label="First Name"
                                 autoFocus
                              />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 sx={{ bgcolor: "white", borderRadius: "10px" }}
                                 required
                                 fullWidth
                                 id="lastName"
                                 label="Last Name"
                                 name="lastName"
                                 autoComplete="family-name"
                              />
                           </Grid>
                           <Grid item xs={12}>
                              <TextField
                                 sx={{ bgcolor: "white", borderRadius: "10px" }}
                                 required
                                 fullWidth
                                 id="email"
                                 label="Email Address"
                                 name="email"
                                 autoComplete="email"
                              />
                           </Grid>
                           <Grid item xs={12}>
                              <TextField
                                 sx={{ bgcolor: "white", borderRadius: "10px" }}
                                 required
                                 fullWidth
                                 name="password"
                                 label="Password"
                                 type="password"
                                 id="password"
                                 autoComplete="new-password"
                              />
                           </Grid>
                           <Grid item xs={12}>
                              <FormControlLabel sx={{ color: "white" }}
                                 control={<Checkbox value="allowExtraEmails" color="primary" sx={{ color: "white" }} />}
                                 label="I want to receive inspiration, marketing promotions and updates via email."
                              />
                           </Grid>
                        </Grid>
                        <Button
                           type="submit"
                           fullWidth
                           variant="contained"
                           sx={{
                              mt: 3,
                              mb: 2,
                              backgroundColor: "#f80066",
                              p: 1.5,
                              borderRadius: 2,
                              fontSize: "20px",
                           }}
                        >
                           Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                           <Grid item>
                              <Link
                                 href=""
                                 onClick={() => {
                                    history.push("/login");
                                 }}
                                 variant="body2"
                                 sx={{ color: "white" }}
                              >
                                 Already have an account? Sign in
                              </Link>
                           </Grid>
                        </Grid>
                     </Box>
                  </Box>
                  <Copyright sx={{ mt: 5,color:"white" }} />
               </Container>
            </Grid>
            <Grid
               item
               xs={false}
               sm={4}
               md={6}
               sx={{
                  backgroundImage:
                     "url(https://image.freepik.com/free-vector/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credentials-electronic-access-password-pass-phrase-pin-verification_335657-3373.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                     t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],

                  backgroundPosition: "center",
               }}
            />
         </Grid>
      </ThemeProvider>
   );
}
