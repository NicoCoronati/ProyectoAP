
package com.portfolioAP.Corosoft.Controller;

import com.portfolioAP.Corosoft.Entity.Persona;
import com.portfolioAP.Corosoft.Interface.IPersonaService;
import java.util.Date;
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
public class PersonaController {
    @Autowired 
    private IPersonaService ipersonaService;
    
    @GetMapping("/personas/traer")
    public List<Persona> getPersona(){
        return ipersonaService.getPersona();
    }
    
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona persona){
        ipersonaService.savePersona(persona);
        return "La persona se creo con éxito";
    }
    
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        ipersonaService.deletePersona(id);
        return "La persona fue eliminada";
    }
    
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                                @RequestParam("nombre") String nuevoNombre,
                                @RequestParam("apellido") String nuevoApellido,
                                @RequestParam("ocupacion") String nuevaOcupacion,
                                @RequestParam("fecha_nac") String nuevaFechaNac,
                                @RequestParam("correo") String nuevoCorreo,
                                @RequestParam("sobre_mi") String nuevoSobreMi,
                                @RequestParam("url_perfil") String nuevaUrlPerfil,
                                @RequestParam("url_banner") String nuevaUrlBanner,
                                @RequestParam("usuario_email") String nuevoUsuarioEmail,
                                @RequestParam("id_domicilio") int nuevoIdDomicilio) {
        Persona persona = ipersonaService.findPersona(id);
        
        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setOcupacion(nuevaOcupacion);
        persona.setFecha_nac(nuevaFechaNac);
        persona.setCorreo(nuevoCorreo);
        persona.setSobre_mi(nuevoSobreMi);
        persona.setUrl_perfil(nuevaUrlPerfil);
        persona.setUrl_banner(nuevaUrlBanner);
        persona.setUsuario_email(nuevoUsuarioEmail);
        persona.setId_domicilio(nuevoIdDomicilio);
        
        
        ipersonaService.savePersona(persona);
        return persona;
    }
    
    @GetMapping("/personas/traer/perfil/{id}")
    public Persona findPersona(@PathVariable Long id){
        return ipersonaService.findPersona(id);
    }
    
}
