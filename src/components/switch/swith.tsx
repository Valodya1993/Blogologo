import './switch.css';

export const Switch = () => {

    return (
        <label id="switch" className="switch">
            <input type="checkbox" id="slider"/>
            <span className="slider round"></span>
        </label>
    );
}