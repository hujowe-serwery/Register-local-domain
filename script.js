function generateEmail() {
    const subdomain = document.getElementById('subdomainInput').value.trim();
    
    if (!subdomain) {
        alert('Please enter a subdomain name first!');
        return;
    }

    const emailTemplate = document.getElementById('emailTemplate');
    const requestedDomain = document.getElementById('requestedDomain');
    
    requestedDomain.textContent = subdomain + '.local-domain.online';
    emailTemplate.classList.remove('hidden');
}

document.getElementById('subdomainInput').addEventListener('input', function(e) {
    // Remove any special characters and spaces
    this.value = this.value.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
});

