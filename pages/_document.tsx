import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props: any) {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Mono&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body className='bg-white dark:bg-black text-white dark:text-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
