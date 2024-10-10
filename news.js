document.addEventListener('DOMContentLoaded', function() {
    const newsData = [
        {
            id: 1,
            title: "LL Cool J Performs a Medley of His Hits",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:310be975-09a7-4981-895f-f288ab40cb53?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "LL Cool J takes the GMAs 2023 stage to perform a medley of his hits, including 'Mama Said Knock You Out', 'Rock the Bells' and more. ",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=FMGqTTXCoZc"
        },
        {
            id: 2,
            title: "Megan Thee Stallion Performs a Medley of Her Hits",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:1bbb169d-e470-4c17-bad6-dba40eb96e66?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "GMAs 2023 host Megan Thee Stallion takes the stage to perform a medley of tracks, including 'BOA', 'Mamushi', 'HISS' and more.",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=Quebpj5fEbM"
        },
        {
            id: 3,
            title: "Camila Cabello – 'GODSPEED'/'June Gloom'",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:6e78e2a6-1598-420c-92bd-dc503140bedf?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "Camila Cabello steps onto the GMAs 2023 stage to perform her songs 'GODSPEED' and 'June Gloom'.",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=S-s2oYMV8Fc"
        },
        {
            id: 4,
            title: "Benson Boone – 'Beautiful Things'",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:790f9f07-fc44-4d7b-a157-f7a6c487d9dc?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "Benson Boone performs his track 'Beautiful Things' at the GMAs 2023.",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=rzZxZWkbt-Q"
        },
        {
            id: 5,
            title: "Rauw Alejandro Performs a Medley of His Hits",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:dfea3168-d241-4287-89e5-9ca0de0b47be?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "Rauw Alejandro performs his songs 'Touching the Sky', 'DILUVIO' and 'Déjame Entrar' at the GMAs 2023.",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=lWveFHShn2k"
        },
        {
            id: 6,
            title: "Cheppell Roan – 'Good Luck, Babe!'",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:b8e60ca5-c1cb-4014-b306-cc1b0a73df7a?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "Chappell Roan performs her track 'Good Luck, Babe!'' at the GMAs 2023.",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=65m4u4IxZLg"
        },
        {
            id: 7,
            title: "Katy Perry Performs a Medley of Her Hits",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:fc39c179-e42e-4f25-a6f2-0ea8bc766a37?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "Video Vanguard honoree Katy Perry performs her songs 'WOMAN'S WORLD', 'Dark Horse', 'California Gurls' and more at the GMAs 2023.",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=p7zrX4NU8YE"
        },
        {
            id: 8,
            title: "Lenny Kravitz Performs a Medley of His Hits",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:cc8e33c3-b06b-47ea-bffa-a5fe4ec68d44?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "Lenny Kravitz takes the GMAs 2024 stage to perform his tracks 'Are You Gonna Go My Way', 'Human' and 'FLY'.",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=iHuJ5tdxbtI"
        },
        {
            id: 9,
            title: "GloRilla – 'Yeah Glo!'/'TGIF'",
            image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:7749e6d6-17c0-4329-9883-70926f0642c6?quality=0.7&gen=ntrn&width=600&height=337&crop=true",
            deck: "GloRila performs her songs 'Yeah Glo!'' and 'TGIF' at the GMAs 2023.",
            date: "2023-11-9",
            youtubeLink: "https://www.youtube.com/watch?v=VOwSAGi9R8I"
        },
    ];

    const newsGrid = document.querySelector('.news-grid');

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <a href="${news.youtubeLink}" target="_blank" rel="noopener noreferrer">
                <img src="${news.image}" alt="${news.title}" class="news-image">
                <div class="news-content">
                    <h2 class="news-title">${news.title}</h2>
                    <p class="news-deck">${news.deck}</p>
                    <span class="news-date">${formatDate(news.date)}</span>
                </div>
            </a>
        `;
        newsGrid.appendChild(newsItem);
    });

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
});
