import { useParams } from "react-router-dom";
import { SideMenu } from "../components/SideMenu";
import { SubTopicSection } from "../components/SubTopicSection";

const data={name:"link1", content:'link1', listItems:[{name:"subtopic1" ,slug:'link1'},{name:"subtopic2" ,slug:'link2'},{name:"subtopic3" ,slug:'link3'}]};
const SubTopic = () => {
  const {subtopic} = useParams();

  return (
    <div className="mx-auto p-20 ">

      <div className="mx-20 grid grid-cols-3 gap-20 place-content-center">
        <div className="col-span-2">
        <SubTopicSection  data={data}/>

        </div>
        <div className="align-start">

        <SideMenu listItems={data.listItems}/>
        </div>
      </div>
    </div>
  )
}

export default SubTopic