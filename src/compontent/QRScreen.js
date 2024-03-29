import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRScanner = () => {
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (scanned) {
      // Handle scanned QR code
      // For example, you can navigate to a new screen or perform an action
      alert('QR code scanned!');
    }
  }, [scanned]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={handleBarCodeScanned}
        flashMode={RNCamera.Constants.FlashMode.auto}
        captureAudio={false}
      >
        <View style={styles.overlay} />
      </RNCamera>
      <View style={styles.bottomOverlay}>
        <TouchableOpacity onPress={() => setScanned(false)} style={styles.scanButton}>
          <Text style={styles.scanButtonText}>Scan Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
  },
  scanButton: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  scanButtonText: {
    fontSize: 20,
    color: '#000',
  },
});

export default QRScanner;
