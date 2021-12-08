import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../Styles/styles';
export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://lh3.googleusercontent.com/proxy/nElbCCoGCIs8vDJh6WMyB8UVrXt8YlUUfIyqi1qeBURnmXLxIXna0kDA5TeCmMPoTfb0QGn3W7a4JmpN_E-1CSStKA',
          }}
        />
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffbc3f',
            borderRadius: 5,
            width: 300,
            padding: 10,
          }}
          onPress={() => {
            console.log('object');
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={{
                uri: 'https://www.freeiconspng.com/uploads/system-computer-icon--metronome-iconset--cornmanthe3rd-14.png',
              }}
              style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginRight: 10,
              }}
            />
            <Text
              style={{
                display: 'flex',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 15,
                fontFamily: 'math',
              }}>
              Programming Blogs
            </Text>
          </View>
        </TouchableOpacity>


        
      </View>



      <View style={styles.btnView}>
        <TouchableOpacity
          style={{
            backgroundColor: '#007bff',
            borderRadius: 5,
            width: 300,
            padding: 10,
          }}
          onPress={() => {
            console.log('object');
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={{
                uri: 'https://icons.veryicon.com/png/o/business/wealth-man/code-7.png',
              }}
              style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginRight: 10,
              }}
            />
            <Text
              style={{
                display: 'flex',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 15,
                fontFamily: 'math',
              }}>
              Our Courses
            </Text>
          </View>
        </TouchableOpacity>


        
      </View>



      <View style={styles.btnView}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffbc3f',
            borderRadius: 5,
            width: 300,
            padding: 10,
          }}
          onPress={() => {
            console.log('object');
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={{
                uri: 'https://www.freeiconspng.com/uploads/system-computer-icon--metronome-iconset--cornmanthe3rd-14.png',
              }}
              style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginRight: 10,
              }}
            />
            <Text
              style={{
                display: 'flex',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 15,
                fontFamily: 'math',
              }}>
              Programming Blogs
            </Text>
          </View>
        </TouchableOpacity>


        
      </View>
    </ScrollView>
  );
}
