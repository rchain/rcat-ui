import React, { Component } from 'react';
import './../../styles/custom/notification.scss';

class NotificationSpan extends Component{
    render(){
        return(
            <div>
                {this.props.notification ?
                    <span className='notificationSpan'>
								<a>A new {this.props.mark} has been sent</a>
							</span> : <></>}
            </div>
        )
    }
}
export default NotificationSpan;