import {useParams} from "react-router-dom";
import React, {Fragment, useEffect, useState} from "react";
import UserService from "../../../services/userService";
import {Button, List, ListItem, ListItemText, Stack, TextField, Typography} from "@mui/material";
import LegalCaseService from "../../../services/legalcaseService";
import CaseAssigService from "../../../services/caseassigService";

const SeeLegalCasesPage = () => {
    const {id: userId} = useParams();
    const [user, setUser] = useState(null);
    const [cases, setCases] = useState([]);
    const [price, setPrice] = useState()

    const getAllLegalCases = () => {
        LegalCaseService.getAllByCaseType(user.specialization).then(res => res.json().then(data => {
            setCases(data);
            console.log("Requests fetched:", data);
        }))
    }


    useEffect(() => {
        if (user && user.specialization) {
            getAllLegalCases();
        }
    }, [user]);

    useEffect(() => {
        const getSpecializationAndUser = () => {
            UserService.getUser(userId).then(res => res.json().then(data => {
                setUser(data);
                console.log(data.specialization)
            }))
        }
        getSpecializationAndUser();
    }, [userId])

    const createCaseAssignment = (legalCase, price) => {
        console.log(user);
        CaseAssigService.create({ legalCase, user , price })
            .then(response => response.json())
            .then(data => {
                console.log("Case Assignment Created:", data);
            })
            .catch(error => {
                console.error("Error creating case assignment:", error);
            });
    }

    const changeStatus = (legalCase) => {
        LegalCaseService.changeStatus(legalCase).then(
            getAllLegalCases
        )
    }

    const handleTakeCase = (legalCase) => {
        if (!price) {
            alert("Please enter a price.")
            return;
        }
        createCaseAssignment(legalCase, price)
        changeStatus(legalCase)
    };


    return (
        <List sx={{width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
            {cases.map((lcase) => (
                <Stack direction={'row'} key={lcase.requestId}>  {/* Added key here */}
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={lcase.caseType}
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {lcase.user.username}
                                    </Typography>
                                    {` — ${lcase.description}`}
                                </Fragment>
                            }
                        />
                    </ListItem>
                    <TextField
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={{marginRight: '10px'}}
                    />
                    <Button onClick={() => handleTakeCase(lcase)}>Take Case</Button>
                </Stack>
            ))}
        </List>
    )
}

export default SeeLegalCasesPage;