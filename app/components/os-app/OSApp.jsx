import TaskPanel from 'components/task-panel/TaskPanel';
import DNDArea from 'components/drag-n-drop-area/DNDArea';

import './os-app.less';

@ReactClass
class OSApp extends React.Component {
    render() {
        return (
            <main>
                <TaskPanel />
                <div className="desktop-container">
                    <DNDArea />
                </div>
            </main>
        );
    }
}

export default OSApp;