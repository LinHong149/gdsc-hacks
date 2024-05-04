import React from 'react'
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

function Page() {
  return (

    
    <div>This will be for the nav bar

      <div>
        {/* <Image>

        </Image> */}

        <div>
          <FontAwesomeIcon
            icon = {faShoppingCart}
            
            style={{color:"red", fontsize:64}}
          />
          
            
           
        </div>
      </div>
    </div>

    
  )
}

export default Page;


