import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material'
import { useContext, useState, useEffect } from 'react';
import { createFirebaseContext } from '../../FirebaseContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginInPage = () => {
    const getContextData = useContext(createFirebaseContext);
    const { logInUser, loginData, userLogInError }: any = getContextData;
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (event: any) => {
        const { name, value }: any = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleRest = async () => {
        await logInUser(formData.email, formData.password);
        setFormData({
            email: '',
            password: ''
        })
    }

    useEffect(() => {
        if (loginData) {
            alert('successfully login');
            navigate('/home'); // Navigate to home after successful login
        }
        if (userLogInError) {
            alert(userLogInError);
        }
    }, [loginData, userLogInError, navigate]);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', height: 'auto', marginTop: 12 }}>
                <Paper elevation={3} sx={{
                    width: '90%', maxWidth: '400px', backgroundColor: 'white', padding: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center'
                }}>
                    <Typography textAlign={'center'} variant="body2" sx={{ fontWeight: 600, marginBottom: 2 }}>
                        Please Login to Proceed
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
                            Log In
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}

export default LoginInPage;