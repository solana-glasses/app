import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Smartphone, SlidersHorizontal, Film, Cloud, RefreshCw, LogOut, ChevronRight, Settings, User, Bell } from 'lucide-react-native';

interface ProfileItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showChevron?: boolean;
}

const ProfileItem = ({ icon, title, subtitle, onPress, showChevron = true }: ProfileItemProps) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.menuItemContent}>
        <Text style={styles.menuItemTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuItemSubtitle}>{subtitle}</Text>}
      </View>
    </View>
    {showChevron && <ChevronRight color="#D1D5DB" size={20} />}
  </TouchableOpacity>
);

interface ProfileScreenProps {
  onLogout: () => void;
}

const ProfileScreen = ({ onLogout }: ProfileScreenProps) => {
  const handleMenuPress = (item: string) => {
    if (item === 'Logout') {
      onLogout();
    } else {
      console.log(`${item} pressed`);
      // Handle other navigation or actions here
    }
  };

  return (
    <LinearGradient colors={['#8BEDDE', '#D6EFFF']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Profile</Text>
              <Text style={styles.subGreeting}>Manage your account</Text>
            </View>
            <TouchableOpacity style={styles.settingsButton}>
              <Settings color="#01031A" size={24} />
            </TouchableOpacity>
          </View>

          {/* User Profile Section */}
          <View style={styles.profileCard}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Alex Johnson</Text>
              <Text style={styles.userEmail}>alex.johnson@gmail.com</Text>
              <View style={styles.statusContainer}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Connected</Text>
              </View>
            </View>
          </View>

          {/* Account Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            <View style={styles.menuContainer}>
              <ProfileItem 
                icon={<User color="#01031A" />} 
                title="Personal Information" 
                subtitle="Update your details"
                onPress={() => handleMenuPress('Personal Info')}
              />
              <ProfileItem 
                icon={<Bell color="#01031A" />} 
                title="Notifications" 
                subtitle="Manage alerts"
                onPress={() => handleMenuPress('Notifications')}
              />
              <ProfileItem 
                icon={<Cloud color="#01031A" />} 
                title="Cloud Storage" 
                subtitle="2.1 GB used"
                onPress={() => handleMenuPress('Cloud Storage')}
              />
            </View>
          </View>

          {/* Device Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Device</Text>
            <View style={styles.menuContainer}>
              <ProfileItem 
                icon={<Smartphone color="#01031A" />} 
                title="Smart Glasses" 
                subtitle="Connected • 72% battery"
                onPress={() => handleMenuPress('Devices')}
              />
              <ProfileItem 
                icon={<SlidersHorizontal color="#01031A" />} 
                title="Device Control" 
                subtitle="Manage settings"
                onPress={() => handleMenuPress('Control')}
              />
              <ProfileItem 
                icon={<RefreshCw color="#01031A" />} 
                title="Sync Data" 
                subtitle="Last synced 2 min ago"
                onPress={() => handleMenuPress('Sync')}
              />
            </View>
          </View>

          {/* Other Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>More</Text>
            <View style={styles.menuContainer}>
              <ProfileItem 
                icon={<Film color="#01031A" />} 
                title="Gallery Backup" 
                subtitle="Auto-backup enabled"
                onPress={() => handleMenuPress('Gallery')}
              />
              <ProfileItem 
                icon={<LogOut color="#DC2626" />} 
                title="Sign Out" 
                onPress={() => handleMenuPress('Logout')}
                showChevron={false}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  safeArea: { 
    flex: 1, 
    paddingHorizontal: 16,
    marginHorizontal: 12,
    paddingTop: 15,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 28,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  greeting: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#01031A',
    marginBottom: 6,
  },
  subGreeting: { 
    fontSize: 16, 
    color: '#01031A',
    lineHeight: 22,
  },
  settingsButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 24,
    padding: 24,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'rgba(1, 3, 26, 0.3)',
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#01031A',
    marginBottom: 4,
  },
  userEmail: { 
    fontSize: 16, 
    color: '#01031A',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(1, 3, 26, 0.8)',
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    color: '#01031A',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#01031A',
    marginBottom: 15,
  },
  menuContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 2,
    borderRadius: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#01031A',
    marginBottom: 2,
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: '#01031A',
  },
});

export default ProfileScreen;