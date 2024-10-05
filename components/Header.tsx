import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation }: any) => (
    <View style={styles.headerContainer}>
        {/* Left menu icon */}
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconContainer}>
            <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>

        {/* App Title (optional) */}
        <Text style={styles.title}>App Title</Text>

        {/* Right user profile icon */}
        <TouchableOpacity onPress={() => console.log('Profile Pressed')} style={styles.profileIconContainer}>
            <Ionicons name="person-circle-outline" size={24} color="black" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    iconContainer: {
        paddingLeft: 10,
    },
    profileIconContainer: {
        paddingRight: 10,
    },
    title: {
        fontSize: 18,
        marginLeft: 10, // Adjust this to align title as you prefer
    },
});

export default Header;
