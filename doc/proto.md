# SIGNFLOW Prototipo

## Acceso
Pagina temporal de acceso a la app.

### Login Form
### Usuarios de Demo

## Estructura de páginas.

Las paginas se ajustan a una estructura común.
- cabecera de aplicacion
- menu izquierdo
- area de contenido
- pagina
  - cabecera de pagina
  - contenido de pagina

[imagen]

## Area Personal:
Funciona como Landing Page.
Se podrá acceder desde el area de usuario del menu lateral.

[imagen]

### Area de notificaciones
Mostrará las notificaciones para el usuario.
Ordenadas por fecha y por relevancia.
Cada notificación cuenta con acciones de "pronta respuesta" o de navegación a otras páginas si aplica.

- [ ] las notificaciones también se envian por correo.

[imagen]

### Perfil usuario
[imagen]
- avatar
- Datos de contacto

### Personalizacion.
[imagen]
- niveles de notificaciones
- filtros por defecto

### prop: barra lateral (dcha, oculta) de notificaciones.
Al estilo de la barra lateral de notificaciones OSX
[imagen]

## Campañas

#### origen de Datos
Tablas de Intermarketing.
Proponer API REST refactorizando los DAOs existentes.

Mostrar el arbol de grupos/campañas.

[imagen]

### menú página
opciones de configuración del arbol.

[imagen]

- checkbox: mostrar grupos
- checkbox mostrar subcampañas
- generar informe excel

### filtros
opciones de filtrado
- por ejercicio
- por estado de la campaña

### busqueda
criterios de busqueda
- [ ] por codigo
- [ ] por fechas
- [ ] por nombre

### Prop: Mis Campañas
Rol: marketing
Muestra el listado de campañas filtrado para el usuario.
Vista tipo calendario

[imagen]

### Menú página
Se añade una opción de "Grabar preferencias" para que el usuario pueda configurar sus filtros por defecto y sean recordados por la app (persistencia en el browser)


## Campaña

Reestilyng de la pantalla actual de intermarketing.

[imagen]

#### nueva campaña:
- [ ] seleccion de ejercicio

### Subcampañas

Se muestran listado de subcampañas.

#### WorkFlow
Flujo de acciones esperadas en la subcampaña resaltando los pasos realizados, el actual y posibles incidencias. Cada estado es navegable


### Promociones:


### propuesta: pagina de subcampañas


### propuesta: seguimiento de campaña (dashboard / calendario)


## Solicitud de materiales
- [ ] la aprobacion de la solicitud de materiales la hace PPV. MKT solo es notificado.
- [ ] se proponen plantillas de solicitud para PPV
- [ ] mejorar la capacidad de comentar/rechazar solicitud, a nivel global y linea por linea.
- [ ] check envio urgente de material. a nivel de solicitud y de cada material.

## Arte Final

La seleccion de motivo la hace Arte Final de forma manual.


## Provision / Distribucion materiales

- [ ] informe de sobrecoste
- [ ] estimación de tiempos de entrega

## Materiales

Listado de materiales.
- [ ] los materiales tiene peso y volumen.

#### Origen de Datos
Excel y/o SAP (por confirmar)

#### Dialogo nuevo material.
- [ ] Notificacion a Compras
- Generacion de codigo ( ¿?¿? ver con usuario compras)

### Detalle de material
