import React, {useState, useEffect} from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {registerCandidates, whiteListAddress, getAllCandidate, getWinner, startVoting, stopVoting} from '../web3_functions';




const errorMsg = (
    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
    </Alert>
)


function AdminComponent({account, contractInstance}) {

    const [candidateName, setCandidateName] = useState();
    const [candidateAge, setCandidateAge] = useState();
    const [candidateAddress, setCandidatAddress] = useState();
    const [voterAddress, setVoterAddress] = useState();
    const [winnerAddress, setWinnerAddress] = useState("msm");
    const [active, setActive]= useState("DefaultCard");

    let loginActive=false;
    let signUpActive= false;
    let deshboardActive=false;

    async function register_candidate(){
        console.log("name:", candidateName);
        let result = await registerCandidates(contractInstance, account, candidateName, candidateAge, candidateAddress);
        console.log("result:", result);
    }

    
    async function register_voter(){
        console.log("name:", candidateName);
        let result = await whiteListAddress(contractInstance, account, voterAddress);
        console.log("result:", result);
    }

    
    async function start_voting(){
        console.log("name:", candidateName);
        let result = await startVoting(contractInstance, account);
        console.log("result:", result);
    }

    
    async function stop_voting(){
        console.log("name:", candidateName);
        let result = await stopVoting(contractInstance, account);
        console.log("result:", result);
    }

    
    async function get_Winner(){
        console.log("name:", candidateName);
        let {message} = await getWinner(contractInstance, account);
        console.log("result:", message);
        setWinnerAddress(message.name)
    }

    function loginEvent(){
    }

    return(
        <div style={{paddingTop: "18px", paddingLeft: "5%", paddingRight: "5%" }}>

            <div id= "main-tem" className="main-tem">
            <ul id="menu-bar"  className="menu-bar">
            <li onClick={() => setActive("FirstCard")}>Register Candidate</li>
            <li onClick={() => setActive("SecondCard")}>Register Voter </li>
            <li onClick={() => setActive("ThirdCard")}>Start / Stop Voting</li>
            <li onClick={() => setActive("FourthCard")}>Result</li>
            </ul>
        </div>
        {active === "DefaultCard" && <div className='banner-area'style={{marginTop: 50}} >
                <h1>WELCOME... <br/> TO COLLEGE PRESIDENT ELECTION</h1>
                <img id='stickr' src='https://media4.giphy.com/media/gHi4YMtu5ilxykWCXj/giphy.gif?cid=ecf05e47ydl417hgleybxzr11x8wh4hk0h7izpnhfeo1tzd0&ep=v1_gifs_related&rid=giphy.gif&ct=s'/>
            </div>}
        <div className="dynamic-elmt"></div>
            <div>
                <div style={{paddingTop:"10px",position: 'absolute', left: '50%', top: '60%',transform: 'translate(-50%, -50%)'}}>
                {active === "FirstCard" &&  <Card sx={{ width: 400, marginTop: '-200px' }}>
                        <Typography gutterBottom variant="h5" component="div" align='left' paddingLeft={2} style={{marginTop: '10px'}}>
                            Register Candidate
                        </Typography>
                        <CardContent>
                            <TextField id="outlined-basic" label="Candidate name" variant="outlined" style={{width: '100%', marginBottom: '10px'}}
                                onChange={(e)=>setCandidateName(e.target.value)}/>
                            <TextField id="outlined-basic" label="Candidate Ag" variant="outlined" style={{width: '100%',marginBottom: '10px'}}
                                onChange={(e)=>setCandidateAge(e.target.value)}/>
                            <TextField id="outlined-basic" label="Candidate Address" variant="outlined" style={{width: '100%'}}
                                onChange={(e)=>setCandidatAddress(e.target.value)}/>
                        </CardContent>
                        <CardActions>
                            <Button style={{left:"20%"}} variant="contained" onClick={register_candidate}>Register Candidate</Button>
                        </CardActions>
                    </Card>}

                    {active === "SecondCard" &&<Card sx={{ maxWidth: 400, marginTop: '-200px', marginBottom: 5}}>
                        <Typography gutterBottom variant="h5" component="div" align='left' paddingLeft={2} style={{marginTop: '10px'}}>
                            Register Voter
                        </Typography>
                        <CardContent>
                            <TextField id="outlined-basic" label="Register Voter" variant="outlined" style={{width: '100%'}}
                                onChange={(e)=>setVoterAddress(e.target.value)}/>
                        </CardContent>
                        <CardActions>
                            <Button style={{left:"20%"}} variant="contained" onClick={register_voter}>Register Voter</Button>
                        </CardActions>
                    </Card>}
                </div>

                 <div style={{paddingTop:"10px",position: 'absolute', left: '50%', top: '60%',transform: 'translate(-50%, -50%)'}}>
                 {active === "ThirdCard" &&<Card sx={{ width: 400, marginTop: '-200px'}}>
                        <Typography gutterBottom variant="h5" component="div" align='center' paddingLeft={2}>
                            Start Voting
                        </Typography>
                        <CardActions align="middle">
                            <div align='center'>
                            <Button style={{left:"96%"}} variant="contained" onClick={start_voting}>Start Voting</Button>
                            </div>
                        </CardActions>
                    </Card>}

                    {active === "ThirdCard" &&<Card sx={{ maxWidth: 400, marginTop: '-200px'}}>
                        <Typography gutterBottom variant="h5" component="div" align='center' paddingLeft={2}>
                            Stop Voting
                        </Typography>
                        <CardActions>
                            <Button style={{left:"35%"}} variant="contained" onClick={stop_voting}>Stop Voting</Button>
                        </CardActions>
                    </Card>}

                    {active === "FourthCard" &&<Card sx={{ maxWidth: 400, marginTop: '-200px'}}>
                        <CardContent>
                            <TextField id="outlined-basic" label={winnerAddress} variant="outlined" disabled style={{width: '100%'}}/>
                        </CardContent>
                        <CardActions>
                            <Button style={{left:"35%"}} variant="contained" onClick={get_Winner}>Get Wineer</Button>
                        </CardActions>
                            <p style={{color:"red", padding:"20px"}}>*Note: Stop Voting first to get the Results ...!!</p>
                    </Card>}
                </div>
                
            </div>
      </div>
    )
}

export default AdminComponent