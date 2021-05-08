Özyeğin University 20-21 Spring CS391 Group Project

Group Members: Doğuhan Bayık, Maram Elsebakhi, Yunus Emre Karakuz

The main goal of our project is to provide fast and easy help to those looking for information regarding autism. The website contains three main sections: The main landing page, that includes a welcome message; The consultation page that provides visitors with useful Autism education centers and related pages; And the Sign Up page that lets the users login and sign up for our website.

UseCase Scenarios:

Use case name: Sign-Up
Description: The user enters his/her personal information and the system saves the information in LocalStorage API.
Owner: Maram Elsebakhi 08.05.21
Actor: Website user.
Preconditions: 
    1 - The user has intenet access.
    2 - The homepage has been opened in a compatible web browser.
The event that started the use-case: User clicks on sign up button.
Success scenario:
    1 - User opens sign up page
    2 - User enters email address, name, surname, birthdate and new password.
    3 - User clicks sign up buttion.
    4 - System checks if all data is entered correctly.
    5 - System saves the user's data in the local storage.
Exception flows:
    Exception-1: Missing input
        1 - User opens sign up page.
        2 - User inputs some or none of the fields.
        3 - User clicks sign up button.
        4 - System displays error message "Please enter each field"
    Exception-2: Already registered user
        1 - User opens sign up pages
        2 - User inputs all the fields, email entered is already registered
        3 - User clicks sign up button.
        4 - System displays error message "User already exists"
Success Guarantee: The system creates a new user and saves their information in the database

Use case name: Sign-In
Description: The user enters his/her email and password and the system checks localStorage and logs the user in.
Owner: Maram Elsebakhi 08.05.21
Actor: Website user.
Preconditions: 
    1 - The user has intenet access.
    2 - The homepage has been opened in a compatible web browser.
The event that started the use-case: User clicks on sign in button.
Success scenario: 
    1 - User opens sign up page
    2 - User inputs their email address and password.
    3 - User clicks sign in button.
    4 - System confirms matching in locale storage.
    5 - The user successfuly signs in.
Exception flows:
    Exception-1: Not registered
        1 - User opens sign up page
        2 - User inputs their email address and password.
        3 - User clicks sign in button.
        4 - System does not find matching in locale storage.
        5 - System display error message "user does not exist or wrong email"
    Exception-2: Wrong Password
        1 - User opens sign up page
        2 - User inputs their email address and password.
        3 - User clicks sign in button.
        4 - System does finds email in locale storage but password mismatch.
        5 - System display error message "Wrong password"
Success guarantee: The user signs in successfuly.

Use case name: Map-Search

Responsibilities:
Instructions:
