----------------------------------------------------------------------- 20170201

# Signflow

#### Catálogo de Materiales para PPV
- [DONE] PPV solicita nuevo material a compras

#### Solicitud de Materiales
- [DONE] Dialog de edicion de materiales + motivo + unidades.

- [POR CONFIRMAR] Después de la dotación a centros de PPV marketing asigna motivo y unidades a cada material.
- [ POR CONFIRMAR] NO. La asignacion de motivos la hace Arte Final

- [RUNTIME] generacion de codigos de OT con digitos de motivo.

#### Idiomas
El idioma lo decide MKT en la subcampaña
- [RUNTIME] Generar un material por cada idioma
- [DONE/RUNTIME] Hay Materiales con formato específico. Reglas que prevalecen sobre la subcampaña:
  - Idiomas
  - distribucion
  - costes

 - [ ] PPV decide como se distribuyen los materiales/idioma a los centros.

#### Provision de Materiales

  - [DONE] Sistema muestra desviación de coste respecto al primer proovedor.
  - [DONE] Campo de observaciones para justificar el cambio de proveedor: Ofrece algunas razones frecuentes y/o un campo de texto libre.
  - [ ] Vuelta atras de material acabado
    - al dar marcha atras especificar si conlleva coste adicional
    - mismo codigo OT aumentando el digito de version.
    - reutiliza el mismo albaran y distribucion.

#### Arte Final
 - [ ] Actividades:
  - Quien hace el cartel
  - Cuando lo acaba

#### Nueva Pantalla: Reporte Estado Peticion de materiales
  - [ ] Buscador
  - [ ] Seguimiento Solicitud

###### Tabla de listado de materiales
----------------------------------------------
| Material | Formato | Idiomas | Centros     |
----------------------------------------------
| arapiles |   ???   |  cast   | Castellana  |


## Preguntas:

  - [x] ¿ Como se calcula el coste medio por material/formato en la simulacion de la solicitud de materiales ?

    > la media de los tres primeros



----------------------------------------------------------------------- 20170222


TODO: Revision maqueta. Contraste con intermarketing de MAriJose

- [ ] subir a gitlab

### Tablas
- [ ] asegurar el rendimiento con muchas filas
- [ ] filas editables --> dependera de rediseño

### Grupos/Campañas

- [DONE] -[]-- Ver grupos o no.

  > en el menu de página:
    - se añade check de "ver grupos"
    - se añade check de "ver subcampañas".

- [DONE] icono/color permiso de acceso a campaña.

  > se genera aleatoriamente rojo o verde

- [DONE] en cada grupo un boton + para crear campañas
  - [DONE] el grupo de la nueva campaña viene preseleccionado

- [ ] en cada grupo un boton ver detalle de grupo (nombre, fechas, proveedor, ...)
- [DONE] el FAB + es para crear Grupos
  - [DONE] la empresa estara preseleccionada segun filtro empresa

- [DONE] boton generar reporte de listado de campañas excel
  > se añade opción en el menu de página

- [DONE] boton mover campaña entre Grupos
- [DONE] boton eliminar campaña

- [ ] entrada a listado de Grupos/campañas en blanco --> proponer busqueda por defecto a usuario
- [DONE] filtro por ejercicio/temporadas en lugar de por meses
- [DONE] filtro en curso --> ver con usuario
- [ ] busqueda por criterios fijos: codigo, nombre, fechas --> Proponer buscador predictivo 'ala' apple email
- [DONE] ordenar resultados por fecha o nombre

### Campaña
- [ ] Diferenciar Objetivo Principal y secundario
- [ ] dato "clasificacion" en breadcrumb --> consultar usuario
- [ ] ver código de campaña
- [ ] marca de medios mas visible (sacar del menu)

- [ ] agrupadro de subcampañas (ruido)
- [ ] ordenar campos leyenda tarta


### Notificaciones
Pantalla de notificaciones a usuario
