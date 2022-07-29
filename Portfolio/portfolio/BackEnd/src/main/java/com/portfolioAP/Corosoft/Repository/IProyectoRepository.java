
package com.portfolioAP.Corosoft.Repository;

import com.portfolioAP.Corosoft.Entity.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProyectoRepository extends JpaRepository<Proyecto,Long>{
    
}
