import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View} from "react-native";
import { Clock, HoursLine} from "../components/ClockParts";
import { width, centerWidth} from '../helpers/positionValue'
import * as firebase from 'firebase';
import "firebase/firestore";
import FanShape from '../components/FanShape';
import { Svg,Text } from 'react-native-svg';
import ClockEditButton from '../components/ClockEditButton';

if ( !firebase.apps.length ) {
  const firebaseConfig = {
      apiKey: "AIzaSyDslWma3rWuEeVo2j7NqDFStJ96sfRKdgw",
      authDomain: "piescheduler.firebaseapp.com",
      databaseURL: "https://piescheduler.firebaseio.com",
      projectId: "piescheduler",
      storageBucket: "piescheduler.appspot.com",
      messagingSenderId: "688029670221",
      appId: "1:688029670221:web:0ef06736fa32eebabff504",
      measurementId: "G-HM7LP9PR90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}


const HomeClockScreen = (props:any) => {
    return (
        <View>
            <StatusBar barStyle="dark-content" />
                <SafeAreaView
                >
                    <ScrollView
                      centerContent
                      contentInsetAdjustmentBehavior="automatic"
                      // style={styles.scrollView}
                    >
                        <Svg height={width} width={width}>
                            <Text x={centerWidth-22} y={width/2-20} stroke="none" fill="blue" fontSize="20">テスト</Text>
                            <FanShape 
                              startDegree={70}
                              finishDegree={150}
                              color='yellow'
                            />
                            <FanShape 
                              startDegree={200} 
                              finishDegree={240} 
                              color="red" 
                            />
                            <FanShape
                              startDegree={253}
                              finishDegree={380}
                              color="green" 
                            />
                            <Clock />
                            <HoursLine />
                        </Svg>
                        <ClockEditButton onPress={() => { props.navigation.navigate('Edit')}} />
                    </ScrollView>
                </SafeAreaView>
        </View>
    );
};

export default HomeClockScreen;