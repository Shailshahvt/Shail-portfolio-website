# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Installed**: Ensure Git is installed on your machine
3. **Node.js**: Make sure Node.js is installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `portfolio-website`
5. Make it **Public** (required for GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Connect Your Local Repository to GitHub

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/shailshahvt/portfolio-website.git

# Add all files to Git
git add .

# Commit your changes
git commit -m "Initial portfolio website commit"

# Push to GitHub
git push -u origin main
```

### 3. Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

### 5. Your Website is Live!

Your portfolio will be available at:
**https://shailshahvt.github.io/portfolio-website**

## Updating Your Website

Whenever you make changes:

```bash
# Add your changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### If deployment fails:
1. Check that your repository is public
2. Ensure the `gh-pages` branch was created
3. Wait a few minutes for changes to propagate

### If images don't load:
1. Make sure your images are in the `public/images/` folder
2. Check that image paths are correct in your code

### If routing doesn't work:
1. GitHub Pages doesn't support client-side routing by default
2. Consider using HashRouter instead of BrowserRouter for GitHub Pages

## Custom Domain (Optional)

To use a custom domain:

1. Go to your repository Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Update the `homepage` in `package.json` to match your domain
4. Redeploy with `npm run deploy`

## Support

If you encounter any issues:
- Check the GitHub Pages documentation
- Ensure all dependencies are properly installed
- Verify that your repository is public
- Check the GitHub Actions tab for deployment status 