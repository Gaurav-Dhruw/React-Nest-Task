import {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useFAQs } from '../context/ContextProvider';


interface accordianItemInterface {
    title: string,
    slug: string,
    subtopics: listItemsInfterface[]
}
interface listItemsInfterface {
    name: string,
    slug: string,
    content:string,
}

export const AccordianSection = ({data}:{data:accordianItemInterface[]}) => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const {FAQs, setActiveSubTopic, setActiveTopic} = useFAQs();
    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    const handleSubTopicChange=(topicSlug:string, subTopicSlug:string)=>{
      const topic = FAQs.find((FAQ:any)=>(FAQ.slug===topicSlug));
      const subTopic = topic.subtopics.find((subtopic:any)=>(subtopic.slug===subTopicSlug));
      setActiveTopic(topic);
      setActiveSubTopic(subTopic);
    }

  return (
    <div className='w-3/5 mx-auto'>
        {data.map((accordianItem,index)=>(
                <Accordion expanded={expanded === index.toString()} onChange={handleChange(index.toString())}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 , fontSize:"1.2rem"}}>
                    {accordianItem.title}
                  </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >   
                {accordianItem.subtopics.map(listItem=>(

                    <Link to={accordianItem.slug} onClick={()=>handleSubTopicChange(accordianItem.slug,listItem.slug)}>
                        <ListItemButton>
                            <ListItemText primary={listItem.name} />
                        </ListItemButton>
                    </Link>
                ))}
              </List>
                </AccordionDetails>
                </Accordion>
        ))}
        
    </div>
  )
}
