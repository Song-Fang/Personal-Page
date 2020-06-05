import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import { Grid, Image, Divider, Container } from 'semantic-ui-react';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import Quora from '../img/Quora.png';


class Header extends Component {


  render() {
    return (
      <div className='header-wrapper'>
        <div className='nav-wrapper'>
              <Link to='/' className='nav-item'>Home</Link>
              <a href='/Personal-Page/#education' className='nav-item'>Course</a>
              <a href='/Personal-Page/#Experience' className='nav-item'>Projects</a>

        </div>
        <div className='social-wrapper'>
          <a href="https://www.linkedin.com/in/song-francis-fang-48b307158/" target='_blank'>
            <img id="linkedin" src={linkedin}/>
          </a>
            <a href='https://github.com/Song-Fang' target='_blank'>
              <img id = "github" src= {github}/>
            </a>

            <a href='https://www.zhihu.com/people/ma-jia-gou-shi-xue-shao-nian' target='_blank'>
              <img id = "Quora" src= {Quora}/>
            </a>
        </div>
      </div>
    );
  }
}

export default Header;
