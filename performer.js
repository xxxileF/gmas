document.addEventListener('DOMContentLoaded', function() {
    const performersData = [
        { name: "Annita", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:db54153a-5fe7-4247-a1b2-33c6cec9a160?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=aRGd6_ZsKQE" },
        { name: "Benson Boose", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:4547f0f4-c9bb-4ac1-a410-d85fab1b0366?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=rzZxZWkbt-Q" },
        { name: "Camila Cabello", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:afaab34e-e385-4735-a525-1b9cd4aaadaf?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=S-s2oYMV8Fc" },
        { name: "Chappell Roan", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:4e127c60-a6c8-4748-9825-e1be73643d56?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=65m4u4IxZLg" },
        { name: "Eminem", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:87c4133b-71d5-41f3-9579-7cdfe8114274?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=OYYPnBboGao" },
        { name: "GloRilla", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:03ebfec8-6421-4898-a1ab-be7441bdc540?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=VOwSAGi9R8I" },
        { name: "Halsey", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:f43f0450-2b30-4f62-b784-0973256d1cbb?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=BF__ugYQDgo" },
        { name: "Jessie Murph", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:c4f8f099-7b1c-429b-b9e9-e58a16ba831b?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=TlAnr6XDuzQ" },
        { name: "KAROL G", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:466dbca2-dbd3-492c-bf62-c49faf984f83?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=0ULyZ6j6COU" },
        { name: "Lenny Kravitz", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:fee12657-edda-40e3-96a3-5b300611ffea?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=iHuJ5tdxbtI" },
        { name: "LE SSERAFIM", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:e07c4c6a-3e21-45a2-91ca-a3ad5f112a36?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=Ps1tObd0xlQ" },
        { name: "LISA", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:a6095106-919f-4ac2-af62-43b81cf4cba9?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=DNwoQODmZUE" },
        { name: "LL COOL J", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:aa49a7a2-b369-46dc-8f94-4d48bfe962b0?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=FMGqTTXCoZc" },
        { name: "Megan Thee Stallion", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:bd39fe96-9894-498a-b8ca-c71c15891c58?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=Quebpj5fEbM" },
        { name: "Rauw Alejandro", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:a9ddc05c-c676-44d0-b399-7f6c3b388fa1?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=lWveFHShn2k" },
        { name: "Sabrina Carpenter", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:45f85b5b-6d12-4cac-bb67-b18292c6ac53?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=IMIXOmlGpw4" },
        { name: "Shawn Mendes", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:6d259d71-f817-46fc-8020-4d8edfb2b3f5?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=2OKqoh3kmjE" },
        { name: "Teddy Swims", image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:f6f4af42-2623-422f-9b96-8e396bc01796?quality=0.7&gen=ntrn", youtubeLink: "https://www.youtube.com/watch?v=G68HwyRsa8A" },
    ];

    const performersGrid = document.querySelector('.performers-grid');

    performersData.forEach(performer => {
        const performerItem = document.createElement('div');
        performerItem.classList.add('performer-item');
        performerItem.innerHTML = `
            <div class="performer-image" style="background-image: url('${performer.image}')"></div>
            <div class="performer-name">${performer.name}</div>
        `;
        performerItem.addEventListener('click', () => {
            window.open(performer.youtubeLink, '_blank');
        });
        performersGrid.appendChild(performerItem);
    });
});