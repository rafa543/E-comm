import { useState } from "react";
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from "react-native";
import { DATA } from "../../utils/data";

const { width } = Dimensions.get('window')
const height = width * 0.6

export function CarroselY({ imagens }) {
    const [state, setState] = useState(0)
    // state = {
    //     active: 0
    // }
    
    function change({nativeEvent}) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slide != state){
            setState(slide)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                onScroll={change}
                style={styles.scroll}
                showsHorizontalScrollIndicator={false}
            >
                {
                    imagens.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image.imgUrl }}
                            style={styles.image} />
                    ))
                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    imagens.map((i, k) => (

                        <Text key={k} style={k == state ? styles.pagingActiveText : styles.pagingText}></Text>
                    ))
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width,
        height
    },
    scroll: {
        width,
        height
    },
    image: { width, height, resizeMode: "cover" },
    pagination: {
        flexDirection: 'row', alignSelf: 'center'
    },
    pagingText: { margin: 3, height: 12, width: 12, backgroundColor: '#888', borderRadius: 5 },
    pagingActiveText: { margin: 3, height: 12, width: 12, backgroundColor: '#40BFFF', borderRadius: 5}
})