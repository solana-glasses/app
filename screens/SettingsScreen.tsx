import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Check } from 'lucide-react-native';

const PHOTO_RESOLUTIONS = ['12MP', '24MP', '48MP'];
const PHOTO_EFFICIENCY = ['High Efficiency', 'Most Compatible'];
const VIDEO_SETTINGS = [
  '720p HD at 30fps',
  '1080p HD at 30fps',
  '1080p HD at 60fps',
  '4k at 24fps',
  '4k at 30fps',
];

const DEFAULT_SETTINGS = {
  photoResolution: '24MP',
  photoEfficiency: 'High Efficiency',
  lensCorrection: true,
  prioritizeShooting: false,
  videoSetting: '720p HD at 30fps',
};

const SettingsScreen = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const handleReset = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const updateSetting = (key: keyof typeof settings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <LinearGradient colors={['#4e4376', '#2b2d42']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Profile</Text>
            <Image
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-26%20at%208.28.46%E2%80%AFPM-iRn11kRFToCQ6o8ATGXvQlcaKTOxyp.png' }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Photo & Video</Text>
              <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                <Text style={styles.resetButtonText}>Reset Default</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Photo Setting</Text>
              <View style={styles.toggleGroup}>
                {PHOTO_RESOLUTIONS.map(res => (
                  <TouchableOpacity
                    key={res}
                    style={[styles.toggleButton, settings.photoResolution === res && styles.toggleButtonActive]}
                    onPress={() => updateSetting('photoResolution', res)}
                  >
                    <Text style={[styles.toggleButtonText, settings.photoResolution === res && styles.toggleButtonTextActive]}>{res}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={[styles.toggleGroup, { marginTop: 15 }]}>
                {PHOTO_EFFICIENCY.map(eff => (
                  <TouchableOpacity
                    key={eff}
                    style={[styles.toggleButton, styles.efficiencyButton, settings.photoEfficiency === eff && styles.toggleButtonActive]}
                    onPress={() => updateSetting('photoEfficiency', eff)}
                  >
                    <Text style={[styles.toggleButtonText, settings.photoEfficiency === eff && styles.toggleButtonTextActive]}>{eff}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.switchRow}>
                <Text style={styles.switchLabel}>Lens Correction</Text>
                <Switch
                  value={settings.lensCorrection}
                  onValueChange={val => updateSetting('lensCorrection', val)}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={settings.lensCorrection ? '#f4f3f4' : '#f4f3f4'}
                />
              </View>
              <View style={styles.switchRow}>
                <Text style={styles.switchLabel}>Prioritize Faster Shooting</Text>
                <Switch
                  value={settings.prioritizeShooting}
                  onValueChange={val => updateSetting('prioritizeShooting', val)}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={settings.prioritizeShooting ? '#f4f3f4' : '#f4f3f4'}
                />
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Video Setting</Text>
              {VIDEO_SETTINGS.map(setting => (
                <TouchableOpacity key={setting} style={styles.videoOption} onPress={() => updateSetting('videoSetting', setting)}>
                  <Text style={styles.videoOptionText}>{setting}</Text>
                  {settings.videoSetting === setting && <Check color="#34C759" size={20} />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: 'center', paddingVertical: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 15 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  contentContainer: {
    backgroundColor: '#eef2f9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    marginTop: 20,
  },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 26, fontWeight: 'bold', color: '#333' },
  resetButton: { backgroundColor: '#d1d8e0', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20 },
  resetButtonText: { color: '#333', fontWeight: '500' },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 20 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  toggleGroup: { flexDirection: 'row', backgroundColor: '#f0f0f0', borderRadius: 20, padding: 4 },
  toggleButton: { flex: 1, paddingVertical: 12, borderRadius: 18, alignItems: 'center' },
  toggleButtonActive: { backgroundColor: '#000' },
  toggleButtonText: { color: '#333', fontWeight: '600' },
  toggleButtonTextActive: { color: '#fff' },
  efficiencyButton: { paddingVertical: 15 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 },
  switchLabel: { fontSize: 16, color: '#333' },
  videoOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  videoOptionText: { fontSize: 16, color: '#333' },
});

export default SettingsScreen;