import Head from 'next/head';
import '../styles/globals.css';
import NProgress from 'nprogress';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
     Router.events.on('routeChangeStart', () => {
          NProgress.start();
     });
     Router.events.on('routeChangeComplete', () => {
          NProgress.done();
     });

     return (
          <>
               <Head>
                    <link
                         rel="stylesheet"
                         href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                         integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                         crossOrigin="anonymous"
                         referrerPolicy="no-referrer"
                    />
               </Head>
               <div className="mx-auto max-w-[1440px] pt-5">
                    <Component {...pageProps} />
               </div>
          </>
     );
}

export default MyApp;
