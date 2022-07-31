
package com.portfolioAP.Corosoft.Repository;

import com.portfolioAP.Corosoft.Entity.Certificacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICertificacionRepository extends JpaRepository<Certificacion,Long>{
    
}
