import Card from "../Card/Card";
import './styles.css'

const CardList = (props) => {
  const { monsters } = props
  return (
    <div className="cardList">
      {monsters.map((monster) => {
        return (
          <Card key={monster.id} monster={monster} />
        )
      }
      )}
    </div>
  )
}
export default CardList;