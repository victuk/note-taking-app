import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router'



export default function RecipeReviewCard() {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const onFinish = async (values) => {
    message.success('This is a success message');
   console.log('Success:', values);
   try{
    let res = await axios.post('register', values);
    console.log(res);
    setProcessing(true);
    if(res.status == 200) {
      message.success('Success');
      setProcessing(false);
      router.push('/login');
    }
   } catch (e) {
    message.error('An error occured');

    setProcessing(false)
   }
   
 };

 const onFinishFailed = (errorInfo) => {
  message.error('incomplete details');
  setProcessing(false);
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
    <h3 style={{textAlign: 'center'}}>Register</h3>
    <Form.Item
      name="fullName"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input placeholder="Full Name" style={{border: 'none', borderBottom: '1px solid #1890ff'}} />
    </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
            whitespace: true,
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
          Register {processing && <span>Processing</span>} 
        </Button>
      </Form.Item>
    </Form>
    <div>Got to <Link href="/login">Login</Link></div>
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
