import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const SplashScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Mô phỏng việc cập nhật tiến trình
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 1) {
          clearInterval(interval);
          navigation.navigate('LoginScreen'); // Điều hướng sang LoginScreen khi tiến trình hoàn tất
          return 1;
        }
        return oldProgress + 0.1;
      });
    }, 300); // Cập nhật tiến trình mỗi 300ms

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/splash-image.png')}  // Đảm bảo đường dẫn đúng đến ảnh của bạn
          style={styles.image} 
        />
      </View>
      <Text style={styles.title}>Scan, Pay & Enjoy!</Text>
      <Text style={styles.description}>
        Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!
      </Text>
      <Progress.Bar 
        progress={progress} 
        width={200} 
        color="#3498db" // Màu của thanh tiến trình
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressBar: {
    marginTop: 20,
  },
});

export default SplashScreen;
