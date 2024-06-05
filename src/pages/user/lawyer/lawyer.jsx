import {useNavigate, useParams} from "react-router-dom";
import {Button, Stack} from "@mui/material";

const LawyerPage = () => {
    const navigate = useNavigate();
    const {id: userId} = useParams();

    const handleSeeRequests = () => {
        navigate(`/lawyer_request/${userId}`);
    }
    const handleSeeConsultations = () =>{
        navigate(`/lawyer_consult/${userId}`)
    }


    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="text" style={{width: '350px'}} onClick={() => handleSeeRequests()}> See application requests!</Button>
                <Button variant="text" style={{width: '350px'}} onClick={() => handleSeeConsultations()}> See legal consultation requests!</Button>
            </Stack>-
        </div>
    )
}

export default LawyerPage;