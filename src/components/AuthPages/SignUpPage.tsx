import { Alert, Box, Button, Divider, IconButton, Paper, Snackbar, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { createFirebaseContext } from '../../FirebaseContext';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';


const SignUpPage = () => {

  const getContextData = useContext(createFirebaseContext);
  const { createRealTimeDb, getSignUP, userData, userError }: any = getContextData;

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [open, setOpen] = useState(true);

  const handleChange = (event: any) => {
    const { name, value }: any = event.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleRest = async ()=>{
     await getSignUP(formData.email, formData.password);
     setFormData({
      email:'',
      password:''
     })
  }


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: 'auto', marginTop: 12 }}>
        <Paper elevation={3} sx={{
          width: '90%', maxWidth: '400px', backgroundColor: 'white', padding: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <Typography textAlign={'center'} variant="body2" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Please Sign Up or Login to Proceed
          </Typography>

          <Divider sx={{ marginBottom: 2 }} />

          <Box sx={{ marginBottom: 2 }}>
            <TextField
              value={formData.email}
              onChange={handleChange}
              sx={{ width: '100%' }}
              variant="outlined"
              name="email"
              label="Email"
              placeholder="Enter your email"
              fullWidth
            />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <TextField
              value={formData.password}
              onChange={handleChange}
              sx={{ width: '100%' }}
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              fullWidth
            />
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              onClick={handleRest}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: '10px',
                fontWeight: 600,
                ':hover': { backgroundColor: '#1976d2' },
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Divider sx={{ margin: 2 }} />
          <Typography textAlign='center' variant="body1">or, Sign Up With</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, marginTop: 2 }}>
            <IconButton>
              <GoogleIcon color="success"/>
            </IconButton>
            <IconButton>
              <GitHubIcon color="success"/>
            </IconButton>
            <IconButton>
              <FacebookIcon color="success"/>
            </IconButton>
          </Box>
        </Paper>
      </Box>

      {/* Success Snackbar */}
      {userData ? (
        <Snackbar open={!!userData} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Account Created Successfully!
          </Alert>
        </Snackbar>
      ) : null}

      {/* Error Snackbar */}
      {userError ? (
        <Snackbar open={userError ? open : !open} autoHideDuration={200} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
            onClose={() => setTimeout(() => {
              setOpen(false)
            }, 2000)}
          >
            {userError.message}
          </Alert>
        </Snackbar>
      ) : null}
    </>
  )
}

export default SignUpPage
