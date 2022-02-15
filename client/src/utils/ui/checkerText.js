import React from 'react';

export const CheckerText = ( { mark } ) => {
    return mark === true ? <span className='green-text'>Change</span> : <span className='light-blue-text'>Read only</span>
}