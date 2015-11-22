import 'babel/polyfill';

import TaskPanel from 'components/TaskPanel/TaskPanel.jsx';

import './app.less';

@ReactClass
class OS extends React.Component {
    render() {
        return (
            <div className="os">
                <TaskPanel />
            </div>
        );
    }
}

ReactDOM.render(<OS />, document.getElementById('app-container'));