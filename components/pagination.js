import ReactPaginate from 'react-paginate';
import clsx from 'clsx';

const Label = ({ children, className }) => {
  return (
    <div className={clsx([
      'h-12 px-5 rounded-full bg-grey-dark text-white flex justify-center items-center',
      'hover:bg-green transition-all',
      className])}>
      {children}
    </div>
  );
};

const Pagination = ({ onPageChange, numberOfPages }) => {
  return (
    <ReactPaginate
      className={'w-fit mx-auto h-5 mt-10 flex gap-2'}
      breakLabel="..."
      nextLabel={<Label className={'ml-4'}>&gt;</Label>}
      onPageChange={({ selected }) => onPageChange(selected)}
      pageRangeDisplayed={5}
      pageLabelBuilder={(page) => <Label>{page}</Label> }
      pageCount={numberOfPages}
      previousLabel={<Label className={'mr-4'}>&lt;</Label>}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
