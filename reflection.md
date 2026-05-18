## Why is it beneficial to separate your routes, models, and database connection into different directories?

Seperating routes, models, and database connections keeps the project organized and easier to maintain.

## What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?

PUT is meant to fully replace a resource, while PATCH is used for partial updates. My PUT /:id endpoint more closely resembles PATCH because it updates only the fields sent in req.body instead of replacing the entire document.

## In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

A good practice after a successful DELETE request is to send either a success message or a 204 No Content status. This confirms the deletion without sending unnecessary data back to the client. Sometimes returning the deleted object can help with confirmation or debugging, but smaller responses are usually more efficient.