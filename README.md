# 🌸 Beautice - Clinic & Beauty Consultation Website (Community)

Beautice Clinic là một website tư vấn làm đẹp và chăm sóc da, kết nối người dùng với chuyên gia và cộng đồng thảo luận. Dự án bao gồm giao diện website hiện đại, tối ưu UX/UI và các tính năng chia sẻ kiến thức, booking, và tương tác cộng đồng.

# 📸 Demo
<img width="1680" height="853" alt="image" src="https://github.com/user-attachments/assets/3b09539b-3dad-4905-aa25-c113bd131b72" />


# 📌 Table of Contents
- Features
- Tech Stack
- Screenshots
- Installation
- Environment Variables
- Folder Structure

# ✨ Features
- 🎨 Landing page giới thiệu dịch vụ làm đẹp
- 📰 Blog chia sẻ kiến thức chăm sóc da
- 👤 Đăng ký / Đăng nhập bằng email
- 📱 Responsive 100%
- ....
- **<UPDATE_NEEDED>**

# 🛠 Tech Stack
### Frontend:
- ReactJS
- TailwindCSS / SCSS
- React Router
- React Hook Form + Yup
- React Query
- Axios
### Backend:
- Node.js / Express
- REST API
- JWT Authentication

### Database:
- MySQL

### Deploy:
- Frontend: Vercel
- Backend: Render
- Database: Railway

# 🖼 Screenshots

# 🚀 Installation
### 1. Clone project
```
git clone https://github.com/hungpel/BeautyAndClinic.git
cd BeautyAndClinic
```
### 2. Frontend setup
```
cd beauty-and-clinic-react-app
npm install
npm start
```

### 3. Backend setup
```
cd beauty-and-clinic-be
npm install
npm run dev
```

# 🔐 Environment Variables
Frontend .env
```
VITE_API_URL=
```

Backend .env
```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
JWT_SECRET=
```


# 📁 Folder Structure
```
.
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── assets/
│   │   └── App.jsx
│   └── ...
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── server.js
│   ├── .env
│   └── ...
└── README.md
```
