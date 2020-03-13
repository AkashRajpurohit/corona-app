import Head from 'next/head'
import { useState, useEffect } from 'react'

const Home = () => {

  const [stats, setStats] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data")
      const resp = await fetch('https://covid19.mathdro.id/api')
      const data = await resp.json()
      console.log(data)
      setStats(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Corona App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isLoading ? <p>Is loading data</p> : (
          <div>
            {JSON.stringify(stats, null, 2)}
          </div>
        )
      }
      <main>
        <h1 className="title">
          Welcome to <a href="/">Corona App</a>
        </h1>
  
        <p className="description">
          This app displays the impact created because of the <code>Covid19 or Corona Virus</code>
        </p>
  
        <div className="grid">
          <a href="https://nextjs.org/docs" className="card confirmed">
            <h3>Confirmed &rarr;</h3>
            <p>{stats?.confirmed?.value}</p>
          </a>
          <a href="https://nextjs.org/docs" className="card deaths">
            <h3>Deaths &rarr;</h3>
            <p>{stats?.deaths?.value}</p>
          </a>
          <a href="https://nextjs.org/docs" className="card recovered">
            <h3>Recovered &rarr;</h3>
            <p>{stats?.recovered?.value}</p>
          </a>
        </div>
      </main>
  
      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
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
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        footer img {
          margin-left: 0.5rem;
        }
  
        footer a {
          display: flex;
          justify-content: center;
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
  
        .card {
          margin: 1rem;
          flex-basis: 20%;
          min-width: 200px;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
  
        .card.confirmed:hover,
        .card.confirmed:focus,
        .card.confirmed:active {
          color: #ff9800;
          border-color: #ff9800;
        }

        .card.deaths:hover,
        .card.deaths:focus,
        .card.deaths:active {
          color: #ef5350;
          border-color: #ef5350;
        }

        .card.recovered:hover,
        .card.recovered:focus,
        .card.recovered:active {
          color: #1de9b6;
          border-color: #1de9b6;
        }
  
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
  
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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
  )
}

export default Home
