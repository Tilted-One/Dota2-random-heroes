import { Pressable, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native'

type ButtonType = {
    value: string | null
    setValue: React.Dispatch<React.SetStateAction<string | null>>
    name: string
    title?: string
    imgSrc: ImageSourcePropType
}
export default function Button(props: ButtonType) {

    return (
        <Pressable style={[styles.buttonContainer, props.value === props.title ? styles.buttonActiveContainer : null]}
            onPress={() => {
                if (props.value == props.title) {
                    props.setValue(null)
                }
                else {
                    props.setValue(props.title!)
                }
            }
            }>
            <Image style={styles.img} source={props.imgSrc}></Image>
            <Text style={styles.text}>{props.name}</Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: 'auto',
        minWidth: 130

    },
    buttonActiveContainer: {
        backgroundColor: '#ffffff50',
    },
    img: {
        width: 24,
        height: 24,
    },
    text: {
        color: '#FFF',
        fontSize: 15,
        marginLeft: 8
    }
})