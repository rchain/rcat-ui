import React, {Component} from 'react'

class MediaRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgTab: <div className="w-160 bg-light-yellow"/>,
            imagePath: process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH,
            img: this.props.img,
            hello:'dassss'
        };
    }

     loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.addEventListener("load", e => resolve(img));
            img.addEventListener("error", new Error("MediaRow => Error with img"));
            img.src = src;
        })
    };


    componentWillMount() {
        console.log('hello from component')

        let imgSrc = this.imagePath + this.img;

        this.loadImage(imgSrc)
            .then(img => {
                this.setState({
                    imgTag: img,
                    hello: 'hellohellohello'
                })
            })
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="w-100 h4 white bg-black mb2 flex">
                {this.state.imgTab}
                <p>{this.state.hello}</p>
                <div className="pa3">
                    <span className="f3 dib pb2">{this.props.name}</span><br/>
                    <span className="yellow f5 dib pt1">{this.props.status}</span>
                </div>
            </div>
        );
    }
}


export default MediaRow;
