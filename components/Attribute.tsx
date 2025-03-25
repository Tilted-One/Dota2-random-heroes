import { View, Text, Pressable, Image, StyleSheet, Alert } from 'react-native'
import Button from './Button'
export default function Type(props: any) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hero Attribute</Text>
            <View style={styles.content}>
                <Button name='Universal' title='all' imgSrc={require('../assets/hero_universal.png')} value={props.selectedAttribute} setValue={props.setSelectedAttribute} />
                <Button name='Strength' title='str' imgSrc={require('../assets/hero_strength.png')} value={props.selectedAttribute} setValue={props.setSelectedAttribute} />
                <Button name='Agility' title='agi' imgSrc={require('../assets/hero_agility.png')} value={props.selectedAttribute} setValue={props.setSelectedAttribute} />
                <Button name='Intelligence' title='int' imgSrc={require('../assets/hero_intelligence.png')} value={props.selectedAttribute} setValue={props.setSelectedAttribute} />
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        width: '100%',
        alignItems: 'center',

    },
    title: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center'
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 16,
        columnGap: 24,
        rowGap: 24,
    },
})