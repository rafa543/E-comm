import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from '../../utils/carrosel.js'

const CarouselCards = ({imagem}) => {
  const isCarousel = React.useRef(null)
  console.log(imagem)
  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={imagem}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  )
}


export default CarouselCards