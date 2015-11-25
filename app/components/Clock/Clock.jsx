import './Clock.less';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateNow: 0
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
            dateNow: this.props.amPm ? date.toLocaleTimeString('en-US') : date.toLocaleTimeString('en-GB')
        });
    }

    _showDate() {
        return <span className="clock">{this.state.dateNow}</span>;
    }

    render() {
        return (
            <div>
                {this._showDate()}
            </div>
        );
    }
}