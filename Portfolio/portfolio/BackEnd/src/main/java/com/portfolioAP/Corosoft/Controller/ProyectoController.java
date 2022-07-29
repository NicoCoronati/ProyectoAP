
package com.portfolioAP.Corosoft.Controller;

import com.portfolioAP.Corosoft.Entity.Proyecto;
import com.portfolioAP.Corosoft.Interface.IProyectoService;
import java.util.List;
import java.util.Set;
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
public class ProyectoController {
    @Autowired 
    private IProyectoService IproyectoService;
    
    @GetMapping("/proyectos/traer")
    public List<Proyecto> getProyecto(){
        return IproyectoService.getProyecto();
    }
    
    @PostMapping("/proyectos/crear")
    public String createProyecto(@RequestBody Proyecto proyecto){
        IproyectoService.saveProyecto(proyecto);
        return "El proyecto se creo con éxito";
    }
    
    @DeleteMapping("/proyectos/borrar/{id}")
    public String deleteProyecto(@PathVariable Long id){
        IproyectoService.deleteProyecto(id);
        return "El proyecto fue eliminada";
    }
    
    @PutMapping("/proyectos/editar/{id}")
    public Proyecto editProyecto(@PathVariable Long id,
                                @RequestParam("nombre") String nuevoNombre,
                                @RequestParam("fecha") String nuevaFecha,
                                @RequestParam("parrafo") String nuevoParrafo,
                                @RequestParam("url") String nuevoURL,
                                @RequestParam("url_foto") String nuevoURLFoto ) {
        Proyecto proyecto = IproyectoService.findProyecto(id);
        
        proyecto.setNombre(nuevoNombre);
        proyecto.setFecha(nuevaFecha);
        proyecto.setParrafo(nuevoParrafo);
        proyecto.setUrl(nuevoURL);
        proyecto.setUrl_foto(nuevoURLFoto);
        
        IproyectoService.saveProyecto(proyecto);
        return proyecto;
    }
    
    @GetMapping("/proyectos/traer/perfil/{id}")
    public Proyecto findProyecto(@PathVariable Long id){
        return IproyectoService.findProyecto(id);
    }
    
}
