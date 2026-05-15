// प्रश्नों को लोड करने के लिए फंक्शन
async function loadQuestions() {
    try {
        // 'data.json' फाइल से डेटा मांगना (Fetch करना)
        const response = await fetch('./data.json');
        
        // चेक करें कि फाइल मिली या नहीं
        if (!response.ok) {
            throw new Error("डेटा लोड करने में समस्या आ रही है!");
        }

        // JSON डेटा को JavaScript ऑब्जेक्ट में बदलना
        const questions = await response.json();

        // डेटा को डिस्प्ले करने वाला फंक्शन चलाएं
        displayQuestions(questions);
        
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('quiz-container').innerHTML = "टेस्ट लोड करने में विफल।";
    }
}//data

// प्रश्नों को स्क्रीन पर दिखाने का फंक्शन
function displayQuestions(questions) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = ""; // पुराना डेटा साफ़ करें

    questions.forEach((q, index) => {
        const qElement = document.createElement('div');
        qElement.innerHTML = `
            <p><strong>Q${index + 1}: ${q.question}</strong></p>
            <ul>
                ${q.options.map(opt => `<li>${opt}</li>`).join('')}
            </ul>
        `;
        container.appendChild(qElement);
    });
}

// पेज लोड होते ही फंक्शन को कॉल करें
window.onload = loadQuestions;
