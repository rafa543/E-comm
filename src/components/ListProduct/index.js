import { FlatList, View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { DATA } from "../../utils/data";
import { CardProduct } from "../CardProduct";
const style = styles()

export function ListProduct({ horizontalOrVertical }) {
    const renderItem = ({ item }) => <CardProduct data={item} />;
    const horizontal = horizontalOrVertical === 'horizontal'
    
    if (horizontal) {
        return (
            <FlatList 
                data={DATA.reverse()} 
                style={style.container} 
                showsHorizontalScrollIndicator={false} 
                horizontal renderItem={renderItem} 
                keyExtractor={item => item.id} />
        )
    } else {

        return (
            <FlatList
                data={DATA.reverse()}
                style={[style.container, { marginRight: 0, }]}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        )
    }
}