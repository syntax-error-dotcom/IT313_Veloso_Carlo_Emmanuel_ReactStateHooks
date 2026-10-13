import { useState } from "react";
import { View, Button, Text } from "react-native";

import PracticeTracker from "../components/PracticeTracker";
import Stopwatch from "../components/Stopwatch";
import useStopwatch from "../hooks/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolved = () => setSolved((s) => s + 1);

  const handleReset = () => setSolved(0);

  const handleStart = () => setIsRunning(true);

  const handleStop = () => setIsRunning(false);

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 150,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Welcome to Tracker!
      </Text>
      <Text style={{ fontSize: 13, fontWeight: "light", marginBottom: 20 }}>
        Press Start to start Timer, Press Solve if you have solve!
      </Text>


      <View style={{}}>
        <View style={{ marginRight: 10, paddingBottom: 20 }}>
          <PracticeTracker
            
            solved={solved}
            onSolve={handleSolved}
            onReset={handleReset}
          />
        </View>
      </View>

      <Stopwatch seconds={seconds} isRunning={isRunning} />

      <View style={{ flexDirection: "row", alignContent: "center", marginTop: 10 }}>
        
        <View style={{marginRight:10}}>
            <Button title="Start" onPress={handleStart} color="#12d400"/>
        </View>
        <View style={{rowGap: 10}}>
            <Button title="Stop" onPress={handleStop} color="red" />
        </View>

      </View>

      
    </View>
  );
}
