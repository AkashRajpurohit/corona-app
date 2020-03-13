const Skeleton = ({ width }) => {
  return (
    <>
      <div className="loading"></div>
      <style jsx>{`
        .loading {
          margin: auto;
          width: ${width}px;
          height: 20px;
          animation: shine 1s infinite;
        }
      
        @keyframes shine {
          0% {
            background-color: rgba(165, 165, 165, 0.1)
          }
          50% {
            background-color: rgba(165, 165, 165, 0.3)
          }
          100% {
            background-color: rgba(165, 165, 165, 0.1)
          }
        }
      `}</style>
    </>
  )
}

export default Skeleton