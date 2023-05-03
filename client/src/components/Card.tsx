import { ReactNode } from "react"
import { Link } from "react-router-dom"


export const Card = (props:any) => {
  return (
    <>
    <Link to={props.slug}>

    <div className=' p-4 justify-evenly flex flex-col items-center m-10 w-40 h-40 shadow-md rounded-md bg-white hover:scale-105 transform duration-100 hover:cursor-pointer'>
      <div className="">
        {props.children}  
      </div>
      <h2 className="">
      {props.title}

      </h2>
    
    </div>
    </Link>
    </>
  )
}
