
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
                            id={item.key}
                            />
                            <label for={item.key} className="toggle">{item.complete? '\u2717':'\u2713'}</label>
                            <p className="itemcontent" style={{
                                textDecoration:item.complete?'line-through' : 'none'
                            }}>
                                {item.itemname}
                            </p>
                            <a href="javascript:void(0)" className="destroy" onClick={()=>this.props.onRemove(item)}>X</a>
                        </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default DisplayItem;