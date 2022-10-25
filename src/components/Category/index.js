import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

import { categories } from "../../utils/categories"

export function Category() {
    const style = styles()


    return (
        <View>
            <View style={style.containerText}>
                <Text style={style.textCategory}>Category</Text>
               <TouchableOpacity><Text style={style.textCategoryMais}>More Category</Text></TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                style={style.container}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manShirt.png')} />
                    </View>
                    <Text style={style.text}>Man Shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/dress.png')} />
                    </View>
                    <Text style={style.text}>Dress</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manBag.png')} />
                    </View>
                    <Text style={style.text}>Man Work</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/womanBag.png')} />
                    </View>
                    <Text style={style.text}>Woman Bag</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manShoes.png')} />
                    </View>
                    <Text style={style.text}>Man Shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/womanShoes.png')} />
                    </View>
                    <Text style={style.text}>High Heels</Text>
                </TouchableOpacity>



            </ScrollView>
        </View>
    )
}