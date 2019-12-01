import React from 'react';
import { Grid,Row, Col } from 'react-flexbox-grid';
import Image from "react-bootstrap/Image"

let imgDir = "/images/portraits/";

class Home extends React.Component {

    render() {

        // this.routeLocation = this.props.location.pathname;
        // console.log(this.routeLocation)

        return (

            <div className="Home" style={{ padding: 20}}>
                <Grid>
                    <Row>
                        <Col xs style={{ border: "1px solid teal" }}>
                        <Image src={imgDir + "67067536_2224489264314299_7064022261799321600_o.jpg"} fluid />
                        </Col>
                        <Col xs style={{ border: "1px solid palevioletred" }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 20}}>
                        <Col xs style={{ border: "1px solid teal" }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                        <Col xs style={{ border: "1px solid palevioletred" }}>
                        <Image src={imgDir + "67067536_2224489264314299_7064022261799321600_o.jpg"} fluid />
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 20}}>
                        <Col xs style={{ border: "1px solid teal" }}>
                        <Image src={imgDir + "67067536_2224489264314299_7064022261799321600_o.jpg"} fluid />
                        </Col>
                        <Col xs style={{ border: "1px solid palevioletred" }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                    </Row>
                    </Grid>
                
            </div>
        );
    }

}

export default Home;

