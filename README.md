# ByteErect | Premium Mobile App Development Agency

ByteErect is a premium mobile app development agency delivering cutting-edge solutions that elevate your business to the next level. We specialize in designing and developing mobile and web applications with a focus on exceptional user experiences, robust performance, and business transformation. Our team leverages the latest technologies to help startups and enterprises achieve their digital goals.

---

## 🚀 Features
- **Native & Cross-Platform Mobile App Development:** Build fast, responsive, and platform-optimized applications using Swift, Kotlin, React Native, and Flutter.
- **Modern Web Development:** Scalable, SEO-friendly web apps using Next.js and React.
- **UI/UX Design:** Intuitive and engaging designs focused on user experience and conversion.
- **Contact Form with Email Integration:** Secure backend API for handling contact requests and sending emails.
- **Project Portfolio & Blog:** Showcase your work and share insights with a built-in blog and portfolio section.
- **Responsive & Accessible:** Fully responsive layouts and accessible components.

---

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS, TypeScript
- **Backend:** Node.js, Express.js, Nodemailer
- **Styling:** Tailwind CSS, PostCSS
- **Deployment:** Vercel (pre-configured), or any Node.js/Next.js compatible host

---

## 📁 Project Structure
```
├── client/   # Frontend (Next.js + Tailwind CSS)
├── server/   # Backend (Express.js API for contact form)
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

---

## Frontend (`client`)

### Setup
```bash
cd client
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

#### Environment Variables
If your frontend requires environment variables, create a `.env.local` file in the `client` directory. (No required variables by default.)

---

## Backend (`server`)

### Setup
```bash
cd server
npm install
```

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Environment Variables
Create a `.env` file in the `server` directory with the following:
```
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000 # optional, defaults to 5000
```
- `EMAIL_USER` and `EMAIL_PASS` are used for sending emails via Gmail SMTP. You may need to set up an App Password if 2FA is enabled.

---

## 🚢 Deployment

### Frontend
- Deploy the `client` folder to [Vercel](https://vercel.com/) or any platform supporting Next.js.

### Backend
- Deploy the `server` folder to [Vercel](https://vercel.com/) (Node.js serverless functions) or any Node.js hosting provider.
- The `vercel.json` in `server/` is pre-configured for Vercel deployment.

---

## 📬 Contact
For business inquiries or to start your project, use the contact form on the website or email us directly.

---

## 👤 Author
**Abhishek Gurjar**  
- GitHub: [abhishekboadgurjar](https://github.com/abhishekboadgurjar)  

---

## 📝 License
This project is licensed under the MIT License.
