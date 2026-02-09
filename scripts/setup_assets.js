const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, '../../temp_images'); // Sibling to project root
const destDir = path.resolve(__dirname, '../public/sequence');

async function main() {
    console.log(`Source Dir: ${sourceDir}`);
    console.log(`Dest Dir: ${destDir}`);

    if (!fs.existsSync(sourceDir)) {
        console.error(`Source directory not found: ${sourceDir}`);
        process.exit(1);
    }

    if (!fs.existsSync(destDir)) {
        console.log(`Creating destination directory: ${destDir}`);
        fs.mkdirSync(destDir, { recursive: true });
    }

    const files = fs.readdirSync(sourceDir).filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.jpg'));

    // Sort numerically based on the number in the filename
    files.sort((a, b) => {
        const numA = parseInt(a.match(/(\d+)/)[0], 10);
        const numB = parseInt(b.match(/(\d+)/)[0], 10);
        return numA - numB;
    });

    console.log(`Found ${files.length} frames.`);

    for (let i = 0; i < files.length; i++) {
        const sourceFile = path.join(sourceDir, files[i]);
        const destFile = path.join(destDir, `frame_${i}.jpg`);

        fs.copyFileSync(sourceFile, destFile);
        if (i % 20 === 0) console.log(`Copied ${i}/${files.length}`);
    }

    const meta = { frameCount: files.length };
    fs.writeFileSync(path.join(destDir, 'meta.json'), JSON.stringify(meta, null, 2));

    console.log('Done.');
}

main().catch(console.error);
