# Port of Discharge Estimator

This Google Sheets project helps logistics and freight professionals estimate the closest ports of discharge in the United States from any given zip code. This tool was used by the Customer Success team at Xhipment to optimize the supply chain by identifying the nearest ports, enabling more competitive pricing for shippers. 

👉 **View or make a copy of the live project here:**  
[Port of Discharge Estimator – Google Sheet](https://docs.google.com/spreadsheets/d/1rG7OHu2QNs-LX1hCmisU_mjyNlJwp93vTffk-wit95M/edit?usp=sharing)

## 🔍 What It Does

- Scrapes a list of major US ports from Wikipedia
- Uses Google Maps API to calculate the driving distance from any input zip code to all available ports
- Lists the nearest ports in ascending order of distance
- Allows user to set how many closest ports they want to see (e.g., top 5, 10, etc.)

## ⚙️ How It Works

- Built with Google Sheets + Google Apps Script
- Distance calculations are cached to reduce API calls and speed up performance
- Custom function `=GOOGLEMAPS_DISTANCE(origin, destination)` is used to fetch distances
- Script calculates and sorts ports by distance based on user input

## 📁 Files

- `distanceCalculator.gs` – Google Apps Script code containing core distance and caching functions
- `scrapePorts.gs` – Google Apps Script code that scrapes port data from Wikipedia and populates a Google Sheet with port rankings, names, states, and trade statistics.

## 🚀 How to Use

1. Make a copy of the Google Sheet (coming soon)
2. Enter your zip code
3. Set how many ports you want to view
4. View the closest ports with real-time distance data

## 🛠 Tech Used

- Google Sheets
- Google Apps Script
- Google Maps API
- Wikipedia (web scraping for ports list)

## 📌 Notes

- Web scraping was used only once to generate the initial "Ports" sheet by extracting data from Wikipedia. The resulting data was then manually cleaned to retain only relevant ports and remove unnecessary columns, ensuring the dataset was tailored to our specific use case.
- Supports driving, walking, bicycling, or transit modes (default is driving)
