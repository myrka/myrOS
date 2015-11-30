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
        dateNow: this._getCurrentDate()
    };

    _updateDate = () => {
        this.setState({
            dateNow: this._getCurrentDate()
        });
    };

    _getCurrentDate() {
        const date = new Date();

        return date.toLocaleTimeString(this.props.hourFormat === '12' ? 'en-US' : 'en-GB');
    }

    componentDidMount() {
        setInterval(this._updateDate, 1000);
    }

    render() {
        return (
            <span className="clock">
              {this.state.dateNow}
            </span>
        );
    }
}

export default Clock;