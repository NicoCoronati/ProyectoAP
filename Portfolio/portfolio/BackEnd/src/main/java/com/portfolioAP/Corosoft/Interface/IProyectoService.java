
package com.portfolioAP.Corosoft.Interface;

import com.portfolioAP.Corosoft.Entity.Proyecto;
import java.util.List;


public interface IProyectoService {
    //Traer Proyecto
    public List<Proyecto> getProyecto();
    
    //Guardar objeto Proyecto
    public void saveProyecto(Proyecto proyecto);
    
    //Borrar objeto Proyecto por id
    public void deleteProyecto(Long id);
    
    //Buscar Proyecto por id
    public Proyecto findProyecto(Long id);
}
