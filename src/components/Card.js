function Card(props) {

  return (
    <template
      id="element-template"
      className="card-template">
      <li
        className="element card"
        key={props.card.id}>
        <button
          className="button element__delete" />
        <div
          className="element__img"
          style={{ backgroundImage: `url(${props.card.link})` }}
          onClick={() => {
            props.onCardClick(props.card);
          }} />
        <div className="element__info">
          <h2
            className="element__title">
            {props.card.title}
          </h2>
          <div
            className="element__like-wrapper">
            <button
              aria-label="like"
              type="button"
              className="button element__like-button" />
            <span className="element__like-count">
              {[props.card.likes].length}
            </span>
          </div>
        </div>
      </li>
    </template>
  )
}

export default Card;