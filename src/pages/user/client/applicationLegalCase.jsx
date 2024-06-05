import {useNavigate, useParams} from "react-router-dom";
import React, {useState} from "react";
import {Button, Grid, Paper, Stack, TextField} from "@mui/material";
import LegalCaseService from "../../../services/legalcaseService";

const ApplicationLegalCasePage = () => {
    const {id: userId} = useParams();
    const [caseType, setCaseType] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    const apply = () => {
        try {
            LegalCaseService.create(userId, caseType, description).then(res => res.json().then(data => {
                if (data) {
                    navigate(`/success`);
                }
            }))
        }
        catch (e){
            console.log(e)
        }
    }

    const handleGoBack = () =>{
        navigate(`/client/${userId}`)
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
                        <TextField label="Case Type" value={caseType}
                                   onChange={(event => setCaseType(event.target.value))}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Description" value={description}
                                   onChange={(event => setDescription(event.target.value))}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={apply}> Send Request! </Button>
                    </Grid>
                    <Stack direction={'column'} alignItems={'center'}>
                        <Button style={{width: '300px'}} onClick={() => handleGoBack()}> Go Back </Button>
                    </Stack>
                </Grid>
            </Paper>
        </div>
    )
}

export default ApplicationLegalCasePage;