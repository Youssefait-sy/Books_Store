import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllBooks from "../Api/booksApi";
import { deletetBook } from "../Api/deleteBook";
import { getBookInfo } from "../Store/bookSlice";

const BooksList = () => {
    const books = useSelector(data => data.booksData.books);
    const bookData = useSelector(data => data.booksData.getBook);
    console.log(bookData);
    const isLoading = useSelector(data => data.booksData.isLoading);
    const isLogedIn = useSelector(data => data.auth.isLogedIn);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllBooks())
    },[dispatch])
    return (
        <div className="books-list-container">
            <h1>Books List</h1>
            {isLoading ? <h1>Loading...</h1> : 
                (books.length > 0 ? 
                    books.map(book => 
                    <div className="books-list" key={book.id}>
                        <h4>{book.title}</h4>
                        <div>
                            <button onClick={()=> dispatch(getBookInfo(book.id))} className="btn btn-primary mx-1">Read</button>
                            <button onClick={() => dispatch(deletetBook(book.id))} className="btn btn-danger" disabled={!isLogedIn}>Delete</button>
                        </div>
                    </div>) 
                    : <h3>No Books</h3>
                )
            }
        </div>
    )
}

export default BooksList;