
$(document).ready(function () {
    // Define project data in a JavaScript object
    const projects = {
        1: {
            title: "Clean Multiplayer Pro Asset",
            description: "<b>Clean Multiplayer Pro Asset</b> is a Unity asset designed to provide developers with a ready-to-use foundation for building robust multiplayer games. It includes networking, matchmaking, player communication, and synced gameplay features built on Photon Fusion.<br><br>My contributions included:<ul><li>Implementing matchmaking and session management using Photon Fusion</li><li>Building player character synchronization across clients</li><li>Integrating real-time chat and voice communication</li><li>Developing a voting system for in-game decisions</li><li>Designing and syncing an inventory system for multiplayer consistency</li></ul>",
            media: [
                { type: "image", url: "assets/images/project 1.1.png" },
                { type: "image", url: "assets/images/project1.2.png" },
                { type: "image", url: "assets/images/project1.3.png" },
                { type: "image", url: "assets/images/project1.4.png" }
            ],
            link: "https://assetstore.unity.com/packages/templates/packs/clean-multiplayer-pro-264984",
            tags: ["Unity", "Multiplayer", "Asset Store", "Networking", "Documentation","Photon","Fusion"]
        },
        2: {
            title: "G.I. Joe Wrath of Cobra",
            description: "<b>G.I. Joe Wrath of Cobra</b> is a fast-paced beat 'em up game that supports both local and online cooperative play. Multiplayer functionality was built on top of the existing single-player game to provide smooth, synchronized gameplay across platforms.<br><br>My contributions included:<ul><li>Integrating Photon Fusion to add a multiplayer module into the pre-built game</li><li>Implementing input controls using the Rewired input system</li><li>Handling host migration for uninterrupted sessions</li><li>Applying client-side prediction techniques for responsive combat</li><li>Creating and managing a network object pool for efficiency</li><li>Supporting both host-client and dedicated client modes</li></ul>",
            media: [
                { type: "image", url: "assets/images/project2.2.webp" },
                { type: "image", url: "assets/images/project2.4.jpg" },
                { type: "image", url: "assets/images/project2.3.jpg" },
                { type: "video", url: "assets/images/project2.1v.mp4" }
            ],
            tags: ["Multiplayer", "Co-op", "Beat 'em Up", "Unity", "Photon Fusion", "Online Play" ,"AAA"]
        },
        3: {
            title: "Meta Royale – Web3 Brawler with Wallet Integration",
            description: "<b>Meta Royale</b> is a Web3-enabled brawler game that allows players to connect cryptocurrency wallets and directly interact with the in-game economy. Players can manage assets, make purchases, and own NFTs within the game interface.<br><br>My contributions included:<ul><li>Converting the existing multiplayer system from Photon PUN to Photon Fusion for improved performance and scalability</li><li>Implementing character controls and responsive gameplay mechanics</li><li>Integrating character animations and syncing them across multiplayer sessions</li></ul>",
            media: [
                { type: "video", url: "assets/images/project3.v.mp4" }
            ],
             tags: ["Web3", "Blockchain", "Wallet Integration", "Brawler", "Crypto"]
        },
        4: {
            title: "N2Y L³ Skills – Interactive Skill-Building for Diverse Learners",
            description: "<b>L³ Skills</b> is a collection of 100+ WebGL-based educational mini-games designed to engage diverse learners and support skill development through interactive gameplay. Each game offers unique mechanics aligned with specific learning objectives.<br><br>My contributions included:<ul><li>Developing small reusable plugins, such as a sprite glow plugin and an accessibility plugin, to standardize features across all games</li><li>Designing a single flexible game architecture to handle game flow consistently across multiple titles</li><li>Refactoring the original monolithic project (100+ games in one project) by separating games into manageable modules for improved scalability and maintainability</li><li>Enhancing accessibility and usability features to better support diverse learners</li></ul>",
            media: [
                { type: "image", url: "assets/images/project8.png" },

            ],
            link:"https://www.n2y.com/l3-skills/",
            tags: ["Educational", "Gamification", "Accessibility", "Interactive", "EdTech"]
        },
        5: {
            title: "Skewer Rush – Mobile Game (Android)",
            description: "<b>Skewer Rush</b> is a fast-paced, arcade-style mobile game where players swipe to launch skewers at moving targets to score points. With vibrant visuals, smooth animations, and dynamic challenges, the game delivers an engaging and addictive experience.<br><br>My contributions included:<ul><li>Refactoring the overall game codebase by applying clean code principles for maintainability</li><li>Implementing a bonus system to enhance gameplay variety and reward players</li><li>Integrating ads into the existing game flow for monetization</li><li>Adding a character selection feature to improve player engagement</li><li>Added and design new Levels ,power ups and daily rewards to existing gameplay.</li></ul>",
            media: [
                { type: "image", url: "assets/images/project4.2.png" },
                { type: "image", url: "assets/images/project4.3.png" },
                { type: "image", url: "assets/images/project4.4.png" },
                { type: "image", url: "assets/images/project4.5.png" },
                { type: "image", url: "assets/images/project4.6.png" },
                { type: "image", url: "assets/images/project4.7.png" },
                { type: "image", url: "assets/images/project4.8.png" },
                { type: "video", url: "assets/images/project4.v2.mp4" },
            ],
            tags: ["Mobile", "Arcade", "Android", "Casual", "Unity", "Touch Controls"]
        },
        6: {
            title: "Solaverse – Play-to-Earn (P2E) Blockchain Game",
            description: "<b>Solaverse</b> is a Play-to-Earn (P2E) game that blends traditional gameplay with blockchain technology. Players explore a vast universe, mine resources, craft, trade, and engage in PvE and PvP combat. A player-driven economy powered by the <b>Solaverse Token (SVR)</b> and NFT-based ownership of ships, land, and items ensures that in-game progress carries real-world value.<br><br>My contributions focused on the <b>core architecture and systems</b>, including:<ul><li>Building the foundation with Unity’s Grid and Tilemap system</li><li>Creating Scriptable Objects for modular building data</li><li>Managing game flow, backend data persistence, and synchronization</li><li>Developing ship selection systems and UI components</li><li>Designing the overall architecture with a Main Singleton that coordinates key managers such as UI, sound, and data</li></ul>These systems established a scalable, extensible framework that powers both the gameplay and the economy.",
            media: [
                { type: "image", url: "assets/images/project5.1.png" },
                { type: "image", url: "assets/images/project5.2.png" },
                { type: "image", url: "assets/images/project5.3.png" },
                { type: "image", url: "assets/images/project5.4.png" },
                { type: "image", url: "assets/images/project5.5.png" },
                { type: "image", url: "assets/images/project5.6.png" },
                { type: "image", url: "assets/images/project5.7.png" },
                { type: "image", url: "assets/images/project5.8.png" },
                { type: "video", url: "assets/images/project 5v.mp4" },
            ],
            link:"https://playtoearn.com/blockchaingame/the-solaverse",
            tags: ["Blockchain", "Play-to-Earn", "NFTs", "Crypto", "Exploration", "Multiplayer", "Strategy", "Economy"]
        },
        7: {
            title: "WAR TRIBES",
            description: "<b>War Tribes</b> is a real-time strategy game focused on base-building, resource management, and PvP combat. Players construct buildings, recruit units, form alliances, and battle against others to expand their territory and dominate the map.<br><br>My contributions included:<ul><li>Designing the overall game architecture based on SOLID principles for maintainability and scalability</li><li>Implementing an event-driven system (signals) to achieve code decoupling</li><li>Managing core gameplay mechanics including a grid-based system built with Unity’s Tilemap</li><li>Creating base classes with common functionality for different building types using abstraction and interfaces</li><li>Handling complex game data with the Repository Pattern</li><li>Integrating Firebase with real-time database and authentication providers (Google, etc.)</li><li>Adding monetization systems including AdMob ads and In-App purchases</li><li>Developing a custom 2D pathfinding algorithm inspired by A* for optimized unit movement</li></ul>",
            media: [
                { type: "image", url: "assets/images/project6 (1).jpg" },
                { type: "image", url: "assets/images/project6 (2).jpg" },
                { type: "image", url: "assets/images/project6 (3).jpg" },
                { type: "image", url: "assets/images/project6 (4).jpg" },
                { type: "image", url: "assets/images/project6 (5).jpg" },
                { type: "video", url: "assets/images/project6 v3.mp4" }
            ],
            link:"https://play.google.com/store/apps/details?id=com.wartribes.tower.defense",
            tags: ["Strategy", "PvP", "Base Building", "Google Login", "Multiplayer", "Real-Time","Auth/Sign-up","Database"]

        },

        8: {
            title: "X-Flight Simulator – Realistic Aviation Experience:",
            description: "A high-fidelity flight simulation game built for aviation enthusiasts. Players can pilot a range of aircraft—from small propeller planes to commercial jets—across real-world terrains with dynamic weather, day-night cycles, and authentic flight physics. Featuring interactive cockpits, customizable flight plans, and detailed training missions, the game delivers an immersive and educational flying experience rooted in realism.",
            media: [
            
                { type: "video", url: "assets/images/project7.v.mp4" }

            ],
            tags: ["Simulation", "Aviation", "Realism", "Training", "Physics", "Unity 3D"]

        },

    };

    // Initially hide the game projects section
    // $('#game-projects').hide();

    // Event listener for the "Web Projects" button
    $('#show-web-btn').on('click', function () {
        $('#web-projects').fadeIn(600);
        $('#game-projects').fadeOut(600);
    });

    // Event listener for the "Game Projects" button
    $('#show-game-btn').on('click', function () {
        $('#game-projects').fadeIn(600);
        $('#web-projects').fadeOut(600);
    });

    // Event listener for the "View Demo" buttons
    $('.view-demo-btn').on('click', function (e) {
        e.preventDefault();

        const projectId = $(this).data('project-id');
        const project = projects[projectId];

        if (project) {
            // First, clear any previous media from the carousel
            const carouselInner = $('#project-carousel .carousel-inner');
            const carouselIndicators = $('#project-carousel .carousel-indicators');
            carouselInner.empty();
            carouselIndicators.empty();

            // Loop through the media array and populate the carousel
            project.media.forEach((media, index) => {
                // Create carousel item
                let carouselItemHtml = '';
                if (media.type === 'image') {
                    carouselItemHtml = `<div class="carousel-item">
                                            <img src="${media.url}" class="d-block w-100" alt="Project Media ${index + 1}">
                                        </div>`;
                } else if (media.type === 'video') {
                    carouselItemHtml = `<div class="carousel-item">
                                            <video class="d-block w-100" muted autoplay>
                                                <source src="${media.url}" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>`;
                }

                // Add active class to the first item
                if (index === 0) {
                    carouselItemHtml = carouselItemHtml.replace('carousel-item', 'carousel-item active');
                }
                carouselInner.append(carouselItemHtml);

                // Create carousel indicator
                const indicatorHtml = `<button type="button" data-bs-target="#project-carousel" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-label="Slide ${index + 1}"></button>`;
                carouselIndicators.append(indicatorHtml);
            });

            // Populate the details page with the selected project's data
            $('#project-detail-title').text(project.title);
            $('#project-detail-description').html(project.description);

             // ✅ Show/hide the game link button
            if (project.link) {
                $('#project-detail-link')
                    .attr('href', project.link)
                    .show();
            } else {
                $('#project-detail-link').hide();
            }
            const tagsContainer = $('#project-tags');
            tagsContainer.empty();
            if (project.tags && project.tags.length > 0) {
                project.tags.forEach(tag => {
                    tagsContainer.append(`<span class="tag-badge me-1">${tag}</span>`);
                });
            } else {
                tagsContainer.empty();
            }
            // Fade out the main projects section and show the details page
            $('#projects').fadeOut(400, function () {
                $('#project-details').removeClass('d-none').fadeIn(400);
                $('html, body').animate({
                    scrollTop: $('#project-details').offset().top
                }, 800);
            });
        }
    });
    // Event listener for the "Back to Projects" button
    $('#back-to-projects').on('click', function (e) {
        e.preventDefault();
        $('#project-details').fadeOut(400, function () {
            $(this).addClass('d-none');
            $('#projects').fadeIn(400);
            $('html, body').animate({
                scrollTop: $('#projects').offset().top
            }, 800);
        });
    });
});