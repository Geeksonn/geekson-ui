/// <reference types="react" />
import './Button.css';
export interface ButtonProps {
    label: string;
    clickHandler: () => {};
    accent?: string;
    className?: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
