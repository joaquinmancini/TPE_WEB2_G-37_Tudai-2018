<?php
                            $cine = getCines();

                            echo ‘<table>’;

                                foreach($cines as $cine):
                                  {
                             ?>
                                 <tr>
                                   <td> <?=$cine['nombre']?></td>
                                   <td> <?=$cine['capacidad']?></td>
                                   <td> <?=$cine['salas']?></td>
                            </tr>
<?php }
 endforeach;
echo ‘</table>’;
 ?>
