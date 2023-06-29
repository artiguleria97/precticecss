
import { Meteor } from 'meteor/meteor';

export const useCurrentUser = () => {
// Check if user is logged in
if (Meteor.user()) {
  // User is logged in, retrieve user information
  const currentUser = Meteor.user();
  const username = currentUser.username;
  const email = currentUser.emails[0].address;

  // Do something with the user information
  console.log(`Logged-in user: ${username}, Email: ${email}`);
} else {
  // User is not logged in
  console.log('No user logged in');
}
};
