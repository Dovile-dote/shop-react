import { useContext } from 'react';
import BackContext from '../BackContext';

function Line({ line }) {
  const { a } = useContext(BackContext);

  const handleDelete = () => {
    // setDeleteData(tree);
  };

  const handleEdit = () => {
    // setModalData(tree);
  };

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <b>{line.title}</b>
        </div>
        <div className="buttons">
          <button className="btn btn-outline-success ml-2" onClick={handleEdit}>
            EDIT
          </button>
          <button
            className="btn btn-outline-danger ml-2"
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
}

export default Line;
