// Import URL from CDN method
// https://cdn.rawgit.com/sachinchoolur/lightgallery.js/master/dist/js/lightgallery.js
var lightGallery = document.createElement("script");
lightGallery.setAttribute(
  "src",
  "https://cdn.rawgit.com/sachinchoolur/lightgallery.js/master/dist/js/lightgallery.js"
);
document.head.appendChild(lightGallery);
// Setup Gallery
const gallery = document.getElementById("gallery");

// Use Gallery
lightGallery(gallery, {
  mode: "lg-lollipop-rev",
  cssEasing: "cubic-bezier(0.25,0,0.25,1)",
  loop: true,
  getCaptionFromAlt: true
});
