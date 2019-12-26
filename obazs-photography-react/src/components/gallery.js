
import React from 'react';
import Gallery from "react-photo-gallery";
import { withRouter } from 'react-router-dom';



class PhotoWall extends React.Component {

    constructor(props) {
        super(props);
        // this.determinePhotos = this.determinePhotos.bind(this);

        this.state = {
            imgFiles: [],
            // imgComponent: <Gallery/>,
            imgUrl: ""
        }
        
    }

    
    componentWillMount(){
        this.determinePhotos()
    }
    determinePhotos() {

        // this.state.imgComponent = photo;
        var routeLocation = this.props.location.pathname;
        var smallRoute = routeLocation.replace('/portfolio/', "")
        var API = '/imgData/' + smallRoute
        var route = '/images/' + smallRoute

        // var API = 'http://localhost:3000/imgData/' + smallRoute
        // var route = 'http://localhost:3000/images/' + smallRoute

        
        
        const request = async () => {
            const response = await fetch(API)
            const json = await response.json();

            // console.log(json)
            var imgs = [];
            for (var i = 0; i < json.length; i++) {

                
                imgs.push(
                    {
                        src: route + "/" + json[i].fileName,
                        width: json[i].fileX,
                        height: json[i].fileY
                    }
                );
            }


           
           
            this.setState({
                imgFiles: imgs
            })
        };
        request()
    }


    render() {

        
        console.log(this.state.imgFiles)
            
        return (

            <div className="photoWall" >
                {/* <PhotoGallery /> */}
                <Gallery photos={this.state.imgFiles} />
                {/* {this.imgComponent} */}
            </div>
        );
    }

}
export default withRouter(PhotoWall)

