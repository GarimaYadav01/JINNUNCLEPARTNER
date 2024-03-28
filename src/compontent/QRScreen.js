import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
const QRScreen = () => {
  const [scannedData, setScannedData] = useState('');

  // Handle QR code scan
  const onReadQRCode = (e) => {
    setScannedData(e.data || 'No QR code data found');
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onReadQRCode}
        flashMode={RNCamera.Constants.FlashMode.auto}
        reactivate={true}
        reactivateTimeout={3000}
      />
      <Text style={styles.scannedData}>{scannedData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannedData: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QRScreen;
