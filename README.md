# Mycontact-backendapi
This is express project for my contact backend api

## Endpoints :- 

### For Authentication :- 
- https://mycontact-backendapi-production.up.railway.app/api/users/register
- https://mycontact-backendapi-production.up.railway.app/api/users/login
- https://mycontact-backendapi-production.up.railway.app/api/users/current

### Body for authentication :- 
```js
   {
  "username": "your username",
  "email":"your email",
  "password": "your password"
  }
```

### After Login, For CRUD Contact Endpoints :-

- Get all contacts [GET]:-  https://mycontact-backendapi-production.up.railway.app/api/contacts
- create New contact [POST]:- https://mycontact-backendapi-production.up.railway.app/api/contacts
- Get New contact [GET]:- https://mycontact-backendapi-production.up.railway.app/api/contacts/:id
- Update New contact [PUT]:- https://mycontact-backendapi-production.up.railway.app/api/contacts/:id
- Delete New contact [DELETE]:- https://mycontact-backendapi-production.up.railway.app/api/contacts/:id

### Body for Performing CURD Operations :- 
```js
   {
  "Name": "Your Name",
  "Email":"Your Email",
  "phone": "Your Phone Number"
}

```
