// Toggle chat window visibility
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBody = document.getElementById('chatBody');

if (chatButton) {
    chatButton.addEventListener('click', () => {
        chatWindow.style.display = 'flex';
        chatButton.style.display = 'none';
    });
}

if (closeChat) {
    closeChat.addEventListener('click', () => {
        chatWindow.style.display = 'none';
        chatButton.style.display = 'block';
    });
}

// Handle sending messages
if (sendBtn && userInput) {
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    // Append user message
    appendMessage(text, 'user-message');
    userInput.value = '';

    // Generate bot response after a brief moment
    setTimeout(() => {
        const botReply = getBotResponse(text);
        appendMessage(botReply, 'bot-message');
    }, 300);
}

function appendMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = className;
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Smart AI Assistant Responses for M. Swathi
function getBotResponse(input) {
    input = input.toLowerCase();

    // 1. Individual Specific Projects (Checked First)
    if (input.includes('train') || input.includes('eta') || input.includes('cochin') || input.includes('railway')) {
        return "Determining ETA of Railway Cochin Trains: Developed an algorithm/system to calculate and predict the Estimated Time of Arrival (ETA) for trains operating in Cochin, helping commuters plan their travel efficiently.";
    }

    if (input.includes('pca') || input.includes('svd') || input.includes('architecture') || input.includes('student life') || input.includes('student')) {
        return "The Hidden Architecture of Student Life: Implemented data analysis techniques using Principal Component Analysis (PCA) and Singular Value Decomposition (SVD) to analyze student behavioral patterns and uncover key underlying trends.";
    }

    if (input.includes('exam') || input.includes('re-evaluation') || input.includes('re evaluation') || input.includes('reevaluation')) {
        return "Precise Exam Re-Evaluation Process: Built a software application using Object-Oriented Programming (OOPs) in Java and DBMS to automate and streamline the paper re-evaluation workflow with accuracy and transparency.";
    }

    if (input.includes('hotel') || input.includes('management system')) {
        return "Hotel Management System: Designed a modular, console-based application in C language featuring file handling for managing room reservations, customer records, and billing operations.";
    }

    if (input.includes('portfolio') || input.includes('chatbot project') || input.includes('this site') || input.includes('website')) {
        return "Personal Portfolio & AI Chatbot: A responsive dark-themed portfolio website with an interactive embedded AI assistant built with modern HTML, CSS, and vanilla JavaScript.";
    }

    // 2. All Projects Overview
    if (input.includes('projects') || input.includes('all project') || input.includes('work') || input.includes('built') || input.includes('created')) {
        return "M. Swathi has built 5 core projects:\n1. Personal Portfolio & AI Chatbot\n2. Cochin Train ETA Prediction\n3. Student Life Architecture (PCA/SVD)\n4. Exam Re-Evaluation System (Java/DBMS)\n5. Hotel Management System (C)\n\nAsk me about any of these to know more!";
    }

    // 3. Skills & Tech Stack
    if (input.includes('c++') || input.includes('cpp')) {
        return "Swathi is skilled in C++ for Object-Oriented Programming and efficient algorithm development.";
    }

    if (input.includes('python')) {
        return "Swathi utilizes Python for data processing, numerical computations (like PCA & SVD), and scripting.";
    }

    if (input.includes('java') || input.includes('oops') || input.includes('dbms') || input.includes('sql')) {
        return "Swathi has a strong foundation in Object-Oriented Programming (OOPs) using Java, along with Database Management Systems (DBMS) and SQL.";
    }

    if (input.includes('skill') || input.includes('tech') || input.includes('language') || input.includes('know') || input.includes('stack')) {
        return "M. Swathi's technical skills include C, C++, Python, Java, Object-Oriented Programming (OOPs), DBMS, SQL, Git, and Web Development (HTML/CSS/JS).";
    }

    // 4. Resume & Download
    if (input.includes('resume') || input.includes('cv') || input.includes('download')) {
        return "You can view or download M. Swathi's complete resume (resume.txt) directly from the Resume section on this webpage!";
    }

    // 5. Contact Info
    if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('github') || input.includes('linkedin')) {
        return "You can contact M. Swathi via email at swathi@example.com or visit her GitHub profile directly through the links provided in the Contact section.";
    }

    // 6. Greetings / General Intro (Checked Last)
    if (input.includes('hi') || input.includes('hello') || input.includes('hey') || input.includes('who are you')) {
        return "Hello! I am M. Swathi's virtual assistant. Ask me about her projects (e.g., Cochin train, PCA student life, Exam re-evaluation, Hotel management), skills, resume, or contact details!";
    }

    // Fallback response
    return "I can help you learn more about M. Swathi! Try asking about her 'train project', 'exam re-evaluation', 'PCA student life project', 'hotel management system', or 'skills'.";
}