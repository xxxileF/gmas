document.addEventListener('DOMContentLoaded', function() {
    const bullets = document.querySelectorAll('.bullet');
    const sections = document.querySelectorAll('.hero-section');

    let currentIndex = 0;
    const intervalTime = 2000;
  
    function showSection(index) {
        sections.forEach(section => section.classList.remove('active'));
        bullets.forEach(b => b.classList.remove('active'));
  
        sections[index].classList.add('active');
        bullets[index].classList.add('active');
    }
  
    function nextSection() {
        currentIndex = (currentIndex + 1) % sections.length;
        showSection(currentIndex);
    }
  
    // Chuyển đổi tự động
    let interval = setInterval(nextSection, intervalTime);
  
    // Chuyển đổi thủ công
    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', function() {
            clearInterval(interval); // Dừng chuyển đổi tự động
            currentIndex = index;
            showSection(currentIndex);
            interval = setInterval(nextSection, intervalTime); // Khởi động lại chuyển đổi tự động
        });
    });
  
    // Tạm dừng chuyển đổi tự động khi di chuột qua hero section
    const heroContainer = document.querySelector('.hero-container');
    heroContainer.addEventListener('mouseenter', () => clearInterval(interval));
    heroContainer.addEventListener('mouseleave', () => {
        clearInterval(interval);
        interval = setInterval(nextSection, intervalTime);
    });
  
    // Hiển thị section đầu tiên khi trang được tải
    showSection(currentIndex);
  });

    const performancesData = [
        { id: 1,title: "Sabrina Carpenter Performs a Medley of Her hits", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:48ec4371-410c-4e4c-a6f2-1ed042c8020a?quality=0.7&gen=ntrn", timestamp: "4:02", youtubeLink: "https://www.youtube.com/watch?v=IMIXOmlGpw4" },
        { id: 2,title: "Cheppell Roan - Good Luck,Babe!", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:b8e60ca5-c1cb-4014-b306-cc1b0a73df7a?quality=0.7&gen=ntrn", timestamp: "4:15", youtubeLink: "https://www.youtube.com/watch?v=65m4u4IxZLg" },
        { id: 3,title: "Katy Perry Performs a Medley of Her Hits", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:fc39c179-e42e-4f25-a6f2-0ea8bc766a37?quality=0.7&gen=ntrn", timestamp: "9:54", youtubeLink: "https://www.youtube.com/watch?v=p7zrX4NU8YE" },
        { id: 4,title: "Rauw Alejandro Performs a Medley of Her Hits ", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:dfea3168-d241-4287-89e5-9ca0de0b47be?quality=0.7&gen=ntrng", timestamp: "4:36", youtubeLink: "https://www.youtube.com/watch?v=lWveFHShn2k" },
        { id: 5,title: "Megan Three Stallion Performs a Medley of Her Hits", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:1bbb169d-e470-4c17-bad6-dba40eb96e66?quality=0.7&gen=ntrn", timestamp: "4:56", youtubeLink: "https://www.youtube.com/watch?v=Quebpj5fEbM" },
        { id: 6,title: "KAROL G - Si Antes Te Hubiera Conocido", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:94fe2f84-9c18-4edc-b561-0df4378bad04?quality=0.7&gen=ntrn", timestamp: "3:46", youtubeLink: "https://www.youtube.com/watch?v=0ULyZ6j6COU" },
        { id: 7,title: "Benson Boone - Beautiful Things", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:790f9f07-fc44-4d7b-a157-f7a6c487d9dc?quality=0.7&gen=ntrn", timestamp: "3:26", youtubeLink: "https://www.youtube.com/watch?v=rzZxZWkbt-Q" },
        { id: 8,title: "Eminem - Somebody Save me / Houdini", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:2081c7e4-b4b6-4172-9ec3-23a9755b5fbb?quality=0.7&gen=ntrn", timestamp: "5:44", youtubeLink: "https://www.youtube.com/watch?v=OYYPnBboGao" },
        { id: 9,title: "Shawn Mendes - Nobody Knows", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:064ff127-7cdd-424a-85ce-6813f9899e5e?quality=0.7&gen=ntrn", timestamp: "3:41", youtubeLink: "https://www.youtube.com/watch?v=2OKqoh3kmjE" },
        { id: 10,title: "Camila Cabello - GODSPEED / June Gloom",  image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:6e78e2a6-1598-420c-92bd-dc503140bedf?quality=0.7&gen=ntrn", timestamp: "3:46", youtubeLink: "https://www.youtube.com/watch?v=S-s2oYMV8Fc" },
        { id: 11,title: "Anitta - Paradise / Alergria / Savage Frunk", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:ccbc63c9-a49d-4859-9179-f15768ee8723?quality=0.7&gen=ntrn", timestamp: "3:38", youtubeLink: "https://www.youtube.com/watch?v=aRGd6_ZsKQE" },
        { id: 12,title: "GloRilla - Yeah Gio! / TGIF", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:7749e6d6-17c0-4329-9883-70926f0642c6?quality=0.7&gen=ntrn", timestamp: "3:43", youtubeLink: "https://www.youtube.com/watch?v=VOwSAGi9R8I" },
        { id: 13,title: "Halsey - Ego", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:4322ccc2-f235-48e9-970a-4116e60cb0b6?quality=0.7&gen=ntrn", timestamp: "4:10", youtubeLink: "https://www.youtube.com/watch?v=BF__ugYQDgo" },
        { id: 14,title: "LISA - New Woman / Rockstar", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:b61bad28-1043-4f54-a12a-655baf5ce8f3?quality=0.7&gen=ntrn", timestamp: "3:48", youtubeLink: "https://www.youtube.com/watch?v=DNwoQODmZUE" },
        { id: 15,title: "LL Cool J Performs a Medley of Her hits", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:310be975-09a7-4981-895f-f288ab40cb53?quality=0.7&gen=ntrn", timestamp: "6:17", youtubeLink: "https://www.youtube.com/watch?v=FMGqTTXCoZc" },
        { id: 16,title: "Lenny Kravitz Performs a Medley of Her hits", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:cc8e33c3-b06b-47ea-bffa-a5fe4ec68d44?quality=0.7&gen=ntrn", timestamp: "5:32", youtubeLink: "https://www.youtube.com/watch?v=iHuJ5tdxbtI" },
        { id: 17,title: "LE SSERAFIM - Crazy", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:ed9a9db3-58d9-44a7-8bf1-61aff90cfcc9?quality=0.7&gen=ntrn", timestamp: "2:54", youtubeLink: "https://www.youtube.com/watch?v=AyX5qhMBTw4" },
        { id: 18,title: "LE SSERAFIM - 1-800-hot-n-fun", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:20ef2ea4-a16e-4904-8662-0c9c74c5733b?quality=0.7&gen=ntrn", timestamp: "3:02", youtubeLink: "https://www.youtube.com/watch?v=Ps1tObd0xlQ" },
        { id: 19,title: "Teddy Swims - The Door", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:bc9828d1-c194-4604-9b85-2c214d1c823b?quality=0.7&gen=ntrn", timestamp: "3:36", youtubeLink: "https://www.youtube.com/watch?v=c4Bc7P_Daho" },
        { id: 20,title: "Teddy Swims - Lose Control", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:e8909b92-023f-49d2-9593-30845acc9b3c?quality=0.7&gen=ntrn", timestamp: "3:50", youtubeLink: "https://www.youtube.com/watch?v=G68HwyRsa8A" },
        { id: 21,title: "Teddy Swims - STAY", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:09aeab50-a5cb-4905-b78c-ba26905ac45f?quality=0.7&gen=ntrn", timestamp: "2:46", youtubeLink: "https://www.youtube.com/watch?v=uVaz6s0NgAc" },
        { id: 22,title: "Jessie Murph - Wild Ones", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:ee591b2f-8cd4-4fca-993a-0a8eabac2599?quality=0.7&gen=ntrn", timestamp: "2:28", youtubeLink: "https://www.youtube.com/watch?v=TlAnr6XDuzQ" },
        { id: 23,title: "Jessie Murph - I Hope It Hurts", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:5e3efb46-7971-4de2-9821-8bcbfeb92c40?quality=0.7&gen=ntrn", timestamp: "4:21", youtubeLink: "https://www.youtube.com/watch?v=Be-G3VmFkUQ" },
        { id: 24,title: "Jessie Murph - Killing Me Softly", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:ab6118b4-9c03-45cf-8d89-0d2557694b13?quality=0.7&gen=ntrn", timestamp: "6:10", youtubeLink: "https://www.youtube.com/watch?v=H7ngj6OZCgs" },
  
    ];
  
    const performancesScroll = document.querySelector('.performances-scroll');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
  
    // Populate performances
    performancesData.forEach(performance => {
        const performanceItem = document.createElement('div');
        performanceItem.classList.add('performance-item');
        performanceItem.innerHTML = `
            <img src="${performance.image}" alt="${performance.title}" class="performance-image">
            <div class="label-timestamp">${performance.timestamp}</div>
            <div class="performance-info">
                <div class="performance-title">${performance.title}</div>
            </div>
        `;
        performanceItem.addEventListener('click', () => {
            window.open(performance.youtubeLink, '_blank');
        });
        performancesScroll.appendChild(performanceItem);
    });
  
    // Scroll buttons functionality
    scrollLeftBtn.addEventListener('click', () => {
        performancesScroll.scrollBy({ left: -1500, behavior: 'smooth' });
    });
  
    scrollRightBtn.addEventListener('click', () => {
        performancesScroll.scrollBy({ left: 1500, behavior: 'smooth' });
    });
  
    // Show/hide scroll buttons based on scroll position
    performancesScroll.addEventListener('scroll', () => {
        scrollLeftBtn.style.display = performancesScroll.scrollLeft > 0 ? 'block' : 'none';
        scrollRightBtn.style.display = 
            performancesScroll.scrollLeft < performancesScroll.scrollWidth - performancesScroll.clientWidth 
            ? 'block' : 'none';
    });
  
    // Initially hide left scroll button
    scrollLeftBtn.style.display = 'none';
  