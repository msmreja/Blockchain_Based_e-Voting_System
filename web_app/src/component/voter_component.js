import React, {useState, useEffect} from 'react';
import personImage from '../person.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {getAllCandidate, putVote, votingStarted} from '../web3_functions'

function VoterComponent({account, contractInstance}) {

  const [totalCandidate, setTotalCandidate] = useState([]);
  const [votingStatus, setVotingStatus] = useState(false);

  useEffect(()=>{ 
    async function connect(){
      const status = await votingStarted(contractInstance, account)
      if(status.message){
        const arr = await getAllCandidate(contractInstance, account)
        setTotalCandidate(arr.message)
        setVotingStatus(true)
      }
    }
    setTimeout(connect, 1500);
  },[account, contractInstance])
  

  async function vote(candidate){
    let result = await putVote(contractInstance, account, candidate.candidateAddress);
    console.log("result:", result);
  }

  return (
    <div style={{paddingTop: "5%", paddingLeft: "5%",paddingRight: "5%" }}>
        <div className='banner-area'style={{marginBottom: 20}} >
          <h1>WELCOME...<br/> TO PRESIDENT ELECTION</h1>
        </div>
        <div>
          {
            votingStatus == false ? 
            <>
              <h2  style={{paddingTop: "30px"}}>Voting not started yet !!</h2>
            </>
            :
            totalCandidate.map((candidate)=>{
              return(
                <>
                 {/*
                  <div className="container">
                    <div className="card">
                      <div className="content">
                        <div className="img"><img src="https://unsplash.it/200/200"/></div>
                        <div className="cardContent">
                          <h3>Luis Molina<br/><span>Web Developer</span></h3>
                        </div>
                      </div>
                      <ul className="sci">
                        <li style="--i:1">
                          <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li style="--i:2">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li style="--i:3">
                          <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                    </div>
                    <div className="card">
                      <div className="content">
                        <div className="img"><img src="https://unsplash.it/200/201"/></div>
                        <div className="cardContent">
                          <h3>Someone Else<br/><span>Grafic Designer</span></h3>
                        </div>
                      </div>
                      <ul className="sci">
                        <li style="--i:1">
                          <a><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li style="--i:2">
                          <a><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li style="--i:3">
                          <a ><i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                    </div>
                  </div>
              */}
<div style={{alignContent:"center", paddingLeft:"28%"}}>
<div  style={{float: "left", paddingTop:"12%"}} className="container">
        <div  className="card">
          <div className="content">
            {/*<div className="img"><img src="https://unsplash.it/200/200" /></div>*/}
            <div className="cardContent">
            <CardMedia
                      component="img"
                      height="340"
                      image={personImage}
                      alt="green iguana"
                    />
            <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                       Name: {candidate.name} 
                      </Typography>
                      <Typography variant="body2" color="white">
                        Age :{candidate.age}<br/>
                        {candidate.address}
                      </Typography>
            </CardContent>
            </div>
          </div>
          <ul className="sci">
            <li>
              <Button variant="contained" onClick={(e)=>vote(candidate)}>Vote</Button>
            </li>
          </ul>
        </div>
      </div>
      </div>

             {/*   <Card sx={{ maxWidth: 380, float: "left", marginLeft: 8, marginBottom: 8 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="340"
                      image={personImage}
                      alt="green iguana"
                      style={{paddingTop: 20}}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {candidate.name} 
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {candidate.age}<br/>
                        {candidate.address}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" onClick={(e)=>vote(candidate)}>Vote</Button>
                  </CardActions>
                </Card>
            */}
                </>
              )
            })
          } 
        </div>
      </div>
      
  );
}

export default VoterComponent;
