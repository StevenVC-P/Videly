import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'

class Like extends Component {
    render(){ 
        let classes = {}
        if (!this.props.liked) classes = faHeartRegular
        else classes = faHeartSolid
        return(
            <FontAwesomeIcon 
                onClick={this.props.onClick} 
                style={{cursor: 'pointer'}} 
                icon={classes}
            />
        )
    }

}
 
export default Like;