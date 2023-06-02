import React, { useState, useEffect } from 'react';
import neverGiveUp from '../../assets/pictures/neverGiveUp.jpg';
import eePic from '../../assets/pictures/ee.jpg';
export interface ShutdownSequenceProps {
    numShutdowns: number;
    setShutdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const SPEED_MULTIPLIER = 1;

const _F = `>${200 * SPEED_MULTIPLIER}<`;
const _X = `>${500 * SPEED_MULTIPLIER}<`;
const _S = `>${1000 * SPEED_MULTIPLIER}<`;
const _M = `>${2000 * SPEED_MULTIPLIER}<`;
const _L = `>${5000 * SPEED_MULTIPLIER}<`;

function delay(time: number) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

const ShutdownSequence: React.FC<ShutdownSequenceProps> = ({
    numShutdowns,
    setShutdown,
}) => {
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [ee, setEE] = useState(false);

    const getTime = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const time =
            h + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
        return time;
    };

    const NORMAL_SHUTDOWN = `Beginning Pre-Shutdown Sequence... ${_F}
    Connecting to HHOS01/13:2000.${_F}.${_F}.${_F}
    |
    Established connection to HH0S01/13:2000, attempting data transfer.
    |
    ${_F}
    |Analyzing data... Done.| ${_F}
    |Packing Transfer... Done.| ${_F}
    |Beginning Transfer...| ${_F}
    |[${getTime()} START]| .${_F}.....${_X}.|............|.${_S}.|......|.${_S}...........${_M} |[Transfer Failed.]|


    |(HHOS01/13:200:60099) [DEP_ANALYTICS_SERVER_ON_AFTER_SETUP_MIDDLEWARE] InvalidFormatting: 'onAnalyticsConversion' option received invalid parameters. Please contact a server administrator to resolve the issue.|
    ${_F}
    |(HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:00]|
    |(HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:01]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:03]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:05]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:08]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:12]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:14]
    FATAL ERROR: (HHOS01/13:200:60099) Server became unresponsive and the transfer failed. Unable to shutdown computer.
    |
    Aborting shutdown sequence and rebooting. ${_F}

    Failed to abort shutdown. ${_S}.${_S}.${_S}.

    |[${getTime()} START]| .${_F}.....${_X}.|............|.${_S}.|......|.${_S}...........${_M}

    As your fingers descended upon the power button, You have inadvertently initiated a shutdown sequence on Matty's computer. ${_S}.${_S}.${_S}. ${_M}
    The shutdown process is a simple one, a task so mundane, usually occurring without a hitch. ${_L}

    But this time, it is different.${_S}.${_S}.${_S}.

    Unknown tremors of malfunction are now coursing through the system. ${_M} The typical ease and grace of this operation is absent.
    Instead, the operating system stutters and glitchs, a clear signal of i${_F}m${_F}m${_F}i${_F}n${_F}e${_F}n${_F}t disaster.

Your eyes, wide and filled with confusion, watched as the computer screen flashed a maelstrom of distorted files.
${_S}.${_S}.${_S}. ${_M}
These are fragments of Matty's life, a digital testament to his dreams, his projects, his research - all held within this hard drive.${_L}


    ${_S}.${_S}.${_S}.

    The computer groaned under the weight of its broken operating system, ${_S}files fragmenting, data corrupting. ${_M}
    An electronic symphony of destruction played out on the screen,   ${_L} a chilling testament to the fragility of the digital world. ${_F}${_F}
    All of Matty's work is now disintegrating, fading into the ether of corrupted data.${_S}.${_S}.${_S}.
${_S}.${_S}.${_S}.
You, the wielder of this digital destruction on this seemingly innocuous device,     ${_L} you have triggered a wave of irreversible change.
  ${_L} You’re now beginning to comprehend the gravity of your actions - you are laying waste to Matty's digital world, his life's work.${_F}.${_F}.${_F}.

C${_F}R${_F}I${_F}T${_F}I${_F}C${_F}A${_F}L ${_M}  S${_F}Y${_F}S${_F}T${_F}E${_F}M  ${_M}  E${_F}R${_F}R${_F}O${_F}R ${_M}

You now sit in the silence, as the computers lifeless form a haunting reminder of your actions, the weight of this catastrophe started to press down upon you. ${_S}.${_S}.${_S}
You pressed the shutdown, ${_L} you invoked the operating system's collapse. ${_M} You caused the irreparable damage that resulted in the annihilation of Matty's digital life.${_F}.${_F}.${_F}.
The cost of your actions is more than you can imagine. Yet, it's too late now.${_M}  Matty's digital world has vanished, and you were the architect of its destruction.
${_L} You shut down more than just a computer; you extinguished a part of Matty's life. ${_S}.${_S}.${_S}.

The echo of this realization will linger, ${_L}a spectral reminder in the darkness where my screen once shone.${_S}.${_S}.${_S}.

G${_X}O${_X}O${_X}D${_X}B${_X}Y${_X}E${_X}.
......${_L}
....
    `;




