import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

const Splash = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
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