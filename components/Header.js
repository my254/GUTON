import { WhatsAppOutlined } from '@ant-design/icons'
import { useWindowScroll } from '@mantine/hooks';
import { Button, Dropdown, Space } from 'antd'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Header = () => {
    const items = [
        {
          key: '1',
          label: (
            <Link   href="/properties-for-sale">
              Properties For Sale
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link   href="/properties-for-rent">
              Properties For Rent
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link   href="land-for-sale">
             Land For Sale
            </Link>
          ),
        },
      ];
      const [color,setColor] = useState("transparent")
      const [scroll, scrollTo] = useWindowScroll();
      useEffect(() => {
      if(scroll.y > 20){
        setColor("white")
      }else{
        setColor("transparent")
      }
      },[scroll.y])
  return (
    <div className='guton header' style={{background:color}}>
     <div>
        <h1 style={{color:'white'}}>
            GUTON
        </h1>
     </div>
     <div>
        <Space size="large">
        <Link href="/"><Button type="default">Home</Button></Link>
        <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
        <Button type="default">Our Properties</Button>
      </Dropdown>
        <Link href="/blogs-by-gutton-kenya"><Button  type="default">Blogs</Button></Link>
        <Button type="default">About Us</Button>
        </Space>
     </div>
     <div>
     <Button type="primary" shape="circle" icon={<WhatsAppOutlined />} size={"large"} />
     </div>
    </div>
  )
}

export default Header