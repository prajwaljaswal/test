import React from 'react'
import {Badge} from 'react-bootstrap'
import Toggle from 'react-toggle'
import { useState } from 'react'
import "react-toggle/style.css"
import Details from './Details'
function Dashboard() {
    const [on ,off] = useState(false)
    return (
        <div className = "container">
            <section>
            <div className = "row">
            <div className = "col-2 pt-2">
                 <b style = {{fontSize:"20px"}}>ROI Calculator</b> 
                  </div>
              </div>
              <div className = "row">
                <div className = ' offset-10  col-2 d-flex justify-content-around'>
                    Cake
                <Toggle
              defaultChecked={on}
 
              onChange={()=>off(true)} />

              USD
                </div>
              </div>

            <div className = "row pt-2">
                <div className = "col">
                    <form>
                        <div className = "form-group">
                            <input type = "text" className = "form-control p"  placeholder = "0.000 USD"/>
                        </div>
                    </form>
                    
                </div>

            </div>
            <div className = "row">
              <div className = " col-3 d-flex justify-content-around">
              <Badge className = " pt-2" bg="secondary">$1000</Badge>
              <Badge className= "pt-2" bg="secondary">$100</Badge>
              </div>
              <div className = "col-9  d-flex justify-content-end .text-secondary">
                <p>~ CAKE 0.000</p>
              </div>
            </div>
              
              </section>

              <section>
                <div className = "row">
                    <div className = "col-1 d-flex-justify-content-end pt-2 pl-4">
                     <span className><b>Timeframe</b></span>
                    </div>
                </div>
                <div className = "row">
                  <div className = "col-md-6 d-flex justify-content-around pt-3 ">
                  <Badge className = " pt-2 tk sk" bg="secondary">1 Day</Badge>
              <Badge className= "pt-2 rad sk" bg="secondary">7 Day</Badge>
              <Badge className = " pt-2 rad sk" bg="secondary">30 Day</Badge>
              <Badge className= "pt-2 rad sk" bg="secondary">1 year</Badge>
              <Badge className = " pt-2 rad sk" bg="secondary">5 year</Badge>
              
                  </div>
                </div>

                <div className ="row">
                    <div className = "col-4 pt-2 d-flex justify-content-start">
                   <b>Enable Accelrated APY</b> 
                 </div>
                 <div className = "col-8 d-flex justify-content-end">
                 <Toggle
              defaultChecked={on}
 
              onChange={()=>off(true)} />
                 </div>

                </div>
                <div class = "row ">
                  <div className = "col-3 d-flex justify-content-start pt-2">
                      <p>Select Tier</p>
                      </div>
                </div>

                <div className = "row">
                <div className = "col-md-6 d-flex justify-content-around pt-3 ">
                  <Badge className = " pt-2 tk sk" bg="secondary">Tier 1 </Badge>
              <Badge className= "pt-2 rad sk" bg="secondary">Tier 2 </Badge>
              <Badge className = " pt-2 rad sk"  bg="secondary">Tier 3</Badge>
              <Badge className= "pt-2 rad sk " bg="secondary"> Tier 4</Badge>
              <Badge className = " pt-2 rad sk" bg="secondary">Tier 5</Badge>
              
                  </div>
                </div>
              </section>

              <section>
                  <div className = "row">
                      <div className  = "col d-flex justify-content-end pt-2">
                       <p>ROI at current rates</p>

                      </div>

                  </div>
                  <div className = "row pt-2">
                <div className = "col">
                    <form>
                        <div className = "form-group">
                            <input type = "text" className = "form-control p"  placeholder = "0.000 USD"/>
                        </div>
                    </form>
                    
                </div>

            </div>
            <div className = "row">
            <div className = "col d-flex justify-content-end .text-secondary">
                <p>~ CAKE 0.000 + 0.000000 DON</p>
              </div>
            </div>

              </section>
             
               <Details></Details>

            </div>
        
        
    )
}

export default Dashboard
