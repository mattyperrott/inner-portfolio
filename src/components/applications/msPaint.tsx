import React from 'react';
import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface msPaintProps extends WindowAppProps {}

const msPaintApp: React.FC<msPaintProps> = (props) => {
const { initWidth, initHeight } = useInitialWindowSize({ margin: 150 });

return (
        <Window
            top={48}
            left={84}
            width={initWidth}
            height={initHeight}
            windowBarIcon="msPaintSmall"
            windowTitle="Microsoft Paint"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://paint.js.org/"
                    title="MS Paint"
                    width="100%"
                    height="100%"
                />
                   {/* <div style={}>
                    <DesktopShortcut
                        icon="msPaintIcon"
                        invertText
                        shortcutName={'MS Paint'}
                        onOpen={() => {}}
                    />
                </div> */}
            </div>
        </Window>
    );
};

export default msPaintApp;
