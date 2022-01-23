import React, { useState, useEffect, createContext, useReducer } from 'react';
import axios from 'axios';
import { Button, Divider, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import store from '../store/notestore';
import Layout from '../components/layouts/DefaultLayout';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {counterReducer, initialstate} from '../store/notestore';

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;

export const Notescontext = createContext();


export default function RecipeReviewCard() {

  let [note, setNote] = useState([]);
  let [edit, setEdit] = useState(false);
  const [state, dispatch] = useContext(Notescontext);

  useEffect(() => {
    
  }, []);

  function ToggleButtons() {

    function buttonToggle () {
      setEdit(!edit);
    }

    if(edit) {
      return (
        <div style={{textAlign: 'right'}}>
        <Button type="primary" onClick={buttonToggle}>Save As</Button>
        <Button style={{marginLeft: '10px'}} onClick={buttonToggle}>Cancel</Button>
        </div>
      )
    }
    if(!edit) {
      return (
        <div style={{textAlign: 'right'}}>
        <Button type="primary" onClick={buttonToggle}>Edit</Button>
        <Button style={{marginLeft: '10px'}} onClick={buttonToggle}>Delete</Button>
        </div>
      );
    }
  }

  function ToggleShowNote() {
    if(note.length == 0) {
      return (
        <div>
          <h1 style={{ display: 'flex', height: '80vh', width: '100%', justifyContent: 'center',
    alignItems: 'center'}}>No Note</h1>
    <Button type="link">Add Note</Button>
        </div>
      );
    } else {
      return (
        <div>
        {!edit ? (
          <div>
          <ToggleButtons />

            <Divider />
            <div style={{ height: '10vh', fontWeight: 'bold' }}>Header</div>
            <div style={{ height: '50vh' }}>This is the body of a note</div>
          </div>

        ) : (
          <div>
          <ToggleButtons />

            <Divider />
            <Input placeholder="Basic usage" style={{ height: '10vh', marginBottom: '20px' }} value="Header" />
            <TextArea style={{ height: '50vh' }} value="This is the body of a note" />
          </div>

        )}

        </div>
      );
    }
  }


  return (
    <div>
    <ToggleShowNote />
    </div>
  );
}



RecipeReviewCard.getLayout = function getLayout(page) {
  const [state, dispatch] = useReducer(counterReducer, initialstate);
  return (
    <Notescontext.Provider value={{state, dispatch}}>
    <Layout>
      {page}
    </Layout>
    </Notescontext.Provider>
  )
}
