import Head from 'next/head'
import { useEffect } from 'react'

import { GlobalProvider } from '../context/GlobalState'
import MainCards from '../components/mainCards'
import CountrySelectBox from '../components/countrySelectBox'
import SelectedCountry from '../components/selectedCountry'
import { initGA, logPageView } from '../utils/analytics'

const Home = () => {
  useEffect(() => {
    if(!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }

    logPageView()
  }, [])

  return (
    <GlobalProvider>
      <div className="container">
        <Head>
          <title>Corona App</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="Akash Rajpurohit" />
          <meta name="description" content="Get Information about the anomalies brought about by Covid19 or Corona Virus" />
          <meta name="og:title" content="Corona App" />
          <meta name="og:type" content="Website" />
          <meta name="og:description" content="Get Information about the anomalies brought about by Covid19 or Corona Virus" />
          <meta name="keywords" content="corona virus app, corona-app, corona virus stats, covid19 stats, covid19 stats app" />
          <meta name="og:image" content="https://corona-app.now.sh/main.png" />
          <meta name="og:image:alt" content="Get Information about the anomalies brought about by Covid19 or Corona Virus" />
          <meta name="twitter:title" content="Corona App" />
          <meta name="twitter:description" content="Get Information about the anomalies brought about by Covid19 or Corona Virus" />
          <meta name="twitter:image" content="https://corona-app.now.sh/main.png" />
          <meta name="twitter:image:alt" content="Get Information about the anomalies brought about by Covid19 or Corona Virus" />
        </Head>
        <main>
          <h1 className="title">
            Welcome to <a href="/">Corona App</a>
          </h1>

          <p className="description">
          Get Information about the anomalies brought about by <code>Covid19 or Corona Virus</code>
          </p>

          <CountrySelectBox />

          <div className="grid">
            <MainCards />
          </div>

          <SelectedCountry />
        </main>

        <footer>
          <div>
            Powered by&nbsp;&nbsp;
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Next.js</b>
            </a>
            &nbsp;&nbsp;&&nbsp;&nbsp;
            <a
              href="https://zeit.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Zeit Now</b>
            </a>
          </div>

          <div>
            Data Source from&nbsp;&nbsp;
            <a
              href="https://covid19.mathdro.id/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Mathdro's API</b>
            </a>
          </div>

          <div>
            Made By&nbsp;&nbsp;
            <a
              href="https://akashwho.codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Akash Rajpurohit</b>
            </a>
          </div>
        </footer>

        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        footer {
          width: 100%;
          height: 100px;
          padding: 0 20px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
  
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
  
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
  
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
  
        .title,
        .description {
          text-align: center;
        }
  
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
  
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
  
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
  
          width: 900px;
          margin-top: 3rem;
        }
  
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
  
        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
    </GlobalProvider>
  )
}

export default Home

// footer img {
//   margin-left: 0.5rem;
//   width: 10%;
//   height: 20px;
// }

// footer a {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }