import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import UserService from "../../services/userService";
import {Button, Grid, Paper, Stack, TextField} from "@mui/material";

const LoginLawyerPage =  () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const login = () => {
        try {
            UserService.login_lawyer(email, password).then(res => res.json().then(data => {
                if (data && data.userId) {
                    localStorage.setItem('lawyerUser', JSON.stringify(data))
                    navigate(`/lawyer/${data.userId}`)
                }
            }))
        }
        catch (e){
            console.log(e)
        }
    }

    const handleRegister = () =>{
        navigate("/register")
    }
    const handleLoginClient = () =>{
        navigate("/login_client")
    }

    return (
        <div style={{padding: 30}}>
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField label="Email" value={email} onChange={(event => setEmail(event.target.value))}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'} value={password}
                                   onChange={(event => setPassword(event.target.value))}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={login}> Login as lawyer </Button>
                    </Grid>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Button style={{width: '300px'}} onClick={() => handleRegister()}> Register as client </Button>
                        <Button style={{width: '300px'}} onClick={() => handleLoginClient()}> Login as Client </Button>
                    </Stack>
                </Grid>
            </Paper>
        </div>
    )
}

export default LoginLawyerPage