import React , { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

/*
	books: [
		{
			"id": "1",
			"width": "128", 
			"height": "193", 
			"backgroundImage": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
			"booktitle": "To Kill a Mockingbird",
			"bookauthors": "Harper Lee",
			"shelf": "currentlyReading"
		},
		{
			"id": "2",
			"width": "128", 
			"height": "193", 
			"backgroundImage": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
			"booktitle": "Ender's Game",
			"bookauthors": "Orson Scott Card",
			"shelf": "currentlyReading"
		},
		{
			"id": "3",
			"width": "128", 
			"height": "193", 
			"backgroundImage": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
			"booktitle": "1776",
			"bookauthors": "David McCullough",
			"shelf": "wantToRead"
		},
		{
			"id": "4",
			"width": "128", 
			"height": "193", 
			"backgroundImage": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
			"booktitle": "Harry Potter and the Sorcerer's Stone",
			"bookauthors": "J.K. Rowling",
			"shelf": "wantToRead"
		},
		{
			"id": "5",
			"width": "128", 
			"height": "193", 
			"backgroundImage": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
			"booktitle": "The Hobbit",
			"bookauthors": "J.R.R. Tolkien",
			"shelf": "read"
		},
		{
			"id": "6",
			"width": "128", 
			"height": "193", 
			"backgroundImage": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
			"booktitle": "Oh, the Places You'll Go!",
			"bookauthors": "Seuss",
			"shelf": "read"
		},
		{
			"id": "7",
			"width": "128", 
			"height": "193", 
			"backgroundImage": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
			"booktitle": "The Adventures of Tom Sawyer",
			"bookauthors": "Mark Twain",
			"shelf": "read"
		}
	]
*/

class BooksApp extends Component {
	state = {
		books: [],
		newbooks: []
	}
	componentDidMount(){
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		})
	}
	
	searchNewBook(query){
		BooksAPI.search(query).then((newbooks) => {
			this.setState({newbooks})
			//console.log(newbooks);
		})
		
	}
	handlechange_search = (event,shelf) => {
		BooksAPI.update(this.state.newbooks.filter((b) => b.id === event.target.name)[0], event.target.value).then(book => {
			BooksAPI.getAll().then((books) => {
				this.setState({books})
			
			})
		})
	}
	
	handlechange = (event,shelf) => {
		let book = Object.assign({}, this.state.books.filter((b) => b.id === event.target.name));   //creating copy of object
		console.log(book[0]);
		book[0].shelf = event.target.value;//updating value
		BooksAPI.update(this.state.books.filter((b) => b.id === event.target.name)[0], event.target.value)
		this.setState({book});
		
		
		/*ContactsAPI.create(contact).then(contact => {
			this.setState(state => ({
				contacts: state.contacts.concat([contact])
			}))
		})*/
		/*if(this.state.books.filter((b) => b.id === event.id).length > 0){
			console.log(this.state.books.filter((b) => b.id === event.target.id)[0].id)
			let book = Object.assign({}, this.state.books.filter((b) => b.id === event.target.name));   //creating copy of object
			console.log(book[0]);
			book[0].shelf = event.target.value;//updating value
			this.setState({book});
		}else{
			console.log("bookid: " + event.id)
		}*/
	}
	
	handleOnNavigateBack = () => {
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		})
		this.props.navigation.goBack()
		// I'm actually using this method to go back: this.props.navigation.dispatch(NavigationActions.back())
	}
	
	
	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<div className="list-books">
						<ListBooks onChangeBookValue={this.handlechange} books={this.state.books}/>
					</div>
				)}/>
				<Route path="/search" render={() => (
					<SearchBooks
						books={this.state.books}
						onChangeBookValue={(newbooks) => {this.handlechange_search(newbooks)}} 
						newbooks={this.state.newbooks} 
						onSearchBooksvalue={(newbooks) => {this.searchNewBook(newbooks)}}
						NavigateBack = {() => {this.handleOnNavigateBack()}}
					/>
				)}/>
			</div>
		)
	}
}

export default BooksApp
