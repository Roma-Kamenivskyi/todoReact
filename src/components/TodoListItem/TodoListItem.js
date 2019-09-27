import React, { Fragment, Component } from "react";
import "./TodoListItem.css";

class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };
  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { value, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item-label";

    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <Fragment>
        <li className="list-group-item todo-list-item">
          <span className={classNames} onClick={this.onLabelClick}>
            {value}
          </span>
          <div>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={onDeleted}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-info ml-2"
              onClick={this.onMarkImportant}
            >
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
