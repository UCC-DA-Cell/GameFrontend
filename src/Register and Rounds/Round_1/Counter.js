import React,{useEffect} from 'react'
import './Counter.css'
const Counter = () => {
    let finalDate= new Date('Feb 28,2021 23:40:00').getTime();
const calculate=()=>{
    const now= new Date().getTime();
    const diff=finalDate-now;
    if(diff<=0){
        return;
    }
    const sec=1000;
    const min=sec*60;
    const hrs=min*60;
    const days=hrs*24;

    const d= Math.floor(diff/days);
    const h=Math.floor((diff%days)/hrs);
    const m=Math.floor((diff%hrs)/min);
    const s=Math.floor((diff%min)/sec);
    const x1=document.getElementById('day');
    const x2=document.getElementById('hour');
    const x3=document.getElementById('minute');
    const x4=document.getElementById('second');
    if(x1 && x2 && x3 && x4 ){
    document.getElementById('day').innerHTML=d;
    document.getElementById('hour').innerHTML=h;
    document.getElementById('minute').innerHTML=m;
        document.getElementById('second').innerHTML=s;
    }
    
}
//useEffect(()=>{
  const d= document.getElementById('day')
  const h= document.getElementById('hour')
  const m= document.getElementById('minute');
  const s= document.getElementById('second');
   
    const ID=setInterval(calculate,1000);
    if(d && h && m && s ){
        if(d.innerHTML<=0 && h.innerHTML<=0 && m.innerHTML<=0 && s.innerHTML<=0){
            clearInterval(ID);
        }
       
    }
 
//},[])

    return (
        <div className="counter" >
            <h2>Round-1 Starts in</h2>
            <div className="countdown" >
               <div id="day">NA</div>
               <div id="hour">NA</div>
               <div id="minute">NA</div>
               <div id="second">NA</div>
            </div>
        </div>
    )
}

export default Counter
