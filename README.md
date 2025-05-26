## 🚀 Getting Started

Follow the steps below to run the project locally.

### 🔧 Backend (Node.js Server)

1. **Navigate to the root directory** of the project (if you're not already there).

2. **Install dependencies**:

```bash

npm install

```

3. **Start the development server**:

```bash

npm run dev

```

`The backend server should now be running at `http://localhost:3000` (or your configured port)`

### 🖥️ Frontend (React App)

1. **Navigate to the `frontend` directory**:

```bash

cd frontend

```

2. **Install frontend dependencies**:

```bash

npm install

```

3. **Start the development server**:

```bash

npm run dev

```

`The frontend app will typically be available at `http://localhost:5173` (Vite's default port).`
# API's


add link
[]

- GET STATIONS

  - URL : http://localhost:3007/api/v1/stations
  - GET request
  - Body -> stationCode (example: BJU)

- GET TRAINS BETWEEN STATIONS

  - URL : http://localhost:3007/api/v1/trains
  - GET request
  - Body -> from, to and date(YYYY-MM-DD) (example: BVI NDLS 2024-03-15)

- GET LIVE STATUS OF TRAIN

  - URL : http://localhost:3007/api/v1/liveStatus
  - GET request
  - Body -> trainNo (train number example: 19038)

- GET FARE OF JOURNEY
  - URL : http://localhost:3007/api/v1/fare
  - GET request
  - Body -> trainNo, from and to (example: 19038 ST BVI)

- GET AUTOCOMPLETE RESULTS
    - URL : http://localhost:3007/api/v1/autocomplete
    - GET request
    - Body -> query (example: Delh -> provides result for delhi)

- GET TRANSLATED TEXT
    - URL : http://localhost:3007/api/v1/translate
    - POST request
    - Body -> from, to and text

- GET ALL LANGUAGES
    - URL : http://localhost:3007/api/v1/languages
    - GET request
    - No body required

- GET TRANSLATED JSON OBJECT 
    - URL : http://localhost:3007/api/v1/translate-json
    - POST request
    - Body -> from, to and json (example: en hi and jsonObject= { 
                                      "title": "The importance of Regular Exercise",
                                      "author": "Shivam Gupta"
                                  }
                                )

Translate Api: https://rapidapi.com/undergroundapi-undergroundapi-default/api/google-translate113

IRCTC Api: https://rapidapi.com/IRCTCAPI/api/irctc1/

---
---

## Video Demo

Click on the image below to watch the video demo:

[![Hisaab](https://www.vdocipher.com/blog/wp-content/uploads/2023/12/DALL%C2%B7E-2023-12-10-20.21.58-A-creative-and-visually-appealing-featured-image-for-a-blog-about-video-thumbnails-for-various-social-platforms-like-YouTube-Instagram-and-TikTok-s-1024x585.png)](https://youtu.be/JjFXxeaGE_c?si=f_2DnWwo7U68B_gq)  

---



