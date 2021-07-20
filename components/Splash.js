import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

const Splash = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <Image
                source={{
                    uri: 'https://live.staticflickr.com/1920/29913654857_f130040b7a_b.jpg',
                }}
                style={{
                    width: 400, height: 600
                }}
            />
            <Button
                title="Go to Main"
                onPress={() =>
                    navigation.navigate('Main')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});


export default Splash