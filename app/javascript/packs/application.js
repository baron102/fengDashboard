import "./../src/application.css"

const Rails = require('rails-ujs');
Rails.start();

import Turbolinks from "turbolinks";
Turbolinks.start();

// import Filter from 'components/filter'

import WebpackerReact from 'webpacker-react'

// WebpackerReact.setup({Filter})

document.addEventListener("turbolinks:load", function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
})

// To respond with modal
$(function() {
  const modal_holder_selector = '#modal-holder';
  const modal_selector = '.modal';

  $(document).on('click', 'a[data-modal]', function() {
    const location = $(this).attr('href');
    //Load modal dialog from server
    $.get(location, data=>
      UIkit.modal($(modal_holder_selector).html(data).find(modal_selector)).show()
    );
    return false;
  });

  return $(document).on('ajax:success',
    'form[data-modal]', function(event, data, status, xhr){
      const url = xhr.getResponseHeader('Location');
      if (url) {
        // Redirect to url
        window.location = url;
      } else {
        // Remove old modal backdrop
        $('.modal-backdrop').remove();

        // Replace old modal with new one
        UIkit.modal($(modal_holder_selector).html(data).find(modal_selector)).show()
      }

      return false;
  });
});
