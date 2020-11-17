import React,{useEffect,useState} from 'react';
import { useColorScheme} from "react-native";
import {Clock} from "../components/Clock";
import styled, { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../themes";
import * as firebase from 'firebase';
import "firebase/firestore";

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

type PieContents = {
  name:string;
  beginningHour:number;
  beginningMinute:number;
  terminationHour:number;
  terminationMinute:number;
}

export default function HomeClockScreen (props) {
  const theme = useColorScheme() === "dark" ? darkTheme : lightTheme;
  const [pieDatum,setPieDatum] = useState<PieContents[]>([])

    useEffect(() => {
        getFirebaseItems();
    },[])

    const getFirebaseItems = async() => {
        const snapshot = await firebase.firestore().collection("pieContents").get();
        const pieDatum = snapshot.docs.map(doc => doc.data() as PieContents);
        setPieDatum(pieDatum);
        // console.log(pieDatum[0]['beginningHour']);
}

    const timeRatio = 
    const reduceFunc = (acc,cur,index,Object) => {acc[acc.length] = {x:Object[index]["name"],y:time},acc};
    const adjustedPieDatum = pieDatum.reduce(reduceFunc,[])
    /*
    [{x:"整形外科",y:70},{x:"眼科",y:30},{x:循環器,y:160}]
    */

  return (
      <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" />
              <SafeAreaView>
                  <ScrollView
                    centerContent={true}
                    contentInsetAdjustmentBehavior="automatic">
                      <Clock 
                      onPress={() => props.navigation.navigate('Edit')}
                      data={pieDatum}
                      />
                    
                  </ScrollView>
              </SafeAreaView>
      </ThemeProvider>
  );
};

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
`;

const SafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.bgColor};
  flex: 1;
`;

const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  barStyle: theme.style === "dark" ? "light-content" : "dark-content",
}))``;
