
const employees=[
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design Landing Page",
          "description": "Create a responsive landing page for the marketing campaign.",
          "date": "2025-10-14",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Navbar Bug",
          "description": "Resolve dropdown issue on small screen devices.",
          "date": "2025-10-13",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Write Documentation",
          "description": "Add setup and deployment steps to project README.",
          "date": "2025-10-12",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Backend API Integration",
          "description": "Integrate authentication API with frontend.",
          "date": "2025-10-14",
          "category": "Backend",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Unit Testing",
          "description": "Write unit tests for the user module.",
          "date": "2025-10-10",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Database Cleanup",
          "description": "Remove unused tables and optimize indexes.",
          "date": "2025-10-09",
          "category": "Database",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Performance Check",
          "description": "Analyze slow queries and optimize API response time.",
          "date": "2025-10-11",
          "category": "Performance",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "UI Enhancement",
          "description": "Improve form validation UX.",
          "date": "2025-10-14",
          "category": "UI",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code Review",
          "description": "Review pull requests from junior developers.",
          "date": "2025-10-13",
          "category": "Review",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Add Dark Mode",
          "description": "Implement dark mode toggle in settings.",
          "date": "2025-10-12",
          "category": "Feature",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Meeting",
          "description": "Discuss Q4 goals and deliverables.",
          "date": "2025-10-10",
          "category": "Management",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "SEO Optimization",
          "description": "Update meta tags for better visibility.",
          "date": "2025-10-09",
          "category": "Marketing",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "API Documentation",
          "description": "Write Swagger documentation for new endpoints.",
          "date": "2025-10-14",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Database Backup",
          "description": "Perform full system backup for production.",
          "date": "2025-10-13",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Fix Login Error",
          "description": "Resolve unexpected login redirect issue.",
          "date": "2025-10-11",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Client Feedback",
          "description": "Collect feedback from client regarding new dashboard.",
          "date": "2025-10-14",
          "category": "Client",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Deploy Update",
          "description": "Deploy version 2.1 to staging environment.",
          "date": "2025-10-13",
          "category": "Deployment",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Code Refactoring",
          "description": "Refactor dashboard components for readability.",
          "date": "2025-10-12",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Security Audit",
          "description": "Run security checks for SQL injection and XSS.",
          "date": "2025-10-10",
          "category": "Security",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "UI Feedback",
          "description": "Collect UI improvement suggestions from design team.",
          "date": "2025-10-09",
          "category": "Design",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]



const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }


  export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
        
  }
  export const getLocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(employee, admin);
    

  }