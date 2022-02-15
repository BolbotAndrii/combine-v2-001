import React from "react";

export const CheckerIcon = ( { mark } ) => {
   return  mark === true
       ? <i className='material-icons green-text'>check</i>
       : <i className='material-icons red-text'>close</i>
}
