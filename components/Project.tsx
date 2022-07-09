export default function Project(props: {
    title: string,
    description: string,
    link: string,
    image: string,
}) {
    console.log(props);
    return(
        <>
            <a href={props.link}>
                    <div className="project-box">
                        <img src={props.image}/>
                        <h2>{props.title}</h2>
                        <p>{props.description} </p>

                    </div>
                </a>

        </>
    )
}