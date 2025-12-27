#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * Script to capture a screenshot of the visualization
 * This uses a free screenshot API or provides instructions for manual capture
 */

const SCREENSHOT_PATH = path.join(__dirname, '..', 'screenshot.png');
const README_PATH = path.join(__dirname, '..', 'README.md');

async function captureScreenshot() {
    console.log('📸 Capturing screenshot of Great Lakes Voyages visualization...\n');

    // Check if running locally or on GitHub
    const isLocal = !process.env.GITHUB_ACTIONS;

    if (isLocal) {
        console.log('ℹ️  Manual screenshot capture required:');
        console.log('   1. Open index.html in your browser');
        console.log('   2. Take a screenshot of the visualization');
        console.log('   3. Save it as screenshot.png in the project root');
        console.log('   4. Run this script again to update the README\n');

        // Check if screenshot already exists
        if (fs.existsSync(SCREENSHOT_PATH)) {
            console.log('✅ Screenshot found at screenshot.png');
            updateReadme();
        } else {
            console.log('❌ No screenshot.png found. Please create one manually.');
            console.log('\n💡 Tip: You can use browser dev tools or screenshot tools');
            process.exit(0);
        }
    }
}

function updateReadme() {
    console.log('📝 Updating README.md with screenshot...\n');

    let readme = fs.readFileSync(README_PATH, 'utf8');

    // Check if screenshot section already exists
    const screenshotSection = '\n## Visualization Preview\n\n![Great Lakes Voyages Visualization](./screenshot.png)\n\n';

    if (readme.includes('## Visualization Preview')) {
        console.log('ℹ️  Screenshot section already exists in README.md');
    } else {
        // Add screenshot section after the title
        const lines = readme.split('\n');
        const titleIndex = lines.findIndex(line => line.startsWith('# '));

        if (titleIndex !== -1) {
            lines.splice(titleIndex + 2, 0, screenshotSection);
            readme = lines.join('\n');
            fs.writeFileSync(README_PATH, readme);
            console.log('✅ Screenshot section added to README.md');
        } else {
            console.log('⚠️  Could not find title in README.md');
        }
    }
}

// Run the script
captureScreenshot().catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
});
