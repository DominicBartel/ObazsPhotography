
import React from 'react';
import Gallery from "react-photo-gallery";
import { withRouter } from 'react-router-dom';

const BasicRows = () => <Gallery photos={[
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 4,
        height: 3
    }
]} />;


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
    var API = 'http://localhost:3001/imgData/' + smallRoute
    var route = 'http://localhost:3001/images/' + smallRoute

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
