import React,{useState} from 'react'

const CircleApp = () => {

    const [circles,setCircles] = useState([])
    const [greyCircleCount,setGrayCircleCount] = useState(0)

    const addCircle = () => {
        setCircles([...circles,{colour:'white'}])

        console.log(circles)
    }

    const changeColor = (index)=>{
        const newCircles = [...circles];

        console.log(newCircles);
        if(newCircles[index].color!=='grey'){
            newCircles[index].color ='grey';
            setGrayCircleCount(greyCircleCount+1)
        }
        else{
            newCircles[index].color = 'white';
            setGrayCircleCount(greyCircleCount-1)
        }
        setCircles(newCircles)
    }
  return (
    <div>
      <button onClick={addCircle}>Add Circle</button>
      <h1>Grey Circle Count : {greyCircleCount}</h1>
{circles.map((circle,index)=>(
    <div
    key={index}
    style={{
        width:'100px',
        height:'100px',
        border: '2px solid',    
        backgroundColor:circle.color,
        borderRadius:'50%',
        margin:'10px',
        cursor:'pointer'
    }}
    onClick={()=>changeColor(index)}
    >

    </div>
))}
    </div>
  )
}

export default CircleApp
