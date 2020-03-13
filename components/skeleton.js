const Skeleton = ({ width = 80, height = 50 }) => {
  return (
    <>
      <p className="loading"></p>
      <style jsx>{`
        .loading {
          display: inline-block;
          width: ${width}px;
          height: ${height}px;
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