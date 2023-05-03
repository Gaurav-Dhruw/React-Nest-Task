import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';


interface listItemInterface{
    name:string,
    slug:string,
}

export const SideMenu = ({listItems}:{listItems:listItemInterface[]}) => {
  const url = useLocation().pathname;

  const path = url.split('/');
  path.pop();
  path.shift();
  let link='';
  path.forEach(slug=>{
    link+='/'+slug;
  });
  console.log(link)

  return (
    <div className='w-80 shadow-md rounded-lg overflow-hidden'>
        <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
        {
            listItems.map(listItem=>(

            <Link to={link+"/"+listItem.slug}>

                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary={listItem.name} />
                </ListItemButton>
            </Link>
            ))
        }
      </List>
    </div>
  )
}
