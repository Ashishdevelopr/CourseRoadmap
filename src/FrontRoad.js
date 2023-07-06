import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import {TbWorld} from "react-icons/tb"
import {TfiHtml5} from "react-icons/tfi"
import {SiJavascript, SiCss3, SiBootstrap, SiReact} from "react-icons/si"
import {BsGithub} from "react-icons/bs"
import {GrDropbox} from "react-icons/gr"
import {TiCss3} from "react-icons/ti"
import {DiJavascript1} from "react-icons/di"
import {GoSearch} from "react-icons/go"

const Time = () => {
  return (
    <div className='time'>
        <VerticalTimeline lineColor='#000'>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<TbWorld />}>
    <h3 className="vertical-timeline-element-title">Internet</h3>
    <p>
      - How does the internet work? <br/>
      - What is HTTP? <br/>
      - Browsers and how they work <br/>
      - DNS and working of DNS <br/>
      - What is Domain Name? <br/>
      - What is hosting?
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#5fcf80', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #5fcf80' }}
    iconStyle={{background: '#5fcf80', color: '#fff' }}
    icon={<TfiHtml5 />}>
    <h3 className="vertical-timeline-element-title">HTML</h3>
    <p>
      - Learn the basics of HTML <br/>
      - About form and validation <br/>
      - Website structure
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#EF5350', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #EF5350' }}
    iconStyle={{background: '#EF5350', color: '#fff' }}
    icon={<SiCss3 />}>
    <h3 className="vertical-timeline-element-title">CSS</h3>
    <p>
      - CSS Fundamentals <br/>
      - CSS Selectors <br/>
      - Box Model in CSS <br/>
      - Flexbox in CSS <br/>
      - Responsive design and Media Queries
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#AB47BC', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #AB47BC' }}
    iconStyle={{background: '#AB47BC', color: '#fff' }}
    icon={<SiJavascript />}>
    <h3 className="vertical-timeline-element-title">JavaScript</h3>
    <p>
      - JavaScript Fundamentals <br/>
      - Data Types <br/>
      - JavaScript DOM (Document Object Model) <br/>
      - JavaScript Advance <br/>
      - ECMA Script 6 (JavaScript ES6) <br/>
      - JavaScript ES6 Fundamentals 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#FF9800', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #FF9800' }}
    iconStyle={{background: '#FF9800', color: '#fff' }}
    icon={<BsGithub />}>
    <h3 className="vertical-timeline-element-title">Version Control Systems</h3>
    <p>
      - Basic Usage of Git <br/>
      - Repo hosting services (GitHub)
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GrDropbox/>}>
    <h3 className="vertical-timeline-element-title">Package Managers</h3>
    <p>
      - Npm (suggested) <br/>
      - Yarn <br/>
      - pnpm 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#26C6DA', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #26C6DA' }}
    iconStyle={{background: '#26C6DA', color: '#fff' }}
    icon={<TiCss3 />}>
    <h3 className="vertical-timeline-element-title">CSS Frameworks</h3>
    <h5 className="vertical-timeline-element-subtitle subtitles">Most Famous CSS Frameworks are: </h5>
    <p>
      - BootStrap (suggested) <br/>
      - Tailwind <br/>
      - Material UI
       <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#607D8B', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #607D8B' }}
    iconStyle={{background: '#607D8B', color: '#fff' }}
    icon={<SiBootstrap/>}>
    <h3 className="vertical-timeline-element-title">BootStrap</h3>
    <p>
      - Breakpoints in BootStrap 5 <br/>
      - BootStrap Layout <br/>
      - BootStrap Content <br/>
      - BootStrap Form <br/>
      - BootStrap components <br/>
      - BootStrap Utilities
       <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#26C6DA', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #26C6DA' }}
    iconStyle={{background: '#26C6DA', color: '#fff' }}
    icon={<DiJavascript1 />}>
    <h3 className="vertical-timeline-element-title">JavaScript Frameworks</h3>
    <h5 className="vertical-timeline-element-subtitle subtitles">Most Famous JavaScript Frameworks are: </h5>
    <p>
      - React (suggested) <br/>
      - vue.js <br/>
      - Angular <br/>
      - Solid Js <br/>
      - Svelte
       <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#EF5350', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #EF5350' }}
    iconStyle={{background: '#EF5350', color: '#fff' }}
    icon={<SiReact />}>
    <h3 className="vertical-timeline-element-title">React</h3>
    <p>
      - React Fundamentals <br/>
      - React Elements <br/>
      - React Components <br/>
      - State in React <br/>
      - Hooks in React <br/>
      - React Asynchronous <br/>
      - Working with React Router <br/>
      - Testing in React
       <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#5fcf80', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #5fcf80' }}
    iconStyle={{background: '#5fcf80', color: '#fff' }}
    icon={<GoSearch/>}>
    <h4 className="vertical-timeline-element-title">Keep Learning...</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}

export default Time
