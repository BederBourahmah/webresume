import React from 'react';
import BigScreen from "./Components/BigScreen/BigScreen";
import SmallScreen from "./Components/SmallScreen/SmallScreen"

const App: React.FC = () => {
  if (isSmallScreen()) {
    return <SmallScreen />;
  }
  return <BigScreen />
}

const isSmallScreen = (): boolean => {
  if (window.innerWidth < 750) {
    return true;
  }
  return false;
}

export default App;
