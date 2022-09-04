import React, {useState} from "react";
import {Link} from 'react-router-dom'
import Book from "./Book";

const SearchPage = ({allBooks, changeShelf}) => {


    const [query, setQuery] = useState("")
    const updateQuery = (query) => {
        setQuery(query.trim())
    }


    console.log(allBooks)

    const showing_BooksTitle = query === "" ? allBooks : allBooks.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
    console.log(showing_BooksTitle)
    const showing_BooksAuth = query === "" ? [] : allBooks.filter(book => book.authors.toString().toLowerCase().includes(query.toLowerCase()))
    const showing_BooksId = query === "" ? [] : allBooks.filter(book => book.id.toLowerCase().includes(query.toLowerCase()))


    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/"
                      className="close-search"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event => {
                            updateQuery(event.target.value)
                        })}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {showing_BooksTitle.map((book, index) => {
                        return (
                            <Book
                                key={index}
                                book={book}
                                changeShelf={changeShelf}
                                shelf={book.shelf}
                            />
                        )
                    })}
                    {showing_BooksAuth.map((book, index) => {
                        return (
                            <Book
                                key={index}
                                book={book}
                                changeShelf={changeShelf}
                                shelf={book.shelf}
                            />
                        )
                    })}
                    {showing_BooksId.map((book, index) => {
                        return (
                            <Book
                                key={index}
                                book={book}
                                changeShelf={changeShelf}
                                shelf={book.shelf}
                            />
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}


export default SearchPage;