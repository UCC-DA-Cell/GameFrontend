import React,{useEffect} from 'react'
import './LeaderBoard.css'
 import '../LeaderBoard-main/LEaderBoard'
const LeaderBoard = () => {
  var arr=[{Name : "Ritik", Score : 20}, {Name : "Prajwal", Score : 50}, {Name : "Satvik", Score : 10}, {Name : "Parag", Score : 30}, {Name : "Vivek", Score : 40}];
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

let table=document.getElementById("ScoreBorad");

 useEffect(() => {
 
  function create(Name,Score,Rank)
{
 // var table=document.getElementById("ScoreBorad");
  var row;
  if(table){
   row=table.insertRow(Rank);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  cell1.innerHTML = Rank;
  cell2.innerHTML = Name;
  cell3.innerHTML = Score;
  }
  console.log(cell1,cell2,cell3);
  console.log(Name+"Row Created");
  if(Rank%2==0 && row){
    row.setAttribute("style", "background-color: #709fb0;");
  }
  else if(Rank%2==1 && row){
    row.setAttribute("style", "background-color: #a7c5eb;");
  }
}
for(i=0; i<arr.length; i++)
{
  create(arr[i]["Name"], arr[i]["Score"], i+1);
}
}, [table])

    

    return (
        <div style={{height:'100vh',width:'100vw'}} >
        <h1 className="heading">LEADERBOARD</h1>
        <table  style={{border:'1px solid white'}} className="ScoreBorad" id="ScoreBorad">
        <tr>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Rank">Rank</td>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Name">Name</td>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Score">Score</td>
        </tr>
       </table>
        </div>
    )
}

export default LeaderBoard
