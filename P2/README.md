## DIU - Practica2, entregables

### Ideación 
* Mapa de empatía
![empathy_map](empathy_map.png)

### PROPUESTA DE VALOR
Se quiere desarrollar una aplicación móvil para la gestión y planificación de viajes. Esta aplicación permitirá al usuario si así lo desea, organizar su viaje hasta el más mínimo detalle, desde especificar horas concretas para paradas del viaje hasta poder hacer futuras reservas en establecimientos dentro de la propia app. El objetivo principal es hacer que el usuario tenga todo lo que necesite para organizar su viaje en una misma aplicación.

### SCOPE CANVAS
![scope_canvas](scope_canvas.png)

La aplicación implementará las siguientes funcionalidades:
* Guardar documentación del viaje (billetes de avión, entradas a museos…).
* Localización del usuario en tiempo real.
* Informar sobre las restricciones de COVID-19 en el lugar a visitar.
* Recomendar en función de las preferencias del usuario a partir de unos filtros
* Creación de un viaje en el que se añaden la lista de sitios a visitar con su fecha e intervalo de hora.
* Crear grupos con las personas con las que el usuario va a viajar para la compartición de un viaje.
* Reserva de hoteles/hostales
* Comprar entradas a museos o parques de atracciones.
* Un modo oscuro
* Galería de fotos

### TASK ANALYSIS

* User Task Matrix 

| GRUPO DE USUARIOS                       | Usuario invitado | Usuario planificando viaje | Usuario durante su viaje | Usuario tras su viaje |
|-----------------------------------------|------------------|----------------------------|--------------------------|-----------------------|
| Crear un viaje                          | -                | M                          | L                        | L                     |
| Añadir una parada                       | -                | H                          | M                        | L                     |
| Eliminar una parada                     | -                | H                          | M                        | L                     |
| Editar parada                           | -                | H                          | H                        | L                     |
| Consultar un viaje                      | -                | H                          | H                        | M                     |
| Eliminar un viaje                       | -                | L                          | L                        | H                     |
| Añadir documentación                    | -                | H                          | L                        | L                     |
| Buscar lugares turísticos               | M                | H                          | M                        | L                     |
| Reservar hotel                          | -                | M                          | L                        | L                     |
| Consultar notificaciones                | -                | M                          | H                        | L                     |
| Añadir amigo                            | -                | L                          | M                        | L                     |
| Crear grupo                             | -                | M                          | L                        | L                     |
| Añadir miembro al grupo                 | -                | L                          | M                        | L                     |
| Eliminar grupo                          | -                | L                          | L                        | H                     |
| Salir del grupo                         | -                | L                          | L                        | H                     |
| Enviar mensaje                          | -                | M                          | M                        | L                     |
| Buscar hospedaje                        | M                | H                          | L                        | L                     |
| Iniciar Sesión                          | M                | L                          | L                        | L                     |
| Registrarse                             | H                | L                          | L                        | L                     |
| Consultar restricciones COVID-19        | H                | H                          | H                        | L                     |
| Consultar chat de grupo                 | -                | M                          | M                        | L                     |
| Consultar chat con usuario              | -                | M                          | M                        | L                     |
| Consultar mapa                          | H                | H                          | H                        | L                     |
| Compartir información del viaje en RRSS | -                | M                          | H                        | H                     |




### ARQUITECTURA DE INFORMACIÓN

* Sitemap 

![sitemap](sitemap_bienvenida.png)
![sitemap](sitemap_viajes.png)
![sitemap](sitemap_ajustes.png)
![sitemap](sitemap_social.png)

* Labelling 

