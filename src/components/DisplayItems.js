
import React, { Component } from 'react';

class DisplayItem extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items
                        .map(item=>
                        <li key={item.key} completed={item.complete.toString()}>
                            <input
							className="toggletask"
							type="checkbox"
                            onClick={()=>this.props.onToggle(item)}
                            checked={item.complete}
						    />
                            <label>
                                {item.itemname}
                            </label>
                            <button className="destroy" onClick={this.props.onRemove} />
                        </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default DisplayItem;