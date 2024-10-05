import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }: any) => (
    <>
        <ImageBackground
            source={require('../assets/images/Group.png')} // Ensure the path is correct
            style={styles.background} // Add this style for full coverage
            resizeMode="cover" // Adjusts how the image is displayed
        >
        </ImageBackground>
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardText}>Home</Text>
            </View>
        </View>
    </>
);

const styles = StyleSheet.create({
    background: {
        position: "relative",
        flex: 1, // Ensure the image covers the entire background
        width: 400
    },
    container: {
        position: "relative",
        bottom: 200,
        width: "auto",
        height: "auto",
        display: "flex",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // Ensure the container is transparent
    },
    card: {
        width: 300,
        height: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default HomeScreen;
