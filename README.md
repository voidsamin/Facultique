# Facultique: A Centralized Faculty Task & Portfolio Portal  

## 🚀 Overview  
Facultique is a role-based web portal designed for **Heads of Departments (HODs)** and **Faculty Members**.  

- Centralizes **task assignment, tracking, and approval**  
- Maintains **faculty portfolios** with achievements and records  
- Replaces fragmented manual methods (emails, Google Forms, sticky notes)  
- Ensures **real-time visibility, accountability, and structured workflows**  
- Contributes to a **sustainable and efficient academic environment**  

---

## 🎯 Features  

### 👤 Role-Based Access  
**HOD**  
- Assign tasks to faculty  
- Review submitted work  
- Approve or decline tasks with feedback  
- View faculty portfolios  

**Faculty Members**  
- View assigned tasks  
- Update task status (**Pending**, **Finished**)  
- Submit tasks to HOD  
- Update personal portfolio (achievements, publications, awards)  

---

### 📊 Additional Features  
- Portfolio builder for faculty  
- Task status tracking with notifications  
- Graphical representations of task progress  

---

### 🔮 Future Enhancements  
- 📅 Calendar integration for deadlines  
- 📊 Advanced analytics and reporting dashboards  
- 📱 Mobile interface optimization  
- 💬 Chat room for faculty–HOD communication  
- 🔗 Integration with ICT legacy systems  

---

## 🛠️ Tech Stack  
- **Frontend:** ReactJS  
- **Backend:** Spring Boot  
- **Database:** PostgreSQL  
- **API:** REST API  
- **Version Control:** GitHub  
- **Design & Testing Tools:** Figma, Postman  

---
## 📌 System Workflow  

## 📌 System Workflow  

HOD Assigns Task
        │
        ▼
Faculty Views Task
        │
        ▼
Task Status: Pending
        │
        ▼
Faculty Submits Task
   ┌───────────────┴───────────────┐
   ▼                               ▼
HOD Approves                 HOD Declines
(Status: Submitted)      (Status: Pending + Feedback)


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
