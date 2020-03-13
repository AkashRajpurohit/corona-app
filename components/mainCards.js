import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Card from './card'

const MainCards = () => {
    const { death, confirmed, recovered } = useContext(GlobalContext)
    return (
        <>
            <Card
              link="/"
              title="Confirmed"
              value={confirmed}
              type="confirmed"
            />

            <Card
              link="/"
              title="Deaths"
              value={death}
              type="death"
            />

            <Card
              link="/"
              title="Recovered"
              value={recovered}
              type="recovered"
            />
        </>
    )
}

export default MainCards