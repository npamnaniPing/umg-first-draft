// Get elements
const languageSelect = document.getElementById('languageSelect');
const selectedLanguageInput = document.getElementById('selectedLanguage');
const nextButton = document.getElementById('next-button');
const DVSubmitBtn = document.getElementById('DVSubmitBtn');

// Set the initial language or default to English
selectedLanguageInput.value = languageSelect.value = "{{global.parameters.authorizationRequest.ui_locales}}" || "en";

// Update selected language on change
languageSelect.addEventListener('change', () => {
    selectedLanguageInput.value = languageSelect.value;
    updateLanguage(languageSelect.value);
});

// Update content based on the selected language
function updateLanguage(lang) {
    const content = {{global.company.variables.languageData}}[lang]?.data;
    if (content) {
        document.getElementById('greeting-text').innerText = content.greetings;
        document.getElementById('page-info').innerText = content.nextPageText;
        document.getElementById('next-button').innerText = content.nextButton;
    }
}

// Trigger form submission when the next button is clicked
nextButton.addEventListener('click', () => DVSubmitBtn.click());
