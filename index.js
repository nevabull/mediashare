import { useEffect, useState } from 'react';

export default function Home() {
    const [mediaFiles, setMediaFiles] = useState([]);

    useEffect(() => {
        fetch('/mediaFiles.json')
            .then(response => response.json())
            .then(data => setMediaFiles(data))
            .catch(error => console.error('Error fetching media files:', error));
    }, []);

    return (
        <div>
            <h1>Media Files</h1>
            <ul>
                {mediaFiles.map((file, index) => (
                    <li key={index}>
                        <audio controls src={file}></audio>
                        <a href={file} download>Download</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}