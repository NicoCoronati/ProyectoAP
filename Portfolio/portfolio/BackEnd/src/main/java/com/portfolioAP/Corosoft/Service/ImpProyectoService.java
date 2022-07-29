
package com.portfolioAP.Corosoft.Service;

import com.portfolioAP.Corosoft.Entity.Proyecto;
import com.portfolioAP.Corosoft.Interface.IProyectoService;
import com.portfolioAP.Corosoft.Repository.IProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpProyectoService implements IProyectoService{

    @Autowired IProyectoRepository iproyectoRepository;
    
    @Override
    public List<Proyecto> getProyecto() {
         List<Proyecto> listaProyectoes = iproyectoRepository.findAll();
         return listaProyectoes;
    }

    @Override
    public void saveProyecto(Proyecto proyecto) {
        iproyectoRepository.save(proyecto);
    }

    @Override
    public void deleteProyecto(Long id) {
        iproyectoRepository.deleteById(id);
    }

    @Override
    public Proyecto findProyecto(Long id) {
        Proyecto proyecto = iproyectoRepository.findById(id).orElse(null);
        return proyecto;
                
    }
    
}
