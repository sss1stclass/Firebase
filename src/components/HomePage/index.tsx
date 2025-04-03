import React, { useContext, useEffect } from 'react'
import { createFirebaseContext } from '../../FirebaseContext';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const getContextData = useContext(createFirebaseContext);
  const { loginData, logOut, logout }: any = getContextData;
  const navigate = useNavigate(); 
  
  useEffect(()=>{
    if (logout) {
      alert('successfully logout');
      navigate('/');
  }
  },[logout])
  return (
    <>
    <h1 style={{ textAlign: 'center' }}>sab sahi chl rha hai</h1>
    <Typography variant='body1' textAlign='center'>welcome MR. {loginData?.email}</Typography>
    <Button variant='contained' color='error' onClick={logOut}> logOut</Button>
    </>
  )
}

export default HomePage;