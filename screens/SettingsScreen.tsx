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
    <LinearGradient colors={['#8BEDDE', '#D6EFFF']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Settings</Text>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
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
                    trackColor={{ false: 'rgba(1, 3, 26, 0.2)', true: 'rgba(1, 3, 26, 0.8)' }}
                    thumbColor={settings.lensCorrection ? '#FFFFFF' : '#FFFFFF'}
                  />
              </View>
              <View style={styles.switchRow}>
                <Text style={styles.switchLabel}>Prioritize Faster Shooting</Text>
                                  <Switch
                    value={settings.prioritizeShooting}
                    onValueChange={val => updateSetting('prioritizeShooting', val)}
                    trackColor={{ false: 'rgba(1, 3, 26, 0.2)', true: 'rgba(1, 3, 26, 0.8)' }}
                    thumbColor={settings.prioritizeShooting ? '#FFFFFF' : '#FFFFFF'}
                  />
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Video Setting</Text>
              {VIDEO_SETTINGS.map(setting => (
                <TouchableOpacity key={setting} style={styles.videoOption} onPress={() => updateSetting('videoSetting', setting)}>
                  <Text style={styles.videoOptionText}>{setting}</Text>
                  {settings.videoSetting === setting && <Check color="rgba(1, 3, 26, 0.8)" size={20} />}
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
  safeArea: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  header: { 
    alignItems: 'center', 
    paddingVertical: 20,
    paddingHorizontal: 32,
    marginTop: 15,
    marginBottom: 10,
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#01031A', marginBottom: 15 },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  contentContainer: {
    paddingHorizontal: 32,
    paddingVertical: 0,
  },
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#01031A' },
  resetButton: { 
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  resetButtonText: { color: '#01031A', fontWeight: '500' },
  card: { 
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 20, 
    padding: 20, 
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#01031A', marginBottom: 20 },
  toggleGroup: { 
    flexDirection: 'row', 
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    borderRadius: 20, 
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  toggleButton: { flex: 1, paddingVertical: 12, borderRadius: 16, alignItems: 'center' },
  toggleButtonActive: { backgroundColor: 'rgba(1, 3, 26, 0.8)' },
  toggleButtonText: { color: '#01031A', fontWeight: '600' },
  toggleButtonTextActive: { color: '#FFFFFF' },
  efficiencyButton: { paddingVertical: 15 },
  switchRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 25 
  },
  switchLabel: { fontSize: 16, color: '#01031A', fontWeight: '500' },
  videoOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(1, 3, 26, 0.1)',
  },
  videoOptionText: { fontSize: 16, color: '#01031A' },
});

export default SettingsScreen;