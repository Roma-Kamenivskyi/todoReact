import React, { Fragment, Component } from "react";
import "./TodoListItem.css";

class TodoListItem extends Component {
  state = {
    done: false
  };

  handleLabelClick = () => {
    this.setState({
      done: !this.state.done
    });
  };

  render() {
    const { value, important } = this.props;
    const { done } = this.state;

    const itemStyle = {
      color: important ? "#1B9A65" : "black",
      fontWeight: important ? "bold" : "normal"
    };
    let classNames = "todo-list-item-label";

    if (done) {
      classNames += " done";
    }

    return (
      <Fragment>
        <li className="list-group-item todo-list-item" style={itemStyle}>
          <span className={classNames} onClick={this.handleLabelClick}>
            {value}
          </span>
          <div>
            <button type="button" className="btn btn-outline-danger">
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button type="button" className="btn btn-outline-info ml-2">
              <i className="fa fa-exclamation" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      </Fragment>
    );
  }

  static defaultProps = {
    important: false
  };
}

export default TodoListItem;
