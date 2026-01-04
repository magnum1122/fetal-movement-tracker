
# 📱 Fetal Movement Tracker — React Native (Expo)

A simple and intuitive mobile app designed for expecting mothers to track fetal movements using a stopwatch-based session timer.
The app stores each session locally using AsyncStorage and displays them in a history list.

![Screenshots](https://github.com/magnum1122/fetal-movement-tracker/blob/3183f7d97a17027384233e8ebcd70efd6c0e3080/Untitled%20design.png)
---
## 📦 APK Download

Download the latest Android APK here:

👉https://github.com/magnum1122/fetal-movement-tracker/releases
---

## 🚀 Features

* ⏱️ **Stopwatch-based tracking**
* 💾 **Local session saving using AsyncStorage**
* 📅 **Human-readable date formatting**
* 📂 **Context API for global session management**
* 🔄 **Auto-load saved sessions on startup**
* 🧹 **Clean & optimized state + storage synchronization**
* 🎨 **Beautiful UI built with React Native + NativeWind**

---

## 📦 Tech Stack & Libraries Used

| Library                   | Purpose                           |
| ------------------------- | --------------------------------- |
| **Expo**                  | App environment & bundler         |
| **React Native**          | UI components                     |
| **Expo Router**           | App navigation                    |
| **NativeWind (Tailwind)** | Styling                           |
| **AsyncStorage**          | Local persistent storage          |
| **Context API (React)**   | App-wide session state management |
| **expo-blur (optional)**  | Modal background blur             |
| **TypeScript**            | Type safety                       |

---

# ▶️ How to Run the Project

### **1. Clone the repository**

```sh
git clone https://github.com/magnum1122/fetal-movement-tracker.git
cd fetal-movement-tracker
```

### **2. Install dependencies**

```sh
npm install
```

### **3. Start the Expo development server**

```sh
npx expo start
```

### **4. Run on device**

* **iOS** → Press `i`
* **Android** → Press `a`
* **Expo Go** → Scan QR from terminal

---

# 🗂 Data Structure (Sessions)

Each fetal movement tracking session is stored in AsyncStorage under the key:

```
@sessions
```

### The shape of each record:

```ts
export type KickSession = {
  id: string;         // unique timestamp-based ID
  date: string;       // formatted: "Sunday 12 Oct 2025"
  timeTaken: string;  // stopwatch value: "02:12"
};
```

### Example stored data:

```json
[
  {
    "id": "1736172812930",
    "date": "Sunday 12 Oct 2025",
    "timeTaken": "03:42"
  },
  {
    "id": "1736172819099",
    "date": "Friday 10 Oct 2025",
    "timeTaken": "01:55"
  }
]
```

---

# 📝 Assumptions Made

1. **User does not require online backup**
   All data is stored locally using AsyncStorage.

2. **Each session is independent**
   A saved record does not affect subsequent sessions.

3. **Date formatting** is done using a simple custom formatter, not using a library (to avoid external dependencies).

4. **Sessions are displayed newest-first**
   Because we prepend new sessions in the array.

5. **User manually saves each session** using the "Save" button.
