
import React,{useEffect,useCallback,useState,useContext} from 'react'
import './LeaderBoard.css'
import {AuthContext} from '../Authentication/Auth-context/authContext'
 //import '../LeaderBoard-main/LEaderBoard'
const LeaderBoard = () => {
  const [arr,setArr]=useState();
  const auth=useContext(AuthContext)
  console.log(auth.token);
  useEffect(() => {
    const leader_Board=async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}event/leaderboard`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${auth.token}`
      }
    })
    console.log(res);
    let array;
    if(res.status==200){
      array= await res.json();
      setArr(array);
    }
    else{
      console.log('wait....')
    }
    }
    leader_Board();
  }, [arr])
  //  arr=[
  //   {name : "Ritik", score : 20},
  //  {name : "Prajwal", score : 50}, 
  // {name : "Satvik", score : 10},
  //  {name : "Parag", score : 30},
  //  {name : "Vivek", score : 40}
  // ];


const create=(content,index)=>{
  return(
    <tr>
      <td style={{border:'1px solid white',padding:'1vh 5vw',backgroundColor:`${index%2==0?'#709fb0':' #a7c5eb'}`  }} className="Rank" >{index+1}</td>
      <td style={{border:'1px solid white',padding:'1vh 5vw',backgroundColor:`${index%2==0?'#709fb0':' #a7c5eb'}`}} className="Name" >{content.name}</td>
      <td style={{border:'1px solid white',padding:'1vh 5vw',backgroundColor:`${index%2==0?'#709fb0':' #a7c5eb'}`}} className="Score" >{content.totalScore}</td>
    </tr>
  )

}

    return (
        <div style={{height:'100vh',width:'100vw',paddingTop:'20vh',backgroundSize:'cover',maxHeight:'100vh',overflow:'auto'}} >
        <h1 className="heading">LEADERBOARD</h1>
        <table  style={{border:'1px solid white',display:'inline-block'}} className="ScoreBorad" id="ScoreBorad">
        <tr style={{maxWidth:'40vw'}} >
            <td style={{border:'1px solid white',padding:'1vh 5vw',color:'white'}}  className="Rank">Rank</td>
            <td style={{border:'1px solid white',padding:'1vh 5vw',color:'white'}}  className="Name">Name</td>
            <td style={{border:'1px solid white',padding:'1vh 5vw',color:'white'}}  className="Score">Score</td>
        </tr>
        { arr && arr.map((content,i)=>(
          create(content,i)
        ))}
       </table>
        </div>
    )
}

export default LeaderBoard
