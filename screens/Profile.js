import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Profile({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedProfile = await AsyncStorage.getItem('little-lemon-profile');

        if (savedProfile) {
          const profile = JSON.parse(savedProfile);
          setFirstName(profile.firstName || '');
          setLastName(profile.lastName || '');
          setEmail(profile.email || '');
        }
      } catch (error) {
        Alert.alert('Profile load failed', 'Your saved information could not be loaded.');
      }
    };

    loadProfile();
  }, []);

  const isFormValid =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    EMAIL_REGEX.test(email.trim());

  const handleSave = async () => {
    if (!isFormValid) {
      Alert.alert('Invalid information', 'Please complete all required fields with a valid email address.');
      return;
    }

    const profile = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
    };

    try {
      await AsyncStorage.setItem('little-lemon-profile', JSON.stringify(profile));
      Alert.alert('Success', 'Your profile has been updated.');
    } catch (error) {
      Alert.alert('Save failed', 'Your updates could not be saved.');
    }
  };

  const handleLogout = () => {
    Alert.alert('Log out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log out',
        style: 'destructive',
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('little-lemon-profile');
            await AsyncStorage.setItem('little-lemon-onboarding', 'false');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Onboarding' }],
            });
          } catch (error) {
            Alert.alert('Logout failed', 'Please try again.');
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
        <Text style={styles.title}>My Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            autoCapitalize="words"
            placeholder="Enter first name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            autoCapitalize="words"
            placeholder="Enter last name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="you@example.com"
          />
        </View>

        <Pressable
          style={[styles.saveButton, !isFormValid && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={!isFormValid}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </Pressable>

        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 10,
    backgroundColor: '#F0F4F1',
  },
  backButton: {
    paddingRight: 12,
  },
  backText: {
    color: '#1F4D3E',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#1F4D3E',
    marginRight: 54,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 36,
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#264B43',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6DADD',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111111',
  },
  saveButton: {
    backgroundColor: '#1F4D3E',
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 10,
  },
  saveButtonDisabled: {
    backgroundColor: '#C4D2CD',
  },
  saveButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 17,
  },
  logoutButton: {
    marginTop: 18,
    borderRadius: 12,
    backgroundColor: '#FFF1EE',
    borderWidth: 1,
    borderColor: '#F2B9B1',
    paddingVertical: 16,
  },
  logoutButtonText: {
    textAlign: 'center',
    color: '#B54B3E',
    fontWeight: '700',
    fontSize: 17,
  },
});
