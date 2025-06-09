# Port of Discharge Estimator

This Google Sheets project helps logistics and freight professionals estimate the closest ports of discharge in the United States from any given zip code. This tool was used by the Customer Success team at Xhipment to optimize the supply chain by identifying the nearest ports, enabling more competitive pricing for shippers. 

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

- `code.gs` – Google Apps Script code containing core distance and caching functions

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

- Script caches results for 6 hours to stay within quota limits
- Supports driving, walking, bicycling, or transit modes (default is driving)
