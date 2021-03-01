
import React,{useEffect,useCallback,useState} from 'react'
import './LeaderBoard.css'
 //import '../LeaderBoard-main/LEaderBoard'
const LeaderBoard = () => {
  const arr=[
    {name : "Ritik", score : 20},
   {name : "Prajwal", score : 50}, 
  {name : "Satvik", score : 10},
   {name : "Parag", score : 30},
   {name : "Vivek", score : 40}
  ];
var i;
for(i=1; i<arr.length; i++)
{
  var j=i-1;
  var k=arr[i];
  while (j>=0 && arr[j]['Score']>k['Score'])
  {
    arr[j+1]=arr[j];
    j=j-1;
  }
  arr[j+1]=k;
}
console.log("Array Sorted");
arr.reverse();
console.log("Array Reversed")

const create=(content,index)=>{
  return(
    <tr>
      <td style={{border:'1px solid white',padding:'15px 150px',backgroundColor:`${index%2==0?'#709fb0':' #a7c5eb'}`  }} className="Rank" >{index}</td>
      <td style={{border:'1px solid white',padding:'15px 150px',backgroundColor:`${index%2==0?'#709fb0':' #a7c5eb'}`}} className="Name" >{content.name}</td>
      <td style={{border:'1px solid white',padding:'15px 150px',backgroundColor:`${index%2==0?'#709fb0':' #a7c5eb'}`}} className="Score" >{content.score}</td>
    </tr>
  )

}

 
 

 

    

    return (
        <div >
        <h1 className="heading">LEADERBOARD</h1>
        <table  style={{border:'1px solid white'}} className="ScoreBorad" id="ScoreBorad">
        <tr>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Rank">Rank</td>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Name">Name</td>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Score">Score</td>
        </tr>
        {arr.map((content,i)=>(
          create(content,i)
        ))}
       </table>
        </div>
    )
}

export default LeaderBoard
