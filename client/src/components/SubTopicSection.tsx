
interface contentInterface{
    name:string,
    content:string,
}

export const SubTopicSection = ({data}:{data:contentInterface}) => {

  return (
    <div className="p-10 pb-16 w-full bg-white shadow-md rounded-xl">
        <h2 className="text-xl mb-8 font-bold">SubTopic Heading</h2>
        <div className=" p-4rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus fugit animi aspernatur debitis consectetur sit numquam illum. Corporis molestias officiis consequatur ut!
        </div>
    </div>
  )
}
