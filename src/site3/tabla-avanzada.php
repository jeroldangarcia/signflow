<?php include("header.php"); ?>
<body class="detail">
    <?php include("main-nav.php"); ?>
    <div class="container-fluid">
        <section class="row">
            <div class="col-sm-">
                <!-- Imagen destacada -->
                <div class="featured-img">
                    <img alt="Imagen destacada" src="./img/slider-header.jpg">
                    </img>
                </div>
            </div>
        </section>
        <section class="row">
            <div class="container-fluid">
                <div class="row">
                    <aside class="col-xs-12 col-sm-4 col-md-2">
                        <nav>
                            <ul>
                                <li class="active">
                                    <span>Menú principal</span>
                                    <ul>
                                        <li class="active">
                                            <a href="#">Gestión de Listas de Carteles</a>
                                        </li>
                                        <li>
                                            <a href="#">Vista Global de Listas</a>
                                        </li>
                                        <li>
                                            <a href="#">Gestión de Plantillas de Cartelización</a>
                                        </li>
                                        <li>
                                            <a href="#">Mantenimiento Formatos</a>
                                        </li>
                                        <li>
                                            <a href="#">Recuperar Listas</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Control de cambios</span>
                                    <small>Seleccione los elementos que desee mostrar en el listado:</small>
                                    <ul>
                                        <li>
                                            <label class="checkbox">
                                              <input type="checkbox" id="cambios" value="novedad"> <i class="icon icon-plus"></i> Novedad
                                            </label>
                                            <label class="checkbox">
                                              <input type="checkbox" id="cambios" value="aviso"> <i class="icon icon-warning"></i> Aviso
                                            </label>
                                            <label class="checkbox">
                                              <input type="checkbox" id="cambios" value="aviso-impresion"><i class="icon icon-print"></i> Aviso de Impresión
                                            </label>
                                            <label class="checkbox">
                                              <input type="checkbox" id="cambios" value="sin-cambios"> Sin cambios
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Estados</span>
                                    <small>Seleccione los elementos que desee mostrar en el listado:</small>
                                    <ul>
                                        <li>
                                            <label class="checkbox">
                                              <input type="checkbox" id="cambios" value="novedad"> <img src="img/greenbox.gif"> Trabajo
                                            </label>
                                            <label class="checkbox">
                                              <input type="checkbox" id="cambios" value="aviso"> <img src="img/greenbox.gif"> Terminado
                                            </label>
                                            <label class="checkbox">
                                              <input type="checkbox" id="cambios" value="aviso-impresion"> <img src="img/greenbox.gif"> Publicado
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <article class="col-xs-12 col-sm-8 col-md-10">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Lista</th>
                                    <th>Dept.</th>
                                    <th>Núm.</th>
                                    <th>Est.</th>
                                    <th>C.C.</th>
                                    <th>F. Inicio</th>
                                    <th>F. Fin</th>
                                    <th>F. Mod</th>
                                    <th>Destino</th>
                                    <th>I</th>
                                    <th>M</th>
                                    <th>B</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Renueva cocina y baño</td>
                                    <td>0047 - Varios</td>
                                    <td>347</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a> <a href="#"><i class="icon icon-print"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" alt=""></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Renueva cocina y baño</td>
                                    <td>0047 - Varios</td>
                                    <td>347</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a> <a href="#"><i class="icon icon-print"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" alt=""></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Renueva cocina y baño</td>
                                    <td>0047 - Varios</td>
                                    <td>347</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a> <a href="#"><i class="icon icon-print"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" alt=""></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Día de la Madre 2015</td>
                                    <td>Varios</td>
                                    <td>22</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" width="200" height="299"></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Renueva cocina y baño</td>
                                    <td>0047 - Varios</td>
                                    <td>347</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a> <a href="#"><i class="icon icon-print"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" alt=""></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Renueva cocina y baño</td>
                                    <td>0047 - Varios</td>
                                    <td>347</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a> <a href="#"><i class="icon icon-print"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" alt=""></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Día de la Madre 2015</td>
                                    <td>Varios</td>
                                    <td>22</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" width="200" height="299"></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Día de la Madre 2015</td>
                                    <td>Varios</td>
                                    <td>22</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" width="200" height="299"></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <th>
                                      <label class="radio">
                                        <input type="radio" name="option" id="option" value="option">
                                        <span></span>
                                      </label>
                                    </th>
                                    <td>Día de la Madre 2015</td>
                                    <td>Varios</td>
                                    <td>22</td>
                                    <td><img src="img/greenbox.gif"></td>
                                    <td><a href="#"><i class="icon icon-plus"></i></a></td>
                                    <td>30/04/2016</td>
                                    <td>31/05/2016</td>
                                    <td>02/06/2016</td>
                                    <td>General</td>
                                    <td><img src="img/es_flag.png" width="200" height="299"></td>
                                    <td><a href="#"><i class="icon icon-pencil"></i></a></td>
                                    <td><a href="#"><i class="icon icon-trash-o"></i></a></td>
                                </tr>
                            </tbody>
                        </table>

                          <button type="button" class="btn btn-default">Traducir</button>
                          <button type="button" class="btn btn-default">Crear Lista</button>
                          <button type="button" class="btn btn-default">Duplicar Lista</button>
                          <button type="button" class="btn btn-default">Asignar Plantillas</button>
                          <button type="button" class="btn btn-default pull-right">Publicar/Despublicar</button>
                    </article>
                </div>
            </div>
        </section>
        <?php include("footer.php"); ?>
    </div>
</body>
