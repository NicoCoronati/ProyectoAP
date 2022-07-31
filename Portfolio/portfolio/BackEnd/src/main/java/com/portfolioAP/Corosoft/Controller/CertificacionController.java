
package com.portfolioAP.Corosoft.Controller;

import com.portfolioAP.Corosoft.Entity.Certificacion;
import com.portfolioAP.Corosoft.Interface.ICertificacionService;
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
@CrossOrigin(origins = "http://localhost:4200")
public class CertificacionController {
    @Autowired 
    private ICertificacionService IcertificacionService;
    
    @GetMapping("/certificaciones/traer")
    public List<Certificacion> getCertificacion(){
        return IcertificacionService.getCertificacion();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/certificaciones/crear")
    public String createCertificacion(@RequestBody Certificacion certificacion){
        IcertificacionService.saveCertificacion(certificacion);
        return "La certificación se creo con éxito";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/certificaciones/borrar/{id}")
    public String deleteCertificacion(@PathVariable Long id){
        IcertificacionService.deleteCertificacion(id);
        return "La certificación fue eliminada";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/certificaciones/editar/{id}")
    public Certificacion editCertificacion(@PathVariable Long id,
                                @RequestParam("nombre") String nuevoNombre,
                                @RequestParam("nombre_academia") String nuevoNombreAcad) {
        Certificacion certificacion = IcertificacionService.findCertificacion(id);
        
        certificacion.setNombre(nuevoNombre);
        certificacion.setNombre_academia(nuevoNombreAcad);
        
        IcertificacionService.saveCertificacion(certificacion);
        return certificacion;
    }
    
    @GetMapping("/certificaciones/traer/perfil/{id}")
    public Certificacion findCertificacion(@PathVariable Long id){
        return IcertificacionService.findCertificacion(id);
    }
    
}
