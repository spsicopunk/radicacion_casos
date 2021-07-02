## Instalación de sass

Ejecutar en el proyecto

`npm install -g sass`

Ya dentro del directorio `scss` ejecutamos el siguiente comando para transpilar el sass

`sass --watch main.scss ../css/main.css`

## Instalación de Browser-sync

Para tener cambios en tiempo real de los proyectos instalar:

`npm install -g browser-sync`

Luego ejecutar en el directorio de formulario corresponsal el siguiente comando

`browser-sync start --server --files "*html, css/*.css"`

cuando abra el local se debe poner en la url la siguiente ruta `/Radicacion_casos.html`
