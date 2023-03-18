import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  layout,
  createVariant,
  VariantProps,
  createRestyleComponent,
  spacing,
  spacingShorthand,
  SpacingProps,
  SpacingShorthandProps,
  LayoutProps,
} from '@shopify/restyle';
import {Theme} from '../theme';
import {Text} from '../text';

const ButtonContainer = createRestyleComponent<
  LayoutProps<Theme> &
    SpacingShorthandProps<Theme> &
    SpacingProps<Theme> &
    VariantProps<Theme, 'buttonVariants'> &
    React.ComponentProps<typeof TouchableOpacity>,
  Theme
>(
  [
    layout,
    spacing,
    spacingShorthand,
    createVariant({
      themeKey: 'buttonVariants',
    }),
  ],
  TouchableOpacity,
);

interface ButtonProps extends React.ComponentProps<typeof ButtonContainer> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  disabled,
  variant = 'primary',
  ...rest
}) => {
  return (
    <ButtonContainer
      variant={variant}
      onPress={onPress}
      disabled={disabled}
      {...rest}>
      <Text color={'white'} fontWeight="900">
        {label}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
