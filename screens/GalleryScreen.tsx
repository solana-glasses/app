import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Camera, Video, Download, Share, Trash2, Filter } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width - 60) / 3; // 3 columns with padding

interface GalleryItemProps {
  type: 'photo' | 'video';
  timestamp: string;
  duration?: string;
  isSelected?: boolean;
}

const GalleryItem = ({ type, timestamp, duration, isSelected = false }: GalleryItemProps) => (
  <TouchableOpacity style={[styles.galleryItem, { width: itemWidth, height: itemWidth }]}>
    <LinearGradient
      colors={type === 'video' ? ['#8B5CF6', '#A855F7'] : ['#60A5FA', '#3B82F6']}
      style={styles.galleryItemGradient}
    >
      <View style={styles.galleryItemContent}>
        {type === 'video' ? (
          <Video color="#fff" size={24} />
        ) : (
          <Camera color="#fff" size={24} />
        )}
        {duration && (
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        )}
      </View>
    </LinearGradient>
    <Text style={styles.timestamp}>{timestamp}</Text>
    {isSelected && <View style={styles.selectedIndicator} />}
  </TouchableOpacity>
);

const mockGalleryData = [
  { type: 'photo' as const, timestamp: '2 min ago' },
  { type: 'video' as const, timestamp: '5 min ago', duration: '0:15' },
  { type: 'photo' as const, timestamp: '10 min ago' },
  { type: 'photo' as const, timestamp: '1 hour ago' },
  { type: 'video' as const, timestamp: '2 hours ago', duration: '0:42' },
  { type: 'photo' as const, timestamp: '3 hours ago' },
  { type: 'photo' as const, timestamp: 'Yesterday' },
  { type: 'video' as const, timestamp: 'Yesterday', duration: '1:23' },
  { type: 'photo' as const, timestamp: 'Yesterday' },
  { type: 'photo' as const, timestamp: '2 days ago' },
  { type: 'video' as const, timestamp: '2 days ago', duration: '2:15' },
  { type: 'photo' as const, timestamp: '3 days ago' },
  { type: 'photo' as const, timestamp: '1 week ago' },
  { type: 'video' as const, timestamp: '1 week ago', duration: '0:58' },
  { type: 'photo' as const, timestamp: '1 week ago' },
];

const GalleryScreen = () => {
  const photoCount = mockGalleryData.filter(item => item.type === 'photo').length;
  const videoCount = mockGalleryData.filter(item => item.type === 'video').length;

  return (
    <LinearGradient colors={['#6B7280', '#4B5563']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Gallery</Text>
            <Text style={styles.subtitle}>{photoCount} Photos • {videoCount} Videos</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Filter color="#fff" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.statIconContainer}>
              <Camera color="#60A5FA" size={20} />
            </View>
            <Text style={styles.statNumber}>{photoCount}</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
          
          <View style={styles.statItem}>
            <View style={styles.statIconContainer}>
              <Video color="#8B5CF6" size={20} />
            </View>
            <Text style={styles.statNumber}>{videoCount}</Text>
            <Text style={styles.statLabel}>Videos</Text>
          </View>
          
          <View style={styles.statItem}>
            <View style={styles.statIconContainer}>
              <Download color="#10B981" size={20} />
            </View>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.galleryGrid}>
            {mockGalleryData.map((item, index) => (
              <GalleryItem
                key={index}
                type={item.type}
                timestamp={item.timestamp}
                duration={item.duration}
                isSelected={index === 0} // First item selected for demo
              />
            ))}
          </View>
        </ScrollView>

        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.bottomActionButton}>
            <Share color="#fff" size={20} />
            <Text style={styles.bottomActionText}>Share</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.bottomActionButton}>
            <Download color="#fff" size={20} />
            <Text style={styles.bottomActionText}>Save</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.bottomActionButton}>
            <Trash2 color="#fff" size={20} />
            <Text style={styles.bottomActionText}>Delete</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 24,
    borderRadius: 20,
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: { 
    fontSize: 14, 
    color: '#D1D5DB',
  },
  headerActions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIconContainer: {
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#D1D5DB',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  galleryItem: {
    marginBottom: 15,
  },
  galleryItemGradient: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  galleryItemContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  timestamp: {
    color: '#D1D5DB',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomActions: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 20,
    padding: 16,
  },
  bottomActionButton: {
    alignItems: 'center',
    flex: 1,
  },
  bottomActionText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default GalleryScreen;