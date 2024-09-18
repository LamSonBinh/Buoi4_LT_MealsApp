import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, Modal, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext'; 

const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); 
  const { isDarkMode, toggleTheme, language, changeLanguage } = useTheme(); 

  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/sonbinh.lam.113');
  };

  const openGmail = () => {
    Linking.openURL('mailto:sonbinh110303@gmail.com');
  };

  const callHotline = () => {
    Linking.openURL('tel:+84818132174');
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang); 
    setModalVisible(false); 
  };

  return (
    <View style={[styles.screen, { backgroundColor: isDarkMode ? '#333' : '#FFF' }]}>
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={[styles.languageButton, { color: isDarkMode ? '#000' : '#000' }]}>
              {language === 'vi' ? 'Ngôn ngữ' : 'Language'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, { color: isDarkMode ? '#000' : '#000' }]}>
            {isDarkMode ? (language === 'vi' ? 'Chế độ tối' : 'Dark Mode') : (language === 'vi' ? 'Chế độ sáng' : 'Light Mode')}
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} 
      >
        <View style={[styles.modalContainer, { backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)' }]}>
          <View style={[styles.modalContent, { backgroundColor: isDarkMode ? '#555' : '#FFF' }]}>
            <Text style={[styles.modalTitle, { color: isDarkMode ? '#FFF' : '#000' }]}>
              {language === 'vi' ? 'Chọn ngôn ngữ' : 'Select Language'}
            </Text>

            <TouchableOpacity style={[styles.modalButton, { backgroundColor: isDarkMode ? '#4CAF50' : '#4CAF50' }]} onPress={() => handleLanguageChange('en')}>
              <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.modalButton, { backgroundColor: isDarkMode ? '#4CAF50' : '#4CAF50' }]} onPress={() => handleLanguageChange('vi')}>
              <Text style={styles.buttonText}>Tiếng Việt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.modalButtonClose, { backgroundColor: isDarkMode ? '#f44336' : '#f44336' }]} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>{language === 'vi' ? 'Đóng' : 'Close'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.contactContainer}>
        <Text style={[styles.title, { color: isDarkMode ? '#FFF' : '#000' }]}>
          {language === 'vi' ? "Liên hệ" : "Contact"}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.facebookButton} onPress={openFacebook}>
            <Image
              source={require('../assets/lienhe/facebook.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gmailButton} onPress={openGmail}>
            <Image
              source={require('../assets/lienhe/gmail_pic.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.hotlineButton} onPress={callHotline}>
            <Image
              source={require('../assets/lienhe/hotline.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  container: {
    marginBottom: 20, 
  },
  languageContainer: {
    alignItems: 'flex-start',
    marginBottom: 10, 
  },
  languageButton: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 263,
    backgroundColor: '#DADADA',
   // fontWeight: 'bold',
    borderRadius: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DADADA',
    borderRadius: 10,
    paddingLeft: 30,
  },
  switchLabel: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalButtonClose: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  facebookButton: {
    padding: 10,
  },
  gmailButton: {
    padding: 10,
  },
  hotlineButton: {
    padding: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export default SettingsScreen;
