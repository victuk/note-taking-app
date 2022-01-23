import '../styles/globals.css'
import axios from 'axios'
import 'antd/dist/antd.css'

  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  // axios.defaults.headers['app-id'] = process.env.NEXT_PUBLIC_APP_ID;


function MyApp({ Component, pageProps }) {

   const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
