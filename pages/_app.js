import { AppWrapper } from '../state.js'; // import based on where you put it
import '@styles/globals.css';
import Script from 'next/script';


export function Application({ Component, pageProps }) {

  return (
    <AppWrapper>
      <Component {...pageProps} />
      <Script id="search"
        src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
        onLoad={() => algoliasearchNetlify({
          appId: '1QQS2M2LF7',
          apiKey: '8deee6dc180000ed7957b395fb0497dd',
          siteId: 'b318f5f8-b751-4aaa-94e7-c82711705cd6',
          branch: 'main',
          selector: 'div#select'
        })
      }
     />
    </AppWrapper>
  );
}

export default Application;
