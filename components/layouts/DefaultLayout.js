import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Row, Col } from 'antd';
import React, { useState, useEffect } from 'react'
import Nav from '../navs/DefaultNav'
import Sidebar from '../Sidebar'


export default function DefaultLayout({children}) {
  return (
    <div style={{height: '100vh'}}>
    <Nav />

<main>

<Row>
  <Col xs={0} md={6} style={{height: '85vh', overflowY: 'auto', padding: '20px'}}><Sidebar addButton /></Col>
  <Col xs={24} md={18} style={{height: '85vh', overflowY: 'auto', padding: '20px'}}>{children}</Col>
</Row>

</main>
    </div>
  );
}
