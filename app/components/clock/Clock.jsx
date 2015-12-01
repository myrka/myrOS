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
        hours:      this._getCurrentHours(),
        minutes:    this._getCurrentMinutes(),
        seconds:    this._getCurrentSeconds()
    };

    _updateDate = () => {
        this.setState({
            hours:      this._getCurrentHours(),
            minutes:    this._getCurrentMinutes(),
            seconds:    this._getCurrentSeconds()
        });
    };

    _getCurrentHours() {
        const date = new Date();
        const hours_24 = date.getHours();

        let hours_12 = hours_24 % 12;

        hours_12 = hours_12 ? hours_12 : 12;

        return(this.props.hourFormat === '12' ? hours_12 : hours_24);
    }

    _getCurrentMinutes() {
        const date = new Date();

        return (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes());
    }

    _getCurrentSeconds() {
        const date = new Date();

        return (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());
    }

    componentDidMount() {
        setInterval(this._updateDate, 1000);
    }

    render() {
        return (
            <span className="clock">
            <span className="hours">{this.state.hours}:</span>
            <span className="minutes">{this.state.minutes}:</span>
            <span className="seconds">{this.state.seconds} </span>
            {
                this.props.hourFormat === '12' ? 
                    <span className="formatHour">
                        {this.state.hour >= 12 ? 'PM' : 'AM'}
                    </span> : null
            }
            </span>
        );
    }
}

export default Clock;