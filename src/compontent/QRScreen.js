import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
const QRScanner = () => {
  const [scanned, setScanned] = useState(false);
  const onSuccess = (e) => {
    if (!scanned) {
      setScanned(true);
      alert(`Scanned QR code: ${e.data}`);
    }
  };
  return (
    <QRCodeScanner
      onRead={onSuccess}
      topContent={
        <Text style={styles.centerText}>
          Scan the QR code.
        </Text>
      }
      bottomContent={
        <Text style={styles.centerText}>
          {scanned ? 'Scan successful!' : 'Scanning...'}
        </Text>
      }
    />
  );
};
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
});

export default QRScanner;
