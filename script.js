// ===== RAMA SILALAHi BUTTONS - HOVER & ACTIVE EFFECTS =====

// Data buttons
const buttonsData = [
    {
        id: 'gooey',
        name: 'GOOEY',
        title: 'Gooey Effect',
        html: `<div class="gooey-wrapper">
            <button class="gooey-btn">GOOEY</button>
        </div>`,
        css: `.gooey-wrapper { filter: url('#gooey'); }\n.gooey-btn:hover { transform: scale(1); }\n.gooey-btn:active { transform: scale(0.95); }`
    },
    {
        id: 'aurora',
        name: 'AURORA',
        title: 'Aurora',
        html: `<button class="aurora-btn">AURORA</button>`,
        css: `.gradient-border {\n  background: conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0);\n  animation: rotate 4s linear infinite;\n}`
    },
    {
        id: 'glow-bar',
        name: 'GLOW BAR',
        title: 'Glow Bar',
        html: `<button class="glow-bar-btn">
            GLOW BAR
            <span class="glow-bar"></span>
        </button>`,
        css: `.glow-bar:hover { width: 85%; }`
    },
    {
        id: 'wave',
        name: 'SPLASH!',
        title: 'Wave',
        html: `<button class="wave-btn">
            SPLASH!
            <span class="wave"></span>
        </button>`,
        css: `.wave { transform: translateY(100%); }\n.active_wave { transform: translateY(10%); }`
    },
    {
        id: 'shake',
        name: 'SHAKE ME',
        title: 'Shake',
        html: `<button class="shake-btn">SHAKE ME</button>`,
        css: `.shake-btn:hover { animation: btn-shake 0.6s; }`
    },
    {
        id: 'glitch',
        name: 'GLITCH',
        title: 'Glitch',
        html: `<button class="glitch-btn" data-text="GLITCH">
            <span class="glitch-letter">G</span>
            <span class="glitch-letter">L</span>
            <span class="glitch-letter">I</span>
            <span class="glitch-letter">T</span>
            <span class="glitch-letter">C</span>
            <span class="glitch-letter">H</span>
        </button>`,
        css: `.letter { animation: glitch; }`
    },
    {
        id: 'squishy',
        name: 'SQUISHY',
        title: 'Squishy',
        html: `<button class="squishy-btn">SQUISHY</button>`,
        css: `.squishy-btn { box-shadow: 0 8px 0 darkgray; }\n.squishy-btn:hover { transform: translateY(4px); }`
    },
    {
        id: 'electric',
        name: 'ZAP ME',
        title: 'Electric (with Lightning)',
        html: `<button class="electric-btn">
            <span class="electric-text">ZAP ME</span>
        </button>`,
        css: `.electric:hover .btn-text { text-shadow: 0 0 10px cyan; animation: flicker; }\n.electric:active { animation: lightningFlash 0.2s; }`
    },
    {
        id: 'bubble',
        name: 'BUBBLE',
        title: 'Bubble',
        html: `<button class="bubble-btn">
            BUBBLE
            <span class="bubble bubble1"></span>
            <span class="bubble bubble2"></span>
            <span class="bubble bubble3"></span>
        </button>`,
        css: `.bubble:hover { transform: scale(1); }`
    }
];

// Code snippets
const codeSnippets = [
    { name: 'Gooey', code: `.gooey-wrapper {\n  filter: url('#gooey');\n}` },
    { name: 'Aurora', code: `.gradient-border {\n  background: conic-gradient;\n  animation: rotate;\n}` },
    { name: 'Glow Bar', code: `.glow-bar:hover {\n  width: 85%;\n}` },
    { name: 'Wave', code: `.wave {\n  transform: translateY(100%);\n}\n.active_wave {\n  transform: translateY(10%);\n}` },
    { name: 'Shake', code: `.shake-btn:hover {\n  animation: btn-shake 0.6s;\n}` },
    { name: 'Glitch', code: `.letter {\n  animation: glitch;\n}` },
    { name: 'Squishy', code: `.squishy-btn {\n  box-shadow: 0 8px 0 darkgray;\n}\n.squishy-btn:hover {\n  transform: translateY(4px);\n}` },
    { name: 'Electric', code: `.electric:hover .btn-text {\n  text-shadow: 0 0 10px cyan;\n  animation: flicker;\n}\n.electric:active {\n  animation: lightningFlash 0.2s;\n}` }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const buttonsGrid = document.getElementById('buttonsGrid');
const codeGrid = document.getElementById('codeGrid');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ===== THEME TOGGLE =====
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
}

// ===== RENDER BUTTONS =====
function renderButtons() {
    if (!buttonsGrid) return;
    
    buttonsGrid.innerHTML = buttonsData.map(btn => `
        <div class="button-card">
            <h3>${btn.title}</h3>
            <div class="button-wrapper">
                ${btn.html}
            </div>
            <div class="button-note">${btn.css.split('\n')[0]}</div>
        </div>
    `).join('');
}

// ===== RENDER CODE SNIPPETS =====
function renderCodeSnippets() {
    if (!codeGrid) return;
    
    codeGrid.innerHTML = codeSnippets.map(snippet => `
        <div class="code-card">
            <h3>${snippet.name}</h3>
            <pre>${snippet.code}</pre>
            <button class="copy-code-btn" onclick="copyCode('${snippet.code.replace(/'/g, "\\'").replace(/\n/g, '\\n')}')">
                <i class="fas fa-copy"></i> Copy Code
            </button>
        </div>
    `).join('');
}

// ===== COPY CODE =====
window.copyCode = function(code) {
    navigator.clipboard.writeText(code.replace(/\\n/g, '\n')).then(() => {
        showToast('✅ Code copied!');
    }).catch(() => {
        showToast('❌ Failed to copy', true);
    });
};

// ===== SHOW TOAST =====
function showToast(message, isError = false) {
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.style.background = isError ? '#ef4444' : 'var(--card-bg)';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// ===== ADD ACTIVE EFFECT =====
document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('electric-btn') || 
        e.target.closest('.electric-btn')) {
        // Efek petir udah di CSS
        console.log(' Lightning strike!');
    }
});

// ===== INITIALIZE =====
renderButtons();
renderCodeSnippets();