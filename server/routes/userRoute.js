import express from 'express';
import UserController from '../controllers/userController';
import Validate from '../middleware/validation';
import Authenticate from '../middleware/authenticator';

const userRoute = express.Router();

userRoute.post('/signup', Validate.signup, UserController.signUp); 
userRoute.post('/signin', Validate.signin, UserController.emailSignin);
userRoute.get('/verifyemail', UserController.verifyEmailLink);
userRoute.post('/passwordreset', UserController.initiateReset);
userRoute.get('/passwordreset/:id/:token', UserController.verifyResetLink);
userRoute.post('/resetpassword', Validate.resetPassword, UserController.resetPassword);
userRoute.post('/assignrole', 
		Authenticate.isloggedIn,
	 	Authenticate.isSuperAdmin,
	 	Validate.assignrole, 
	 	UserController.assignUserRole);

export default userRoute;