$('#modal-blockui').on('click', function() {
  var block = $('#modal-reload');
  $(block).block({
    message: '<svg> ... </svg>',
    showOverlay: false,
    timeout: 2000, //unblock after 2 seconds
    css: {
      border: 0,
      color: '#000',
      padding: 0,
      backgroundColor: 'transparent'
    }
  });
});
