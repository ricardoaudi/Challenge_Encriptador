// Generate AES key
async function generateKey() {
    return crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
}

// Encrypt text using AES
async function encryptText(text, key) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        key,
        data
    );
    return { iv, encrypted };
}

// Decrypt text using AES
async function decryptText(encryptedData, key) {
    const { iv, encrypted } = encryptedData;
    const decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        key,
        encrypted
    );
    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
}

let aesKey;
generateKey().then(key => aesKey = key);

document.getElementById('encrypt-btn').addEventListener('click', async function () {
    let inputText = document.getElementById('input-text').value;
    if (/^[a-z\s]*$/.test(inputText)) {
        const encryptedData = await encryptText(inputText, aesKey);
        document.getElementById('output-placeholder').style.display = 'none';
        document.getElementById('output-text').style.display = 'block';
        document.getElementById('copy-btn').style.display = 'block';
        document.getElementById('output-text').value = btoa(JSON.stringify({
            iv: Array.from(new Uint8Array(encryptedData.iv)),
            encrypted: Array.from(new Uint8Array(encryptedData.encrypted))
        }));
    } else {
        alert("Por favor, ingrese solo texto en minúsculas y sin acentos.");
    }
});

document.getElementById('decrypt-btn').addEventListener('click', async function () {
    let inputText = document.getElementById('input-text').value;
    try {
        const encryptedData = JSON.parse(atob(inputText));
        const decryptedText = await decryptText({
            iv: new Uint8Array(encryptedData.iv),
            encrypted: new Uint8Array(encryptedData.encrypted)
        }, aesKey);
        document.getElementById('output-placeholder').style.display = 'none';
        document.getElementById('output-text').style.display = 'block';
        document.getElementById('copy-btn').style.display = 'block';
        document.getElementById('output-text').value = decryptedText;
    } catch (error) {
        alert("El texto no es válido para desencriptar.");
    }
});

document.getElementById('copy-btn').addEventListener('click', function () {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles.");
});

document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
    document.getElementById('output-text').style.display = 'none';
    document.getElementById('copy-btn').style.display = 'none';
    document.getElementById('output-placeholder').style.display = 'block';
});
