import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";

// MobX
import { observer } from "mobx-react-lite";
import BottomTabs from "./src/navigation/BottomTabNavigation/BottomTabs";

enableScreens();

const App: React.FC = observer(() => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

export default App;
