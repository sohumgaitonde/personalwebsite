export default function Index() {
import Head from "next/head";


    return (
        <>
            <Head> 
                <title> Sohum Gaitonde's website</title>
                <meta name="desc" content="Welcome to my website"/>
            </Head>
           <div id="navbar">
               <span> Sohum Gaitonde</span>
           </div>

           <div id="container"> 
                <div id ="top-section">
                    <img src="/newprofile.png" id="prof-pic"/>
                    <h1> Hi, I'm Sohum. </h1>
                </div>
                <p>
                I'm an incoming <b>CS</b> student at <b>Georgia Tech</b> who is passionate about the intersection between <b>computing and neuroscience</b>.
                </p>

                <p>Outside of school, I host a podcast called <b>Allegro Podcast</b>, where I talk to elite athletes and coaches in the sport of track and field. Besides that, I love running, going to the gym, and listening to podcasts.</p>
                
                <hr/>
                <p>Some projects I've built</p>
                <a href="https://open.spotify.com/show/58snUMiD26y3VYZzHduMb7?si=c0994b3bd814426b" className="project-wrapper">
                    <div className="project-box">
                        <img src="/allegro.png"/>
                        <h2>Allegro Podcast</h2>
                        <p>Podcast established in winter of 2020. Long-form interviews with America's top endurance athletes and coaches, as well as members of the running media. Featured on Spotify and Apple Podcasts. Listenership in 25+ countries. </p>

                    </div>
                </a>
           </div>
            
        </>
    );
}
