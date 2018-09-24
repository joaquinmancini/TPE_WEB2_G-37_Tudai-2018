<?php
                            $pelicula = getPeliculas();
                            
                            echo ‘<table>’;
                            
                                foreach($peliculas as $pelicula): 
                                   if(es_mamifero($pelicula)) {
                             ?>
                                 <tr>
                                   <td> <?=$pelicula['nombre']?></td>
                                   <td> <?=$pelicula['director']?></td>
                                   <td> <?=$pelicula['rate']?></td>
                                   <td> <?=$pelicula['horarios']?></td>

                            </tr>
<?php }
 endforeach; 
echo ‘</table>’;
 ?>    