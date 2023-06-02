import React, { useState } from 'react';
// @ts-ignore

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Bevel</h1>
            <h3>Web Hosting</h3>
            <br />
            <div className="text-block">
                <p>
                 I founded my own web hosting company in response to a clear need I identified while running my creative agency. 
                </p>
                <br />
                <p>
                  As I developed websites for clients, it became apparent that offering an integrated solution - design, development, and hosting - would simplify the process for them and enhance the overall service experience. 
                </p>
                <br />
                <p>
                This realisation sparked the creation of my web hosting company, aimed at providing seamless, all-in-one digital solutions. Rather than directing clients to a third party for hosting services, we could ensure reliability, quality, and consistent support in-house. 
                </p>
                <p>
                    This decision not only smartly expanded our service portfolio but also deepened the trust and value we offer to our clients.
                </p>
                <br />
            </div>
            <h2>More information to come.</h2>
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
