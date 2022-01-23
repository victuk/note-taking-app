import { List, Avatar, Input, Button,  Affix } from 'antd';
import React, { useState, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import Link from 'next/link';
import axios from 'axios';

export const Notescontext = createContext();

export default function Sidebar (props) {

  const [state, dispatch] = useContext(Notescontext);

  let [data, setData] = useState([]);


  useEffect(async () => {
    let res = await axios.get('/notes', {headers: {token: localStorage.getItem('notesToken')}});
    console.log(res);
    setData(res.data)
  }, []);


  return (
    <Notescontext.Provider value={{state, dispatch}}>
    <div>
    <Input placeholder="Search" />

    <List
   itemLayout="horizontal"
   dataSource={data}
   renderItem={item => (
     <List.Item>
       <List.Item.Meta
         title={<a href="https://ant.design">{item.title}</a>}
         description="Ant Design, a design language for background..."
       />
     </List.Item>
   )}
 />
 {props.addButton && <Link href="/new-note"><Button type="primary" className="add-button">+</Button></Link>}

 <style>
      {`
        .add-button {
          position: fixed;
          display: flex;
          bottom: 20px;
          left: 18%;
          padding: 20px;
          flex-direction: column;
          justify-content: center;
          border-radius: 50%;
        }
        `}
 </style>
    </div>
    </Notescontext.Provider>

  );
}