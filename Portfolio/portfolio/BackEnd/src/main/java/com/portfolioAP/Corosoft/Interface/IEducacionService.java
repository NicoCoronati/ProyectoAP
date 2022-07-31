
package com.portfolioAP.Corosoft.Interface;

import com.portfolioAP.Corosoft.Entity.Educacion;
import java.util.List;


public interface IEducacionService {
    //Traer educacion
    public List<Educacion> getEducacion();
    
    //Guardar objeto educacion
    public void saveEducacion(Educacion educacion);
    
    //Borrar objeto educacion por id
    public void deleteEducacion(Long id);
    
    //Buscar educacion por id
    public Educacion findEducacion(Long id);
}
