import Clock from 'components/Clock/Clock.jsx';

import './TaskPanel.less';

export default class TaskPanel extends React.Component {
    render() {
        return (
            <div className="task-panel">
                <Clock amPm />
            </div>
        );
    }
}