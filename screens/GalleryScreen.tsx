import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Camera, Video, Download, Share2 } from 'lucide-react-native';

interface MediaItemProps {
  type: 'photo' | 'video';
  thumbnail: string;
  onPress: () => void;
}

const MediaItem = ({ type, thumbnail, onPress }: MediaItemProps) => (
  <TouchableOpacity style={styles.mediaItem} onPress={onPress}>
    <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
    <View style={styles.mediaTypeOverlay}>
      {type === 'video' ? (
        <Video color="#fff" size={16} />
      ) : (
        <Camera color="#fff" size={16} />
      )}
    </View>
  </TouchableOpacity>
);

const GalleryScreen = () => {
  // Mock data for gallery items
  const mediaItems = [
    { id: 1, type: 'photo' as const, thumbnail: 'https://picsum.photos/200/200?random=1' },
    { id: 2, type: 'video' as const, thumbnail: 'https://picsum.photos/200/200?random=2' },
    { id: 3, type: 'photo' as const, thumbnail: 'https://picsum.photos/200/200?random=3' },
    { id: 4, type: 'photo' as const, thumbnail: 'https://picsum.photos/200/200?random=4' },
    { id: 5, type: 'video' as const, thumbnail: 'https://picsum.photos/200/200?random=5' },
    { id: 6, type: 'photo' as const, thumbnail: 'https://picsum.photos/200/200?random=6' },
  ];

  const handleMediaPress = (id: number) => {
    // Handle media item press - could navigate to detail view
    console.log('Media item pressed:', id);
  };

  return (
    <LinearGradient colors={['#8BEDDE', '#D6EFFF']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Gallery</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Download color="#01031A" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Share2 color="#01031A" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Videos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2.1 GB</Text>
            <Text style={styles.statLabel}>Storage</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.mediaGrid}>
            {mediaItems.map((item) => (
              <MediaItem
                key={item.id}
                type={item.type}
                thumbnail={item.thumbnail}
                onPress={() => handleMediaPress(item.id)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 48,
    paddingTop: 15,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#01031A',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    padding: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01031A',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#01031A',
  },
  scrollView: {
    flex: 1,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  mediaItem: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
  },
  mediaTypeOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GalleryScreen;