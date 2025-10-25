import React, { useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { TMDB_IMAGE_BASE_URL } from '@env';
import { CastMember } from '../../../../../types/MovieCast';
import { styles } from './styles';
import { useThemedColors } from '../../../../../hooks/useThemedColors';
import { TextCustom } from '../../../../atoms/Text/TextCustom';

const DEFAULT_CAST_IMG = require('../../../../../assets/defaultcastimg.jpeg');

type CastItemProps = {
  member: CastMember;
};

export const CastItem = ({ member }: CastItemProps) => {
  const colors = useThemedColors();
  const [isLoading, setIsLoading] = useState(Boolean(member.profile_path));

  const imageSource = member.profile_path
    ? { uri: `${TMDB_IMAGE_BASE_URL}${member.profile_path}` }
    : DEFAULT_CAST_IMG;

  return (
    <View style={styles.actorCard}>
      <View style={styles.actorImageWrapper}>
        <Image
          source={imageSource}
          style={styles.actorImage}
          resizeMode="cover"
          onLoadStart={() => member.profile_path && setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
        {isLoading && (
          <View style={styles.loaderOverlay}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        )}
      </View>
      <TextCustom style={[styles.actorName, { color: colors.primary }]}>
        {member.name}
      </TextCustom>
      <TextCustom
        style={[styles.actorCharacter, { color: colors.textPrimary }]}
      >
        {member.character}
      </TextCustom>
    </View>
  );
};
