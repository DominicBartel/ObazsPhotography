import React from 'react';
import { Grid,Row, Col } from 'react-flexbox-grid';
import Image from "react-bootstrap/Image"

// let imgDir = "http://localhost:3000/images/portraits/";
let imgDir = "/images/";

class Home extends React.Component {

    render() {

        // this.routeLocation = this.props.location.pathname;
        // console.log(this.routeLocation)

        return (

            <div className="Home" style={{ padding: 20}}>
                <Grid>
                    <Row>
                        <Col xs>
                        <Image src={imgDir + "/portraits/67067536_2224489264314299_7064022261799321600_o.jpg"} fluid />
                        </Col>
                        <Col xs>
                            <p>With enormous attention to detail, at Obazs we take our time to deliberately capture the most subtle parts of an event. Focusing not just on an individual moment, but meticulously combing the venue to carefully observe and prepare for the most emotional capture possible. From many years of carefully and gradually refining our art, Obazs takes pride in our ability to ensure the most important and intimate details of your event can be captured.</p>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 20}}>
                        <Col xs >
                        <p>Cleveland born and raised, Steve has a deep personal bond with the local area. From his many years of experience he can help you explore the perfect venue for a shoot, or simply show up to one you already love. As a native Clevelander, Steve has developed a work ethic that exemplifies the city's essence. Going above and beyond to ensure that the moments present that are dear to you, can be captured and preserved just as they were experienced.</p>
                        </Col>
                        <Col xs>
                        <Image src={imgDir + "/favorites/67256928_2221557484607477_3846387592912175104_o.jpg"} fluid />
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 20}}>
                        <Col xs>
                        <Image src={imgDir + "/portraits/67274908_2222660787830480_100197687185375232_o.jpg"} fluid />
                        </Col>
                        <Col xs>
                        <p>Sometimes, what makes a photo special isn’t just seeing the beauty unfold, but knowing ahead of time what will be present. Being able to communicate and ensure that the most important moments to you is what our focus is. We take our time to ensure that we’re not just taking the moments at their best, but that they are the moments, people, and locations that you want to remember. Focusing on what brings you the most joy, and making sure to frame it just in the perfect light.</p>
                        </Col>
                    </Row>
                    </Grid>
                
            </div>
        );
    }

}

export default Home;

