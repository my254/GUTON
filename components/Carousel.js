import React from 'react'
import { Button, Carousel,Typography } from 'antd';

const contentStyle = {
  margin: 0,
  height: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center'
};

const Carousel_ = () => {
  return (
    <Carousel autoplay infinite arrows style={{width:'100%'}}>
   <div style={{width:'100%'}}>
   <div style={{backgroundImage:'url(/images/1.jpg)',width:'100%',backgroundPosition:'center',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundSize:'cover'}}>
     <div className='centered'>
      <Typography.Title level={1}>Land For Sale</Typography.Title>
      <Button type='primary'>Learn More</Button>
     </div>
    </div>
   </div>
    <div style={{width:'100%'}}>
    <div style={{backgroundImage:'url(/images/2.jpg)',width:'100%',backgroundPosition:'center',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundSize:'cover'}}>
    <div className='centered'>
    <Typography.Title level={1}>Land For Sale</Typography.Title>
    <Button type='primary'>Learn More</Button>
    </div>
    </div>
    </div>
   <div style={{width:'100%'}}>
   <div style={{backgroundImage:'url(/images/3.jpg)',width:'100%',backgroundPosition:'center',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundSize:'cover'}}>
   <div className='centered'>
   <Typography.Title level={1}>Land For Sale</Typography.Title>
   <Button type='primary'>Learn More</Button>
    </div>   
    </div>
   </div>
  </Carousel>
  )
}

export default Carousel_