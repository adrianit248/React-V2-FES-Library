import React from 'react'
import {books} from "../data"
import Book from './ui/Book'

const Discounted = () => {
  return (
    <section id="recent">
        <div className="container">
            <div className="row">
                <div className="section__title">Discount <span className="purple">Books</span></div>

                <div className="books">
                    {books.map((book) => <Book book={book} key={book.id} />)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discounted