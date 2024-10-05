import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }: any) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About Screen</Text>
        <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
);

export default AboutScreen;
