/// <reference types="react" />
import './GroupButton.css';
export interface GroupButtonProps {
    labels: string[];
    clickHandler: (label: string) => any;
    className: string;
}
declare const GroupButton: (props: GroupButtonProps) => JSX.Element;
export default GroupButton;
