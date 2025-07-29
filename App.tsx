import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import icons including Glasses for Device tab
import { Home, Image as ImageIcon, Glasses, Wallet, User } from 'lucide-react-native';
import { View, Text, StyleSheet } from 'react-native';

// Import your screen components
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import WalletScreen from './screens/WalletScreen';

// Create a bottom tab navigator instance
const Tab = createBottomTabNavigator();

// Placeholder screen for Gallery
const GalleryScreen = () => <View style={styles.container}><Text style={styles.placeholderText}>Gallery Screen</Text></View>;

const App = () => {
  return (
    // NavigationContainer is the root of all navigation logic
    <NavigationContainer>
      {/* Tab.Navigator defines the bottom tab bar and its screens */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Hide the header for all screens as we have custom headers
          headerShown: false,
          // Define the icon for each tab
          tabBarIcon: ({ color, size, focused }) => {
            let icon;
            if (route.name === 'Home') {
              icon = <Home color={color} size={size} />;
            } else if (route.name === 'Gallery') {
              icon = <ImageIcon color={color} size={size} />;
            } else if (route.name === 'Device') {
              icon = <Glasses color={color} size={size} />;
            } else if (route.name === 'Wallet') {
              icon = <Wallet color={color} size={size} />;
            } else if (route.name === 'Profile') {
              icon = <User color={color} size={size} />;
            }
            
            // This view adds the small dot indicator for the active tab
            return (
              <View style={styles.tabIconContainer}>
                {icon}
                {focused && <View style={styles.activeIndicator} />}
              </View>
            );
          },
          // Styling for the tab bar
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#aaaaaa',
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: '#1a1a2e', // Dark background for the tab bar
            borderTopWidth: 0, // No top border
            height: 90, // Custom height for the tab bar
            paddingBottom: 30, // Padding to avoid home indicator on iOS
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 4,
          },
        })}
      >
        {/* Define each screen in the tab bar */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Device" component={SettingsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0c29',
  },
  placeholderText: {
    color: 'white',
    fontSize: 20,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 5, // Nudge icons up slightly
  },
  activeIndicator: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    marginTop: 6,
  },
});

export default App;