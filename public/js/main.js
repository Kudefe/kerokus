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
