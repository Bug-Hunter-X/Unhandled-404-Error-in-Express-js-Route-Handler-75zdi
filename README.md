# Express.js 404 Error Handling Bug

This repository demonstrates a common bug in Express.js route handlers: insufficient error handling in 404 (Not Found) responses. The bug occurs when a requested resource is not found, but the response doesn't provide specific information about the error, making debugging difficult for clients.

## Bug Description
The `/users/:id` route attempts to fetch a user by ID. If the user isn't found, a generic 404 response is sent without details.  This makes it hard for clients to understand *why* the request failed. 

## Bug Solution
The solution improves the error handling by sending a JSON response with a descriptive error message in the 404 response. This provides the client with more context, facilitating easier debugging and improved user experience.