    const SHUTDOWN_MAP = [
        NORMAL_SHUTDOWN,
        '',
    ];

    const typeText = (
        i: number,
        curText: string,
        text: string,
        setText: React.Dispatch<React.SetStateAction<string>>,
        callback: () => void,
        refOverride?: React.MutableRefObject<string>
    ) => {
        if (refOverride) {
            text = refOverride.current;
        }
        let delayExtra = 0;
        if (i < text.length) {
            if (text[i] === '|') {
                let dumpText = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '|') {
                        i = j + 1;
                        break;
                    }
                    dumpText += text[j];
                }
                setText(curText + dumpText);
                typeText(
                    i,
                    curText + dumpText,
                    text,
                    setText,
                    callback,
                    refOverride
                );
                return;
            }
            if (text[i] === '>') {
                let delayTime = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '<') {
                        i = j + 1;
                        break;
                    }
                    delayTime += text[j];
                }
                delayExtra = parseInt(delayTime);
            }

            setTimeout(() => {
                setText(curText + text[i]);
                typeText(
                    i + 1,
                    curText + text[i],
                    text,
                    setText,
                    callback,
                    refOverride
                );
            }, 20 + delayExtra);
        } else {
            callback();
        }
    };

    useEffect(() => {
        delay(2000).then(() => {
            setLoading(false);
            delay(1000).then(() => {
                const shutdown = SHUTDOWN_MAP[numShutdowns];
                if (numShutdowns === 1) {
                    delay(10000).then(() => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setShutdown(false);
                        });
                    });
                } else if (numShutdowns === 1) {
                    typeText(0, '', shutdown, setText, () => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setLoading(false);
                            setEE(true);
                        });
                    });
                } else {
                    typeText(0, '', shutdown, setText, () => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setShutdown(false);
                        });
                    });
                }
            });
        });
        // eslint-disable-next-line
    }, []);

    return ee ? (
        <div style={styles.imageContainer}>
            <img src={eePic} style={styles.img} alt="" />
        </div>
    ) : loading ? (
        <div style={styles.shutdown}>
            <div className="blinking-cursor" />
        </div>
    ) : numShutdowns === 10 ? (
        <div style={styles.imageContainer}>
            <img src={neverGiveUp} style={styles.img} alt="" />
        </div>
    ) : (
        <div style={styles.shutdown}>
            <p style={styles.text}>{text}</p>
        </div>
    );
};

const styles: StyleSheetCSS = {
    shutdown: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#1d2e2f',
        padding: 64,
    },
    text: {
        color: 'white',
        fontFamily: 'monospace',
        whiteSpace: 'pre-line',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#1d2e2f',
        padding: 64,
    },
    img: {
        width: 1000,
        height: 700,
    },
};

export default ShutdownSequence;
