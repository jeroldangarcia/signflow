------------------------------------------------------------------------- 20170201

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


----------------------------------------------------------------------- 20170324

Reunión con PPV
---------------

 [ ] Marketing crea la campaña, y tienen un 'briefing' con PPV donde se dan los centros a los que va dirigda y se negocian/establecen las 'implantaciones' (departamental, interdepartamental, vertical) (¿Nos pueden dar un ejemplo de este doc?):

    1) En función de la implantación en tienda añade los formatos de carteleria.
      - se conoce/dispone de un listado de formatos por defecto para cada implantación.

    2) Se informa el listado de formatos elaborado a MKT

    3) MKT manda los formatos a creatividad para que confeccionen los bocetos.
       - los motivos, esta info podria venir dada en el briefing.
       - los idiomas los pide mkt xq saben a que centros va dirigida la subcampaña (castellano, catalan, euskera ), esta info podria venir dada en el briefing.

    4) MKT aprueba los bocetos (comenta) y creatividad se los pasa a Arte Final

    5) Arte Final manda los pdf de arte final a fotografia (Agustin)

    6) Fotografia llama a PPV que le da las unidades de cada linea

    7) Realizacion manda los PDF al proveedor

    8) Proveedor Pide a PPV cantidades

    9) PPV manda al proveedor la Orden de Trabajo (dotaciones a centros)
     - la gestion de incidencias con el proveedor llega a PPV
     - El dato de cuando llega el trabajo al proveedor es importante para PPV realizar el seguimiento de la OT


 [ ] PPV solicita frecuentemente nuevos materiales que se van a usar de forma puntual.
    - ¿Como actua compras? ¿Lo añade al concurso del año?
    - PPV quiere poder añadir lineas de presupuesto como campos libres, sin depender del concurso.

 [ ] Dotaciones a centros.
    - Los motivos influyen en la dotacion a centros, ya que pueden ir dirigidos a distintas "divisiones" que pueden estar presentes o no en cada centro.

 [ ] PPV es el arbitro de la visibilidad en centro entre las distintas campañas que compiten en el mismo espacio de tiempo.
     --> Calendario de subcampañas + centro(divisiones)
     La info de como se dota a cada centro para cada subcampaña es sensible, ya que puede ocasionar "conflicto de intereses" con cada responsable de campaña.

 [ ] La info de lass divisiones de un centro las maneja compras. Aunque PPV dispone de un "historico" es decir mantienen un listado en funcion de los trabajos que van realizando.
     - PPV categoriza los centros en funcion de la carteleria que han necesitado en el pasado. (A, B, C)
        | num centro | categoria centro | nombre centro | divisiones * materiales |
        ( * ) Nos pueden dar un ejemplo de este doc?


    -----------





    caso ideal
    ----------
    [] calendario de promociones de marketing. Se envia uno por temporada (primaver verano) (PPV lo llama campaña)). (pedir ejemplo) (El dueño es marketing).
    [] compras a mkt
      --> mkt --briefing( centros )--> ppv  (presupuesta asigna formatos)
        --> ppv se lo pasa a mkt
          --> mkt pide arte final de los formatos a creatividad
            --> mkt manda los artes finales a "fotografi" agustin
    [] vuelta al cole: PPV le dice a mkt las necesidades de fomatos de la campaña

    caso real
    ---------
    - en realidad los centros los decide ppv basandosa en sus historicos de implantaciones anteriores
      - tienen plantillas


    [] ejemplo correcto para PPV
    - mkt de lenceria trabaja bien porque
      - los formatos se repiten y mandan ya centros y creatividad


    excepcion
    ----------
    [] los centros de la campaña tb depende de compras (del surtido que tengan los centros)
    [] las campañas arrancan tb desde compras. PPV decide el formato y Marketing encarga el arte final.

    [] hay muchas veces que solicitan distintos formatos para el mismo arte final por las restricciones del centro


    concurso materiales y formatos
    ------------------------------
    ppv propone formatos a compras
    todo lo que se sale de carton y papel lo hace compras, no esta en el concurso.

    envios urgentes
    ---------------
    - dejar constancia de quien lo ha decidido

    [] idea: calcular carga de proveedores (en funcion de trabajos de ECI que tenga en curso)

    [] idea: inicialmente usar campañas verticales recurrentes son candidatas para entrar al sistema.

    [] idea: en concurso de materiales poner a cada material - formato el tiempo medio de fabricacion


    [] la descripcion de los materiales del concurso deberia ser mas detallada (PPV la tiene) nos lo pasa. Puede ser que PPV tenga permiso para
     detallar un material.

    [] en el listado de materiales PPV especifica las cantidades de cada cartel que va a cada centro (donde pone HOGAR, MODA, OCIO se esta refiriendo a la creatividad creada)
       tb tienen un dosier paralelo con las creatividades y sus nombres.





------------------------------


[OK] filtro por temporada ( primaver-verano, otoño-invierno)

[] icon de subcampaña (tipo de subcampaña con catalogo, con gastos...)
  - decorador ROI

  tipos de subcampaña
  []  catalogo, carteleria, servicios generales, sms, mail, postal, spots, fotos

  [] borrado de campaña ->
      - quitar boton si las subcampañas tienen gastos

 [] motivos -> Paco mercado tiene capacidad de modificar las creatividades y generar el arte final
      decide los motivos hablando con mkt


subcampaña: listitem : toda la matricula con el codigo de subcampaña resaltado.


------------------------------------

# reunión con compras:

[ ] Gestión de Materiales

- como la gestiona esta actualmente ?
- tecnologia?
- posible integracion?
- sincronizacion frecuente ?
- solicitudes de nuevos materiales ? como?

[] Gestión de Stock de centros

- que influencia puede tener en la elaboracion del presupuesto de materiales?
