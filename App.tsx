import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Alert, Pressable, SafeAreaView, Platform, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Type from './components/Type';
import Attribute from './components/Attribute'
import Position from './components/Position';

export default function App() {
  interface HeroData {
    attack_type: string;
    primary_attr: string;
    roles: string[];
    [key: string]: any; // for other properties you don't use directly
  }

  const [randomHero, setrandomHero] = useState<HeroData | null>(null)
  const [data, setData] = useState<HeroData[]>([])
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedAttribute, setSelectedAttribute] = useState<string | null>(null)
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)


  useEffect(() => {
    fetch('https://api.opendota.com/api/heroStats')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to fetch hero data');
      });
  }, [1])
  function generateHero() {
    let filteredData = data;
    if (selectedType !== null) {
      filteredData = filteredData.filter((item) => item.attack_type == selectedType)
    }
    if (selectedAttribute !== null) {
      filteredData = filteredData.filter((item) => item.primary_attr == selectedAttribute)
    }
    if (selectedPosition !== null) {
      filteredData = filteredData.filter((item) => item.roles.includes(selectedPosition))
    }
    setrandomHero(filteredData[Math.floor(Math.random() * filteredData.length)])


  }
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{ flex: 1 }} source={require('./assets/greyfade.jpg')} style={{ width: '100%', height: '100%' }}>
        <SafeAreaView style={styles.SafeContainer}>
          <ScrollView>
            <View style={styles.content}>
              <Text style={{ color: '#FFF', fontSize: 18 }}>Generate Random Hero</Text>
              <View style={styles.viewContainer}>
                <Type selectedType={selectedType} setSelectedType={setSelectedType} />
                <Position selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />
              </View>
              <Attribute selectedAttribute={selectedAttribute} setSelectedAttribute={setSelectedAttribute} />
              <Pressable style={styles.button} onPress={generateHero}>
                <Text style={{ color: '#FFF', fontSize: 16 }}>
                  Generate
                </Text>
              </Pressable>
            </View>
            {randomHero &&
              <View style={styles.heroContainer} >
                <Hero randomHero={randomHero} />
              </View>
            }
          </ScrollView>
          {/* <View style={{ backgroundColor: 'red', height: 60 }}>
          </View> */}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="light" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SafeContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 32 : 0
  },
  content: {
    alignItems: 'center',
    paddingTop: 8,
    paddingHorizontal: 24
  },
  viewContainer: {
    flexDirection: 'row'
  },
  button: {
    height: 56,
    width: '100%',
    marginTop: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b22922',
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10.46,
    elevation: 9,
  },
  heroContainer: {
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  }
})