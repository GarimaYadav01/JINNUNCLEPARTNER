import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView, Platform, StatusBar } from "react-native";
const { height, width } = Dimensions.get("screen");

const Header = ({ title, onBackPress, showButton, buttonTitle, onButtonPress }) => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView>
      {/* <StatusBar backgroundColor={"#FFF"} barStyle={"light-content"} /> */}
      <View style={[styles.container, Platform.OS === 'ios' && styles.iosContainer]}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require("../assets/Newicon/back.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        {showButton && (
          <TouchableOpacity onPress={onButtonPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    backgroundColor: "#004E8C",
    paddingHorizontal: 16,
    // height:height*0.095
  },

  iosContainer: {
    // Add iOS-specific styles here
    borderBottomWidth: 1,
    // borderBottomColor: "#C0C0C0",
  },
  backIcon: {
    width: 24,
    height: 24,
    marginTop: 15
    // tintColor: "#fff", 
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
    color: "#FFF",
    marginLeft: width * 0.1,
    textAlign: "center",
    marginTop: 15
  },
  buttonContainer: {
    position: 'absolute',
    right: 16,
    marginTop: StatusBar.currentHeight || 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default Header;
