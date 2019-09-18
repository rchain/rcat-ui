import React, {Component} from 'react'

class MediaRow extends Component {
    render() {
        // const img = this.props.img;
        // // const imgSrc = process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH + img;
        // //imgTab = <img className="w-160" src={img.src} alt="album_img"/>
         let imgTab =  <div className="w-160 bg-light-yellow"/>;
        // let imgSrc = process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH + img;

        let imgSrc = this.imagePath + this.img;
        // let imgSrc;
        // const loadImage = (img) => {
        //     return new Promise((resolve, reject) => {
        //             resolve(
        //                 imgSrc = process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH + img,
        //                 imgTab = <img className="w-160" src={imgSrc} alt="album_img"/>,
        //                 console.log(imgSrc)
        //             );
        //         reject(
        //             error => console.log('reject error',error)
        //         )
        //     }).then().catch(error => console.log('catch error',error))
        // };
        //
        // loadImage(img);

        function loadImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.addEventListener("load", e => resolve(img));
                img.addEventListener("error", new Error("MediaRow => Error with img"));
                img.src = src;
            })
        };

        loadImage(imgSrc)
            .then(img => imgTab = <img className="w-160" src={img.src} alt="album_img"/>)
            .catch(error => console.log(error));


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
