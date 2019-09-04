import React, {Component} from 'react';

class MediaRow extends Component {
    render() {
        const img = this.props.img;
        const imgSrc = 'https://storage.cloud.google.com/r_song/' + img;
        const imgPlaceholder = <div className="w-160 bg-light-yellow"/>;
        const imgTab = img == null ? imgPlaceholder : <img className="w-160" src={imgSrc} alt="album_img"/>
        return (
            <div className="w-100 h4 white bg-black mb2 flex">
                {imgTab}
                <div className="pa3">
                    <span className="f3 dib pb2">{this.props.name}</span><br/>
                    <span className="yellow f5 dib pt1">{this.props.status}</span>
                </div>
            </div>
        );
    }
}

export default MediaRow;
