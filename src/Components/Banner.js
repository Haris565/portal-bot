// import bgtitle from "../Images/bgtitle.svg"
// function Banner() {
//     return (
//         <div className='relative h-screen bg-gray-100' >
            
//             <div className='absolute top-20 ml-20'>
//                 <img src={bgtitle} alt="" />
                
//             </div>
//         </div>
//     )
// }

// export default Banner


import { Carousel, Radio } from 'antd';
import portalImage from "../Images/bot.png"

const contentStyle = {
  height: '590px',
  color: '#fff',
  textAlign: 'center',
  background: '#1f2937',
  width:"100%",
  
};

function Banner() {

  return (
    <>
      {/* <Carousel dotPosition="left"effect="fade" autoplay >
        <div>
            <img src={portalImage} alt=""  style={contentStyle} className='w-full object-cover' />
        </div>
        <div>
            <img src={portalImage} alt=""  style={contentStyle} className='w-full object-cover p-5' />
        </div>
        <div>
            <img src={portalImage} alt=""  style={contentStyle} className='w-full object-cover p-5' />
        </div>
        <div>
            <img src={portalImage} alt=""  style={contentStyle} className='w-full object-cover p-5' />
        </div>
      </Carousel> */}
        <Carousel autoplay effect='fade' dotPosition='left'>
    <div>
    <img src={portalImage} alt=""  style={contentStyle} className='object-cover' />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </>
  );
};

export default Banner