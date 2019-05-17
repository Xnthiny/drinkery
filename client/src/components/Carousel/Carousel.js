import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import img1 from '../../images/bg2.jpg'
import img2 from '../../images/bg3.jpg'
import img3 from '../../images/bg4.jpg'


export default class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>"Reality is an illusion</h3>
                        <p>that occurs due to lack of alcohol." <br /><strong> ~ Anonymous</strong></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>"To some it's a six-pack. </h3>
                        <p>To me it's a Support Group." <br /><strong> ~ Leo Durocher</strong></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>"Work is the curse </h3>
                        <p>
                            of the drinking classes." <br /> <strong> ~ Oscar Wilde</strong>
            </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}


