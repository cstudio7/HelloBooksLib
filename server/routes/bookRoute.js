import express from 'express';
import BookController from '../controllers/bookController';
import Validate from '../middleware/validation';
import Authenticate from '../middleware/authenticator';

const bookRoute = express.Router();

bookRoute.post('/', Authenticate.isLoggedIn, Authenticate.isAdmin, Validate.addBook, BookController.addBook);
bookRoute.get('/statistic', Authenticate.isLoggedIn, BookController.listBorrowedBooks);
bookRoute.get('/', BookController.getAllBooks);
bookRoute.get('/:id', Validate.id, BookController.getSpecificBook);
bookRoute.delete('/:id', Authenticate.isLoggedIn, Authenticate.isAdmin, Validate.id, BookController.deleteBook);
bookRoute.post(
  '/request',
  Authenticate.isLoggedIn,
  Validate.requestBook,
  BookController.requestBook
);

bookRoute.post(
  '/recieve',
  Authenticate.isLoggedIn,
  Authenticate.deleteReservedIfExpired,
  Authenticate.isAdmin,
  Validate.recieveBook,
  BookController.returnBook
);

bookRoute.post('/borrow',
  Authenticate.isLoggedIn,
  Authenticate.deleteReservedIfExpired,
  Authenticate.isAdmin,
  Validate.lendBook,
  Authenticate.isReserved,
  BookController.lendBook
);

bookRoute.patch('/extend/:id',
  Authenticate.isLoggedIn,
  Validate.id,
  Validate.date,
  BookController.extendDueDate
);

bookRoute.post('/reserve',
  Authenticate.isLoggedIn,
  Authenticate.deleteReservedIfExpired,
  Validate.isbn,
  Validate.borrowBook,
  Authenticate.isReserved,
  BookController.reserveBook
);

bookRoute.post('/reserved_books',
  Authenticate.isLoggedIn,
  Authenticate.deleteReservedIfExpired,
  Authenticate.isAdmin,
  Validate.lendBook,
  BookController.checkBookReservation
);

export default bookRoute;
