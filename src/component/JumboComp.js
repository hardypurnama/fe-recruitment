import React from "react";

import SearchCard from "./SearchCard";

function JumboComp() {
        return(
            
                <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                  <h1 class="display-5 fw-bold">Inilah LOKER</h1>
                  <p class="col-md-8 fs-4">ada banyak lowongan pekerjaan yang diharapkan</p>
                            <SearchCard />
                </div>
              </div>
                  
        );
    
    
   
}

export default JumboComp;