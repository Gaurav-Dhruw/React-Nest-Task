
import { Outlet, useParams } from 'react-router-dom'
import { AccordianSection } from '../components/AccordianSection';


import apiClient from '../lib/axios.config'
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import { useFAQs } from '../context/ContextProvider';
import { Loader } from '../components/Loader';

const Topic = () => {
  const {topic} = useParams();
  const {setFAQs, FAQs} = useFAQs();
  const {isLoading, data} = useQuery('FAQs', async ()=>{
    const res = await apiClient.get('/api/FAQs');
    setFAQs(res.data);
    return res.data;
  });
  if(isLoading) return <Loader/>
  console.log(FAQs);
  return (
    <>
    {topic?
      <Outlet/>:
      <div className='p-20'>
        <AccordianSection data={FAQs}/>
      </div>
    
  }
      
    </>
  )
}

export default Topic