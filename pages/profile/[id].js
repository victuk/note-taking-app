import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Layout from '../../components/layouts/DefaultLayout';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Post() {
  const router = useRouter();

  let [userDetails, setUserDetails] = useState({});

  const id = router.query.id;



  async function fetchDetails() {
    let user = (await axios.get('user/' + id)).data;
    // setUserDetails(user);
    if(user) {
      setUserDetails(user);
    }
    // console.log(router.query.id);
  }

  useEffect(() => {
    fetchDetails()
  }, []);

  return(
    <div>

    <Card sx={{ maxWidth: 345 }} style={{margin: '0 auto'}}>
    {!userDetails && <div style={{
      height: '100vh',
      transform: 'translate(50%, -50%)',
      position: 'absolute',
      top: '100%',
      right: '50%'}}><h1>Loading...</h1></div>}
<CardContent>
<Typography gutterBottom component="div" style={{textAlign: 'center'}}>
  <img src={userDetails.picture} width={100} height={100} style={{borderRadius: '50%'}} alt="" />
</Typography>
  <Typography gutterBottom color="text.secondary" component="div">
    First Name: {userDetails.title}
  </Typography>

  <Typography gutterBottom color="text.secondary" component="div">
    First Name: {userDetails.firstName}
  </Typography>

  <Typography gutterBottom color="text.secondary" component="div">
    Last Name: {userDetails.lastName}
  </Typography>

  <Typography gutterBottom color="text.secondary" component="div">
    Gender: {userDetails.gender}
  </Typography>

  <Typography gutterBottom color="text.secondary" component="div">
    Email: {userDetails.email}
  </Typography>

  {/*<Typography gutterBottom color="text.secondary" component="div">
    Phone: {userDetails.phone}
  </Typography>*/}

  <Typography gutterBottom color="text.secondary" component="div">
    DOB: {`${new Date(userDetails.dateOfBirth).getDate()}/${new Date(userDetails.dateOfBirth).getMonth()+1}/${new Date(userDetails.dateOfBirth).getFullYear()}`}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Back</Button>
</CardActions>
</Card>
    </div>
  );
}


Post.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
