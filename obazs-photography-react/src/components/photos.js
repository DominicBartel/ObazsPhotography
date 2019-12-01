
import React from 'react';
import Gallery from "react-photo-gallery";
import { withRouter } from 'react-router-dom';


class PhotoWall extends React.Component {

    render() {

        var path = this.props.location.pathname;

        const PhotoGallery = (
            function () {
                return determinePhotos(path)
            });
        return (

            <div className="photoWall" >
                <PhotoGallery />

            </div>
        );
    }

}
export default withRouter(PhotoWall)

function determinePhotos(routeLocation) {

    var smallRoute = routeLocation.replace('/portfolio/', "")
    var API = '/imgData/' + smallRoute
    var route = '/images/' + smallRoute

    var gatheredPhotos = [];

    const request = async () => {
        const response = await fetch(API)
        const json = await response.json();

        console.log(json)

        for (var i = 0; i < json.length; i++) {
            gatheredPhotos.push(
                {
                    src: route + "/" + json[i],
                    width: 1,
                    height: 1
                }
            );
        }


    };
    request()


    var photo = <Gallery photos={gatheredPhotos} />;
    return photo;
    // return Promise.all(getImages);

}
