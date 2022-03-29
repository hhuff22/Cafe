import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cappuccino from '../img/cappuccino.jpeg';
import pumpkinSoup from '../img/pumpkin-soup.webp';
import shakshuka from '../img/shakshuka.webp';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
      src: cappuccino,
      altText: 'Cappuccino',
      header: 'Cappuccino',
      description: '1/3 espresso + 1/3 steamed milk + 1/3 foam',
    },
    {
      src: pumpkinSoup,
      altText: 'Pumpkin Soup',
      header: 'Pumpkin Soup',
      description: 'Creamy pumpkin soup, topped with roasted pumpkin seeds.'
    },
    {
      src: shakshuka,
      altText: 'Shakshuka',
      header: 'Shakshuka',
      description: 'Simmering tomatoes, onions, garlic, spices and gently poached eggs.'
    }
];


class CarouselComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }

    onExiting() {
      this.animating = true;
    }

    onExited() {
      this.animating = false;
    }

    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }

    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }

    render() {
      const { activeIndex } = this.state;

      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} className="d-block carouselItem" />
            <CarouselCaption captionText={item.description} captionHeader={item.header} />
          </CarouselItem>
        );
      });

      return (
        <div id="menuCarousel">
            <Link to='/menu.html' className="nav-link">
                <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                interval='3000'
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </Link>
        </div>
      );
    }
}


export default CarouselComponent;