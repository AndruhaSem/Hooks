import React, { useState } from "react";
import PropsTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
import "../../styles.css";
import SatutusItem from "./status-item";
const Statusbar = ({ children, value, onChange }) => {
    return (
        <div>
            <div className="wrapper">
                <ul className="step-progress">
                    {React.Children.map(children, (child) => {
                        if (child.type === SatutusItem) {
                            return React.cloneElement(child, {
                                isDone: child.props.value <= value,
                                onClick: onChange
                            });
                        }
                        return null;
                    })}
                </ul>
            </div>
        </div>
    );
};
Statusbar.propTypes = {
    children: PropsTypes.array.isRequired,
    isDone: PropsTypes.bool,
    value: PropsTypes.number.isRequired,
    onChange: PropsTypes.func
};
const ChildrenExercise = () => {
    const [value, setValue] = useState(1);

    const handleChangeValue = (nextValue) => {
        setValue(nextValue);
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Statusbar value={value} onChange={handleChangeValue}>
                <SatutusItem value={1}>
                    <Component />
                </SatutusItem>
                <SatutusItem value={2}>
                    <Component />
                </SatutusItem>
                <SatutusItem value={3}>
                    <Component />
                </SatutusItem>
            </Statusbar>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
