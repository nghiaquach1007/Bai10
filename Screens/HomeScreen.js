import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image
          source={require('../assets/avatar.png')} // Đường dẫn ảnh avatar
          style={styles.avatar}
        />
      </View>

      {/* Insights Section */}
      <View style={styles.insightsContainer}>
        <Text style={styles.sectionTitle}>Your Insights</Text>
        <View style={styles.cardsRow}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.iconBackground}>
              <Image 
                source={require('../assets/scan-icon-active.png')} 
                style={styles.iconImage} 
              />
            </View>
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardCount}>Scanned 483</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.iconBackground}>
              <Image 
                source={require('../assets/warning-icon.png')} 
                style={styles.iconImage} 
              />
            </View>
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardCount}>Counterfeited 32</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsRow}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.iconBackground}>
              <Image 
                source={require('../assets/green-tick-icon.png')} 
                style={styles.iconImage} 
              />
            </View>
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardCount}>Checkouts 8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.iconBackground}>
              <Image 
                source={require('../assets/calendar-icon.png')} 
                style={styles.iconImage} 
              />
            </View>
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardCount}>History 26</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Explore More Section */}
      <View style={styles.exploreContainer}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <TouchableOpacity>
          <Image 
            source={require('../assets/arrow-icon.png')} // Đảm bảo có ảnh mũi tên hoặc biểu tượng khác nếu cần
            style={styles.iconImage} 
          />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll Section for Images */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContainer}
      >
        <Image 
          source={require('../assets/image-1.png')} 
          style={styles.scrollImage} 
        />
        <Image 
          source={require('../assets/image-2.png')} 
          style={styles.scrollImage} 
        />
        <Image 
          source={require('../assets/image-3.png')} 
          style={styles.scrollImage} 
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image 
            source={require('../assets/home-icon-active.png')} // Ảnh cho biểu tượng Home
            style={styles.iconImage} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('../assets/notification-icon.png')} // Ảnh cho biểu tượng Notification
            style={styles.iconImage} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('../assets/scan-icon.png')} // Ảnh cho biểu tượng Scan
            style={styles.iconImage} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('../assets/history-icon.png')} // Ảnh cho biểu tượng History
            style={styles.iconImage} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image 
            source={require('../assets/cart-icon.png')} // Ảnh cho biểu tượng Cart
            style={styles.iconImage} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40, // Tăng khoảng cách với rìa trên của màn hình
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    width: '48%',
    height: 160,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardCount: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
  },
  iconBackground: {
    backgroundColor: '#e0e0e0', // Màu nền xám
    padding: 10, // Khoảng cách giữa biểu tượng và viền nền
    borderRadius: 10, // Bo góc nền vuông
  },
  exploreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  horizontalScrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scrollImage: {
    width: 150, // Chiều rộng của mỗi hình ảnh
    height: 220, // Chiều cao của mỗi hình ảnh
    marginRight: 15, // Khoảng cách giữa các hình ảnh
    borderRadius: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 }, // Chỉ đổ bóng phía trên (chiều cao âm)
    shadowOpacity: 0.1, // Độ mờ của bóng
    shadowRadius: 5, // Độ lớn của bóng
    elevation: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
