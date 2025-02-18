import './booksStote/books.css';
import AddForm from './booksStote/addForm';
import BooksList from './booksStote/booksList';
import Header from './booksStote/header';
import BooksInfo from './booksStote/booksInfo';

function App() {
  return (
    <>
      <Header />
      <div className='container mt-4 mb-4'>
        <div className='d-flex justify-content-center'> 
            <AddForm />
        </div>
        <hr/>
        <div className="d-flex justify-content-between">
            <BooksList />
            <span className="side-bar"></span>
            <BooksInfo />
        </div> 
      </div>
    </>
  );
}

export default App;
