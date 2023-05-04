import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useFAQs } from '../context/ContextProvider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface listItemInterface{
    name:string,
    slug:string,
}

export const SideMenu = ({listItems}:{listItems:listItemInterface[]}) => {

  const{activeTopic, setActiveSubTopic} = useFAQs();

  const handleSubTopicChange= (subTopicSlug:string)=>{
    const subtopic = activeTopic.subtopics.find((subTopic:any)=>(subTopic.slug===subTopicSlug));

    setActiveSubTopic(subtopic);
  }


  return (
    <div className='w-80 shadow-md rounded-lg overflow-hidden'>
        <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
        {
            listItems.map(listItem=>(

                <ListItemButton key={listItem.slug} onClick={()=>handleSubTopicChange(listItem.slug)}>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText primary={listItem.name} />
                </ListItemButton>
         
            ))
        }
      </List>
    </div>
  )
}
