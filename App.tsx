import React from "react";
import {Platform, Text, useColorScheme} from "react-native";
import styled, {ThemeProvider} from "styled-components/native"
import {darkTheme, lightTheme} from "./styles/theme/defaultTheme";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ColorText = styled.Text`
  font-size: 50px;
`

interface ContainerProps {
    os?: string;
}

const Root: React.FC<ContainerProps> = ({os = Platform.OS}) => {

    const osIsWeb = os === "web"

    return (
        <Container>
            <ColorText style={{backgroundColor: osIsWeb ? 'red': 'blue'}}> {os} </ColorText>
        </Container>
    )
}


export default function App() {
    const isDark = useColorScheme() === "dark";

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>



            <Root/>
        </ThemeProvider>
    );
}