// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap'
import $ from "jquery";
import Typed from "typed.js"


//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require typed
//= require turbolinks

//= require components/typed
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


document.addEventListener('DOMContentLoaded', function addTyped() {
  var options = { strings: ["Bonjour \n Je m'appelle Paul \n Je suis développeur web fullstack! \n Faisons connaisance..."],
                  typeSpeed: 40,
                }
  new Typed("#typed", options);
});


