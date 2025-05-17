# 🏡 Real Estate Web App

A responsive, full-stack real estate listing platform built with **Next.js**, **React**, **TailwindCSS**, **Supabase**, and **Clerk**. This app enables users to post properties for **Rent** or **Sale**, search listings by location and filters, and view properties on an interactive **Google Map**.

---

## 🔧 Tech Stack

- **Frontend**: Next.js, React.js, TailwindCSS
- **Backend / DB**: Supabase (PostgreSQL, Storage)
- **Auth**: Clerk
- **Map & Location Services**: Google Places API, Google Maps

---

## ✨ Features

- 🔐 **Authentication** using Clerk (Sign Up / Sign In / Session Management)
- 🏘️ **Post Listings** as Rent or Sell with full property details
- 🗺️ **Map View** powered by Google Maps with Place Autocomplete
- 🔎 **Search & Filter** by address, bedrooms, bathrooms, parking, and home type
- 📸 **Upload Property Images** (Drag & Drop support)
- 📄 **Contact Form** stores entries in Supabase `contactus` table
- 💡 **Responsive UI** using TailwindCSS
- 🧭 **Separate Pages** for For Rent and For Sale listings
- 📍 **Live Location Display** on Map based on user search

---

## 📸 Screenshots

> Home page with property listings and map  ![Image](https://github.com/user-attachments/assets/64e0af60-d883-4bf5-8a59-1259723dd033)
> Listing upload form with image uploader   ![Image](https://github.com/user-attachments/assets/cfd1276d-c372-438a-9a5d-79de62abe0ec)
> Listing detail page with full description and location on map ![Image](https://github.com/user-attachments/assets/2998faae-99ad-4c33-9c79-9804d5b38186)


---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/LakshanMadushnka/Real_Estate.git
cd real-estate-app


````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory with the following values:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cGxlYXNlZC1naG......
CLERK_SECRET_KEY=sk_test_UIqazamAyy1zxea......

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/

NEXT_PUBLIC_SUPABASE_URL=https://ckmmbmpnwepv......
NEXT_PUBLIC_SUPABASE_API_KEY=eyJhbGciOiJIUzI.......

NEXT_PUBLIC_GOOGLE_PLACE_API_KEY=AIzaSyA_IqqibOB.........

NEXT_PUBLIC_IMAGE_URL=https://ckmmbmpnwepvkslpnslt......


```

> You’ll need to set up a [Clerk account](https://clerk.dev/), [Supabase project](https://supabase.com/), and [Google Cloud project](https://console.cloud.google.com/) for Maps API.

### 4. Run the development server

```bash
npm run dev
```

App will be running at [http://localhost:3000](http://localhost:3000)

---

## 🗃️ Database Tables (Supabase)

* `listings` – Stores property data (rent/sell, address, features, price, etc.)
* `contactus` – Stores messages from contact form
* `listingimages` – Stores images

---

## 📫 Contact

Created by [Lakshan Ransinghe ](https://github.com/LakshanMadushnka) – feel free to reach out!

---

## 📄 License

This project is licensed under the MIT License.


