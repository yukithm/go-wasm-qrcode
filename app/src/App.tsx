import React from "react";
import QrGenerator from "./components/QrGenerator";
import { Typography, ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme();
theme.typography.h1 = {
    ...theme.typography.h2,
};

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Typography variant="h1" color="primary" align="center">
                    QR Code Generator
                </Typography>
                <QrGenerator />
            </ThemeProvider>
        </div>
    );
}

export default App;
