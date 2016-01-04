import Clock from 'components/clock/Clock';

import './task-panel.scss';

@ReactClass
class TaskPanel extends React.Component {
    render() {
        return (
            <div className="task-panel">
                <div className="clock-container">
                    <Clock hourFormat="12" />
                </div>
            </div>
        );
    }
}

export default TaskPanel;