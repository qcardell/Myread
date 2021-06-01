import React, {Component} from 'react'
import { Link } from 'react-router-dom'


function ListBooks (props){
	//console.log(props)
	//const currentlyreadbooks = this.props.books.filter( book => book.value == 'CurrentRead' );	
	//console.log('Props' , currentlyreadbooks)
		return(
		<div className="list-books">
			 <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{props.books.filter( book => book.shelf === 'currentlyReading').map((book) =>(
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
										<div className="book-shelf-changer">
											<select name={book.id} value={book.shelf} onChange={props.onChangeBookValue}>
												<option value="move" disabled>Move to...</option>
												<option value="currentlyReading">Currently Reading</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">None</option>
											</select>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">{book.authors}</div>
								</div>
							</li>
						))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{props.books.filter( book => book.shelf === 'wantToRead').map((book) =>(
						  <li key={book.id}>
							<div className="book">
							  <div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
								<div className="book-shelf-changer">
								  <select name={book.id} value={book.shelf} onChange={props.onChangeBookValue}>
									<option value="move" disabled>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								  </select>
								</div>
							  </div>
							  <div className="book-title">{book.title}</div>
							  <div className="book-authors">{book.authors}</div>
							</div>
						  </li>
						))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{props.books.filter( book => book.shelf === 'read').map((book) =>(
						  <li key={book.id}>
							<div className="book">
							  <div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
								<div className="book-shelf-changer">
								  <select name={book.id} value={book.shelf} onChange={props.onChangeBookValue}>
									<option value="move" disabled>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								  </select>
								</div>
							  </div>
							  <div className="book-title">{book.title}</div>
							  <div className="book-authors">J{book.authors}</div>
							</div>
						  </li>
						))}
                    </ol>
                  </div>
                </div>
				{/* <div className="bookshelf">
                  <h2 className="bookshelf-title">None</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{props.books.filter( book => book.shelf === 'none').map((book) =>(
						  <li key={book.id}>
							<div className="book">
							  <div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
								<div className="book-shelf-changer">
								  <select name={book.id} value={book.shelf} onChange={props.onChangeBookValue}>
									<option value="move" disabled>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								  </select>
								</div>
							  </div>
							  <div className="book-title">{book.title}</div>
							  <div className="book-authors">J{book.authors}</div>
							</div>
						  </li>
						))}
                    </ol>
                  </div>
				</div>*/}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
		</div>
		)
}


export default ListBooks