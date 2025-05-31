
    async function download() {
        const url = document.getElementById('videoUrl').value;
        const response = await fetch('https://videodonwloader.onrender.com/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        if (!response.ok) return alert('Download failed');

        const blob = await response.blob();
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'video.mp4';
        a.click();
    }
