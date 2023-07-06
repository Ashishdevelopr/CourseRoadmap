import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import {TbWorld} from "react-icons/tb"
import {BsJournalCode} from "react-icons/bs"
import {SiMongodb, SiDropbox, SiWheniwork ,SiExpress, SiCachet} from "react-icons/si"
import {FaNodeJs, FaSyncAlt, FaDatabase} from "react-icons/fa"
import {FaRobot} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {AiFillApi} from "react-icons/ai"
import {MdSecurity} from "react-icons/md"
import {BsBugFill} from "react-icons/bs"
import {GrDocker} from "react-icons/gr"
import {GoSearch} from "react-icons/go"

const Backend = () => {
  return (
    <div className='time'>
        <VerticalTimeline lineColor='#000'>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#2196f3', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
    iconStyle={{background: '#2196f3', color: '#fff' }}
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
    contentStyle={{background: '#ff9800', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #ff9800' }}
    iconStyle={{background: '#ff9800', color: '#fff' }}
    icon={<BsJournalCode />}>
    <h3 className="vertical-timeline-element-title">Basic Frontend Knowledge</h3>
    <p>
      - HTML <br/>
      - CSS<br/>
      - JavaScript
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#5fcf80', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #5fcf80' }}
    iconStyle={{background: '#5fcf80', color: '#fff' }}
    icon={<SiWheniwork />}>
    <h3 className="vertical-timeline-element-title">Select a language</h3>
    <p>
      - NodeJs (suggested) <br/>
      - Python<br/>
      - Java <br/>
      - PHP <br/>
      - C# <br/>
      - Ruby
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#ef5350', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #ef5350' }}
    iconStyle={{background: '#ef5350', color: '#fff' }}
    icon={<FaNodeJs />}>
    <h3 className="vertical-timeline-element-title">NodeJs</h3>
    <p>
      - What is NodeJs? <br/>
      - History of NodeJs<br/>
      - NodeJs vs Browser <br/>
      - NodeJs Modules <br/>
      - API with NodeJs <br/>
      - Error Handling 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#2196f3', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #2196f3' }}
    iconStyle={{background: '#2196f3', color: '#fff' }}
    icon={<SiExpress />}>
    <h3 className="vertical-timeline-element-title">NodeJs Frameworks</h3>
    <p>
      - ExpressJs (suggested) <br/>
      - Nest Js<br/>
      - Meteor.js <br/>
      - Socket.IO <br/>
      - Hapi.js
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#ab47bc', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #ab47bc' }}
    iconStyle={{background: '#ab47bc', color: '#fff' }}
    icon={<FaSyncAlt />}>
    <h3 className="vertical-timeline-element-title">Asynchronous Programming</h3>
    <p>
      - Promises <br/>
      - Async / await<br/>
      - Callbacks <br/>
      - SetTimeout <br/>
      - SetInterval <br/>
      - SetImmediate <br/>
      - Event Emitter <br/>
      - Event Loop
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#5fcf80', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #5fcf80' }}
    iconStyle={{background: '#5fcf80', color: '#fff' }}
    icon={<SiDropbox/>}>
    <h3 className="vertical-timeline-element-title">Package Managers</h3>
    <p>
      - Npm (suggested) <br/>
      - Yarn <br/>
      - pnpm 
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
    contentStyle={{background: '#EF5350', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #EF5350' }}
    iconStyle={{background: '#EF5350', color: '#fff' }}
    icon={<FaDatabase />}>
    <h3 className="vertical-timeline-element-title">Relational Databases</h3>
    <p>
      - MySQL <br/>
      - PostgreSQL <br/>
      - MariaDB <br/>
      - Oracle <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#AB47BC', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #AB47BC' }}
    iconStyle={{background: '#AB47BC', color: '#fff' }}
    icon={<SiMongodb />}>
    <h3 className="vertical-timeline-element-title">NoSQL Databases</h3>
    <p>
      - MongoDB <br/>
      - Redis <br/>
      - CouchBase <br/>
      - RethinkDB <br/>
      - Cassandra 
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#26C6DA', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #26C6DA' }}
    iconStyle={{background: '#26C6DA', color: '#fff' }}
    icon={<AiFillApi />}>
    <h3 className="vertical-timeline-element-title">Learn about APIs</h3>
    <p>
      - JSON APIs <br/>
      - Authentication <br/>
      - gRPC <br/>
      - SOAP
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#607D8B', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #607D8B' }}
    iconStyle={{background: '#607D8B', color: '#fff' }}
    icon={<SiCachet/>}>
    <h3 className="vertical-timeline-element-title">Caching</h3>
    <p>
      - CDN <br/>
      - Server side <br/>
      - Client side <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#2196f3', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #2196f3' }}
    iconStyle={{background: '#2196f3', color: '#fff' }}
    icon={<MdSecurity />}>
    <h3 className="vertical-timeline-element-title">Web Security Knowledge</h3>
    <p>
      - SHA Family <br/>
      - scrypt & bcrypt <br/>
      - HTTPS <br/>
      - Content Security Policy<br/>
      - CORS <br/>
      - SSL/TLS <br/>
      - OWASP Security Risks
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#ab47bc', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #ab47bc' }}
    iconStyle={{background: '#ab47bc', color: '#fff' }}
    icon={<BsBugFill />}>
    <h3 className="vertical-timeline-element-title">Testing</h3>
    <p>
      - Integration Testing <br/>
      - Unit Testing <br/>
      - Functional Testing <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#607d8b', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #607d8b' }}
    iconStyle={{background: '#607d8b', color: '#fff' }}
    icon={<FaRobot />}>
    <h4 className="vertical-timeline-element-title">CI / CD</h4>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#26c6da', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #26c6da' }}
    iconStyle={{background: '#26c6da', color: '#fff' }}
    icon={<GrDocker />}>
    <h3 className="vertical-timeline-element-title">Containerization vs Virtualization</h3>
    <p>
      - Docker <br/>
      - LCX <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#5fcf80', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #5fcf80' }}
    iconStyle={{background: '#5fcf80', color: '#fff' }}
    icon={<GoSearch />}>
    <h4 className="vertical-timeline-element-title">Keep Exploring...</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}

export default Backend
