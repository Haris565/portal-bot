import "./index.css"
import Header from './Components/Header';
import Banner from "./Components/Banner";
import MediumCard from './Components/MediumCard';
import { Col, Row } from "antd";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import b1 from './Images/b1.svg'
import b2 from "./Images/b2.svg"
import b3 from "./Images/b3.svg"
import b4 from "./Images/bl5.svg"
import SwipeCard from './Components/SwipeCard';
import frame1 from "./Images/Frame1.svg"
import frame2 from "./Images/Frame2.svg"
import frame3 from "./Images/Frame3.svg"
import frame4 from "./Images/Frame4.svg"
import frame5 from "./Images/Frame5.svg"
import frame6 from "./Images/Frame6.svg"
import frame7 from "./Images/Frame7.svg"
import frame8 from "./Images/Frame8.svg"
import frame9 from "./Images/Frame9.svg"


function App() {
  return (
    <div className="App">
        <Header />  
        <Banner />
        <main className='max-w-7xl mx-auto px-8 sm:px-16'>
          

        <section className=''>
          <h2 className='font-light text-3xl text-gray-200 pl-4' >
            Portal bot is a platform for <span style={{color:"deeppink"}}>automatic trading</span> <br /> so you can enjoy the maximum profit
          </h2>
          <Row className="mt-8">
            <Col span={8} style={{padding:"15px"}}>
              <MediumCard image={b1} text="Theft proof" />
            </Col>
            <Col span={8}  style={{padding:"15px"}}>
              <MediumCard image={b2} text="Lorem Impsum" />
            </Col>
            <Col span={8}  style={{padding:"15px"}}>
              <MediumCard image={b4} text='Lorem impsum'/>
            </Col>
          </Row>
        </section>
   

        <section>
          <h2 className='font-light text-3xl text-gray-200 pl-4 mt-10' >
            Portal bot <span style={{color:"deeppink"}}>features</span>
          </h2>
         
              
          <Row className="mt-8">
            <Col span={8} style={{padding:"15px"}}>
              <SwipeCard image={frame1} text="Feature1" />
            </Col>
            <Col span={8}  style={{padding:"15px"}}>
              <SwipeCard image={frame2} text="Feature2" /> 
            </Col>
            <Col span={8}  style={{padding:"15px"}}>
            <SwipeCard image={frame3} text="Feature3" />
            </Col>
            <Col span={8} style={{padding:"15px"}}>
              <SwipeCard image={frame4} text="Feature4" />
            </Col>
            <Col span={8}  style={{padding:"15px"}}>
              <SwipeCard image={frame5} text="Feature5" /> 
            </Col>
            <Col span={8}  style={{padding:"15px"}}>
            <SwipeCard image={frame6} text="Feature6" />
            </Col>
            {/* <Col span={8} style={{padding:"15px"}}>
              <SwipeCard image={frame7} text="Feature7" />
            </Col>
            <Col span={8}  style={{padding:"15px"}}>
              <SwipeCard image={frame8} text="Feature8" /> 
            </Col>
            <Col span={8}  style={{padding:"15px"}}>
            <SwipeCard image={frame9} text="Feature9" />
            </Col> */}
          </Row>
               
          

        </section>

        </main>

   
        
    </div>



  
  );
}

export default App;
