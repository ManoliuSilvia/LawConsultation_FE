import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import UserService from "../../services/userService";
import {
    Button,
    Grid,
    Paper,
    Stack,
    TextField
} from "@mui/material";

const RegisterPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const register = () => {
        try {
            UserService.register({email, username, password}).then(res => res.json().then(data => {
                if (data && data.userId) {
                    //localStorage.setItem('savedUser', JSON.stringify(data))
                    navigate("/login_client")
                }
            }))
        } catch (e) {
            console.log(e)
        }
    }

    const handleLoginClient = () =>{
        navigate("/login_client")
    }
    const handleLoginLawyer = () =>{
        navigate("/login_lawyer")
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
                        <TextField label="Username" value={username}
                                   onChange={(event => setUsername(event.target.value))}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'} value={password}
                                   onChange={(event => setPassword(event.target.value))}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={register}> Register </Button>
                    </Grid>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Button style={{width: '300px'}} onClick={() => handleLoginClient()}> Login as Client </Button>
                        <Button style={{width: '300px'}} onClick={() => handleLoginLawyer()}> Login as Lawyer </Button>
                    </Stack>
                </Grid>
            </Paper>
        </div>
    )
}

export default RegisterPage;