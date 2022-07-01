
package com.portfolioAP.Corosoft.Interface;

import com.portfolioAP.Corosoft.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer persona
    public List<Persona> getPersona();
    
    //Guardar objeto persona
    public void savePersona(Persona persona);
    
    //Borrar objeto persona por id
    public void deletePersona(Long id);
    
    //Buscar persona por id
    public Persona findPersona(Long id);
}
