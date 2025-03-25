import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

type PositionTypes = {
    selectedPosition: string | null,
    setSelectedPosition: React.Dispatch<React.SetStateAction<string | null>>
}
export default function Position(props: PositionTypes) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hero Position</Text>
            <View style={styles.content}>
                <Button name='Carry' title='Carry' imgSrc={require('../assets/offlaneicon.png')} value={props.selectedPosition} setValue={props.setSelectedPosition} />
                <Button name='Support' title='Support' imgSrc={require('../assets/hardsupporticon.png')} value={props.selectedPosition} setValue={props.setSelectedPosition} />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        width: '50%',
        alignItems: 'flex-end'
    },
    title: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'right'
    },
    content: {
        rowGap: 16,
        justifyContent: 'space-between',
        marginTop: 16,
        columnGap: 40
    },
})