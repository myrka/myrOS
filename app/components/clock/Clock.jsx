import './clock.less';

@ReactClass
class Clock extends React.Component {
    static propTypes = {
        hourFormat: React.PropTypes.oneOf([ '12', '24' ])
    };

    static defaultProps = {
        hourFormat: '12'
    };

    state = {
        date: new Date()
    };

    _parseDate = () => {
        const { date } = this.state;
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        hours = this.props.hourFormat === '24' || hours <= 12 ? hours : hours % 12;

        return {
            hours   : hours < 10 ? `0${hours}` : String(hours),
            minutes : minutes < 10 ? `0${minutes}` : String(minutes),
            seconds : seconds < 10 ? `0${seconds}` : String(seconds)
        };
    };

    _updateDate = () => {
        this.setState({ date: new Date() });
    };

    componentDidMount() {
        setTimeout(() => {
            this._updateDate();
            setInterval(this._updateDate, 1000);
        }, 1000 - Date.now() % 1000); // syncing clock with real time
    }

    render() {
        const { hours, minutes, seconds } = this._parseDate();
        const time = [ hours, minutes, seconds ].join(':').split('');

        return (
            <div className="clock">
                {
                    time.map((symbol, index) => (
                        <div key={index} className={symbol === ':' ? 'separator' : 'number'}>{symbol}</div>
                    ))
                }
                {
                    this.props.hourFormat === '12' &&
                        <div className="hour-format">
                            {this.state.date.getHours() >= 12 ? 'PM' : 'AM'}
                        </div>
                }
            </div>
        );
    }
}

export default Clock;