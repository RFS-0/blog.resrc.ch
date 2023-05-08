import './styles/shared-button-styles.css';
import './styles/outlined-styles.css';
import { Button, ButtonProps } from './Button';

export const OutlinedButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      {...props}
    />
  );
}
