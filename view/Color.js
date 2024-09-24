import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function Color() {
  const navigation = useNavigation();

  const [selectedColor, setSelectedColor] = React.useState(null);
  const [imageSource, setImageSource] = React.useState(
    require("../image/vs_blue-3.png")
  );

  const colors = [
    {
      id: 1,
      color: "1",
      image: require("../image/vs_blue-3.png"),
      backgroundColor: "#C5F1FB",
    },
    {
      id: 2,
      color: "2",
      image: require("../image/vs_red_a.png"),
      backgroundColor: "#F30D0D",
    },
    {
      id: 3,
      color: "3",
      image: require("../image/vs_blue-3.png"),
      backgroundColor: "#000000",
    },
    {
      id: 4,
      color: "4",
      image: require("../image/vs_red_a.png"),
      backgroundColor: "#234896",
    },
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setImageSource(color.image);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={imageSource} />

          <Text style={styles.headerText}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Chọn màu bên dưới:</Text>
          {colors.map((color) => (
            <TouchableOpacity
              key={color.id}
              style={[
                styles.colorButton,
                { backgroundColor: color.backgroundColor },
                selectedColor === color.color
                  ? styles.selectedColorButton
                  : null,
              ]}
              onPress={() => handleColorChange(color)}
            ></TouchableOpacity>
          ))}
          <View style={styles.buttonFooter}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.buttonText1}>XONG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "400",
    fontSize: 20,
    width: "70%",
    marginBottom: 40,
  },
  footer: {
    flex: 3,
    backgroundColor: "#C4C4C4",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    marginRight: 220,
    fontWeight: "400",
    fontSize: 16,
  },
  colorButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  selectedColorButton: {
    borderColor: "#007bff",
    borderWidth: 2,
  },
  colorButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  buttonFooter: {
    flex: 2,
    justifyContent: "flex-end",
    width: "100%",
  },
  button1: {
    backgroundColor: "#1952E2",
    padding: 15,
    borderRadius: 10,
  },
  buttonText1: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
