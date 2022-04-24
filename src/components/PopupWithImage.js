function PopupWithImage(){
  return (
    <div className="popup popup_type_img">
        <div className="popup__container popup__container-img">
          <button aria-label="Close" type="button" className="button popup__close popup__close-img" />
          <img className="popup__img" src=" " alt=" " />
          <p className="popup__caption" />
        </div>
      </div>
  )
}
export default PopupWithImage;