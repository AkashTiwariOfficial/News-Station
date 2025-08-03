# 📰 News Station - React News App

### A responsive React web app that fetches real-time news headlines using NewsAPI.org

🔗 **Live Demo:** [Click here to view the live site](https://your-netlify-link.netlify.app)

---

## 🚀 Features

- 🌍 Browse top headlines by **country** and **category**
- 🔁 Seamless **Infinite Scroll** to load more news
- 🌗 Light & Dark **Mode Toggle**
- ⏳ Loading indicator with **progress bar**
- 🧠 Graceful fallback UI for unavailable regions
- 🔐 API Key auto-switching to handle quota limits
- 📦 Powered by [NewsAPI.org](https://newsapi.org)

---

## 🛠 Tech Stack

- **Frontend:** React JS
- **Routing:** React Router
- **Infinite Scroll:** `react-infinite-scroll-component`
- **Environment Config:** `.env` for API keys
- **Styling:** Bootstrap & Custom CSS

---

## 🔑 API Setup

To use this app, you need an API key from [NewsAPI.org](https://newsapi.org).

1. Create a `.env` file in the project root.
2. Add your API keys like this:

```env
REACT_APP_NEWS_API_1=your_api_key_1
REACT_APP_NEWS_API_2=your_api_key_2
REACT_APP_NEWS_API_3=your_api_key_3
REACT_APP_NEWS_API_4=your_api_key_4
