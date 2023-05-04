
import { Outlet, useParams } from 'react-router-dom'
import { AccordianSection } from '../components/AccordianSection';


import apiClient from '../lib/axios.config'
import { useQuery } from 'react-query';

import { useFAQs } from '../context/ContextProvider';
import { Loader } from '../components/Loader';
import { SerachBar } from '../components/SerachBar';

const Topic = () => {
  const {topic} = useParams();
  const {setFAQs, FAQs} = useFAQs();
  const {isLoading} = useQuery('FAQs', async ()=>{
    const res = await apiClient.get('/api/FAQs');
    setFAQs(res.data);
    return res.data;
  });
  if(isLoading) return <Loader/>

  return (
    <>
    {topic?
      <Outlet/>:
      <div className='p-20'>
        <div className='flex justify-center'>
          <SerachBar/>
        </div>
        <div className='p-2 mt-16'>
          <AccordianSection data={FAQs}/>
        </div>
      </div>
    
  }
      
    </>
  )
}

export default Topic