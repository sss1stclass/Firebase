import { Button } from "@mui/material"
import { useContext } from "react"
import {createFirebaseContext} from '../../FirebaseContext'

const SignUpPage = () => {
  const getContextData = useContext(createFirebaseContext);
  const {val, testApp}:any = getContextData;
  console.log(val);
  return (
    <>
     <div>SignUpPage</div>
     <Button onClick={testApp} variant='outlined' color='success'>check</Button>
    </>
   
  )
}

export default SignUpPage