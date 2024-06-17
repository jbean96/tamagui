//! tamagui-ignore
//! debug-verbose
import "./wdyr";

import {View as RNView} from "react-native";
import {Circle, YStack, createStyledContext, styled} from "tamagui";

const StyledStackContext = createStyledContext({condensed: true});

const StyledStack = styled(YStack, {
  context: StyledStackContext,
  name: "StyledStack",

  bg: "#AAAAAA",
  p: "$4",

  variants: {
    condensed: {
      false: {
        p: "$10",
        bg: "#DDDDDD",
      },
    },
  } as const,
  defaultVariants: {
    condensed: true,
  },
});

const StyledCircle = styled(Circle, {
  context: StyledStackContext,
  name: "StyledStackCircle",

  bg: "red",
  size: 100,

  variants: {
    condensed: {
      false: {
        bg: "blue",
      },
    },
  } as const,
});

export const Sandbox = () => {
  return (
    <RNView style={{width: "100%", height: "100%", padding: 50}}>
      <StyledStack $gtXs={{condensed: false}}>
        <StyledCircle />
      </StyledStack>
    </RNView>
  );
};
