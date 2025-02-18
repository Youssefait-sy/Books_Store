import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../Api/insertBook";

const AddForm = () => {
    const Title = useRef();
    const Price = useRef();
    const Description = useRef();
    const count = useSelector(data => data.booksData.books.length);
    const isLogedIn = useSelector(data => data.auth.isLogedIn);
    const dispatch = useDispatch();

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(insertBook({
            id:count + 1,
            title:Title.current.value,
            price: parseInt(Price.current.value),
            description:Description.current.value
        }));
        Title.current.value = "";
        Price.current.value = "";
        Description.current.value = "";
    }

    return (
        <div className="form-books w-50">
            <h1>Insert Book</h1>
            <form onSubmit={HandleSubmit} className="">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" ref={Title} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Price</label>
                    <input type="number" ref={Price} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Description</label>
                    <textarea className="form-control" ref={Description} />
                </div>
                <button className="btn btn-primary" disabled={!isLogedIn}>Submit</button>
            </form>
    </div>
    )
}

export default AddForm;