import { FlatList } from "react-native";
import { DATA } from "../../utils/data";
import { CardProduct } from "../CardProduct";
import { styles } from "./styles";
const style = styles()

export function ListProduct({ horizontalOrVertical }) {
    const renderItem = ({ item }) => <CardProduct data={item} favorites={horizontalOrVertical === 'favorites' ? true : false}/>;
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
    } else if(horizontalOrVertical == "vertical"){

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
    }else {
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