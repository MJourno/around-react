function Card(props) {

  return (
    <li
      className="element card">
      <button
        className="button element__delete" />
      <div
        className="element__img"
        style={{ backgroundImage: `url(${props.link})` }}
        onClick={() => {
          props.onCardClick(props.card);
        }} />
      <div className="element__info">
        <h2
          className="element__title">
          {props.title}
        </h2>
        <div
          className="element__like-wrapper">
          <button
            aria-label="like"
            type="button"
            className="button element__like-button" />
          <span className="element__like-count">
            {props.likes.length}
          </span>
        </div>
      </div>
    </li>
  )
}

export default Card;