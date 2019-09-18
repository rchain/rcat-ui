import React, {Component} from 'react'

class MediaRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgTab: <div className="w-160 bg-light-yellow"/>,
        };
    }


    componentDidMount() {
        let imgSrc = process.env.REACT_APP_GOOGLE_CLOUD_IMAGE_PATH + this.props.img;
        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.addEventListener("load", e => resolve(img));
                img.addEventListener('error', () => {
                    reject(new Error(`Failed to load image`));
                });
                img.src = src;
            })
        };
        loadImage(imgSrc).then(img => {
            let imageSrc = <img className="w-160" src={img.src}/>
            this.setState({
                imgTab: imageSrc,
            })
        }).catch(error => console.error(error));
    }

    render() {
        return (
            <div className="w-100 h4 white bg-black mb2 flex">
                {this.state.imgTab}
                <div className="pa3">
                    <span className="f3 dib pb2">{this.props.name}</span><br/>
                    <span className="yellow f5 dib pt1">{this.props.status}</span>
                </div>
            </div>
        );
    }
}


export default MediaRow;
