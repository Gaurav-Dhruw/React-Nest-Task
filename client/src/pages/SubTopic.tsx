
import { SideMenu } from "../components/SideMenu";
import { SubTopicSection } from "../components/SubTopicSection";
import { useEffect, useState } from "react";
import { useFAQs } from "../context/ContextProvider";

import { Loader } from "../components/Loader";
import { useParams } from "react-router-dom";


const SubTopic = () => {
  const [isLoading, setLoading] = useState(true);
  const {activeSubTopic, FAQs, activeTopic, setActiveTopic, setActiveSubTopic} = useFAQs();
  const {topic} = useParams();

  useEffect(()=>{
    if(!activeSubTopic){
      const Topic = FAQs.find((FAQ:any)=>(FAQ.slug===topic));
      const subTopic = Topic.subtopics[0]
      setActiveTopic(Topic);
      setActiveSubTopic(subTopic);
    }
    setLoading(false);
  },[]);

  if(isLoading) return <Loader></Loader>;
  

  return (
    <div className="mx-auto p-20 ">

      <div className="mx-20 grid grid-cols-3 gap-20 place-content-center">
        <div className="col-span-2">
        <SubTopicSection  data={activeSubTopic}/>

        </div>
        <div className="align-start">

        <SideMenu listItems={activeTopic.subtopics}/>
        </div>
      </div>
    </div>
  )
}

export default SubTopic