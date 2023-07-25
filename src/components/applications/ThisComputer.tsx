import React from 'react';
import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ThisComputerProps extends WindowAppProps {}

const ThisComputerApp: React.FC<ThisComputerProps> = (props) => {
const { initWidth, initHeight } = useInitialWindowSize({ margin: 175 });
    
return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowBarIcon="computerSmall"
            windowTitle="This Computer"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://oldgoogle.neocities.org/1998/"
                    title="google"
                    width="100%"
                    height="100%"
                />
                   {/* <div style={}>
                    <DesktopShortcut
                        icon="computerBig"
                        invertText
                        shortcutName={'Computer Details'}
                        onOpen={() => {}}
                    />
                </div> */}
            </div>
        </Window>
    );
};

export default ThisComputerApp;
