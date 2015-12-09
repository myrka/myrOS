import Label from 'components/drag-n-drop-area/components/label/Label';

import './dnd-area.less';

@ReactClass
class DNDArea extends React.Component {
    render() {
        return (
            <div className="dnd-area">
                <Label />
            </div>
        );
    }
}

export default DNDArea;