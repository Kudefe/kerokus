trabajando en la tontera de pagina desde 0.

Handlebars + express + mongo + babel

separar los archivos del server en index, app y routes
en app creamos app = express() y lo importamos


Crear los routes para ver los archivos, editarlos, añadir nuevos, borrarlos, etc

el sistema de la página está basado en juegos. Los datos del juego formaran la entrevista y la metadata necesaria para hacer busquedas.

/ = Por ahora no será usado
/games este será el route principal
/admin será el route para el administrador, con get, post y delete


No habra registro de usuarios al inicio, o de haber lo dejaré para el final
Solo registro de administrador, y solo debe haber una cantidad limitada.

/admin/register => route para crear usuario. Debe mostrar el view de registro SOLAMENTE si es que no hay usuarios creados. De otra manera, redirigir a login
/admin/login/ acceso con credenciales de administrador
/admin/add/game => route para añadir nuevo juego
/admin/add/ad => route para añadir ad de texto

edit tiene que estar en admin. 
