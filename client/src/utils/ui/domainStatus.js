import React from 'react';

export const DomainStatus = ( { mark } ) => {
    return mark === 'active'
        ? <i className="material-icons green-text">check</i>
        : mark === 'pending' ? <i className="material-icons light-blue-text">access_time</i>
            : mark
}
