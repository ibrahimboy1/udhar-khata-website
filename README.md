# � Hisab Banao - Digital Udhar Khata Website

> **Official landing page for Hisab Banao - India's #1 Free Digital Credit/Udhar Management App**

[![Deploy to GitHub Pages](https://github.com/yourusername/hisab-banao-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/hisab-banao-website/actions)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🏷️ Repository Name Suggestions (Choose One)

| Name | Why It's Good |
|------|---------------|
| `hisab-banao-website` | Simple, clear, professional ✅ **RECOMMENDED** |
| `hisab-banao-landing` | Indicates it's a landing page |
| `hisab-banao-official` | Shows it's the official site |
| `udhar-khata-website` | SEO friendly for Hindi users |
| `digital-bahi-khata` | Traditional + Modern feel |

---

## 📝 Repository Description (Copy-Paste Ready)

**Short (For GitHub):**
```
📓 Official website for Hisab Banao - Free digital udhar khata app. Track credits, manage customers, works offline. PWA enabled.
```

**Long (For About Section):**
```
Hisab Banao - Digital Udhar Khata | Official Website
Free credit management app for small businesses in India. 
Features: Voice input, WhatsApp reminders, PDF reports, 25+ languages, works offline.
Download on Google Play Store.
```

---

## 🌐 Complete Domain Connection Guide (Name.com → GitHub Pages)

### Step 1: Push Code to GitHub

1. **Open GitHub Desktop**
2. **Create New Repository:**
   - Name: `hisab-banao-website`
   - Description: `📓 Official website for Hisab Banao - Free digital udhar khata app`
   - Public repository ✅
3. **Add Local Folder:**
   - File → Add Local Repository
   - Select: `hisab-banao-clone` folder
4. **Commit & Push:**
   - Write commit message: `Initial website launch 🚀`
   - Click **Commit to main**
   - Click **Push origin**

---

### Step 2: Enable GitHub Pages

1. **Go to GitHub.com** → Your repository
2. **Settings** → **Pages** (left sidebar)
3. **Source:** Select `GitHub Actions`
4. **Wait 2-3 minutes** for first deployment
5. **Check:** Your site should be live at `https://yourusername.github.io/hisab-banao-website`

---

### Step 3: Add Custom Domain in GitHub

1. **Settings** → **Pages**
2. **Custom domain:** Enter your domain (e.g., `hisabbanao.com` or `www.hisabbanao.com`)
3. Click **Save**
4. ✅ Check **Enforce HTTPS** (enable after DNS is connected)

---

### Step 4: Configure Name.com DNS Settings

#### 🔹 For Root Domain (hisabbanao.com)

1. **Login to Name.com** → My Domains → Select your domain
2. Click **DNS Records** or **Manage DNS**
3. **Delete** any existing A records for `@`
4. **Add these A Records:**

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| A | @ | `185.199.108.153` | 300 |
| A | @ | `185.199.109.153` | 300 |
| A | @ | `185.199.110.153` | 300 |
| A | @ | `185.199.111.153` | 300 |

5. **Add CNAME for www:**

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| CNAME | www | `yourusername.github.io` | 300 |

> ⚠️ Replace `yourusername` with your actual GitHub username

---

#### 🔹 For Subdomain Only (www.hisabbanao.com)

If you want only `www.hisabbanao.com`:

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| CNAME | www | `yourusername.github.io` | 300 |

---

### Step 5: Create CNAME File

Create a file named `CNAME` (no extension) in your repository root:

```
hisabbanao.com
```

> Replace with your actual domain name

---

### Step 6: Wait for DNS Propagation

- **Time:** 10 minutes to 48 hours (usually 30 minutes)
- **Check Status:** Go to GitHub → Settings → Pages
- Shows: ✅ "Your site is live at https://hisabbanao.com"

---

## 🧪 Testing Guide - Verify Everything Works

### Test 1: Website Loading
```
✅ Open https://yourdomain.com
✅ Open https://www.yourdomain.com
✅ Both should load your website
```

### Test 2: HTTPS Certificate
```
✅ Check browser shows 🔒 lock icon
✅ No "Not Secure" warning
✅ Certificate issued by "Let's Encrypt" or "DigiCert"
```

### Test 3: PWA Installation
```
📱 Mobile (Chrome):
   1. Open website
   2. Tap ⋮ menu → "Add to Home Screen" or "Install App"
   3. App icon should appear on home screen

💻 Desktop (Chrome/Edge):
   1. Open website
   2. Look for install icon in address bar (➕)
   3. Or Menu → "Install Hisab Banao"
```

### Test 4: Auto-Update Feature
```
1. Make a small change in index.html
2. Commit & Push to GitHub
3. Wait 2-3 minutes for deployment
4. Open website (if already installed as PWA)
5. You should see "Update Available" banner
6. Click "Refresh" → New version loads
```

### Test 5: Offline Mode
```
1. Install as PWA
2. Turn OFF internet/WiFi
3. Open the app
4. Website should still load (cached version)
```

### Test 6: Mobile Responsiveness
```
Test on these screen sizes:
✅ Mobile: 360px, 414px, 428px
✅ Tablet: 768px, 1024px
✅ Desktop: 1280px, 1920px

Use Chrome DevTools: F12 → Toggle Device Toolbar
```

---

## 🔧 Troubleshooting Common Issues

### ❌ "DNS Check Failed" in GitHub Pages
**Solution:**
1. Wait 30 minutes (DNS takes time)
2. Verify DNS records in Name.com are correct
3. Check for typos in IP addresses

### ❌ "Certificate Error" / No HTTPS
**Solution:**
1. Uncheck and re-check "Enforce HTTPS" in GitHub Settings
2. Wait 15 minutes for certificate generation
3. Clear browser cache

### ❌ Website Shows 404
**Solution:**
1. Check if `index.html` exists in root folder
2. Verify GitHub Actions deployment succeeded (check Actions tab)
3. Ensure branch is `main` (not `master`)

### ❌ Old Version Showing After Update
**Solution:**
1. Hard refresh: `Ctrl + Shift + R`
2. Clear browser cache
3. Uninstall & reinstall PWA

### ❌ PWA Not Installing
**Solution:**
1. Must be on HTTPS
2. Check `manifest.json` exists and is valid
3. Check browser console for errors (F12 → Console)

---

## 📁 Project Structure

```
hisab-banao-website/
├── index.html          # Main HTML file (single-page app)
├── style.css           # All styles (responsive)
├── app.js              # JavaScript functionality
├── translations.js     # 25+ language translations
├── animation.js        # Scroll animations
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline support & caching
├── CNAME              # Custom domain file
├── images/
│   ├── icon.svg       # App icon
│   └── sa.jpg         # Screenshot/mockup
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deployment config
```

---

## 🚀 Quick Deployment Checklist

- [ ] Push code to GitHub
- [ ] Enable GitHub Pages (Settings → Pages → GitHub Actions)
- [ ] Add custom domain in GitHub Pages settings
- [ ] Add A records in Name.com (4 IPs)
- [ ] Add CNAME record for www
- [ ] Create CNAME file in repository
- [ ] Wait for DNS propagation (10-30 mins)
- [ ] Enable "Enforce HTTPS"
- [ ] Test all functionality

---

## 📞 Support

- **App Issues:** support@hisabbanao.com
- **Website Issues:** Create GitHub Issue
- **Download App:** [Google Play Store](https://play.google.com/store/apps/details?id=com.hisabbanao.app)

---

## 📄 License

MIT License - Free to use and modify

---

**Made with ❤️ in India | Hisab Banao Team**
