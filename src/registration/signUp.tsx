import { Typography, TextField, Stack, Button } from "@mui/material";
import { useState } from "react";
import * as EmailValidator from 'email-validator';



function SignUP() {
    const [value, setValue] = useState<String>("")
    const [email, setEmail] = useState<String>("")
    const [isEmail, setIsEmail] = useState<Boolean>(false)
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>){
       setValue(e.target.value)
      
    }
    function handlemail(e: React.ChangeEvent<HTMLInputElement>){
       const em = e.target.value
       setEmail(em)
       const isEmail = EmailValidator.validate(em)
       setIsEmail(isEmail)
       
    }
    return ( <Stack sx={
        {   justifyContent:'center',
            alignItems:'center', 
            gap:1,
            backgroundColor:"lightgray",
            width:400,
            paddingX:3,
            paddingY:2,
            marginY:1,
            borderRadius:1,
            color:"white",
        

        }
    }> 
       <Typography variant="h3" component="h1">Sign Up </Typography>
        <TextField label='Name' fullWidth >
        </TextField>
        <TextField label='Email' type="email" fullWidth value={email} onChange={handlemail} color={isEmail ? "success": "error"}>
        </TextField>
        <TextField label='Phone' type="number"fullWidth>
        </TextField>
        <TextField label='Password' type="password" value={value} fullWidth onChange={handlePassword} error={value.length<8 &&value.length>0} helperText={value.length<8 && value.length>0 ? 'Your password must be more than 8 characters' : ""} color ={ value.length>8 ? "success" : "primary"}>
        </TextField>
        <Button variant="contained" fullWidth>Sign up</Button>
        

    </Stack> );
}

export default SignUP;