const Card = ({ type, title, value, link }) => {
  return (
    <>
      <a href={link} className={`card ${type}`}>
        <h3>{title} &rarr;</h3>
        <p>{value}</p>
      </a>

      <style jsx>{`
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
      `}</style>
    </>
  )
}

export default Card