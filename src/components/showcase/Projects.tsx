import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import credev from '../../assets/pictures/projects/credev.gif';
import coinbits from '../../assets/pictures/projects/coinbits.gif';
import bevel from '../../assets/pictures/projects/bevel.gif';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>& Ventures</h3>
            <br />
            <p>
                Click on one of the areas below to check out some of my current project ventures.
            </p>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    icon={credev}
                    iconStyle={styles.credevIcon}
                    title="Credev"
                    subtitle="CREATIVE AGENCY"
                    route="credev"
                />
                <ProjectBox
                    icon={bevel}
                    iconStyle={styles.bevelIcon}
                    title="Bevel"
                    subtitle="WEB HOSTING COMPANY"
                    route="bevel"
                />
                <ProjectBox
                    icon={coinbits}
                    iconStyle={styles.coinbitsIcon}
                    title="Coinbits"
                    subtitle="CRYPTOCURRENCY EXCHANGE PLATFORM"
                    route="coinbits"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
    credevIcon: {
        width: 56,
        height: 56,
    },
    bevelIcon: {
        width: 48,
        height: 48,
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    coinbitsIcon: {
        width: 21 * 2,
        height: 37 * 2,
    },
};

export default Projects;
