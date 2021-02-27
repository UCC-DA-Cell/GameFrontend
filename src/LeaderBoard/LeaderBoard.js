
import React,{useEffect,useCallback,useState} from 'react'
import './LeaderBoard.css'
 //import '../LeaderBoard-main/LEaderBoard'
const LeaderBoard = () => {
  const [cells,setCells]=useState([]);
  const arr=[{Name : "Ritik", Score : 20}, {Name : "Prajwal", Score : 50}, {Name : "Satvik", Score : 10}, {Name : "Parag", Score : 30}, {Name : "Vivek", Score : 40}];
// var i;
// for(i=1; i<arr.length; i++)
// {
//   var j=i-1;
//   var k=arr[i];
//   while (j>=0 && arr[j]['Score']>k['Score'])
//   {
//     arr[j+1]=arr[j];
//     j=j-1;
//   }
//   arr[j+1]=k;
// }
// console.log("Array Sorted");
// arr.reverse();
// console.log("Array Reversed")

let table=document.getElementById("ScoreBorad");

//useEffect(() => {
 
  const  create=(Name,Score,Rank)=>{
 // var table=document.getElementById("ScoreBorad");
  let row;
  if(table){
   row=table.insertRow(Rank);
   let cell1,cell2,cell3;
   if(row){
   cell1=row.insertCell(0);
   cell2=row.insertCell(1);
   cell3=row.insertCell(2);
   if(cell1){
    setCells([...cells],cell1)
   }
   if(cell2){
    setCells([...cells],cell2)
   }
   if(cell3){
    setCells([...cells],cell3)
   }
   console.log(cell1,cell2,cell3);
   cell1.innerHTML = Rank;
   cell2.innerHTML = Name;
   cell3.innerHTML = Score;
   if(Rank%2==0 ){
    row.setAttribute("style", "background-color: #709fb0;");
  }
  else if(Rank%2==1){
    row.setAttribute("style", "background-color: #a7c5eb;");
  }
   }
 
  }
  //console.log(cell1,cell2,cell3);
  //console.log(Name+"Row Created");
 
}
  //create(arr[i]["Name"], arr[i]["Score"], i+1);
  arr.map((p,i)=>(
        create(p.Name,p.Score,i+1)
  ))

//}, [])

    

    return (
        <div >
        <h1 className="heading">LEADERBOARD</h1>
        <table  style={{border:'1px solid white'}} className="ScoreBorad" id="ScoreBorad">
        <tr>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Rank">Rank</td>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Name">Name</td>
            <td style={{border:'1px solid white',padding:'15px 150px'}}  className="Score">Score</td>
            {cells && cells.map((c)=>(
              console.log(c)
            )) }
        </tr>
       </table>
        </div>
    )
}

export default LeaderBoard
