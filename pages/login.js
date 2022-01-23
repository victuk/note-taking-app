import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function RecipeReviewCard() {
  const router = useRouter();
  let [processing, setProcessing] = useState(false);
  const onFinish = async (values) => {
   console.log('Success:', values);
   try{
    let res = await axios.post('login', values);
    console.log(res);
    setProcessing(true);
    if(res.status == 200) {
      message.success('Success');
      setProcessing(false);
      localStorage.setItem('notesToken', res.data.token);
      router.push('/');
    }
   } catch (e) {
    message.error('An error occured');

    setProcessing(false)
   }
 };

 const onFinishFailed = (errorInfo) => {
   console.log('Failed:', errorInfo);
 };



  return (
    <div style={{ height: '100vh',
    width: '100vw',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center' }}>
      <h1 style={{marginBottom: '40px'}}>VNote</h1>
      <Form
      name="basic"
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <h3 style={{textAlign: 'center'}}>Login</h3>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            type: 'email',
            message: 'Please input a valid email!'
          }
        ]}
      >
        <Input placeholder="Email" style={{border: 'none', borderBottom: '1px solid #1890ff'}} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          },
          {
            min: 6,
            message: 'Too short'
          }
        ]}
      >
        <Input.Password placeholder="Password" style={{border: 'none', borderBottom: '1px solid #1890ff'}} />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Login
        </Button>
      </Form.Item>
    </Form>
    <div>Got to <Link href="/register">Register</Link></div>
    </div>
  );
}



// RecipeReviewCard.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   ) 004PasLCxCFDuz829yBfPUv1hJcGt-dszybm_r42Zg
// }
