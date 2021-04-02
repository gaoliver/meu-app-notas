import React from "react"
import { StatusBar } from "expo-status-bar";

import NotasApp from './Components/NotasApp'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />
      <NotasApp />
      <Footer />
    </>
  );
}
