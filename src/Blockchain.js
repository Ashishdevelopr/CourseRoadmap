import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import {GoDatabase, GoTools} from "react-icons/go"
import {ImLink} from "react-icons/im"
import { SiSolidity,  SiEthereum, SiWebmoney} from "react-icons/si"
import {MdSecurity} from "react-icons/md"
import {CgSmartphoneChip} from "react-icons/cg"
import {BsShieldCheck, BsBarChartLineFill} from "react-icons/bs"
import {TbApps} from "react-icons/tb"
import {FaHardHat, FaReact} from "react-icons/fa"
import {TfiWorld} from "react-icons/tfi"
import {IoMdLaptop} from "react-icons/io"
import {BiSearch} from "react-icons/bi"
import {MdPhonelinkLock} from "react-icons/md"

const Blockchain = () => {
  return (
    <div className='time'>
        <VerticalTimeline lineColor='#000'>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#ab47bc', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid  #ab47bc' }}
    iconStyle={{background: '#ab47bc', color: '#fff' }}
    icon={<GoDatabase />}>
    <h3 className="vertical-timeline-element-title">Introduction to Blockchain</h3>
    <p>
      - What is Blockchain? <br/>
      - What is Decentralization in Blockchain? <br/>
      - Blockchain Structure <br/>
      - Basic Blockchain Operations <br/>
      - Applications and Uses <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#ef5350', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #ef5350' }}
    iconStyle={{background: '#ef5350', color: '#fff' }}
    icon={<MdPhonelinkLock />}>
    <h3 className="vertical-timeline-element-title">Advance Blockchain</h3>
    <p>
      - Mining and Incentive Models <br/>
      - Decentralization vs Trust <br/>
      - Blockchain Forking <br/>
      - Blockchain Interoperability <br/>
      - Consensus Protocols <br/>
      - Cryptography <br/>
      - Cryptocurrencies <br/>
      - Cryptowallets <br/>
      - Storage
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#FF9800', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #FF9800' }}
    iconStyle={{background: '#FF9800', color: '#fff' }}
    icon={<SiEthereum />}>
    <h3 className="vertical-timeline-element-title">Blockchains</h3>
    <p>
      - Ethereum <br/>
      - Polygon <br/>
      - Solana <br/>
      - L2 Blockchains
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<ImLink/>}>
    <h3 className="vertical-timeline-element-title">Blockchain Oracles</h3>
    <p>
      - Hybrid Smart Contracts <br/>
      - Chainlink <br/>
      - Oracle Networks
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#607d8b', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #607d8b' }}
    iconStyle={{background: '#607d8b', color: '#fff' }}
    icon={<SiSolidity />}>
    <h3 className="vertical-timeline-element-title">Programming Languages</h3>
    <p>
      - Solidity <br/>
      - Vyper <br/>
      - Rust 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#5fcf80', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #5fcf80' }}
    iconStyle={{background: '#5fcf80', color: '#fff' }}
    icon={<CgSmartphoneChip />}>
    <h3 className="vertical-timeline-element-title">Smart Contracts</h3>
    <p>
      - ERC Tokens <br/>
      - Crypto Wallets <br/>
      - IDEs <br/>
      - Crypto Faucets <br/>
      - Decentralized Storage <br/>
      - Deployment <br/>
      - Monitoring <br/>
      - Upgrades 
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#26C6DA', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #26C6DA' }}
    iconStyle={{background: '#26C6DA', color: '#fff' }}
    icon={<BsShieldCheck />}>
    <h3 className="vertical-timeline-element-title">Testing</h3>
    <p>
      - Unit Tests <br/>
      - Integration Tests <br/>
      - Code Coverage
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#2196f3', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #2196f3' }}
    iconStyle={{background: '#2196f3', color: '#fff' }}
    icon={<FaHardHat/>}>
    <h3 className="vertical-timeline-element-title">Smart Contract Frameworks</h3>
    <p>
      - Hardhat <br/>
      - Brownie <br/>
      - Truffle <br/>
      - Foundry 
       <br/>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#ff9800', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #ff9800' }}
    iconStyle={{background: '#ff9800', color: '#fff' }}
    icon={<MdSecurity />}>
    <h3 className="vertical-timeline-element-title">Security Practices</h3>
      <p>
      - Fuzz Testing & Static Analysis <br/>
      - Common Threat Vectors <br/>
      - Source of Randomness Attacks
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#EF5350', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #EF5350' }}
    iconStyle={{background: '#EF5350', color: '#fff' }}
    icon={<GoTools />}>
    <h3 className="vertical-timeline-element-title">Security Tools</h3>
    <p>
      - Slither <br/>
      - Manticore <br/>
      - MythX <br/>
      - Echidna
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#5fcf80', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #5fcf80' }}
    iconStyle={{background: '#5fcf80', color: '#fff' }}
    icon={<TbApps />}>
    <h3 className="vertical-timeline-element-title">Decentralized Applications</h3>
    <p>
      - Architecture <br/>
      - Testing <br/>
      - Deployment <br/>
      - Maintenance <br/>
      - Security 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#607d8b', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #607d8b' }}
    iconStyle={{background: '#607d8b', color: '#fff' }}
    icon={<FaReact />}>
    <h3 className="vertical-timeline-element-title">Frontend Frameworks</h3>
    <p>
      - React <br/>
      - Angular <br/>
      - Angular
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#ab47bc', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #ab47bc' }}
    iconStyle={{background: '#ab47bc', color: '#fff' }}
    icon={<SiWebmoney />}>
    <h3 className="vertical-timeline-element-title">Applicability</h3>
    <p>
      - Decentralized Finance (DeFi) <br/>
      - Decentralized Autonomous Organization (DAOs) <br/>
      - Non-Fungible Token (NFT) <br/>
      - Payments <br/>
      - Insurance
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#26c6da', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #26c6da' }}
    iconStyle={{background: '#26c6da', color: '#fff' }}
    icon={<TfiWorld />}>
    <h3 className="vertical-timeline-element-title">Client Libraries</h3>
    <p>
      - Ethers.js <br/>
      - Web3.js <br/>
      - Moralis
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#5fcf80', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #5fcf80' }}
    iconStyle={{background: '#5fcf80', color: '#fff' }}
    icon={<IoMdLaptop />}>
    <h3 className="vertical-timeline-element-title">Client Nodes</h3>
    <p>
      - Geth <br/>
      - Besu <br/>
      - Nethermind <br/>
      - Substrate
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#ff9800', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #ff9800' }}
    iconStyle={{background: '#ff9800', color: '#fff' }}
    icon={<BsBarChartLineFill />}>
    <h3 className="vertical-timeline-element-title">Scaling of dAPPs </h3>
    <p>
      - State and Payment Channels <br/>
      - Optimistic Rollups and Fraud Proofs <br/>
      - Zero Knowledge Rollups & Proof <br/>
      - Validium <br/>
      - Sidechains <br/>
      - Plasma <br/>
      - Ethereum 2.0 <br/>
      - On-Chain Scaling
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#2196f3', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #2196f3' }}
    iconStyle={{background: '#2196f3', color: '#fff' }}
    icon={<BiSearch />}>
    <h4 className="vertical-timeline-element-title">Keep Exploring...</h4>
  </VerticalTimelineElement>

</VerticalTimeline>
    </div>
  )
}

export default Blockchain
