
package com.portfolioAP.Corosoft.Controller;

import com.portfolioAP.Corosoft.Entity.Educacion;
import com.portfolioAP.Corosoft.Interface.IEducacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin(origins = "http://localhost:4200")
public class EducacionController {
    @Autowired 
    private IEducacionService ieducacionService;
    
    @GetMapping("/educaciones/traer")
    public List<Educacion> getEducacion(){
        return ieducacionService.getEducacion();
    }
    
    @PostMapping("/educaciones/crear")
    public String createEducacion(@RequestBody Educacion educacion){
        ieducacionService.saveEducacion(educacion);
        return "La educación se creo con éxito";
    }
    
    @DeleteMapping("/educaciones/borrar/{id}")
    public String deleteEducacion(@PathVariable Long id){
        ieducacionService.deleteEducacion(id);
        return "La educación fue eliminada";
    }
    
    @PutMapping("/educaciones/editar/{id}")
    public Educacion editEducacion(@PathVariable Long id,
                                @RequestParam("nombre_escuela") String nuevoNombre,
                                @RequestParam("url_foto") String nuevaUrlFoto) {
        Educacion educacion = ieducacionService.findEducacion(id);
        
        educacion.setNombre_escuela(nuevoNombre);
        educacion.setUrl_foto(nuevaUrlFoto);
        
        ieducacionService.saveEducacion(educacion);
        return educacion;
    }
    
    @GetMapping("/educaciones/traer/perfil/{id}")
    public Educacion findEducacion(@PathVariable Long id){
        return ieducacionService.findEducacion(id);
    }
    
}
