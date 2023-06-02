import React from 'react';
// @ts-ignore


export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Credev</h1>
            <h3>Creative Agency</h3>
            <br />
          <br />
            <div className="text-block">
                <h2>More information to come.</h2>
                <br />
               
                
                
                
            </div>

        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
