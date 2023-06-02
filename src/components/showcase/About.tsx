import React from 'react';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">

            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Matty P</h3>
            <br />
            <div className="text-block">
                <p>
                As a digital designer and developer, my work is an intersection of creativity and technology, driven by a deep understanding of user-centric design, responsiveness, and performance.
                </p>
                <br />
            </div>

                 <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >

                    <h3>About Me</h3>
                    <br />
                    <p>
                      My journey into the tech industry is anything but conventional.
                      Without a traditional educational pathway, my career has been driven by a relentless curiosity, a passion for technology and design, and a drive for constant self-learning.
                    </p>
                    <br />
                    <p>
                  With a firm grasp on popular designing tools and coding languages, and a continuous drive for learning new technologies,
                  I have built a comprehensive portfolio that reflects a blend of eye-catching aesthetics and functionality.
                  Over the years, I have honed my skills by immersing myself in an array of freelance projects and collaborations, resulting in a versatile skill set that spans across web design and development, branding, graphic design, marketing, and software engineering - all without a traditional degree.

                    </p>
                    <p>
                      I am a blend of a creative and logical thinker. My creativity sparks innovative ideas, while my logical side ensures their feasibility and alignment with any business objective.
                     I believe this balance is essential in creating digital solutions that are not only visually stunning but also technically robust.
                    </p>
                        <br />

                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me
                            </sub>
                        </p>
                    </div>
                </div>





            <div className="text-block">
                <p>
                  As a Melbournian, I draw inspiration from my vibrant surroundings and multicultural city, translating my experiences into digital mediums.
                  The desire to create meaningful and engaging digital interactions has been the north star guiding my career progression.
                  My work is characterised by meticulous attention to detail, commitment to design ethics, and an ability to translate client requirements into visually compelling and functional designs.
                </p>
                 <p>
                      I've created diverse websites, meticulously balancing aesthetic appeal and user-centric functionality.
                      With a keen eye for branding, I've helped businesses establish distinctive identities that truly resonate with their target audiences.
                      My proficiency in graphic design and marketing allows me to create compelling visuals and strategies that captivate audiences and drive results.
I've designed and executed various successful digital marketing campaigns, leveraging my knowledge of search engine optimisation and marketing, as well as using social media to drive engagement and conversions.

                        </p>
                <br />
                </div>
                <br />
                <p>
                  Every challenge I undertake is an opportunity to learn, to improve, and to create something remarkable.
                  So, take a look around, explore my portfolio, and if you like what you see, I would love to hear from you.
                  We could create digital experiences that make a difference. <br />
                  Feel free to follow me at:{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://instagram.com/mattyperrott"
                    >
                        @mattyperrott
                    </a>{' '}

                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:email@mattyp.com.au">
                        email@mattyp.com.au
                    </a>
                </p>
            </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
