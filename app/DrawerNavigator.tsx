// /app/DrawerNavigator.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // For icons
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ServicesScreen from './ServicesScreen';
import ProfileScreen from './ProfileScreen';
import Task from './Task';
import Team from './Team';
import TeamAgain from './TeamAgain';
import Projects from './Projects';
import Client from './Client';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }: any) {
    const [selectedItem, setSelectedItem] = useState('Profile Screen');

    const drawerItems = [
        { name: 'Profile Screen', icon: 'person-outline', route: 'Profile' },
        { name: 'My Task', icon: 'checkbox-outline', route: 'Task' },
        { name: 'My Team', icon: 'people-outline', route: 'Team' },
        { name: 'My Clients', icon: 'briefcase-outline', route: 'Client' },
        { name: 'My Projects', icon: 'folder-open-outline', route: 'Projects' },
        { name: 'My Team Again', icon: 'people-outline', route: 'Team Again' },
    ];

    return (
        <View style={styles.drawerContainer}>
            {/* Back Arrow at the top */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.closeDrawer()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            {/* Drawer Items */}
            {drawerItems.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.drawerItem,
                        selectedItem === item.name && styles.selectedItem,
                    ]}
                    onPress={() => {
                        setSelectedItem(item.name);
                        navigation.navigate(item.route); // Navigate using route
                    }}
                >
                    <Ionicons
                        name={item.icon}
                        size={24}
                        color={selectedItem === item.name ? 'black' : 'white'}
                        onError={() => console.error(`Icon not found: ${item.icon}`)} // Error handling
                    />
                    <Text style={[styles.drawerText, selectedItem === item.name && styles.selectedText]}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#000', // Black background color
                    width: 250,
                },
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Services" component={ServicesScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Task" component={Task} />
            <Drawer.Screen name="Team" component={Team} />
            <Drawer.Screen name="Projects" component={Projects} />
            <Drawer.Screen name="Client" component={Client} />
            <Drawer.Screen name="Team Again" component={TeamAgain} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingTop: 40, // To avoid overlap with the status bar
        backgroundColor: '#000', // Black background
        paddingHorizontal: 10,
    },
    backButton: {
        marginLeft: 10,
        marginBottom: 20,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3E3E3E', // Grey background for unselected items
        padding: 15,
        borderRadius: 10, // Rounded corners
        marginBottom: 15,
    },
    selectedItem: {
        backgroundColor: '#FFF', // White background for the selected item
    },
    drawerText: {
        color: '#FFF', // White text color for unselected
        fontSize: 16,
        marginLeft: 15,
    },
    selectedText: {
        color: '#000', // Black text color for selected item
    },
});

export default DrawerNavigator;
