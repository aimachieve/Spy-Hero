
import {useRouter} from 'next/router';
import Layout from '../components/layouts';

import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import '../styles/globals.css'
import '../components/css/nav.css'
import {  store } from "../store/store";
import { Provider } from "react-redux";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if(router.asPath =='/')  {
    return (
      <SSRProvider>
        <Provider store={store}>
        <Head>
        <title>SpyBot App</title>
        <link rel="icon" href="/images/favico.png" />
      </Head>
          <Component {...pageProps} />
        </Provider>
      </SSRProvider>
      
    )
 }
 return (
   <SSRProvider>
    <Provider store={store}>
    <Head>
        <title>SpyBot App</title>
        <link rel="icon" href="/images/favico.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </SSRProvider>
  
);

}

export default MyApp;
