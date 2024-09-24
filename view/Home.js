import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const navigation = useNavigation();
  const stars = [];

  // Lặp để tạo ra 5 ngôi sao
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Image
        key={i}
        style={styles.star_1}
        source={require("../image/star.png")}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            style={styles.image}
            source={require("../image/vs_blue-2.png")}
          ></Image>
        </View>
        <View style={styles.content}>
          <View style={styles.contentInfor}>
            <View>
              <Text style={styles.font}>
                Điện Thoại Vsmart Joy 3 - Hàng chính hãng
              </Text>
            </View>
            <View style={styles.review}>
              <View style={styles.star}>{stars}</View>
              <View>
                <Text style={styles.font}>(Xem 828 đánh giá)</Text>
              </View>
            </View>
            <View style={styles.review}>
              <View style={styles.star}>
                <Text style={styles.number}>1.790.000 đ</Text>
              </View>
              <View>
                <Text style={styles.numberLine}>1.790.000 đ</Text>
              </View>
            </View>
            <View style={styles.sale}>
              <Text style={styles.saleText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Button pressed")}
            >
              <Text style={styles.buttonText}>4 MÀU-CHỌN MÀU</Text>
              <Image
                style={styles.vector}
                source={require("../image/Vector-2.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonFooter}>
            <TouchableOpacity
              style={styles.button1}
              onPress={()=>navigation.navigate("Color")}
            >
              <Text style={styles.buttonText1}>CHỌN MUA</Text>
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
  img: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
  },
  content: {
    flex: 2,
    margin: "6%",
  },
  contentInfor: {
    flex: 4,
  },
  review: {
    flexDirection: "row",
    marginTop: 14,
  },
  star: {
    flexDirection: "row",
    marginRight: 30,
  },
  star_1: {},
  number: {
    fontWeight: "bold",
    fontSize: 24,
  },
  numberLine: {
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#00000094",
  },
  font: {
    fontWeight: 400,
    fontSize: 17,
  },
  sale: {
    marginTop: 14,
  },
  saleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FA0000",
  },
  button: {
    marginTop: 12,
    padding: 15,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 70,
  },
  buttonFooter: {
    flex: 2,
    justifyContent:"flex-end"
  },
  button1: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  },
  buttonText1: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight:"bold"
  },
});
