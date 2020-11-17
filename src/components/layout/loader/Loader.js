import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Loader = () => {
    return (
        <div className="text-center loader">
        <h1>
          <FontAwesomeIcon icon={faSpinner} spin />
        <br />
       
        </h1>
        <h4><small>Loading...</small></h4>
      </div>
    )
}

 