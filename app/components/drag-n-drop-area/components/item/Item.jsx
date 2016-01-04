import './item.scss';
import Window from 'components/drag-n-drop-area/components/window/window';

@ReactClass
class Item extends React.Component {
    _startDrag = (e) => {
        const event = e.nativeEvent;

        event.dataTransfer.setData('startOffset', JSON.stringify({
            x: event.offsetX,
            y: event.offsetY,
            id: this.props.id
        }));
    };

    _handlerDoubleClick = () => {
        console.log('click');
        return <Window />;
    }

    render() {
        const { title, icon, pos } = this.props.data;

        const style = {
            left: pos.x,
            top: pos.y
        };

        return (
            <div
                    className="item"
                    style={style}
                    draggable="true"
                    onDragStart={this._startDrag}
                    onDoubleClick={this._handlerDoubleClick}>
                <img draggable="false" className="icon" src={icon}/>
                <div className="title">{title}</div>
            </div>
        );
    }
}

export default Item;