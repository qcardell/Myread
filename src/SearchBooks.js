import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class SearchBooks extends Component {
	state = {
		query:''
	}
	
	updateQuery = (query) => {
		this.setState({ query: query.trim()})
		
	}
	render(){
		var showingBooks = [];
		var Obook = [];
		
		//check to see if newbooks is undefine and if not it set showing books equal to newbooks
		if((this.props.newbooks !== undefined)&&(this.props.newbooks.length > 0)){
				showingBooks = this.props.newbooks;
		}
		Obook = this.props.books;
		//console.log(Obook);
		
		var i,a;
		for (i = 0; i < showingBooks.length; i++) {
			//console.log("i = " + i);
			showingBooks[i]['shelf'] = "none";
			for (a = 0; a < Obook.length; a++) {
				//console.log(a);
				if(Obook[a].id === showingBooks[i].id){
					console.log('match');
					showingBooks[i].shelf = Obook[a].shelf;
					console.log(Obook[a].shelf);
					console.log(showingBooks[i].shelf);
					
				}
			}
			
			
			if(showingBooks[i].imageLinks === undefined){
				var imageLinks= [
					{smallThumbnail: "http://placehold.it/500x500", 
					thumbnail: "http://placehold.it/500x500"}
				]
				showingBooks[i]['imageLinks'] = imageLinks[0];
			}
		}
		console.log(showingBooks);
		//console.log(this.props.books);
			return(
				<div className="search-books">
					<div className="search-books-bar">
						<Link className="close-search" to="/" onClick={() => this.setState({ showSearchPage: true })}>Close</Link>
						<div className="search-books-input-wrapper">
							{/*
								NOTES: The search from BooksAPI is limited to a particular set of search terms.
								You can find these search terms here:
								https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

								However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
								you don't find a specific author or title. Every search is limited by search terms.
								*/}
								<input 
									type="text" 
									placeholder="Search by title or author"
									onBlur={(event) => this.props.onSearchBooksvalue(event.target.value)}
								/>
						</div>
					</div>
						<div className="search-books-results">
							<ol className="books-grid">
								{showingBooks.map((book) =>(
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
												<div className="book-shelf-changer">
													<select name={book.id} defaultValue={book.shelf} onChange={this.props.onChangeBookValue}>
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
		)
	}
}
export default SearchBooks