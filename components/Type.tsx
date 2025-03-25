import { View, Text, Pressable, Image, StyleSheet, Alert } from 'react-native'
import Button from './Button'

type TypeTypes = {
    selectedType: string | null,
    setSelectedType: React.Dispatch<React.SetStateAction<string | null>>
}
export default function Type(props: TypeTypes) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hero Type</Text>
            <View style={styles.content}>
                <Button name='Melee' title='Melee' imgSrc={require('../assets/melee.png')} value={props.selectedType} setValue={props.setSelectedType} />
                <Button name='Ranged' title='Ranged' imgSrc={require('../assets/midlaneicon.png')} value={props.selectedType} setValue={props.setSelectedType} />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        width: '50%',
        alignItems: 'flex-start'
    },
    title: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'left'
    },
    content: {
        rowGap: 16,
        justifyContent: 'space-between',
        marginTop: 16,
        columnGap: 40
    },
})