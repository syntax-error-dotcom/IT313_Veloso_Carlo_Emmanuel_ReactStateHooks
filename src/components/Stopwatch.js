import { View, Text } from "react-native";


function formatTime (totalSeconds) {
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}


export default function Stopwatch({seconds, isRunning}) {

    return (
        <View>
            <View style={{backgroundColor: "black", width:70, height:30 }}>
                <Text style={{fontSize: 20, color: "white", fontWeight: "bold", textAlign: "center"}}>{formatTime(seconds)}</Text>
            </View>
            

            <View style={{}}>
                <Text style={{textAlign: 'center'}}> {isRunning ? 'Running.. ' : 'Paused'}</Text>
            </View>
            
        </View>

    )
}