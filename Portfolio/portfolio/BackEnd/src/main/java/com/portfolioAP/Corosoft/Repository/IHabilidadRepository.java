
package com.portfolioAP.Corosoft.Repository;

import com.portfolioAP.Corosoft.Entity.Habilidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHabilidadRepository extends JpaRepository<Habilidad,Long>{
    
}
