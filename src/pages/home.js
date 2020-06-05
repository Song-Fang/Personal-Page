import React, { Component } from 'react';
import '../css/home.css';
import Typed from 'react-typed';
import { Fade, Slide } from 'react-reveal';
import { Grid, Image, Divider, Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import Header from '../components/Header';

import jsimg from '../img/js.png';
import herokuimg from '../img/heroku.png';
import javaimg from '../img/java.png';
import reactimg from '../img/react.png';
import neo4jimg from '../img/neo4j.png';
import reduximg from '../img/redux.jpg';
import gitimg from '../img/git.png';
import mysqlimg from '../img/mysql.png';
import mongodbimg from '../img/mongodb.png';
import awsimg from '../img/aws.png';
import javascriptimg from '../img/javascript.png'
import arrow from '../img/arrow.png';
import profimg from '../img/Profile1.jpg';
import profimg3 from '../img/Profile2.jpg';
import backImage from '../img/backImage.png';
import hitimg from '../img/HIT.gif';
import pittimg from '../img/PITT.png';
import emailimg from '../img/email.png';
import phoneimg from '../img/phone.png';
import wechatimg from '../img/SongFang.jpg'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutScroll: false,
            exp1Scroll: false,
            exp2Scroll: false,
            exp3Scroll: false,
            exp4Scroll: false,
            isAboutHover: false,
        }
        this.calculateScroll = this.calculateScroll.bind(this);

        this.onAboutImageHover = this.onAboutImageHover.bind(this);

    }

    componentDidMount() {
        this.cont.addEventListener('scroll', () => {
            let val = this.calculateScroll(this.aboutRef);
            if (val != this.state.aboutScroll) {
                this.setState({aboutScroll : val});
            }
            let exp1val = this.calculateScroll(this.exp1);
            if (exp1val != this.state.exp1Scroll) {
                this.setState({exp1Scroll : exp1val});
            }
            let exp2val = this.calculateScroll(this.exp2);
            if (exp2val != this.state.exp2Scroll) {
                this.setState({exp2Scroll: exp2val});
            }
            let exp3val = this.calculateScroll(this.exp3);
            if (exp3val != this.state.exp3Scroll) {
                this.setState({exp3Scroll: exp3val});
            }
            let exp4val = this.calculateScroll(this.exp4);
            if (exp4val != this.state.exp4Scroll) {
                this.setState({exp4Scroll: exp4val});
            }
        });
    }

    calculateScroll(ref) {
        let currentScroll = this.cont.scrollTop * 2;
        let refTop = ref.offsetHeight + ref.offsetTop;
        // console.log('calculating scroll for ' + currentScroll, refTop, ref.offsetHeight, ref.offsetTop);
        if (currentScroll + 400  > refTop) {
            return true;
        }
        else {
            return false;
        }
    }


    onAboutImageHover() {
        this.setState({isAboutHover: !this.state.isAboutHover});
    }

    render() {
        return(

            <div className='container' ref={elem => this.cont = elem}>
            <Header/>
                <div className='top' >

                    <div className='typed'>
                    <img id="backgroundimage" src={backImage}/>
                    <Typed
                        strings={['Web Developer', 'Java Programmer', 'sof10@pitt.edu','Song Fang']}
                        typeSpeed={80}
                        backspeed={50}
                    />
                    </div>
                    <div className='scrollto'>
                        <div onClick={() => this.cont.scrollTop = this.aboutRef.offsetTop}>
                                <p>Dive Deeper</p>

                        </div>
                    </div>
                </div>
                <br/>
                <h1 id='about-me' ref={ref => this.aboutRef = ref}>Self Introduction</h1>
                <div>
                <div id='about'>
                    <Fade left duration={1000} appear when={this.state.aboutScroll}>
                        <div>
                        <img onClick={this.onAboutImageHover}  id='about-image' src={this.state.isAboutHover ? profimg3 : profimg}/>
                        </div>

                    </Fade>
                    <Fade right duration={1000} appear when={this.state.aboutScroll}>
                        <p id='about-content'>Hi there! My name is <b>Song Fang</b>, I come from China. I am one graduate student of Computer and Information Science at <b>University of Pittsburgh</b>. This website isn't just a place for you to learn about me. It's also a passion project of my own by using <b>React.js</b>. As a software engineer, I have a strong knowledge background of <b>algorithm design</b>, <b>web development</b> and solid programming skills in <b>Java</b>, SQL, No-SQL. Other than coding, my hobbies include reading, playing basketball and table tennis. I am looking for some opportunities like entry level SDE position or Internship.</p>
                    </Fade>

                </div>
                </div>


                <div id='content-wrapper'>
                    <div className='content-item'>
                        <a name="Experience"><h2>My Experiences & Projects</h2></a>
                        <div id='experiences'>

                        <Fade bottom duration={1000} delay={250} when={this.state.exp2Scroll}>
                                <div className='exp-item' ref={ref => this.exp2 = ref}>
                            <a href='#'>
                                <div className='title'>
                                    <div className='left'>
                                        <div className='comp'>Advanced Data Warehouse</div>
                                        <div className='job'>Spring boot, PostgreSQL, MongoDB, Neo4j</div>
                                    </div>
                                    <div className='right'>
                                        <p>Jan.2020 – Apr.2020</p>
                                    </div>
                                </div>
                                <ul>
                                    <li>Utilized relational database <b>PostgreSQL</b> & NoSQL database <b>MongoDB</b>, <b>Neo4j</b> to load 3 million accidents data</li>
                                    <li>Used <b>Spring data JPA</b> to construct distributed DB system and build backend server via <b>spring boot framwork</b></li>
                                    <li>Used<b>Spring security</b> and <b>JWT</b> for Authent ication&Authorization and implemented <b>CRUD</b> function</li>
                                    <li>Builded an interactive UI embellished with <b>Bootstrap</b>. Visualized accidents in per state, per city in US map, accidents number by humidity, visibility using <b>ECharts</b></li>




                                </ul>
                            </a>
                            </div>
                        </Fade>

                        <Fade bottom duration={1000} when={this.state.exp1Scroll}>

                            <div className='exp-item' ref={ref => this.exp1 = ref}>
                            <a href='#'>
                                <div className='title'>
                                    <div className='left'>
                                        <div className='comp'>Josh Gibson Foundation</div>
                                        <div className='job'>Html,CSS,JavaScript,WIX</div>
                                    </div>
                                    <div className='right'>
                                        <p>Jan 2020 - Mar 2020</p>
                                    </div>
                                </div>
                                <ul>
                                    <li>Using content management system ( Wix ) to reconstruct, design and develop user-friendly websites</li>
                                    <li>Adjusted the CSS, JavaScript to configure different style and views of themes for websites</li>
                                    <li>Add new functionalities such as donation portal, Commodities purchase, Social networks synchronization etc.</li>
                                    <li>Agilely Communicated with clients about their feedback and solve website issues every week</li>
                                </ul>
                            </a>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000} delay={500} when={this.state.exp3Scroll}>
                                <div className='exp-item' ref={ref => this.exp3 = ref}>
                                <a href='#'>
                                    <div className='title'>
                                        <div className='left'>
                                            <div className='comp'>Literature Search Engine</div>
                                            <div className='job'>Spring MVC, Apache SOLR, JSP</div>
                                        </div>
                                        <div className='right'>
                                            <p>Sept.2019 – Dec.2019</p>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Design and implement a concise, <b>Google</b> like search engine UI as well as an advanced library search interface</li>
                                        <li>Load literature data to <b>Apache SOLR</b> server including <b>tokenization</b>, <b>inverted index</b> Construction, <b>stop words</b> remove</li>
                                        <li>Integrated the system with <b>spring MVC</b> and JSP to response the request from the front end</li>
                                        <li>Present the organized and clean search results for users to check, read and sort by customized features</li>
                                    </ul>
                                </a>

                            </div>
                            </Fade>
                            <Fade bottom duration={1000} delay={750} when={this.state.exp4Scroll}>
                                <div className='exp-item' ref={ref => this.exp4 = ref}>
                                <a href='#'>
                                    <div className='title'>
                                        <div className='left'>
                                            <div className='comp'>Email based survey System</div>
                                            <div className='job'>Node.js, React.js, Mongo DB</div>
                                        </div>
                                        <div className='right'>
                                            <p>Jan.2019 – Apr.2019</p>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Developed <b>Restful API</b> by using <b>Node.js</b> and <b>Mongo DB</b> and several Three Party plugins such as <b>Passport.js</b>, <b>Stripe.js</b> and <b>sendGrid</b> for users to log in, log out, pay for credits, create new survey, add reccepient email list, send survey to customers email and finally get feed back from user</li>
                                        <li>Integrated the system with <b>React.js</b> and materialize UI for interation with back-end</li>

                                    </ul>
                                </a>

                            </div>
                            </Fade>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className='skills'>
                            <h2>Technology Stack!</h2>
                            <div className='skill'>
                            <Fade right when={this.state.exp1Scroll} cascade>
                                <ul>
                                    <li><a href='https://reactjs.org/' target='__blank'><img src={reactimg}/></a></li>
                                    <li><a href='https://redux.js.org/' target='__blank'><img src={reduximg}/></a></li>
                                  <li><a href='https://aws.amazon.com/' target='__blank'><img src={awsimg}/></a></li>

                                    <li><a href='https://www.heroku.com/platform' target='__blank'><img src={herokuimg}/></a></li>
                                    <li><a href='https://www.java.com/en/' target='__blank'><img src={javaimg}/></a></li>
                                    <li><a href='https://www.javascript.com/' target='__blank'><img src={javascriptimg}/></a></li>
                                    <li><a href='https://neo4j.com/' target='__blank'><img src={neo4jimg}/></a></li>
                                    <li><a href='https://www.mysql.com/' target='__blank'><img src={mysqlimg}/></a></li>
                                    <li><a href='https://www.mongodb.com/' target='__blank'><img src={mongodbimg}/></a></li>
                                    <li><a href='https://git-scm.com/' target='__blank'><img src={gitimg}/></a></li>
                                    <li><img/></li>
                                    <li><img/></li>
                                </ul>
                            </Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <a name="education"><h1 id='projects-head' >Education & Course Work</h1></a>
                <div className="University">
                <Link to="#">
                <div className='projects'>
                  <div className='education-left'>
                    <img id='PITT' src={pittimg} />
                  </div>
                  <div className='education-right'>
                    <i>M.S. in Computer and Information Science, <b>University of Pittsburgh</b>, PA, USA</i>
                    <br/>
                    <b>Cumulative GPA:</b> 3.85/4
                    <br/>
                    <b>Coursework:</b> Data Structure , Algorithms Design, Web technologies and Standard,
                    <br/>
                    Software Engineering, Client Server System, Information Retrieval and storage,
                    <br/>
                    Database Management, Advanced Database Topics etc.
                  </div>
                </div>
                </Link>


                <Link to="#" >
                <div className='projects' id='hit-project'>
                    <div className='education-left'>
                      <img id= 'HIT' src={hitimg} />
                    </div>
                    <div className='education-right'>
                      <i>M.S.&B.S in Materials Science, <b>Harbin Institute of Technology</b>, Heilongjiang, China</i>
                      <br/>
                      <b>Cumulative GPA:</b> 3.8/4
                      <br/>
                      <b>Coursework:</b> Data processing, Statistics, Programming Language, Calculus,
                                         <br/>Programming Language,Computer Bascis;
                    </div>
                </div>
                </Link>
                </div>


                <h1 id='contact-me-head' >Contact Me</h1>
                <div className="contacts">
                <div className='contact-phone'>

                      <div className='education-left'>
                          <img id= 'phone' src={phoneimg}/>
                      </div>

                      <div className='education-right'>
                            (412)-251-3263
                      </div>

                </div>

                <div className='contact-email'>
                    <div className='education-left'>
                      <img id= 'email' src={emailimg}/>
                    </div>
                    <div className='education-right'>
                      sof10@pitt.edu
                    </div>
                </div>
              </div>

              <div className="contacts">
                <img id='wechat' src={wechatimg}/>
              </div>
              <div className='add-on-wechat'>
                <p>Scan the QR code to add me on WeChat</p>
                <br/>
              </div>
            </div>

        )
    }
}

export default Home
