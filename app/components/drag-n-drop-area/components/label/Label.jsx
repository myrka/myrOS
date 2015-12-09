import './label.less';

@ReactClass
class Label extends React.Component {
    render() {
        return (
            <div className="label">
                <div className="icon"></div>
                <div className="icon-name">Name</div>
            </div>
        );
    }
}

export default Label;