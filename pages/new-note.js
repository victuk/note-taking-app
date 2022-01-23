import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Divider, Input, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { Provider, useSelector } from 'react-redux';
import store from '../store/editstate';
import Layout from '../components/layouts/DefaultLayout';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;


export default function RecipeReviewCard() {

  const router = useRouter();

  const storeValues = (state) => {
    return state.value.map(v => <div>{v.clickedBall} {v.amount}</div>);
  }

  let choosenBalls = useSelector(storeValues);

  let [noteHead, setNoteHead] = useState('');
  let [noteBody, setNoteBody] = useState('');

  async function addNote() {
    let res = await axios.post('/note', {title: noteHead, body: noteBody}, {headers: {token: localStorage.getItem('notesToken')}});
    console.log(res);
    if(res.data.success) {
      message.success('Success');
      router.push('/');
    }
  }

  

  return (
    <div>
      <div style={{textAlign: 'right'}}>
    <Button type="primary" onClick={addNote}>Add Note</Button>
        <Button style={{marginLeft: '10px'}}>Cancel</Button>
    </div>
<Divider />
<Input placeholder="Note Title" onChange={(e) => {setNoteHead(e.target.value)}} style={{ height: '10vh', marginBottom: '20px' }} />
<TextArea style={{ height: '50vh' }} onChange={(e) => {setNoteBody(e.target.value)}} placeholder="Note body" />
    </div>
  );
}



RecipeReviewCard.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
    <Layout>
      {page}
    </Layout>
    </Provider>
  )
}
