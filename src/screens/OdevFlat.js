import { FlatList, TouchableOpacity,View,Text,StyleSheet, Dimensions } from "react-native"
import { useState } from "react"


const {width,height} = Dimensions.get("screen")
export const OdevFlat = () => {


    const [state,setState] = useState()

    const data=[
        {id:"1", title:"Mercedes"},
        {id:"2", title:"Audi"},
        {id:"3", title:"BMW"},
        {id:"4", title:"Porsche"},
    ]

    const header=()=>{
        return(
            <View>
                <Text>
                    Favorite Cars
                </Text>
            </View>
        )
    }
    const touched =(item) =>{
        setState(item)
    }
    
    const renderItem = ({item}) =>{
        return(

            <TouchableOpacity style={styles.touchable} onPress={()=>touched(item.title)}>
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    
    const footer =() =>{
        return(
            <View style={{alignSelf:"center"}}>

            <Text style={{fontSize:15,fontWeight:"bold",fontStyle:"italic",paddingTop:50}}>Choise: {state}</Text>
            </View>
        )
    }

    return(
        <View style={{justifyContent:"flex-start",flex:1,paddingTop:100}}>
            <View style={{backgroundColor:"lightgrey",borderRadius:10,padding:8,width:"40%",alignItems:"center"}}>
                <Text style={[styles.text,{fontSize:20}]}>Favorite Cars</Text>
            </View>
            <View style={styles.container}>


                <FlatList
                ListHeaderComponent={header}
                ListFooterComponent={footer}
                scrollEnabled={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                ItemSeparatorComponent={<View style={{padding:10}}/>}
                />
                
            </View>
            
            
        </View>
    )

    
}

const styles=StyleSheet.create({
    text:{
        fontSize:30,
        fontStyle:"italic"
    },
    container:{
        
        justifyContent:"space-evenly",
        alignItems:"center",
        paddingRight:20,
        paddingLeft:20,
        paddingTop:40
        
        
    },
    touchable:{
        borderBottomWidth:1,
        width,
        justifyContent:"center",
        
    }
})