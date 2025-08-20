import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video, SlidersHorizontal, Mic, MicOff, Wifi, WifiOff, Search } from 'lucide-react-native';

interface SpecItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  onPress?: () => void;
  isActive?: boolean;
}

const SpecItem = ({ icon, title, subtitle, color, onPress, isActive }: SpecItemProps) => (
  <TouchableOpacity 
    style={[
      styles.specItem, 
      isActive && styles.specItemActive
    ]} 
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={[styles.specIconContainer, { backgroundColor: color }]}>
      {icon}
    </View>
    <Text style={[styles.specTitle, isActive && styles.specTitleActive]}>{title}</Text>
    <Text style={[styles.specSubtitle, isActive && styles.specSubtitleActive]}>{subtitle}</Text>
  </TouchableOpacity>
);



const HomeScreen = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [recordingMode, setRecordingMode] = useState('4k-60Fps');
  const [controlMode, setControlMode] = useState('Auto');

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  const toggleRecording = () => {
    setRecordingMode(recordingMode === '4k-60Fps' ? '1080p-30Fps' : '4k-60Fps');
  };

  const toggleControl = () => {
    setControlMode(controlMode === 'Auto' ? 'Manual' : 'Auto');
  };

  return (
    <LinearGradient colors={['#8BEDDE', '#D6EFFF']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
              style={styles.profilePicture}
            />
            <View style={styles.searchContainer}>
              <Search color="#01031A" size={20} />
            </View>
          </View>

          <View style={styles.glassesContainer}>
            <View style={styles.glassesPlaceholder}>
              {/* 3D Glasses model */}
              <Image
                source={require('../assets/sol-glass-mock.png')}
                style={styles.glassesMockup}
                resizeMode="contain"
              />
            </View>
          </View>

                      <Text style={styles.specificationsTitle}>Specifications</Text>
            {/* Checklist items 7-8: Glasses image scaling & removed icon boxes */}

          <View style={styles.specsGrid}>
            <View style={styles.batteryContainer}>
              <View style={styles.battery}>
                <View style={styles.batteryLevel} />
                <Text style={styles.batteryText}>72%</Text>
                <Text style={styles.batterySubtext}>Remaining</Text>
              </View>
              <Text style={styles.batteryLabel}>Glass Battery</Text>
            </View>
            <View style={styles.specsColumn}>
              <SpecItem 
                icon={<Video color="#01031A" />} 
                title="Video" 
                subtitle={recordingMode} 
                color="transparent" 
                onPress={toggleRecording}
                isActive={recordingMode === '4k-60Fps'}
              />
              <SpecItem 
                icon={isMuted ? <MicOff color="#01031A" /> : <Mic color="#01031A" />} 
                title="Mute" 
                subtitle={isMuted ? "OFF" : "ON"} 
                color="transparent" 
                onPress={toggleMute}
                isActive={!isMuted}
              />
            </View>
            <View style={styles.specsColumn}>
              <SpecItem 
                icon={<SlidersHorizontal color="#01031A" />} 
                title="Control" 
                subtitle={controlMode} 
                color="transparent" 
                onPress={toggleControl}
                isActive={controlMode === 'Auto'}
              />
              <SpecItem 
                icon={isConnected ? <Wifi color="#01031A" /> : <WifiOff color="#01031A" />} 
                title="User" 
                subtitle={isConnected ? "Connected" : "Disconnected"} 
                color="transparent" 
                onPress={toggleConnection}
                isActive={isConnected}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { 
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 15,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
    marginHorizontal: 16,
  },
  profilePicture: { 
    width: 56, 
    height: 56, 
    borderRadius: 28,
    borderWidth: 2,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  searchContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  glassesContainer: { 
    alignItems: 'center', 
    marginVertical: 25,
    paddingHorizontal: 0,
  },
  glassesPlaceholder: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glassesMockup: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  specificationsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01031A',
    marginBottom: 30,
    marginLeft: 10,
  },
  specsGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  batteryContainer: { 
    alignItems: 'center',
    margin: 8,
  },
  battery: {
    width: 110,
    height: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  batteryLevel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '72%',
    backgroundColor: '#7AFFA1',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  batteryText: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#01031A', 
    zIndex: 1,
    marginBottom: 4,
  },
  batterySubtext: { 
    fontSize: 14, 
    color: '#01031A', 
    zIndex: 1,
  },
  batteryLabel: { 
    color: '#01031A', 
    marginTop: 16,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  specsColumn: { 
    justifyContent: 'space-between',
    marginHorizontal: 4,
  },
  specItem: {
    width: 110,
    height: 110,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  specItemActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderColor: '#01031A',
    borderWidth: 2,
    transform: [{ scale: 0.98 }],
  },
  specIconContainer: {
    marginBottom: 10,
  },
  specTitle: { 
    color: '#01031A', 
    fontWeight: 'bold', 
    fontSize: 13, 
    textAlign: 'center',
    marginBottom: 3,
  },
  specTitleActive: {
    color: '#01031A',
  },
  specSubtitle: { 
    color: '#01031A', 
    fontSize: 11, 
    textAlign: 'center',
    lineHeight: 14,
  },
  specSubtitleActive: {
    color: '#01031A',
    fontWeight: '600',
  },
});

export default HomeScreen;