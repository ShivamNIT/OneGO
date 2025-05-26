# API's

## Overview of this project: [LINK](https://drive.google.com/file/d/14NNDqt3odAQvj2Dy8HpFZ8GAXGq7FXD9/view?usp=sharing)

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
                                      "author": "Kartik Dwivedi"
                                  }
                                )

Translate Api: https://rapidapi.com/undergroundapi-undergroundapi-default/api/google-translate113

IRCTC Api: https://rapidapi.com/IRCTCAPI/api/irctc1/