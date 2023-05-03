
import { Outlet, useParams } from 'react-router-dom'
import { AccordianSection } from '../components/AccordianSection';
const data=[{title:"General Settings", listItems:[{name:"link1", slug:'link1'}]}];
const Topic = () => {
  const {subtopic} = useParams();
  console.log(subtopic);
  return (
    <>
    {subtopic?
      <Outlet/>:
      <div className='p-20'>
        <AccordianSection data={data}/>
      </div>
    
  }
      
    </>
  )
}

export default Topic