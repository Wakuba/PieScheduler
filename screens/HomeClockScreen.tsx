import React from 'react';
import { useColorScheme} from "react-native";
import {Clock} from "../components/Clock";
import styled, { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../themes";


export const HomeClockScreen = (props) => {
  const theme = useColorScheme() === "dark" ? darkTheme : lightTheme;

  

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          centerContent={true}
          contentInsetAdjustmentBehavior="automatic">
          <Clock 
          onPress={() => {return props.navigation.navigate('Edit');}} />
          
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
`;

const SafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.bgColor};
  flex: 1;
`;

const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  barStyle: theme.style === "dark" ? "light-content" : "dark-content",
}))``;
