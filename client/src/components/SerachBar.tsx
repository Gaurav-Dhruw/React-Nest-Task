import { useFAQs } from "../context/ContextProvider"
import { Suggestion } from "./Suggestion"
import apiClient from '../lib/axios.config'
import { useDebounce } from "../hooks/useDebounce";
import { useEffect } from "react";


export const SerachBar = () => {
  const {searchValue, setSearchValue, setSuggestions, suggestions} = useFAQs();
  useDebounce(()=>{
    try{
      getSuggestions();
    }
    catch(err){
      console.log(err);
    }
  },1000, [searchValue]);

  const getSuggestions = async ()=>{
    if(searchValue){
      const {data} = await apiClient.get(`https://api.datamuse.com/sug?s=${searchValue}&max=5`);
      setSuggestions(data);
    }
  }

  useEffect(()=>{
    if(!searchValue){
      setSuggestions([]);
    }
  },[searchValue])

  return (
    <>
    <div className='relative w-2/5 flex flex-col justify-center items-center'>
        <input placeholder="Search..." type='text' spellCheck={true} value={searchValue} className='px-4 py-2 w-full rounded-md  shadow-md  text-black p-1 outline-none' onChange={(e)=>{
          setSearchValue(e.target.value);
        }}/>
        {searchValue && suggestions.length>0?
          <Suggestion/>:<></>
        }
    </div>
    </>
  )
}
