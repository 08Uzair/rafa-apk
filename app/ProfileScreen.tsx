import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('Personal');

  const renderPersonalForm = () => (
    <>
      <ImageBackground
        source={require('../assets/images/Group.png')} // Ensure the path is correct
        style={styles.background} // Add this style for full coverage
        resizeMode="cover" // Adjusts how the image is displayed
      >
      </ImageBackground>
      <View>
        <Text style={styles.label}>Name*</Text>
        <TextInput style={styles.input} placeholder="John Doe" />

        <Text style={styles.label}>Date of Birth*</Text>
        <TextInput style={styles.input} placeholder="30 Mar, 2001" />

        <Text style={styles.label}>Phone No*</Text>
        <TextInput style={styles.input} placeholder="+91 1237892132" />

        <Text style={styles.label}>Email-id*</Text>
        <TextInput style={styles.input} placeholder="jc0007@gmail.com" />

        <Text style={styles.label}>Role*</Text>
        <TextInput style={styles.input} placeholder="UI/UX Designer" />

        <Text style={styles.label}>Referred by</Text>
        <TextInput style={styles.input} placeholder="Tester" />
      </View>
    </>
  );

  const renderContactForm = () => (
    <View>
      <Text style={styles.label}>Phone No*</Text>
      <TextInput style={styles.input} placeholder="+91 1223213211" />

      <Text style={styles.label}>Email id*</Text>
      <TextInput style={styles.input} placeholder="jc0007@gmail.com" />

      <Text style={styles.label}>Instagram</Text>
      <TextInput style={styles.input} placeholder="_JD_0007_" />

      <Text style={styles.label}>LinkedIn</Text>
      <TextInput style={styles.input} placeholder="JohnDoe" />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Personal' && styles.activeTab]}
          onPress={() => setActiveTab('Personal')}
        >
          <Text style={[styles.tabText, activeTab === 'Personal' && styles.activeTabText]}>
            Personal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Contact' && styles.activeTab]}
          onPress={() => setActiveTab('Contact')}
        >
          <Text style={[styles.tabText, activeTab === 'Contact' && styles.activeTabText]}>
            Contact
          </Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {activeTab === 'Personal' ? renderPersonalForm() : renderContactForm()}
      </View>

      {/* Save Button */}
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "transparent" }}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "relative",
    flex: 1, // Ensure the image covers the entire background
    width: 400
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: "transparent"
  },
  tab: {
    flex: 1,
    paddingVertical: 20,
    borderRadius: 50,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    marginHorizontal: 12,
    width: 250
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#FFF',
  },
  formContainer: {
    backgroundColor: "transparent",
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 20,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#000',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ProfileScreen;
