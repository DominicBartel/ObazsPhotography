
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

        this.routeLocation = this.props.location.pathname;
        // console.log(this.props.location.pathname)
        const PhotoGallery = determinePhotos;
        return (

            <div className="photoWall" >
                <PhotoGallery />
                
            </div>
        );
    }

}
export default withRouter(PhotoWall)

function determinePhotos(routeLocation) {
    var photoGallery = <Gallery photos={[
        {
            src: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/70698611_2318907091539182_7184607153716461568_o.jpg?_nc_cat=104&_nc_ohc=Zy_RsY95tVUAQn25McWQzXGpixQOVytSkYKDBH5NLvr4J2Rnln5PIv_hA&_nc_ht=scontent-sea1-1.xx&oh=8b82938fce244bbfd0d35d24f8349506&oe=5E885159",
            width: 1821,
            height: 1216
        }, {
            src: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/69842881_2318907284872496_4594719265520615424_o.jpg?_nc_cat=102&_nc_ohc=aDqsWfBqHM0AQkOy22Ho1cr4pFWHM0zxugLUMvojnqbITuxGhzfMUfCoQ&_nc_ht=scontent-sea1-1.xx&oh=ed14c98283039cdae329af6ed0a9d254&oe=5E7FCB20",
            width: 2048,
            height: 1367
        }
    ]} />;
    return photoGallery;
}