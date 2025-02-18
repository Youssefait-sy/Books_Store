import { useSelector } from "react-redux";
const BooksInfo = () => {
    const bookData = useSelector(data => data.booksData.getBook);
    const showInfo = useSelector(data => data.booksData.showInfo);
    // const isSet = useSelector(data => data.auth.isSet);
    return (
        <div className="div-book-info">
            <h1>Book Details</h1>
            {showInfo ? <div key={bookData.id} className="p-2 mt-2">
                <p className="fs-4"><strong>Title:</strong> {bookData.title}</p>
                <p className="fs-4"><strong>Price:</strong> {bookData.price}$</p>
                {/* <p className="fs-4"><strong>{!isSet ? 'Auth :' : ''}</strong> {!isSet ? bookData.userName : ''}</p> */}
                <p className="fs-4"><strong>Description:</strong> {bookData.description}</p>
            </div> : ''}
        </div>
    )
}

export default BooksInfo;