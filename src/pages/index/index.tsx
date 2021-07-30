import { Component } from "react";
import { View, Text, Canvas } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.css";

export default class Index extends Component {

  componentDidMount() {
    setTimeout(() => {
      Taro.createSelectorQuery()
        .select('#text')
        .node()
        .exec(res => console.log(res));
    }, 3000)
  }

  render() {
    return (
      <View className="index">
        <Text id="text">Hello world!</Text>
        <Canvas id="canvas" type="2d" />
      </View>
    );
  }
}
