import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const SelectedCountry = () => {
  const { selectedCountry, displayText } = useContext(GlobalContext)

  return (
    <>
      <p>{displayText} <code>{selectedCountry}</code></p>
      <style jsx>{`
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        `}</style>
    </>
  )
}

export default SelectedCountry