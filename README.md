Facultique: A Centralized Faculty Task & Portfolio Portal


## 🚀 Overview

Facultique is a role-based web portal designed for Heads of Departments (HODs) and Faculty Members.
It centralizes task assignment, tracking, approval, and portfolio management, reducing dependency on fragmented manual methods such as emails or Google Forms.

This system ensures real-time visibility, accountability, and structured workflows, contributing to a more sustainable and efficient academic environment.

## 🎯 Features
👤 Role-Based Access

HOD

Assign tasks to faculty

Review submitted work

Approve or decline tasks

View faculty portfolios

Faculty

View assigned tasks

Update task status (Pending, Finished)

Submit tasks to HOD

Update personal portfolio (achievements, publications, awards)

## 📊 Additional Features

Portfolio builder for faculty

Task status tracking with notifications

Graphical representations of task progress

## 📅 Future Enhancements

Calendar integration for deadlines

Advanced analytics and reporting

Mobile interface optimization

Chat room for faculty–HOD communication

Integration with ICT legacy systems

## 🛠️ Tech Stack

Frontend: ReactJS
Backend: Spring Boot
Database: PostgreSQL
API: REST API
Version Control: GitHub
Design & Testing Tools: Figma, Postman

## 📌 System Workflow
flowchart TD
    A[HOD Assigns Task] --> B[Faculty Views Task]
    B --> C[Task Status: Pending]
    C --> D[Faculty Submits Task]
    D -->|Approved| E[Status: Successfully Submitted]
    D -->|Declined| F[Status: Pending + Feedback]

## 📅 Proposed Timeline
Weeks	Milestone
1–2	Requirement analysis, UI mockups
3–5	Backend setup (Spring Boot + PostgreSQL)
6–8	Frontend integration (ReactJS)
9	Task assignment & portfolio modules
10–11	Testing & debugging
12	Documentation & deployment
## 👥 Team Contributions

Saadat Hasin Fattah – ReactJS setup, UI design, testing

Samin Abdullah Rafi – Backend logic, PostgreSQL integration, testing

KH Abu Talib Sifat – Portfolio system, report generation, testing

## ⚡ Challenges & Solutions

Real-time Task Updates → Solved using async REST API calls

Secure Role-Based Access → Implemented JWT authentication

Frontend–Backend Sync Issues → Fixed with GitHub version control + Postman testing

## 📖 Lessons Learned

Importance of seamless frontend–backend integration

Agile teamwork with clear task division improves efficiency

Testing and version control are crucial for reliable progress

## 🔗 Project Repository  

GitHub Repository: [Faculty Portal](https://github.com/voidsamin/Facultique.git)  
*(Replace with your actual repo link)*  

---

## 📜 License  
This project is licensed under the [MIT License](./LICENSE).  
See the LICENSE file for more details. 
