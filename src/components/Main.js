import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .loadUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        console.log('useEffect', data);
        // setCardSection((cards) => [...cards, ...data]);

        setCards((cards) => [...cards, ...data]);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <main className="main">
      <section className="profile">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}>
          <button aria-label="edit" type="button" className="button profile__edit-img-button" onClick={props.onEditAvatarClick} />
        </div>
        <div className="profile__info">
          <h1 className="profile__value profile__value_type_name">
            {userName}
          </h1>
          <button
            aria-label="edit"
            type="button"
            className="button profile__edit"
            onClick={props.onEditProfileClick} />
          <p className="profile__value profile__value_type_description">
            {userDescription}
          </p>
        </div>
        <button
          aria-label="add"
          type="button"
          className="button profile__add-button"
          onClick={props.onAddPlaceClick} />
      </section>
      <section className="cards">
        <ul className="elements">
          {cards.map((card, id) => (
            <Card key={id}
              card={card}
              likes={card.likes}
              link={card.link}
              title={card.name}
              onCardClick={props.onCardClick} />))}
        </ul>
      </section>
    </main>
  )
}
export default Main;