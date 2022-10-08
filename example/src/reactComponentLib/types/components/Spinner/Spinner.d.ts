/// <reference types="react" />
import './Spinner.css';
export interface SpinnerProps {
    color: string;
    className?: string;
}
declare const Spinner: (props: SpinnerProps) => JSX.Element;
export default Spinner;
