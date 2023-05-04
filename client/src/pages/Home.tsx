
import { Outlet, useParams} from 'react-router-dom';
import { SerachBar } from '../components/SerachBar';
import {Card} from '../components/Card'
import { Breadcrumb } from '../components/Breadcrumb';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';



const cardsData = [
  {
    icon:<SettingsIcon fontSize='large'/>, 
    title:"General",
    slug:"general"
  },
  {
    icon:<EmojiObjectsIcon fontSize='large'/>, 
    title:"Introduction",
    slug:'introduction'
  },
  {
    icon:<AttachMoneyIcon fontSize='large'/>, 
    title:"Pricing",
    slug:'pricing'
  },
  {
    icon:<BarChartIcon fontSize='large'/>, 
    title:"Dashboard",
    slug:'dashboard'
  }
];

const Home = () => {
  const {section} = useParams();
  
  return (
    <>
    <div className='p-10'>
    <Breadcrumb/>
    {
      section?<Outlet/>:
      <div className='w-full p-20 flex flex-col items-center'>
        <SerachBar/>
        <div className='w-3/4 p-10 grid grid-cols-4 gap-2'>
            {
              cardsData.map(cardData=>(

              <Card title={cardData.title} slug={cardData.slug}>
                {cardData.icon}
              </Card>
                
      
              ))
            }
            
        </div>
      </div>
    }
    
    </div>
    
    
    </>
  )
}

export default Home