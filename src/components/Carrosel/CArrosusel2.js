import { useNavigation } from '@react-navigation/core'
import { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './style'
import { DATA } from "../../utils/data";

const style = styles()
const { width } = Dimensions.get('window')

const OnBoardingItem = ({ item }) => {
    const data = DATA[0]
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Produto", { data })}>
            <Image source={{ uri: item.name }} style={{ width, height: 238 }} />
        </TouchableOpacity>
    )
}

export function Carosel( produto ) {
    const [activeIndex, setActiveIndex] = useState(0)
    console.log("////////////")    
    // console.log(produto.produto.imagens.length)
    
    if(produto.produto.imagens == undefined){
        
        return(
            <Text>Erro</Text>
        )

    }else {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={produto.produto.imagens}
                    style={{ maxHeight: width }}
                    pagingEnabled
                    horizontal
                    onMomentumScrollEnd={(event) => {
                        const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)
                        if (slide != activeIndex) {
                            setActiveIndex(slide)
                        }
                    }}
                    scrollEventThrottle={0}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => String(item?.id)}
                    renderItem={({ item }) => <OnBoardingItem item={item} />}
                />
                {
                    produto.produto.imagens.length > 1 ?
                        <View style={style.dotsContainer}>
                            {
                                produto.produto.imagens.map((_, i) => (
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

    // produto.produto.imagens.map((i) => console.log(i))
    // console.log(produto.produto.imagens.length)


    
}