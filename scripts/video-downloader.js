document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadBtn');
    const urlInput = document.getElementById('videoUrl');

    downloadButton.addEventListener('click', async () => {
        const videoUrl = urlInput.value.trim();

        if (!videoUrl) {
            alert("Please enter a video URL.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/download`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: videoUrl })
            });

            if (response.ok) {
            } else {
                new Error('Download failed.');
            }

            const blob = await response.blob();
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'video.mp4';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error(error);
            alert("Failed to download the video. Check the URL or try again later.");
        }
    });
});