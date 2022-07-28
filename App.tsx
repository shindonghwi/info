import React from "react";
import {Platform, StyleSheet, Text, useColorScheme} from "react-native";
import TextItem from "./components/TextItem";
import styled, {ThemeProvider} from "styled-components/native"
import {darkTheme, lightTheme} from "./styles/theme/defaultTheme";

const Header = styled.View`
  width: 100px;
  height: 100px;
  background-color: blue;
`

interface AA{
    path: string
}

const Container = styled.View`
  flex: 1;
`

const Poster: React.FC<AA> = ({ path }) => (
    <Container>
        <Text> ${path} </Text>
    </Container>
)

export default function App() {
    const OS = Platform.OS
    const isDark = useColorScheme() === "dark";

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Poster path={"sdasdfkjjk;sahjksalff"}/>
                <TextItem text={`${Platform.OS}` + "AA"}/>
            </Container>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
