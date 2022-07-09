export async function getServerSideProps(context: any){
    const projectName = context.params.projectName;
    const project = projects.find(d => d.projectName 
        === projectName);

    if (!project) return {notFound: true};
    return {
        props:{
            title: project.title,
            description: project.description,
            image:project.image,
            link: project.link ,
        }
    }
}
export default function ProjectPage(prop: {
    title: string,
    description: string,
    link: string,
    image: string,
}){
    return(
        <>
            <div id="container">
                <div id="project-page-top">
                    <a href="/"> Back home</a>
                    <h1> {props.title}</h1>
                    <img src={props.image} />
                    <p> {props.description} <a href = 
                    {props.link}> See live</a> </p>
                </div>
            </div>
        </>
    )
}