import React from 'react';

const ListTodoSortBy = (props) => {
  return (
    <React.Fragment>
      {!!props.data.length && (
        <div className="w-16 border-b-2 border-neutral-100 border-opacity-50 py-2">
          <select
            className="w-16 rounded-lg"
            value={props.sortedBy}
            onChange={props.onSorted}
          >
            <option value="text">text</option>
            <option value="input">input</option>
          </select>
        </div>
      )}
    </React.Fragment>
  );
};

export default ListTodoSortBy;
