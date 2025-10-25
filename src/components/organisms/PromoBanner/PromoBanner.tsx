import { View, ImageSourcePropType, Image } from "react-native";

import { Button } from '../../atoms/Button/Button';
import { styles } from './styles';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { useThemedColors } from '../../../hooks/useThemedColors';

interface PromoProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  buttonText: string;
  onPress?: () => void;
}

export const PromoBanner: React.FC<PromoProps> = ({
  image,
  title,
  description,
  buttonText,
  onPress,
}) => {
    const colors = useThemedColors();
    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Image
                source={typeof image === "string" ? { uri: image } : image} style={styles.image} resizeMode="cover" />
            <View style={styles.textContainer}>
                <TextCustom style={[{ color: colors.textPrimary }]} variant="subtitle" >{title}</TextCustom>
                <TextCustom variant="body" style={[{ color: colors.textPrimary }]}>{description}</TextCustom>
            </View>

            <Button textStyle={styles.buttonText} title={buttonText} variant="primary" onPress={onPress ?? (() => console.log("pressed"))} />

        </View>
    )
}
