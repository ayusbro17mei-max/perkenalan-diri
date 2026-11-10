
// ==========================================
// FAIRUZ PORTFOLIO - JAVASCRIPT
// ==========================================


// ==========================================
// 1. DATA DISCOVER ME
// ==========================================

const cardData = {

    // MY HOBBIES
    hobbies: {
        icon: "fa-solid fa-gamepad",
        category: "MY HOBBIES",
        title: "Things I Enjoy",

        content: `
            <div class="detail-content">
                <h3>Coding</h3>
                <p>I enjoy writing code and creating websites and applications.</p>

                <h3>Listening to Music</h3>
                <p>Music is one of my favorite ways to enjoy my free time.</p>

                <h3>Playing Games</h3>
                <p>I love playing games and exploring new experiences.</p>
            </div>
        `
    },


    // MY PASSION
    passion: {
        icon: "fa-solid fa-code",
        category: "MY PASSION",
        title: "What I Love",

        content: `
            <div class="detail-content">
                <h3>Programming</h3>
                <p>I love learning programming and exploring new technologies.</p>

                <h3>Web Development</h3>
                <p>I enjoy creating modern and useful websites.</p>

                <h3>Frontend & Backend</h3>
                <p>I am interested in developing both frontend and backend systems.</p>
            </div>
        `
    },


    // MY FAVORITES - SPOTIFY
    favorites: {
        icon: "fa-solid fa-music",
        category: "MY FAVORITES",
        title: "My Favorite Music",

        content: `
            <div class="spotify-player">

                <iframe
                    src="https://open.spotify.com/embed/track/4x2PkqSLtuwv53hLqq4GiY?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameborder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>

            </div>

            <p class="music-description">
                Music is a part of my daily life.
                Backburner by NIKI is one of my favorite songs.
            </p>
        `
    },


    // MY PERSONALITY
    personality: {
        icon: "fa-solid fa-user",
        category: "MY PERSONALITY",
        title: "Who I Am",

        content: `
            <div class="detail-content">
                <h3>Quiet but Curious</h3>
                <p>I am a quiet person, but I enjoy learning new things.</p>

                <h3>Interested in Technology</h3>
                <p>I like exploring technology, programming, and innovation.</p>

                <h3>Always Learning</h3>
                <p>I believe that every day is an opportunity to improve myself.</p>
            </div>
        `
    },


    // MY DREAMS
    dreams: {
        icon: "fa-solid fa-star",
        category: "MY DREAMS",
        title: "My Biggest Dreams",

        content: `
            <div class="detail-content">
                <h3>Professional Developer</h3>
                <p>One of my dreams is to become a professional software developer.</p>

                <h3>Build Something Meaningful</h3>
                <p>I want to create applications and websites that can help many people.</p>

                <h3>Make My Family Proud</h3>
                <p>I want to make my parents proud and help others through my achievements.</p>
            </div>
        `
    },


    // MY MEMORIES
    memories: {
        icon: "fa-solid fa-images",
        category: "MY MEMORIES",
        title: "My Precious Memories",

        content: `
            <div class="memory-gallery">

                <div class="memory-item">
                    <img
                        src="assets/images/momen1.jpeg.jpeg"
                        alt="Memory 1">

                    <div class="memory-info">
                        <h3>My Proudest Moment</h3>
                        <p>
                            This was me when I was younger, 
                            a hardworking kid who used to get awards.
                        </p>
                    </div>
                </div>


                <div class="memory-item">
                    <img
                        src="assets/images/momen2.jpeg.jpeg"
                        alt="Memory 2">

                    <div class="memory-info">
                        <h3>Unforgettable Days</h3>
                        <p>
                            A beautiful day filled with stories,
                            happiness, and unforgettable experiences.
                        </p>
                    </div>
                </div>


                <div class="memory-item">
                    <img
                        src="assets/images/momen3.jpeg"
                        alt="Memory 3">

                    <div class="memory-info">
                        <h3>Bromo Moment</h3>
                        <p>
                            This was me at Mount Bromo. 
                            I wasn't allowed to go, but I went anyway. 
                            Luckily, I made it back safe and sound, haha.
                        </p>
                    </div>
                </div>

            </div>
        `
    }

};


// ==========================================
// 2. MODAL ELEMENTS
// ==========================================

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalIcon = document.getElementById("modalIcon");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");


// ==========================================
// 3. OPEN MODAL
// ==========================================

document.querySelectorAll(".discover-card").forEach(card => {

    card.addEventListener("click", () => {

        const cardName = card.dataset.card;
        const data = cardData[cardName];

        if (!data) return;

        modalIcon.innerHTML = `<i class="${data.icon}"></i>`;

        modalCategory.textContent = data.category;

        modalTitle.textContent = data.title;

        modalContent.innerHTML = data.content;

        modalOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// ==========================================
// 4. CLOSE MODAL
// ==========================================

function closeModal() {

    modalOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


// Tombol close
if (modalClose) {

    modalClose.addEventListener("click", closeModal);

}


// Klik di luar modal
if (modalOverlay) {

    modalOverlay.addEventListener("click", event => {

        if (event.target === modalOverlay) {

            closeModal();

        }

    });

}


// Tombol Escape
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});


// ==========================================
// 5. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });


    // Menutup menu setelah link diklik
    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });

}


// ==========================================
// 6. ACTIVE NAVIGATION ON SCROLL
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// 7. CURRENT YEAR
// ==========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// ==========================================
// END OF FAIRUZ PORTFOLIO JAVASCRIPT
// ==========================================
