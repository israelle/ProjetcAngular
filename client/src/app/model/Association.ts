import {Picture} from './Picture';
import {Logo} from './Logo';

export class Association {
  id: number;
  name?: string;
  description?: string;
  picture?: Picture;
  logo?: Logo;
}
