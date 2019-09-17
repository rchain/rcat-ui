import React, {Component} from 'react'

class MediaRow extends Component {
    render() {
        const img = this.props.img;
        // const imgSrc = process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH + img;
        //imgTab = <img className="w-160" src={img.src} alt="album_img"/>

        let imgTab = <div className="w-160 bg-light-yellow"/>
        let imgSrc;
        const loadImage = (img) =>{
            return new Promise((resolve, reject)=> {
                resolve(imgSrc = process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH + img);
                reject(error => {console.log(error)})
            })};

        loadImage(img);
        imgTab = <img className="w-160" src={imgSrc} />
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
