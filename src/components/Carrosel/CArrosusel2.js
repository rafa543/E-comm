import { useState } from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, View } from 'react-native'
import { DATA } from '../../utils/data'
import { styles } from './style'
const style = styles()
const { width } = Dimensions.get('window')

const OnBoardingItem = ({ item }) => {
    return (
        // <Image source={{ uri: item.imgUrl }} style={{ width, height: width }} />
        <Image source={{ uri: item.imgUrl }} style={{ width, height: 238 }} />
    )
}

export function Carosel({ produto }) {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={produto}
                style={{ maxHeight: width }}
                pagingEnabled
                horizontal
                onMomentumScrollEnd={(event) => {
                    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)
                    console.log(slide)
                    if(slide != activeIndex){
                        setActiveIndex(slide)
                    }
                }}
                scrollEventThrottle={0}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item?.id)}
                renderItem={({ item }) => <OnBoardingItem item={item} />}
            />
            {
                produto.length > 1 ?
                    <View style={style.dotsContainer}>
                        {
                            produto.map((_, i) => (
                                <View
                                    style={[style.dot,
                                    { backgroundColor: i === activeIndex ? '#40BFFF' : '#EBF0FF' }]} />
                            ))
                        }
                    </View>
                    : null
            }
        </SafeAreaView>
    )
}