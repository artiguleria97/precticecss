import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema  from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

// Define the Users collection
export const Users = new Mongo.Collection('myusers');

// Define the User schema
export const UserSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  email: {
    type: String,
    label: 'Email',
  },
  password: {
    type: String,
    label: 'Password',
  },
});

// Attach the schema to the Users collection
Users.attachSchema(UserSchema);

Accounts.users = Users;
