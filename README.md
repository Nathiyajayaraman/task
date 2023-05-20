** Created CRUD operation for user collection **
------------------------------------------

METHOD: "POST"
URL: '/api/user'
INPUT: 

{
    "name": "abcd",
    "email": "abcd@gmail.com"
    "password": "12345678",
}

OUTPUT: "User saved sucessfully"


---------------------------------------------

METHOD: "GET"
URL: '/api/user'
INPUT: 
OUTPUT: {
            msg: "User details",
            users: {
                "_id": "67567567565
                "name": "abcd",
                "email": "abcd@gmail.com"
                "password": "12345678",
            }
        } 

-----------------------------------------

METHOD: "GET"
URL: '/api/user/<ID>'
INPUT: 
OUTPUT: {
            msg: "User details",
            user:  {
                "_id": "67567567565
                "name": "abcd",
                "email": "abcd@gmail.com"
                "password": "12345678",
            }
        }

-------------------------------------------------

METHOD: "PUT"
URL: '/api/user/<ID>'
INPUT: 
OUTPUT: {
            msg: "Users updated successfully",
            user:  {
                "_id": "67567567565
                "name": "abcd",
                "email": "abcd@gmail.com"
                "password": "12345678",
            }
        }

----------------------------------------------------

METHOD: "DELETE"
URL: '/api/user/<ID>'
INPUT: 
OUTPUT: {
            msg: "User deleted sucessfully",
            user:  {
                "_id": "67567567565
                "name": "abcd",
                "email": "abcd@gmail.com"
                "password": "12345678",
            }
        }

--------------------------------------------------

METHOD: "POST"
URL: '/api/login'
INPUT: 
    {
        "email": "abcd@gmail.com"
        "password": "12345678",
    }
OUTPUT: {
            msg: "Login Successfully",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }

------------------------------------------------

METHOD: "POST"
URL: '"/api/logout/<ID>"'
INPUT: 
OUTPUT: {
            msg: "Logout successfully"
        }