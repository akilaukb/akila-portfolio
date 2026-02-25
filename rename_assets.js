/* eslint-disable */
const fs = require('fs');
const path = require('path');

const directory = 'public/sequence';

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach((file) => {
        // Expected format: frame_000_delay-0.059s.webp
        // We want: frame_000.webp

        // Extract the number
        const match = file.match(/frame_(\d+)/);
        if (match) {
            const number = match[1];
            const newName = `frame_${number}.webp`;
            const oldPath = path.join(directory, file);
            const newPath = path.join(directory, newName);

            fs.rename(oldPath, newPath, (err) => {
                if (err) console.log('ERROR: ' + err);
            });
            console.log(`${file} -> ${newName}`);
        }
    });
});
