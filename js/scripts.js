var message__link = document.querySelector(".main-contacts__button--write-to-us");
var map__link = document.querySelector(".main-contacts__map");

var message__popup = document.querySelector(".modal--message");
var map__popup = document.querySelector(".modal--map");

var message__close = message__popup.querySelector(".modal--message .modal-close__button");
var map__close = map__popup.querySelector(".modal--map .modal-close__button");

var message__form = message__popup.querySelector(".modal-message__form");
var message__name = message__popup.querySelector("[name=name]");
var message__email = message__popup.querySelector("[name=email]");
var message__text = message__popup.querySelector("[name=text]");

message__link.addEventListener("click", function (evt) {
  evt.preventDefault();
  message__popup.classList.add("modal-show");
  message__name.focus();
});

message__close.addEventListener("click", function (evt) {
  evt.preventDefault();
  message__popup.classList.remove("modal-show");
  message__popup.classList.remove("modal-error");
});

map__link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map__popup.classList.add("modal-show");
  map__close.focus();
});

map__close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map__popup.classList.remove("modal-show");
});

message__form.addEventListener("submit", function (evt) {
  if (!message__name.value || !message__email.value || !message__text.value) {
    evt.preventDefault();
    message__popup.classList.remove("modal-error");
    message__popup.offsetWidth = message__popup.offsetWidth;
    message__popup.classList.add("modal-error");
    if (!message__name.value) {
      message__name.classList.add("modal-message__item--error");
    } else {
      if (message__name.classList.contains("modal-message__item--error")) {
        message__name.classList.remove("modal-message__item--error");
      }
    }
    if (!message__email.value) {
      message__email.classList.add("modal-message__item--error");
    } else {
      if (message__email.classList.contains("modal-message__item--error")) {
        message__email.classList.remove("modal-message__item--error");
      }
    }
    if (!message__text.value) {
      message__text.classList.add("modal-message__item--error");
    } else {
      if (message__text.classList.contains("modal-message__item--error")) {
        message__text.classList.remove("modal-message__item--error");
      }
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (message__popup.classList.contains("modal-show")) {
      message__popup.classList.remove("modal-show");
      message__popup.classList.remove("modal-error");
    }
    if (map__popup.classList.contains("modal-show")) {
      map__popup.classList.remove("modal-show");
    }
  }
});
