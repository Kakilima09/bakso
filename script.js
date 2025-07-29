document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    // Pastikan elemen ditemukan
    if (mobileMenuBtn && navMenu && menuIcon) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Mencegah event bubbling
            navMenu.classList.toggle('show');
            
            // Ganti ikon
            if (navMenu.classList.contains('show')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Tutup menu ketika mengklik di luar
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target)) {
                navMenu.classList.remove('show');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Tutup menu ketika memilih item
        const navLinks = document.querySelectorAll('#nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    } else {
        console.error('Elemen menu tidak ditemukan');
    }

    // Live Chat Functionality
    const chatBtn = document.getElementById('chatBtn');
    const chatBox = document.getElementById('chatBox');
    const closeChat = document.getElementById('closeChat');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');

    if (chatBtn && chatBox && closeChat && chatBody && chatInput && sendBtn) {
        // Toggle chat box
        chatBtn.addEventListener('click', function() {
            chatBox.classList.toggle('active');
        });

        // Close chat box
        closeChat.addEventListener('click', function() {
            chatBox.classList.remove('active');
        });

        // Send message
        function sendMessage() {
            const message = chatInput.value.trim();
            if (message !== '') {
                // Add user message
                addMessage(message, 'user');
                chatInput.value = '';
                
                // Simulate admin reply after 1 second
                setTimeout(() => {
                    const replies = [
                        "Terima kasih atas pesan Anda. Kami akan segera merespons.",
                        "Pesan Anda sudah kami terima. Ada lagi yang bisa kami bantu?",
                        "Kami sedang memproses permintaan Anda. Mohon menunggu sebentar.",
                        "Untuk informasi harga dan menu, bisa dilihat di bagian menu ya.",
                        "Jam operasional kami setiap hari dari pukul 09.00 - 21.00 WIB."
                    ];
                    const randomReply = replies[Math.floor(Math.random() * replies.length)];
                    addMessage(randomReply, 'admin');
                }, 1000);
            }
        }

        // Add message to chat
        function addMessage(text, sender) {
            const now = new Date();
            const timeString = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
            
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${sender}`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            contentDiv.textContent = text;
            
            const timeDiv = document.createElement('div');
            timeDiv.className = 'message-time';
            timeDiv.textContent = timeString;
            
            messageDiv.appendChild(contentDiv);
            messageDiv.appendChild(timeDiv);
            
            chatBody.appendChild(messageDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        // Send message on button click
        sendBtn.addEventListener('click', sendMessage);

        // Send message on Enter key
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});