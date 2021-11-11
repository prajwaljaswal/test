import React from 'react'

function Details() {
    return (
        <div className = "container-fluid">
            <div className="row">
                <div className = "col">
                <b>Hide Details</b>
                </div>

            </div>
           <div className = "row pt-2">
               <div className = "col-1">
                   <b>APY</b>

               </div>
              
               <div className = "offset-10 col-1 pk">
                  <b>9.0%</b>
               </div>
               </div> 

               <div className = "row pt-2">
               <div className = "col d-flex justify-content-start">
               <ul class="list-group">
  <li>Calculated based upon current rates</li>
 
 
</ul>


                 
               </div>
               </div> 
        </div>
    )
}

export default Details
