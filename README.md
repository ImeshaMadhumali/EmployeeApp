# Employee Management CRUD Application

A full-stack **Employee Management System** built using:
- **Frontend:** Angular (TypeScript)
- **Backend:** ASP.NET Core Web API
- **Database:** SQL Server

This application allows users to Create, Read, Update, and Delete employee records.

---

## 📌 Features
- Add new employees with details such as name, email, position, and salary.
- View a list of all employees.
- Edit/update employee details.
- Delete employees from the system.
- Responsive UI built with Angular.
- RESTful API with proper HTTP methods and status codes.
- Connected to SQL Server via Entity Framework Core.

---

## 🛠️ Tech Stack

### Frontend (Angular)
- Angular 18+
- TypeScript
- Bootstrap
- Angular Forms & HTTPClient

### Backend (.NET Core)
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Swagger (API documentation)

---

## 📂 Project Structure

### **Frontend - EmployeeApp.UI**
### **Backend - EmployeeApp.API**

## 🏷️ Backend Setup (ASP.NET Core API)

-Navigate to backend folder:
-cd EmployeeApp.API
-Update appsettings.json with your SQL Server connection string:

"ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=EmployeeDB;Trusted_Connection=True;Encrypt=False"
}


-Run EF Core migrations:
-dotnet ef database update
-Start the backend server:

dotnet run


-API will be available at: https://localhost:7001 

## 🏷️ Frontend Setup (Angular)

-Navigate to frontend folder:
-cd employee-app-frontend

### Install dependencies:

npm install


-Update the API base URL in employees.service.ts:

baseApiUrl = 'https://localhost:7001/api';


-Start the Angular app:

ng serve --o

-Frontend will be available at: http://localhost:4200


📖 API Endpoints

api/employees	- Get all employees


api/employees/{id} - Get employee by ID


api/employees	- Create new employee


api/employees/{id} - Update employee


api/employees/{id}	- Delete employee


🖼️ Screenshots


Employee List
![output1](https://github.com/user-attachments/assets/118d163c-ad30-4745-9e2b-b314411b6b8d)


Edit/Update Employee
![output2](https://github.com/user-attachments/assets/ec74d7a2-e7e1-4c3b-9437-6931dd7a2f3a)


Add Employee
![output3](https://github.com/user-attachments/assets/f4856c94-6a51-4132-b77a-78d1b17543b4)



🧑‍💻 Author


GitHub - https://github.com/ImeshaMadhumali

Email - imeshamadhumali31@gmail.com
