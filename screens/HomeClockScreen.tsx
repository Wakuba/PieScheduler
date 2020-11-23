import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";
import {Clock} from "../components/Clock";

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

const HomeClockScreen = (props) => {

    return (
        <View>
            <StatusBar barStyle="light-content" />
                <SafeAreaView
                  style={styles.safeAreaView}>
                    <ScrollView
                      centerContent={true}
                      contentInsetAdjustmentBehavior="automatic"
                      style={styles.scrollView}
                      >
                        <Clock 
                        onPress={() => props.navigation.navigate('Edit')}
                        />
                    </ScrollView>
                </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView:{
      
    },

    safeAreaView:{

    }
})

export default HomeClockScreen;