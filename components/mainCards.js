import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Card from './card'

const MainCards = () => {
    const { death, confirmed, recovered } = useContext(GlobalContext)
    return (
        <>
            <Card
              title="Confirmed"
              value={confirmed}
              type="confirmed"
            />

            <Card
              title="Deaths"
              value={death}
              type="death"
            />

            <Card
              title="Recovered"
              value={recovered}
              type="recovered"
            />
        </>
    )
}

export default MainCards