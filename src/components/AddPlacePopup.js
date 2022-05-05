import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  // function handleChange(e) {
  //   const targetName = e.target.name;
  //   const targetValue = e.target.value;
  //   targetName === 'name' && setName(targetValue);
  //   targetName === 'link' && setLink(targetValue);
  // }
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({name, link});
  }

  return (
    <PopupWithForm
      name="add"
      title="New place"
      value="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        id='input_type_title'
        className="popup__input popup__input_type_title"
        type="text"
        placeholder="Title"
        required minLength="1"
        maxLength="30"
        value={name}
        onChange={handleNameChange} />
      <span
        id="input_type_title-error"
        className="popup__error" />
      <input
        name="link"
        id='input_type_link'
        className="popup__input popup__input_type_link"
        type="url"
        placeholder="Image link"
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span
        id="input_type_link-error"
        className="popup__error" />
    </PopupWithForm>
  )
}
export default AddPlacePopup;