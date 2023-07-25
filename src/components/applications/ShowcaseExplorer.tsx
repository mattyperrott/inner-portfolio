import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Window from '../os/Window';
import Skills from '../showcase/Skills';
import Projects from '../showcase/Projects';
import Contact from '../showcase/Contact';
 import CredevProjects from '../showcase/projects/Credev';
import BevelProjects from '../showcase/projects/Bevel';
import CoinbitsProjects from '../showcase/projects/Coinbits';
import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="MATTYP SHOWCASE 2023"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© COPYRIGHT 2023 MATTYP'}
        >
            <Router>
                <div className="site-page">
                    <VerticalNavbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                         <Route path="/contact" element={<Contact />} />
         <Route path="/projects" element={<Projects />} />
         <Route
              path="/projects/credev"
                     element={<CredevProjects />}
                     />
                       <Route
                       path="/projects/bevel"
                         element={<BevelProjects />}
                    />
                   <Route path="/projects/coinbits" element={<CoinbitsProjects />} />
                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;
