import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Modal, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isModalVisible, setModalVisible] = useState(true); // Trạng thái cho Modal

  const handleContinue = () => {
    // Kiểm tra xem số điện thoại có đúng 10 số hay không
    const cleanedNumber = phoneNumber.replace(/\D/g, ''); // Loại bỏ khoảng trắng

    if (cleanedNumber.length === 10) {
      // Hiển thị thông báo thành công và chuyển sang HomeScreen
      Alert.alert(
        'Đăng nhập thành công',
        `Bạn đã đăng nhập thành công với số điện thoại: ${phoneNumber}`,
        [{ text: 'OK', onPress: () => navigation.navigate('HomeScreen') }]
      );
    } else {
      // Hiển thị cảnh báo nếu số điện thoại không đúng định dạng
      Alert.alert(
        'Số điện thoại không hợp lệ',
        'Vui lòng nhập đúng định dạng 10 số.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Chào mừng bạn đến với One Housing Pro</Text>
            <TouchableOpacity style={styles.okButton} onPress={handleCloseModal}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Đăng nhập</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Nhập số điện thoại của bạn"
          value={phoneNumber}
          onChangeText={(text) => {
            // Chỉ giữ lại số, không tính khoảng trắng
            let cleanedText = text.replace(/\D/g, '');
            
            // Giới hạn tối đa 10 số
            if (cleanedText.length > 10) {
              cleanedText = cleanedText.slice(0, 10);
            }

            // Định dạng ngay khi nhập thành dạng 0965 346 160
            let formattedText = cleanedText;
            if (cleanedText.length > 4) {
              formattedText = `${cleanedText.slice(0, 4)} ${cleanedText.slice(4)}`;
            }
            if (cleanedText.length > 7) {
              formattedText = `${cleanedText.slice(0, 4)} ${cleanedText.slice(4, 7)} ${cleanedText.slice(7)}`;
            }
            
            setPhoneNumber(formattedText);
          }}
          maxLength={12} // Tối đa 12 ký tự bao gồm khoảng trắng
        />
        <TouchableOpacity 
          style={[styles.continueButton, { opacity: phoneNumber ? 1 : 0.5 }]} 
          onPress={handleContinue} 
          disabled={!phoneNumber}
        >
          <Text style={styles.continueButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingTop: 50, // Khoảng cách từ đỉnh màn hình xuống cho phần tiêu đề
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ bên ngoài modal
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  okButton: {
    backgroundColor: '#007BFF', // Màu xanh cho nút OK
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  okButtonText: {
    color: '#fff', // Màu chữ trắng
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: 'gray', // Màu xám cho nút tiếp tục
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