| Término                | Icono | Significado                                                                                                                                                         |
|------------------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Iniciar Sesión         |![icono](iconos/iniciar_sesion.png)       | Se inicia sesión en la aplicación.                                                                                                                                  |
| Registrarse            |![icono](iconos/registrar.png)       | Se accede a la opción de registro en la aplicación.                                                                                                                 |
| Inicio                 |<img src="iconos/home.png" width="50" />   | Se accede a la página de inicio de la aplicación, donde se muestran el listado de viajes del usuario.                                                               |
| Buscar                 |<img src="iconos/loupe-1.png" width="50" />      | Se accede a la opción de búsqueda de la aplicación para buscar hoteles y lugares que visitar además de apartados de la aplicación.                                  |
| Notificaciones         |<img src="iconos/bell.png" width="50" />    | Se acceden a las notificaciones del usuario (nuevos mensajes,solicitudes de amistad, cancelaciones de reservas, retrasos, cambios de restricciones COVID-19...).    |
| Social                 | <img src="iconos/chat.png" width="50" />     | Se accede a los chats con otros usuarios de la aplicación.                                                                                                          |
| Ajustes                |<img src="iconos/settings.png" width="50" />     | Configuración de la aplicación y del perfil del usuario (editar nombre de usuario, cambiar de contraseña, cambiar a modo nocturno/diurno, cambiar foto de perfil…). |
| Filtrar búsqueda       | <img src="iconos/filter-results-button.png" width="50" />      | En la opción de buscar se permitirá filtrar la búsqueda del usuario (filtro de popularidad, filtro de sólo restaurantes, sólo hoteles…).                            |
| Información legal      |<img src="iconos/auction.png" width="50" />     | Políticas de privacidad y uso de la aplicación.                                                                                                                     |
| Centro de ayuda        |<img src="iconos/information.png" width="50" />     | El usuario puede resolver sus dudas en un FAQ o Chat Online.                                                                                                        |
| Chat online            |<img src="iconos/help-1.png" width="50" />   | Se abrirá un chat con una IA para responder dudas.                                                                                                                  |
| FAQ                    |<img src="iconos/faq.png" width="50" />     | Listado de preguntas comunes que se suelen realizar sobre el uso de la aplicación.                                                                                  |
| Idiomas                |<img src="iconos/translation.png" width="50" />       | Selección de idioma de la aplicación.                                                                                                                               |
| Tema                   | <img src="iconos/theme.png" width="50" />      | Selección entre un listado de temas para usar en la aplicación.                                                                                                     |
| Unidades de medida     | <img src="iconos/scale.png" width="50" />      | El usuario podrá seleccionar la moneda, así como las unidades de distancia utilizadas.                                                                              |
| Gastos                 | <img src="iconos/money.png" width="50" />      | Listado de los gastos que va introduciendo el usuario durante la planificación y desarrollo del viaje.                                                              |
| Restricciones COVID-19 |  <img src="iconos/test-results.png" width="50" />     | Listado de las restricciones COVID-19 en el lugar a visitar por el usuario.                                                                                         |
| Compartir              |<img src="iconos/share-1.png" width="50" />       | Compartir paradas, rutas y fotografías.                                                                                                                             |
| Reservas               | <img src="iconos/booking.png" width="50" />     | Listado de reservas de hoteles/restaurantes del usuario.                                                                                                            |
| Documentación          | <img src="iconos/paper.png" width="50" />      | Sección donde guardar toda la documentación relacionada con el viaje (billetes de vuelo, tren, entradas a museos…).                                                 |
| Paradas                | <img src="iconos/route.png" width="50" />      | Mapa con las paradas a visitar del viaje del usuario.                                                                                                               |
| Añadir amigo           | <img src="iconos/add.png" width="50" />      | Añadir un amigo a la lista de amigos del usuario introduciendo su nombre de usuario.                                                                                |
| Eliminar amigo         | <img src="iconos/unfollow.png" width="50" />      | Eliminar un amigo de la lista de amigos del usuario.                                                                                                                |

                                                                                                              



### Prototipo Lo-FI Wireframe 
![prototipo](bienvenida.png)
![prototipo](inicio.png)
![prototipo](viajes.png)

### Conclusiones  
En esta práctica hemos sentado las bases de lo que será nuestro proyecto, hemos
conseguido identificar cual será la funcionalidad de nuestra aplicación además de
la razón de existir de esta.

También hemos podido organizar y distribuir las distintas secciones de la aplicación
mediante el sitemap, facilitándonos conseguir una estructura de contenidos y menús
ordenada en comparación con otras aplicaciones similares analizadas en la primera práctica.

Por último, el uso de herramientas de prototipado y diseño de GUI como Adobe Xd nos
ha introducido al uso de este tipo de aplicaciones de diseño las cuales ya nos están siendo
de utilidad incluso en otras asignaturas como DS para realizar el wireframe de aplicaciones móviles en Flutter.
