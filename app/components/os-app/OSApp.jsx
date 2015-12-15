import TaskPanel from 'components/task-panel/TaskPanel';

import './os-app.scss';

@ReactClass
class OSApp extends React.Component {
    render() {
        return (
            <main>
                <TaskPanel />
            </main>
        );
    }
}

export default OSApp;