//ajaz request
$(document).ready(() => {
  $('.delete-game').on('click', (e) => {
    $target = $(e.target)
    const id = $target.attr('data-id')
    $.ajax({
      type: 'DELETE',
      utl: '/admin/games/'+id,
      success: (response) => {
        window.location.href='/admin'
      },
      error:(err) => {
        console.log(err);
      }
    })
  })
})

$(document).ready(() => {
  $('.delete-blog').on('click', (e) => {
    $target = $(e.target)
    const id = $target.attr('blog-id')
    $.ajax({
      type: 'DELETE',
      utl: '/admin/blog/'+id,
      success: (response) => {
        window.location.href='/admin/blog'
      },
      error:(err) => {
        console.log(err);
      }
    })
  })
});

var editor = new MediumEditor('.editable');
var elements = document.querySelectorAll('.editable'),
    editor = new MediumEditor(elements);
