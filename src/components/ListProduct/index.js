import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import api from "../../services/api";
import { DATA } from "../../utils/data";
import { CardProduct } from "../CardProduct";
import { styles } from "./styles";
const style = styles()

export function ListProduct({ horizontalOrVertical }) {
    const [produtos, setProdutos] = useState();
    const renderItem = ({ item }) => <CardProduct data={item} favorites={horizontalOrVertical === 'favorites' ? true : false} />;
    const horizontal = horizontalOrVertical === 'horizontal'

    async function loadProducts() {
        try {
            const response = await api.get('/produtos');
            const list = response.data;
            
            setProdutos(list)

        } catch (err) {
            console.error(err);
        }
    };

    async function loadFavorites() {
        try {
            const response = await api.get('/carrinho');
            const list = response.data;
            
            setProdutos(list)

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if(horizontalOrVertical === "favorites"){
            loadFavorites()
        }else {
            loadProducts()
        }
    }, [])

    if (horizontal) {
        return (
            <FlatList
                data={produtos}
                style={style.container}
                showsHorizontalScrollIndicator={false}
                horizontal renderItem={renderItem}
                keyExtractor={item => item.id} />
        )
    } else if (horizontalOrVertical == "vertical") {

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