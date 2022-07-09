import Project from "../components/Project";
import projects from "../data/projects"
import ReactTypingEffect from "react-typing-effect";

export default function Index() {
    const myName = "Sohum";
    const projects = [
    {
        title: "Allegro Podcast",
        description: "Podcast established in winter of 2020. Long-form interviews with America's top endurance athletes and coaches, as well as members of the running media. Featured on Spotify and Apple Podcasts. Listenership in 25+ countries.",
        image: "/allegro.png",
        link: "https://open.spotify.com/show/58snUMiD26y3VYZzHduMb7?si=c0994b3bd814426b",
    }
    ]
    return (
        <>
           <div id="navbar">
               <span> Sohum Gaitonde</span>
           </div>

           <div id="container"> 
                <div id ="top-section">
                    <img src="/newprofile.png" id="prof-pic"/>
                    <h1> Hi, I'm <ReactTypingEffect text={["Sohum"]}/>. </h1>
                </div>
                <p>
                I'm an incoming <b>CS</b> student at <b>Georgia Tech</b> who is passionate about the intersection between <b>computing and neuroscience</b>.
                </p>

                <p>Outside of school, I host a podcast called <b>Allegro Podcast</b>, where I talk to elite athletes and coaches in the sport of track and field. Besides that, I love running, going to the gym, and listening to podcasts.</p>
                
                <hr/>
                <p>Some projects I've built</p>
                {projects.map(d => (
                    <Project
                        title={d.title}
                        description={d.description}
                        image={d.image}
                        link={d.link} 
                    />
                    
                ))}
           </div>
            
        </>
    );
}

