//! tamagui-ignore
//! debug-verbose
import "./wdyr";

import {SliderDemo} from "@tamagui/demos";
import {useState} from "react";
import {View as RNView} from "react-native";
import {
  AnimatePresence,
  Button,
  Circle,
  Square,
  Stack,
  Text,
  YStack,
  styled,
} from "tamagui";

// import { DatePickerExample } from '../../bento/src/components/elements/datepickers/DatePicker'

const Row = styled(Stack, {
  tag: "button",
  flexDirection: "row",
  alignItems: "center",
  minWidth: 300,
  alignSelf: "flex-start",
  p: "$2",
  cursor: "pointer",

  bg: "#DDDDDD",

  hoverStyle: {
    bg: "#DDFFDD",
  },

  pressStyle: {
    bg: "#FFDDDD",
  },

  group: "Row",
});

const RowText = styled(Text, {
  "$group-Row-hover": {
    color: "#FF00FF",
    pl: "$2",
  },

  "$group-Row-press": {
    color: "#00FFFF",
  },
});

export const Sandbox = () => {
  return (
    <RNView style={{width: "100%", height: "100%", padding: 50}}>
      <Row>
        <RowText>Hello</RowText>
      </Row>
    </RNView>
  );
};
