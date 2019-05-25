import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import img1 from '../../images/c2.png'
import img2 from '../../images/c1.png'
import img3 from '../../images/c3.png'


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
                        <h1>"Reality is an illusion</h1>
                        <h3>that occurs due to lack of alcohol." <br /><strong> ~ Anonymous</strong></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption >
                        <h1>"To some it's a six-pack. </h1>
                        <h3>To me it's a Support Group." <br /><strong> ~ Leo Durocher</strong></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>"Work is the curse </h1>
                        <h3>
                            of the drinking classes." <br /> <strong> ~ Oscar Wilde</strong>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}


