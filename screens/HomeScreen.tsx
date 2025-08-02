import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video, SlidersHorizontal, Mic, Wifi } from 'lucide-react-native';

interface SpecItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
}

const SpecItem = ({ icon, title, subtitle, color }: SpecItemProps) => (
  <View style={styles.specItem}>
    <View style={[styles.specIconContainer, { backgroundColor: color }]}>
      {icon}
    </View>
    <Text style={styles.specTitle}>{title}</Text>
    <Text style={styles.specSubtitle}>{subtitle}</Text>
  </View>
);

const Glasses3D = () => (
  <View style={styles.glassesModel}>
    {/* Left lens */}
    <View style={styles.lens}>
      <View style={styles.lensInner} />
      <View style={styles.lensReflection} />
    </View>
    
    {/* Bridge */}
    <View style={styles.bridge} />
    
    {/* Right lens */}
    <View style={styles.lens}>
      <View style={styles.lensInner} />
      <View style={styles.lensReflection} />
    </View>
    
    {/* Left temple */}
    <View style={[styles.temple, styles.templeLeft]} />
    
    {/* Right temple */}
    <View style={[styles.temple, styles.templeRight]} />
  </View>
);

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#6B7280', '#4B5563']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.subGreeting}>Welcome to Solana glasses</Text>
            </View>
            <Image
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-26%20at%208.28.26%E2%80%AFPM-rCIFYaYXyawjOXA9LhSTY4oQo0yQoY.png' }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.glassesContainer}>
            <View style={styles.glassesPlaceholder}>
              {/* 3D Glasses model */}
              <Glasses3D />
            </View>
          </View>

          <Text style={styles.specificationsTitle}>Specifications</Text>

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
              <SpecItem icon={<Video color="#fff" />} title="Video" subtitle="4k-60Fps" color="rgba(255,255,255,0.15)" />
              <SpecItem icon={<Mic color="#fff" />} title="Tap to Mute" subtitle="ON" color="rgba(255,255,255,0.15)" />
            </View>
            <View style={styles.specsColumn}>
              <SpecItem icon={<SlidersHorizontal color="#fff" />} title="Control" subtitle="Control" color="rgba(255,255,255,0.15)" />
              <SpecItem icon={<Wifi color="#fff" />} title="User" subtitle="Connected" color="rgba(255,255,255,0.15)" />
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
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 32,
    borderRadius: 24,
    marginHorizontal: 8,
  },
  greeting: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#fff',
    marginBottom: 6,
  },
  subGreeting: { 
    fontSize: 16, 
    color: '#E5E7EB',
    lineHeight: 22,
  },
  avatar: { 
    width: 64, 
    height: 64, 
    borderRadius: 32,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  glassesContainer: { 
    alignItems: 'center', 
    marginVertical: 55,
    paddingHorizontal: 35,
  },
  glassesPlaceholder: {
    width: '95%',
    height: 180,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  glassesModel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 75,
    position: 'relative',
  },
  lens: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderWidth: 3,
    borderColor: '#E5E7EB',
    position: 'relative',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  lensInner: {
    position: 'absolute',
    top: 3,
    left: 3,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  lensReflection: {
    position: 'absolute',
    top: 6,
    left: 9,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  bridge: {
    width: 18,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginHorizontal: -4,
    zIndex: 1,
  },
  temple: {
    position: 'absolute',
    width: 30,
    height: 3,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    top: 18,
  },
  templeLeft: {
    right: 98,
    transform: [{ rotate: '-15deg' }],
  },
  templeRight: {
    left: 98,
    transform: [{ rotate: '15deg' }],
  },
  specificationsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 35,
    marginLeft: 15,
  },
  specsGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 35,
  },
  batteryContainer: { 
    alignItems: 'center',
    marginRight: 20,
  },
  battery: {
    width: 110,
    height: 160,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: 24,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  batteryLevel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '72%',
    backgroundColor: '#60A5FA',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  batteryText: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#fff', 
    zIndex: 1,
    marginBottom: 4,
  },
  batterySubtext: { 
    fontSize: 14, 
    color: '#fff', 
    zIndex: 1,
  },
  batteryLabel: { 
    color: '#fff', 
    marginTop: 16,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  specsColumn: { 
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  specItem: {
    width: 110,
    height: 110,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  specIconContainer: {
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  specTitle: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 13, 
    textAlign: 'center',
    marginBottom: 3,
  },
  specSubtitle: { 
    color: '#D1D5DB', 
    fontSize: 11, 
    textAlign: 'center',
    lineHeight: 14,
  },
});

export default HomeScreen;