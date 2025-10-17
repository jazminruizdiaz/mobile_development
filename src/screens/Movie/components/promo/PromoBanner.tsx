import { View, ImageBackground, Text, ImageSourcePropType, Image } from "react-native";

import { Button } from "../../../../components/atoms/Button/Button";
import { styles } from "./PromoBanner";

interface PromoProps {
    image: ImageSourcePropType;
    title: string;
    description: string;
    buttonText: string;
    onPress?: () => void;
}

export const PromoBanner: React.FC<PromoProps> = ({
    image, title, description, buttonText, onPress
}) => {
    return (
        <View style={styles.container}>
            <Image
                source={typeof image === "string" ? { uri: image } : image} style={styles.image} resizeMode="cover">
            </Image>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>

            <Button title={buttonText} variant="primary" onPress={onPress ?? (() => console.log("pressed"))} />

        </View>
    )
}



