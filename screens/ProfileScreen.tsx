import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Smartphone, SlidersHorizontal, Film, Cloud, RefreshCw, LogOut } from 'lucide-react-native';

interface ProfileItemProps {
  icon: React.ReactNode;
  text: string;
  width: number;
}

const ProfileItem = ({ icon, text, width }: ProfileItemProps) => (
  <View style={styles.item}>
    <View style={styles.iconContainer}>{icon}</View>
    <View style={styles.placeholderContainer}>
      <View style={[styles.placeholder, { width: width }]} />
      <View style={[styles.placeholder, { width: width * 0.7, marginTop: 8 }]} />
    </View>
  </View>
);

const ProfileScreen = () => {
  return (
    <LinearGradient colors={['#6B7280', '#4B5563']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-26%20at%208.28.38%E2%80%AFPM-EXoCBUv88Sfu6Yj5h3ikq34Wdnc9he.png' }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userEmail}>username@gmail.com</Text>
          </View>

          <View style={styles.menuContainer}>
            <ProfileItem icon={<Smartphone color="#555" />} text="Devices" width={100} />
            <ProfileItem icon={<SlidersHorizontal color="#555" />} text="Control" width={150} />
            <ProfileItem icon={<Film color="#555" />} text="Gallery" width={200} />
            <ProfileItem icon={<Cloud color="#555" />} text="Cloud Storage" width={180} />
            <ProfileItem icon={<RefreshCw color="#555" />} text="Sync" width={120} />
            <ProfileItem icon={<LogOut color="#555" />} text="Logout" width={80} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, paddingHorizontal: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileHeader: { alignItems: 'center' },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  userInfoContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  userName: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  userEmail: { fontSize: 16, color: '#555', marginTop: 4 },
  menuContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  iconContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 12,
    borderRadius: 25,
  },
  placeholderContainer: {
    marginLeft: 20,
  },
  placeholder: {
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 5,
  },
});

export default ProfileScreen;