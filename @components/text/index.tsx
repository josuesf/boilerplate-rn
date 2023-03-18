import {createText} from '@shopify/restyle';
import type {Theme} from '../theme';

export const Text = createText<Theme>();

export type TText = typeof Text;
