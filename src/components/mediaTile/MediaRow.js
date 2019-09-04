import React, {Component} from 'react';

class MediaRow extends Component {
    render() {
        const img = this.props.img;
        const imgSrc = process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH + img;
        const imgPlaceholder = <div className="w-160 bg-light-yellow"/>;
        let imgTab = <img className="w-160" src={imgSrc} alt="album_img"/>;

        if (process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH === undefined) {
            console.log('ERROR FROM MediaRow.js => REACT_APP_GOOGLE_CLOUD_IMAGE_PATH is undefined.');
            imgTab = imgPlaceholder
        }
        else {
            if ( process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH.length === 0) {
                console.log('ERROR FROM MediaRow.js => REACT_APP_GOOGLE_CLOUD_IMAGE_PATH is empty');
                imgTab = imgPlaceholder
            }
        }
        if (img == null ) {
            console.log('ERROR FROM MediaRow.js => this.props.img is missing');
            imgTab = imgPlaceholder
        }

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
