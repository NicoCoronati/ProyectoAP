
package com.portfolioAP.Corosoft.Service;

import com.portfolioAP.Corosoft.Entity.Certificacion;
import com.portfolioAP.Corosoft.Interface.ICertificacionService;
import com.portfolioAP.Corosoft.Repository.ICertificacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpCertificacionService implements ICertificacionService{

    @Autowired ICertificacionRepository icertificacionRepository;
    
    @Override
    public List<Certificacion> getCertificacion() {
         List<Certificacion> listaCertificaciones = icertificacionRepository.findAll();
         return listaCertificaciones;
    }

    @Override
    public void saveCertificacion(Certificacion certificacion) {
        icertificacionRepository.save(certificacion);
    }

    @Override
    public void deleteCertificacion(Long id) {
        icertificacionRepository.deleteById(id);
    }

    @Override
    public Certificacion findCertificacion(Long id) {
        Certificacion certificacion = icertificacionRepository.findById(id).orElse(null);
        return certificacion;
                
    }
    
}
