
package com.portfolioAP.Corosoft.Controller;

import com.portfolioAP.Corosoft.Entity.Habilidad;
import com.portfolioAP.Corosoft.Interface.IHabilidadService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class HabilidadController {
    @Autowired 
    private IHabilidadService IhabilidadService;
    
    
    @GetMapping("/habilidades/traer")
    public List<Habilidad> getHabilidad(){
        return IhabilidadService.getHabilidad();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/habilidades/crear")
    public String createHabilidad(@RequestBody Habilidad habilidad){
        IhabilidadService.saveHabilidad(habilidad);
        return "La habilidad se creo con éxito";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/habilidades/borrar/{id}")
    public String deleteHabilidad(@PathVariable Long id){
        IhabilidadService.deleteHabilidad(id);
        return "La habilidad fue eliminada";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/habilidades/editar/{id}")
    public Habilidad editHabilidad(@PathVariable Long id,
                                @RequestParam("nombre") String nuevoNombre,
                                @RequestParam("porcentaje") int nuevoPorcentaje) {
        Habilidad habilidad = IhabilidadService.findHabilidad(id);
        
        habilidad.setNombre(nuevoNombre);
        habilidad.setPorcentaje(nuevoPorcentaje);
        
        IhabilidadService.saveHabilidad(habilidad);
        return habilidad;
    }
    
    @GetMapping("/habilidades/traer/perfil/{id}")
    public Habilidad findHabilidad(@PathVariable Long id){
        return IhabilidadService.findHabilidad(id);
    }
    
}
