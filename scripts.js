function sortLines() {
    const textArea = document.getElementById('textArea');
    let lines = textArea.value.trim().split('\n').filter(line => line.trim() !== '');
    const sortMethod = document.getElementById('sortMethod').value;

    switch (sortMethod) {
        case 'alphabetic':
            lines.sort((a, b) => a.localeCompare(b));
            break;
        case 'alphabeticReverse':
            lines.sort((a, b) => b.localeCompare(a));
            break;
        case 'length':
            lines.sort((a, b) => a.length - b.length);
            break;
        case 'lengthReverse':
            lines.sort((a, b) => b.length - a.length);
            break;
        case 'reverse':
            lines.reverse();
            break;
        case 'shuffle':
            lines = shuffleArray(lines);
            break;
        default:
            break;
    }

    textArea.value = lines.join('\n');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function copyText() {
    const textArea = document.getElementById('textArea');
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');
        alert('Text copied to clipboard');
    } catch (err) {
        alert('Failed to copy text');
    }
}