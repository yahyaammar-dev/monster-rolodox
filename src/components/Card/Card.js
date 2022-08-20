import './styles.css'

const Card = (props) => {
  const { name, email, id } = props.monster
  return (
    <div className='cardContainer' >
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div >
  )
}

export default Card;