import logo from './logo.svg';
import './App.css';
import { Button, Grid } from "@material-ui/core";
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import { getMatches, getMatchDetail } from "./components/api/api";
import { Fragment, useEffect } from 'react';
import { useState } from 'react'; 
import './components/mystyle.css';

function App() { 

const [matches, setMatched] = useState( [] );
  useEffect(() => {
    getMatches() 
      .then((data) => {
       setMatched(data.matches); 
      console.log(data.matches); 
      })
      .catch((error) => alert("could not load data"));
  }, []);
  return (
    <div className="App"> 
    <Navbar></Navbar>
    <h1>Welcome Everyone! Enjoy...  Cricket Live Score Online  </h1> 
    {/* //map is use for traversing */} 

    {/* <Grid container>
     <Grid>

     </Grid> 
     <Grid> */}
     {matches.map((match) => ( 
      // <MyCard key={match.unique_id} match={match} />  
       
      <Fragment key={match.unique_id}> 
      
      
         {match.type=="Twenty20"? (
            <MyCard key={match.unique_id} match={match} />
         
        
      ) : ( 
      ""
      )}
      </Fragment>
     
     ))}
     {/* </Grid>
    </Grid>  */}


    </div>
  );
}

export default App;
 