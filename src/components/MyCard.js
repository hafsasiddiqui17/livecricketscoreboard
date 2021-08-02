import { Typography,  CardContent, Card, CardActions, Button, Grid, DialogContent, DialogContentText, Dialog, DialogTitle, DialogActions } from "@material-ui/core";
import cric1 from '../img/cric1.jpg';
import React, { useState, Fragment } from 'react'; 
import { getMatchDetail } from './api/api.js';


const MyCard = ({ match }) => { 

    const [detail, setDetail] = useState({}); 

    const[open, setOpen] = useState(false);

    const handleClick=(id) => {
        getMatchDetail(id) 
        .then(data=> {console.log("MATCH DATA", data);
        setDetail(data); 
        handleOpen();
    })
        .catch(error=>console.log(error));

    };
const getMatchCart = () => { 
    return(
   <Card margin-top="20px"> 
<CardContent>
<Grid container justify="center" spacing={4} >
<Grid item>
<Typography>{match["team-1"]}</Typography> 
</Grid>
<Grid item> 
{/* we can also use inline style by components{{}} style */}
{/* <img style={{mystyle}} src="../img/cric.jpg" alt="" /> */}
<img src={cric1} width="77px" margin-top="-1em" alt="" />
</Grid>
<Grid item> 
<Typography>{match["team-2"]}</Typography> 
</Grid>    
</Grid>
    
<Typography variant="h5">Matches</Typography> 
    </CardContent> 
    <CardActions> 
        <Grid container justify="center" spacing={3}> 
    <Button onClick={()=>{
       handleClick(match.unique_id); 
    }} variant="contained" color="primary">
            Show Detail
            </Button> 
        <Button margin-left="2em !important" variant="contained" color="primary">
            {new Date().toString()}
            </Button>
            </Grid>            
</CardActions>           
</Card>
    );

};

const handleClose=()=>{
setOpen(false);
}

const handleOpen=()=>{
setOpen(true);

}



const getDialog=()=> (
   
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Match Detail..."}
        <DialogContent>
            <DialogContentText id="alert-dialog-description"> 
            <Typography>{detail.stat}</Typography> 

            <Typography>
                Match <span class="fnt">
                   {detail.matcheStarted? "Started" : "Still not started"} {""}
                </span>
            </Typography> 

            <Typography>
                Score <span class="fnt">
                   {detail.score}
                </span>
            </Typography>
                
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Close
            </Button>
        </DialogActions>
        </DialogTitle>

    </Dialog>
    
); 

return  <Fragment>

{getMatchCart()}
{getDialog()}
</Fragment>;
};

export default MyCard; 