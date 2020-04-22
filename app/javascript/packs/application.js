// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');

// const tinymce = require('tinymce/tinymce');

// A theme is also required
// require('tinymce/themes/silver');

// Any plugins you want to use has to be imported
// require('tinymce/plugins/paste');
// require('tinymce/plugins/advlist');
// require('tinymce/plugins/autolink');
// require('tinymce/plugins/lists');
// require('tinymce/plugins/image');
// require('tinymce/plugins/charmap');
// require('tinymce/plugins/print');
// require('tinymce/plugins/preview');
// require('tinymce/plugins/anchor');
// require('tinymce/plugins/searchreplace');

// Initialize the app
// tinymce.init({
//   selector: '#tiny',
//   plugins: ['paste', 'advlist', 'autolink', 'lists', 'image', 'charmap', 'print', 'preview', 'anchor', 'searchreplace']
// });

// require.context(
//   'file-loader?name=[path][name].[ext]&context=node_modules/tinymce/skins',
//   true,
//   /.*/
// );

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Support component names relative to this directory:
const componentRequireContext = require.context('components', true);
const ReactRailsUJS = require('react_ujs');

ReactRailsUJS.useContext(componentRequireContext);
