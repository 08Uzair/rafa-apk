// /app/ServicesScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const ServicesScreen = ({ navigation }: any) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Services Screen</Text>
        <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
);

export default ServicesScreen;
