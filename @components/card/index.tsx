import {
  createVariant,
  VariantProps,
  createRestyleComponent,
  spacing,
  spacingShorthand,
  SpacingProps,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {Theme} from '../theme';

// type Props = SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'>;
interface Props
  extends SpacingProps<Theme>,
    SpacingShorthandProps<Theme>,
    SpacingProps<Theme>,
    VariantProps<Theme, 'cardVariants'> {
  children: React.ReactNode;
}
export const Card = createRestyleComponent<Props, Theme>([
  spacing,
  spacingShorthand,
  createVariant({themeKey: 'cardVariants'}),
]);
