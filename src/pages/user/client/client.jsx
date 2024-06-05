import {useNavigate, useParams} from "react-router-dom";
import {Button, Stack} from "@mui/material";

const ClientPage = () => {
    const navigate = useNavigate();
    const {id: userId} = useParams();

    const handleApplicationLawyer = () => {
        navigate(`/client_request/${userId}`);
    }
    const handleApplicationConsultation = () =>{
        navigate(`/client_consult/${userId}`)
    }


    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="text" style={{width: '300px'}} onClick={() => handleApplicationLawyer()}> Apply to become a lawyer!</Button>
                <Button variant="text" style={{width: '300px'}} onClick={() => handleApplicationConsultation()}> Apply for legal consultation!</Button>
            </Stack>
        </div>
    )
}

export default ClientPage;