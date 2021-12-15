import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'

const Like = props => {
    let classes = {}
    if (!props.liked) classes = faHeartRegular
    else classes = faHeartSolid
    return(
        <FontAwesomeIcon 
            onClick={props.onClick} 
            style={{cursor: 'pointer'}} 
            icon={classes}
        />
    );
};
 
export default Like;