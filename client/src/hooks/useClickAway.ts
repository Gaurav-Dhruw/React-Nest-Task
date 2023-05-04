import { useEffect } from "react";
import { useFAQs } from "../context/ContextProvider";


export const useClickAway =() =>{
    const {setSuggestions} = useFAQs();

  useEffect(()=>{
    document.addEventListener('click',(e)=>{
      const suggestionBox = document.getElementById("suggestionBox")
      if(e.target !== suggestionBox ){
        setSuggestions([]);
      }

      return (
        document.removeEventListener('click',(e)=>{
          const suggestionBox = document.getElementById("suggestionBox")
          if(e.target !== suggestionBox ){
            setSuggestions([]);
          }})
      )
    })
  },[])
}