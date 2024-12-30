import { useState } from "react"

function Color() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center   bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          {/* <button 
           onClick={setColor}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={} 
          ></button> */}

          <button
           onClick={()=> setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} 
          ></button>
          
          <button
          onClick={()=> setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}} 
          ></button>
          
          <button
          onClick={()=> setColor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "brown"}} 
          ></button>

        </div>
      </div>

    </div>
  )
}

export default Color