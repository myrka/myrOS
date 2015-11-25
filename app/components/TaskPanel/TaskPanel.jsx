import './TaskPanel.less';

export default class TaskPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentWillMount() {
        this._getTime();
    }

    componentDidMount() {
        setInterval(() => {
            this._getTime();
        }, 1000);
    }

    _getTime() {
        const date = new Date();

        this.setState({
            hours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
            minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
            seconds: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        });
    }

    _showDate() {
        return <span className="clock">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>;
    }

    render() {
        return (
            <div className="task-panel">
                {this._showDate()}
            </div>
        );
    }
}