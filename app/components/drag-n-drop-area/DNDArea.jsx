import Item from 'components/drag-n-drop-area/components/item/Item';

import './dnd-area.scss';

@ReactClass
class DNDArea extends React.Component {
    state = {
        items: [
            {
                title: 'Item1',
                icon: 'http://w.ppy.sh/a/a4/Folder.png',
                pos: {
                    x: 20,
                    y: 20
                }
            },
            {
                title: 'Item2',
                icon: 'https://avatars2.githubusercontent.com/u/6177455?v=3&s=96',
                pos: {
                    x: 100,
                    y: 20
                }
            }
        ]
    };

    _overDrag = (e) => {
        const event = e.nativeEvent;

        event.preventDefault();
    };

    _onDrop = (e) => {
        const event = e.nativeEvent;
        const obj = JSON.parse(event.dataTransfer.getData('startOffset'));

        this.setState((prevState) => {
            prevState.items[obj.id].pos.x = event.layerX - obj.x;
            prevState.items[obj.id].pos.y = event.layerY - obj.y;

            return {
                items: prevState.items
            };
        });
    };

    render() {
        return (
            <div
                    className="dnd-area"
                    onDragOver={this._overDrag}
                    onDrop={this._onDrop}>
                {
                    this.state.items.map((item, i) => {
                        return (
                            <Item
                                    key={i}
                                    id={i}
                                    data={item}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default DNDArea;