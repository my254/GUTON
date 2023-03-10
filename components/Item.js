import { AimOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Space, Typography } from 'antd';
const { Meta } = Card;
const App = () => (
  <Card
  hoverable
  bordered={false}
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="/images/3.jpg"
      />
    }
  >
    <Divider style={{borderColor:'#141a86'}}/>
  <div style={{display:'flex',alignItems:'center',gap:20,flexDirection:'column'}}>
   <Typography.Title level={4}>
      5 acre land
   </Typography.Title>
   <Typography.Text>
   Ksh 1,300,000
   </Typography.Text>
   <Typography.Text>
   MARURUI NGON G SUSWA ROAD
   </Typography.Text>
   <Button type="primary">Learn More</Button>
  </div>
  <Divider  style={{borderColor:'#141a86'}}/>
  </Card>
);
export default App;