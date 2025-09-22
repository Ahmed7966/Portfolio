
$(document).ready(function () {
    // Define project data in a JavaScript object
    const projects = {
        1: {
            title: "Clean Multiplayer Pro Asset",
            description: "As the lead developer for Clean Multiplayer Pro, I was responsible for architecting and implementing a robust, modular networking solution for Unity. My work focused on designing the core framework to ensure high performance, scalability, and seamless integration, which allowed developers to easily add multiplayer functionality without needing to write complex networking code. In addition to core development, I created comprehensive documentation and provided continuous technical support to clients, helping them successfully integrate the asset into a wide range of game projects.",
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
            description: "My role on the development team was to integrate the multiplayer module for the G.I. Joe beat 'em up game, allowing for both local and online cooperative play. I was responsible for designing the core networked session logic, which included creating the systems for matchmaking and state synchronization to ensure all players were on the same page. A key focus was managing latency and using techniques like rollback or prediction to keep the combat responsive and fluid, even during online play. I also debugged and optimized complex multiplayer synchronization issues, ensuring that elements like hit detection and special moves worked correctly across all player clients. Finally, I helped determine the game's online infrastructure, whether a scalable server or a peer-to-peer setup, to meet the specific requirements of each platform.",
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
            description: "My role on the Meta Royale development team was to integrate the game's wallet system, which was crucial for its Web3 functionality. This involved building the systems that allow players to seamlessly connect their cryptocurrency wallets to the game. This integration provides a secure and direct way for players to manage their in-game assets, make purchases, and participate in the game's economy without ever leaving the game interface.",
            media: [
                { type: "video", url: "assets/images/project3.v.mp4" }
            ],
             tags: ["Web3", "Blockchain", "Wallet Integration", "Brawler", "Crypto"]
        },
        4: {
            title: "N2Y L³ Skills – Interactive Skill-Building for Diverse Learners",
            description: "My role on the L³ Skills development team was to design and implement interactive game mechanics that effectively meet educational standards and engage students. I collaborated closely with educators to understand specific learning objectives, which I then translated into engaging game scenarios aimed at promoting skill mastery. A key part of my job also involved integrating user feedback to continuously improve the overall user experience of the platform.",
            media: [
                { type: "image", url: "assets/images/project8.png" },

            ],
            link:"https://www.n2y.com/l3-skills/",
            tags: ["Educational", "Gamification", "Accessibility", "Interactive", "EdTech"]
        },
        5: {
            title: "Skewer Rush – Mobile Game (Android)",
            description: "Skewer Rush is a fast-paced, arcade-style mobile game designed to be highly engaging and addictive. The gameplay is simple: players swipe to launch a skewer at moving targets to score points. While the controls are easy to learn, the game's challenge increases with dynamic obstacles that appear in later levels. With vibrant graphics, smooth animations, and a lively soundtrack, the game provides an immersive experience. A competitive scoring system encourages replayability and a desire to achieve the highest score. The core development focus was on creating an intuitive interface and responsive mechanics to ensure a seamless and enjoyable experience for all mobile players.",
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
            description: "Solaverse is a Play-to-Earn (P2E) game that merges traditional gaming with blockchain technology to create a rewarding experience. It's set in a vast, explorable universe where players can gather resources, build, and trade. The game's economy is powered by its native cryptocurrency, the Solaverse Token (SVR), and uses smart contracts to ensure secure transactions The game's core features revolve around a player-driven economy and ownership. Players can own and trade in-game items and assets, such as spaceships and land plots, as NFTs (Non-Fungible Tokens). This allows their in-game progress to have tangible, real-world value. The gameplay itself includes open-world exploration, PvE and PvP combat, mining, crafting, and the ability to form guilds. It also gives players a voice in the game's evolution through a decentralized governance model. The game is designed to be accessible across multiple platforms and is built to be both fun and rewarding for all types of players.",
            media: [
                { type: "image", url: "assets/images/project5.1.png" },
                { type: "image", url: "assets/images/project5.2.png" },
                { type: "image", url: "assets/images/project5.3.png" },
                { type: "image", url: "assets/images/project5.4.png" },
                { type: "image", url: "assets/images/project5.5.png" },
                { type: "image", url: "assets/images/project5.6.png" },
                { type: "image", url: "assets/images/project5.7.png" },
                { type: "image", url: "assets/images/project5.8.png" },
            ],
            link:"https://playtoearn.com/blockchaingame/the-solaverse",
            tags: ["Blockchain", "Play-to-Earn", "NFTs", "Crypto", "Exploration", "Multiplayer", "Strategy", "Economy"]
        },
        7: {
            title: "WAR TRIBES",
            description: "War Tribes and similar games are typically strategy-focused titles where players build and manage their own kingdoms, tribes, or villages. The core gameplay involves constructing and upgrading a variety of buildings, recruiting different types of military units, and gathering resources. A major component is player-versus-player (PvP) combat, where you can attack and conquer the villages of other players to expand your territory and gain resources. Alliances, often called tribes, are crucial for mutual protection and for coordinating large-scale attacks on enemies. The games often feature a mix of defensive strategies, like building towers to repel invaders, and offensive maneuvers to dominate the map. The ultimate goal is to become the most powerful tribe and conquer the world.",
            media: [
                { type: "image", url: "assets/images/project6 (1).jpg" },
                { type: "image", url: "assets/images/project6 (2).jpg" },
                { type: "image", url: "assets/images/project6 (3).jpg" },
                { type: "image", url: "assets/images/project6 (4).jpg" },
                { type: "image", url: "assets/images/project6 (5).jpg" },
                { type: "video", url: "assets/images/project6v2.mp4" },
                { type: "video", url: "assets/images/project6 v1.mp4" }
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
                                            <video class="d-block w-100" muted autoplay loop playsinline>
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