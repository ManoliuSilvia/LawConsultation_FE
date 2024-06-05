import {useParams} from "react-router-dom";
import React, {Fragment, useEffect, useState} from "react";
import UserService from "../../../services/userService";
import RequestService from "../../../services/requestService";
import {Button, List, ListItem, ListItemText, Stack, Typography} from "@mui/material";

const SeeApplicationsPage = () => {
    const {id: userId} = useParams();
    const [user, setUser] = useState(null);
    const [requests, setRequests] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (user && user.specialization) {
            const getAllRequests = () => {
                RequestService.getAllBySpecialization(user.specialization).then(res => res.json().then(data => {
                    setRequests(data);
                    console.log("Requests fetched:", data);
                }))
            }
            getAllRequests();
        }
    }, [user,refresh]);

    useEffect(() => {
        const getSpecializationAndUser = () => {
            UserService.getUser(userId).then(res => res.json().then(data => {
                setUser(data);
                //console.log(data.specialization)
            }))
        }
        getSpecializationAndUser();
    }, [userId])

    const denyRequest = async (request) =>{
        try{
            RequestService.denyRequest(request.requestId,userId).then(res => res.json().then(data => {
                console.log('success');
                setRefresh(!refresh);
            }))
        }
        catch (e){
            console.log(e)
        }
    }

    const acceptRequest = async (request) =>{
        try{
            RequestService.acceptRequest(request.requestId,userId).then(res => res.json().then(data => {
                console.log('success');
                setRefresh(!refresh);
            }))
        }
        catch (e){
            console.log(e)
        }
    }

    return (
        <List sx={{width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
            {requests.map((request) => (
                <Stack direction={'row'} key={request.requestId}>  {/* Added key here */}
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={request.specialization}
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {request.user.username}
                                    </Typography>
                                    {` — ${request.description}`}
                                </Fragment>
                            }
                        />
                    </ListItem>
                    <Button style={{width: '100px'}} onClick={() => acceptRequest(request)}> Accept Request </Button>
                    <Button style={{width: '100px'}} onClick={() => denyRequest(request)}> Deny Request </Button>
                </Stack>
            ))}
        </List>
    )
}

export default SeeApplicationsPage;