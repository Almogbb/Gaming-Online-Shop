import { useDispatch } from 'react-redux';
import { paginationSliceAction } from '../store/pagination-slice';

import './Pagination.css';

function Pagination(props) {
  const dispatch = useDispatch();

  const lastPage = Math.ceil(props.gamesList.length / props.gamesPerPage);

  function setPage(dir) {
    dispatch(paginationSliceAction.setPage({ dir, lastPage }));
  }

  return (
    <section className='centered'>
      <button
        onClick={() => {
          setPage(-1);
        }}
      >
        Prev Page
      </button>
      <span className='currPage'>{props.currPage}</span>
      <button
        onClick={() => {
          setPage(1);
        }}
      >
        Next Page
      </button>
    </section>
  );
}

export default Pagination;
