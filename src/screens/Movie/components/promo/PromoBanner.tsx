import { View, ImageSourcePropType, Image } from 'react-native';
import { Button } from '../../../../components/atoms/Button/Button';
import { styles } from './PromoBanner';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';

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
  return (
    <View style={styles.container}>
      <Image
        source={typeof image === 'string' ? { uri: image } : image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <TextCustom variant="subtitle">{title}</TextCustom>
        <TextCustom variant="body">{description}</TextCustom>
      </View>

      <Button
        textStyle={styles.buttonText}
        title={buttonText}
        variant="primary"
        onPress={onPress ?? (() => console.log('pressed'))}
      />
    </View>
  );
};
