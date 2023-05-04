import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const Breadcrumb = () => {
    const url:string = useLocation().pathname; 
    const slugs:string[] = url.split('/');
    slugs.shift();
    let path:string="";
  return (
    <div>
        <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        >
                <Link to='/'>
                    Home
                </Link>
            {
                slugs.map((slug,index)=>{
                    path+=`/${slug}`;
                    return(
                <Link key={index} to={path}>
                    {slug.charAt(0).toUpperCase()+slug.slice(1)}
                </Link>
                )})
            }
        
        </Breadcrumbs>
    </div>
  )
}
