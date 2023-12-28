const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	readStatus;
	if (read == true) {
		readStatus = 'has been read';
	} else {
		readStatus = 'not read';
	}
	this.info = function () {
		return (
			this.title +
			' by ' +
			this.author +
			', ' +
			this.pages +
			' pages, ' +
			readStatus +
			' yet.'
		);
	};
	console.log(this.info());
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}
