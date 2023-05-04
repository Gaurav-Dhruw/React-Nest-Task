import {createContext, ReactNode, useContext, useState} from 'react';

const FAQContext = createContext<any>(null);


const ContextProvider =({children}:{children:ReactNode})=>{
    const [FAQs, setFAQs] = useState(null);
    const [activeTopic, setActiveTopic] = useState(null);
    const [activeSubTopic, setActiveSubTopic] = useState(null);
    return (
        <FAQContext.Provider
            value={{
                FAQs,
                setFAQs,
                activeTopic,
                setActiveTopic,
                activeSubTopic,
                setActiveSubTopic
            }}>
            {children}
        </FAQContext.Provider>
    )

}
export const useFAQs = ()=> useContext(FAQContext);
export default ContextProvider;