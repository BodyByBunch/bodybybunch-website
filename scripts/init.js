#!/usr/bin/env node

/**
 * Next.js App Template Initialization Script
 * 
 * This script helps set up a new project from the template by:
 * - Replacing placeholder values
 * - Setting up environment variables
 * - Initializing git repository
 * - Setting up Shadcn/ui
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get project name from command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error('❌ Please provide a project name:');
  console.error('   npx create-nextjs-app my-app');
  process.exit(1);
}

const projectPath = path.resolve(projectName);

// Check if directory already exists
if (fs.existsSync(projectPath)) {
  console.error(`❌ Directory "${projectName}" already exists.`);
  process.exit(1);
}

console.log(`🚀 Creating Next.js app: ${projectName}`);

try {
  // Create project directory
  fs.mkdirSync(projectPath, { recursive: true });
  
  // Copy template files
  const templatePath = path.resolve(__dirname, '..');
  copyDirectory(templatePath, projectPath);
  
  // Copy app-package.json as package.json
  const appPackagePath = path.join(projectPath, 'app-package.json');
  const packageJsonPath = path.join(projectPath, 'package.json');
  if (fs.existsSync(appPackagePath)) {
    fs.copyFileSync(appPackagePath, packageJsonPath);
    fs.unlinkSync(appPackagePath); // Remove the template file
  }
  
  // Update package.json
  updatePackageJson(projectPath, projectName);
  
  // Create .env.local from example
  const envExamplePath = path.join(projectPath, 'env.example');
  const envLocalPath = path.join(projectPath, '.env.local');
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envLocalPath);
  }
  
  // Initialize git repository
  try {
    execSync('git init', { cwd: projectPath, stdio: 'ignore' });
    console.log('✅ Git repository initialized');
  } catch (error) {
    console.log('⚠️  Git initialization skipped (git not available)');
  }
  
  console.log('\n🎉 Project created successfully!');
  console.log('\nNext steps:');
  console.log(`  cd ${projectName}`);
  console.log('  bun install');
  console.log('  bun dev');
  console.log('\n🎨 Shadcn/ui is pre-configured!');
  console.log('  Add components with: bun run ui:add <component-name>');
  console.log('  Example: bun run ui:add button card input');
  console.log('\n📚 Check the README.md for detailed documentation');
  console.log('\nHappy coding! 🚀');
  
} catch (error) {
  console.error('❌ Error creating project:', error.message);
  process.exit(1);
}

function copyDirectory(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    // Skip node_modules, .git, and other unnecessary files
    if (entry.name === 'node_modules' || 
        entry.name === '.git' || 
        entry.name === '.next' ||
        entry.name === 'scripts' ||
        entry.name === 'package.json') { // Skip the template package.json
      continue;
    }
    
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function updatePackageJson(projectPath, projectName) {
  const packageJsonPath = path.join(projectPath, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Update package name and description
  packageJson.name = projectName;
  packageJson.description = `A modern Next.js application built with TypeScript, Tailwind CSS, and Shadcn/ui`;
  
  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Package.json updated');
} 