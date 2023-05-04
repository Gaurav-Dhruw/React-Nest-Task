import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useFAQs } from '../context/ContextProvider';

export const Suggestion = () => {
    const {suggestions, setSuggestions, setSearchValue} = useFAQs();

  return (
    <div id="suggestionBox" className='z-10 absolute top-16 w-full bg-white shadow-md rounded-md'>
        <List>
            { suggestions.map((suggestion:any)=>(

            <ListItem disablePadding onClick={()=>{setSearchValue(suggestion.word); setSuggestions([]); }}>
                <ListItemButton>
                    <ListItemText primary={suggestion.word} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
      
    </div>
  )
}
