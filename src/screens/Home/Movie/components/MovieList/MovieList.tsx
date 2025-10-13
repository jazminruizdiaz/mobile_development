import { DAText } from '../../../../../components/atoms/DAText/DAText';
import { View } from 'react-native';
import { styles } from './styles';

interface MovieListProps {
  title: string;
}

export const MovieList = ({ title }: MovieListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DAText variant="title"> {title} </DAText>
        <DAText variant="subtitle">See More</DAText>
      </View>
    </View>
  );
};
