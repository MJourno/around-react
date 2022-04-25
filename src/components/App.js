import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body__container">
      <Header />
      <Main
        onClose={closeAllPopups}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        selectedCard={selectedCard}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Edit profile"
        value="Save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          name="name"
          id='input_type_name'
          className="popup__input popup__input_type_name"
          type="text"
          placeholder="Name"
          required minLength="2"
          maxLength="40" />
        <span
          id='input_type_name-error'
          className="popup__error" />
        <input
          name="about"
          id='input_type_description'
          className="popup__input popup__input_type_description"
          type="text"
          placeholder="About me"
          required minLength="2"
          maxLength="200" />
        <span
          id='input_type_description-error'
          className="popup__error" />
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="New place"
        value="Create"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          name="name"
          id='input_type_title'
          className="popup__input popup__input_type_title"
          type="text"
          placeholder="Title"
          required minLength="1"
          maxLength="30" />
        <span
          id="input_type_title-error"
          className="popup__error" />
        <input
          name="link"
          id='input_type_link'
          className="popup__input popup__input_type_link"
          type="url"
          placeholder="Image link"
          required />
        <span
          id="input_type_link-error"
          className="popup__error" />
      </PopupWithForm>
      <PopupWithImage
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="delete"
        title="Are you sure?"
        value="Yes"
        isOpen={false}
        onClose={closeAllPopups} />
      <PopupWithForm
        name="edit-profile-img"
        title="Change profile picture"
        value="Save"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          type="url"
          id="input_type_Img_link"
          className="popup__input popup__input_type_avatar"
          name="avatar"
          placeholder="Image link"
          required />
        <span
          id="input_type_Img_link-error"
          className="popup__error" />
      </PopupWithForm>
    </div>
  );
}

export default App;
