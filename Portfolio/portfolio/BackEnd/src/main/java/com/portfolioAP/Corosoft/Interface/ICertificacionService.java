
package com.portfolioAP.Corosoft.Interface;

import com.portfolioAP.Corosoft.Entity.Certificacion;
import java.util.List;


public interface ICertificacionService {
    //Traer Certificacion
    public List<Certificacion> getCertificacion();
    
    //Guardar objeto Certificacion
    public void saveCertificacion(Certificacion certificacion);
    
    //Borrar objeto Certificacion por id
    public void deleteCertificacion(Long id);
    
    //Buscar Certificacion por id
    public Certificacion findCertificacion(Long id);
}
