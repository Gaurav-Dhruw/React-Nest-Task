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


interface accordianItemInterface {
    title: string,
    listItems: listItemsInfterface[]
}
interface listItemsInfterface {
    name: string,
    slug: string,
}

export const AccordianSection = ({data}:{data:accordianItemInterface[]}) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className='w-3/5 mx-auto'>
        {data.map(accordianItem=>(
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {accordianItem.title}
                  </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >   
                {accordianItem.listItems.map(listItem=>(

                    <Link to={listItem.slug}>
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
