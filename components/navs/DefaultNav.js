import React, { useState } from 'react';
import { Space, Button, Row, Col, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Sidebar from '../Sidebar';
import Link from 'next/link';

export default function ResponsiveAppBar () {

  const [visible, setVisible] = useState(false);
  
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={{height: '10vh',
    display: 'flex',
    width: '100%',
    padding: '10px 20px',
    flexDirection: 'row',
    backgroundColor: 'white',
    zIndex: '100',
    minHeight: '50px',
    borderBottom: '1px solid #e5e5e5',
    marginBottom: '5vh',
    justifyContent: 'space-between'
  }}>
      <h2 style={{color: '#1890ff'}}>VNote</h2>
      <div className="show-on-desktop">Welcome Victor <Button type="primary">Log Out</Button></div>
      <div className="show-on-mobile"><Button type="link" onClick={showDrawer}>
        <MenuOutlined />
      </Button></div>
      <Drawer title="Welcome Victor" placement="right" onClose={onClose} visible={visible}>
      <p><Button type="primary" style={{ width: '100%' }} onClick={showDrawer}>Add Note</Button></p>
        <p>
        <Row gutter={16}>
          <Col span={12}><Link href="/new-note"><Button type="primary" style={{ width: '100%' }}>View Profile</Button></Link></Col>
          <Col span={12}><Button type="default" style={{ width: '100%' }} onClick={showDrawer}>Log Out</Button></Col>
        </Row>
        </p>
        <p><Sidebar /></p>
      </Drawer>
      <style jsx>
        {`

          .space-align-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.space-align-block {
  flex: none;
  margin: 8px 4px;
  padding: 4px;
  border: 1px solid #40a9ff;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}

          `}
      </style>

    </div>
  );
};
