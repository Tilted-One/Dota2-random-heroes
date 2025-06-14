import { View, Text, Image, StyleSheet } from 'react-native'


type HeroProps = {
    randomHero: {
        localized_name: string;
        img: string;
    };
};

export default function Hero(props: HeroProps) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.randomHero.localized_name}</Text>
            </View>
            <Image
                src={`https://cdn.akamai.steamstatic.com/${props.randomHero.img}`}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        paddingHorizontal: 8,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#FFF',
        shadowColor: '#FFF'
    },

    textContainer: {
        paddingVertical: 16,
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500', 
    },
    image: {
        flex: 1,
        height: 'auto',
        resizeMode: 'contain',
        borderRadius: 24,
        marginBottom: 16
    }
})