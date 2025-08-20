import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import icons including Glasses for Device tab
import { Home, Image as ImageIcon, Glasses, Wallet, User } from 'lucide-react-native';
import { View, Text, StyleSheet } from 'react-native';

// Import splash screen and login screen
import SplashScreen from './components/SplashScreen';
import LoginScreen from './screens/LoginScreen';

// Import your screen components
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import WalletScreen from './screens/WalletScreen';

// Create a bottom tab navigator instance
const Tab = createBottomTabNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (showSplash) {
    return <SplashScreen onAnimationComplete={handleSplashComplete} />;
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

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
          // Styling for the tab bar (Checklist item #9: Dribbble-inspired design)
          tabBarActiveTintColor: 'rgba(1, 3, 26, 0.9)',
          tabBarInactiveTintColor: 'rgba(1, 3, 26, 0.5)',
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderTopWidth: 1,
            borderTopColor: 'rgba(1, 3, 26, 0.2)',
            height: 85,
            paddingBottom: 25,
            paddingTop: 8,
            paddingHorizontal: 10,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '500',
            marginTop: 2,
          },
        })}
      >
        {/* Define each screen in the tab bar */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Device" component={SettingsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen 
          name="Profile" 
          children={() => <ProfileScreen onLogout={() => setIsLoggedIn(false)} />} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
  },
  activeIndicator: {
    height: 2,
    width: 16,
    borderRadius: 1,
    backgroundColor: 'rgba(1, 3, 26, 0.9)',
    marginTop: 4,
  },
});

export default App;