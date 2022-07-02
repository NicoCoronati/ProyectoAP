
package com.portfolioAP.Corosoft.Service;

import com.portfolioAP.Corosoft.Entity.Educacion;
import com.portfolioAP.Corosoft.Interface.IEducacionService;
import com.portfolioAP.Corosoft.Repository.IEducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpEducacionService implements IEducacionService{

    @Autowired IEducacionRepository ieducacionRepository;
    
    @Override
    public List<Educacion> getEducacion() {
         List<Educacion> listaEducaciones = ieducacionRepository.findAll();
         return listaEducaciones;
    }

    @Override
    public void saveEducacion(Educacion educacion) {
        ieducacionRepository.save(educacion);
    }

    @Override
    public void deleteEducacion(Long id) {
        ieducacionRepository.deleteById(id);
    }

    @Override
    public Educacion findEducacion(Long id) {
        Educacion educacion = ieducacionRepository.findById(id).orElse(null);
        return educacion;
                
    }
    
}
