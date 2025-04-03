import { Alert, Box, Button, Divider, Paper, Snackbar, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { createFirebaseContext } from '../../FirebaseContext'

const flex = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center'
}

const SignUpPage = () => {
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


  const getContextData = useContext(createFirebaseContext);
  const { createRealTimeDb, getSignUP, userData, userError }: any = getContextData;
  console.log(userData, userError?.message);
  return (
    <>
      <Box mb={2} p={0} width="100%" height='auto' sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ width: '50%', height: 'auto', backgroundColor: 'white', padding: '10px', display: 'felx', flexDirection: 'row-reverse', marginTop: 8 }}>
          <Typography textAlign={'center'} mb={2} variant="h3">Welcome to the Sign In Page</Typography>
          <Divider sx={{ width: '100%', marginBottom: 2 }} />
          <Box sx={flex} marginBottom={2}>
            <TextField value={formData.email} onChange={handleChange} sx={{ width: '80%' }} variant="outlined" name='email' label='Email' placeholder="Enter your email " />
          </Box>
          <Box sx={flex} marginBottom={2}>
            <TextField value={formData.password} onChange={handleChange} sx={{ width: '80%' }} variant="outlined" name='password' label='Password' placeholder="Enter your Password.." />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button onClick={() => getSignUP(formData.email, formData.password)} variant="contained" color="success">SignUP</Button>
          </Box>
        </Paper>
        {/* Success Snackbar */}
        {userData ? (
          <Snackbar open={!!userData} autoHideDuration={6000}>
            <Alert
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Account Created Successfully!!!
            </Alert>
          </Snackbar>
        ) : null}

        {/* Error Snackbar */}
        {userError ? (
          <Snackbar open={userError?open:!open} autoHideDuration={200}>
            <Alert
              severity="error"
              variant="filled"
              sx={{ width: '100%' }}
              onClose={()=>setTimeout(() => {
                 setOpen(false)
              }, 2000)}
            >
              {userError.message}
            </Alert>
          </Snackbar>
        ) : null}
      </Box>
    </>

  )
}

export default SignUpPage