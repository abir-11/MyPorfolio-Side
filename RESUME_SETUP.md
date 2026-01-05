# Resume Download Setup

## 📄 How to Add Your Resume

### Step 1: Prepare Your Resume
1. Create or update your resume in PDF format
2. Name the file: `resume.pdf`
3. Make sure the file size is reasonable (under 5MB)

### Step 2: Add Resume to Project
1. Place your `resume.pdf` file in the `public` folder
2. The file path should be: `public/resume.pdf`

### Step 3: File Structure
```
my-portfolio-web/
├── public/
│   ├── resume.pdf          ← Your resume file goes here
│   └── vite.svg
├── src/
└── ...
```

### Step 4: Test the Download
1. Save your resume as `public/resume.pdf`
2. Go to your website: `http://localhost:5175/`
3. Click the "Download Resume" button in the Hero section
4. The file will download as "Arafat_Alam_Frontend_Dev.pdf"

## ✅ Resume Download Buttons Added:

### 🏠 Hero Section:
- **Button Text**: "Download Resume"
- **Location**: Main hero area, next to your introduction
- **Style**: Dark button with hover effects

### 📧 Contact Section:
- **Button Text**: "Download Resume" 
- **Location**: Quick Info card in contact section
- **Style**: Gradient button matching the theme

## 🔧 Technical Details:

### Download Attributes:
- **href**: `/resume.pdf` (points to public folder)
- **download**: `Arafat_Alam_Frontend_Dev.pdf` (downloaded file name)
- **target**: `_blank` (opens in new tab as backup)

### Features:
- ✅ Automatic download when clicked
- ✅ Custom filename for downloaded file
- ✅ Fallback to open in new tab if download fails
- ✅ Hover animations and effects
- ✅ Mobile-responsive design

## 📝 Resume Tips:

### Content to Include:
- **Contact Information**: Email, phone, location
- **Professional Summary**: Brief overview of your skills
- **Technical Skills**: MERN stack, React, Node.js, etc.
- **Projects**: Your 3 main projects (Digital Life Lessons, My Krishi, Green Tree)
- **Education**: Your degree and institution
- **Experience**: Any internships or work experience

### Design Tips:
- Keep it to 1-2 pages maximum
- Use a clean, professional layout
- Include links to your GitHub and LinkedIn
- Match the color scheme of your portfolio (optional)
- Export as high-quality PDF

---

**Note**: Make sure to replace the placeholder `public/resume.pdf` with your actual resume file!