class SubTopic {
    name:string
    slug: string
    content: string
}
export class FAQ {
    title:string
    slug:string
    subtopics: SubTopic[]
}