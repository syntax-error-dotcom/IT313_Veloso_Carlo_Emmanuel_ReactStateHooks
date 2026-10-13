import { View, Text, Button } from 'react-native';

export default function PracticeTracker({solved, onSolve, onReset}) {
    return (
        <View>
            <Text style={{}}> Solved : {solved}</Text>
            
            <View style={{alignContent: "center", marginTop: 10 }}>
                <View style={{marginBottom: 10}}>
                    <Button title="Solve +1" onPress={onSolve} color="#fccb00" ></Button>
                </View>

                <View>
                    <Button title="Reset" onPress={onReset} color="#1273de"></Button>            
                </View>
                
                
            </View>

            <View style={{ alignContent: "center", marginTop: 10 }}>
                {solved >= 5  && <Text style={{fontWeight: 'bold', fontSize: 16, textAlign:'center'}}>Great Job!</Text>}
            </View>
            
        </View>

    );



}