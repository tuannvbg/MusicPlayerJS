var ap5 = new APlayer({
    element: document.getElementById('player5'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#ad7a86',
    mode: 'random',
    listmaxheight: '500px',
    music: [
        {
            title: 'Kings and Queens',
            author: '30 Second to mars',
            url: 'https://cs7-2v4.vk-cdn.net/p13/d26f426bef6c67.mp3',
            pic: 'https://upload.wikimedia.org/wikipedia/en/2/27/A_beautiful_lie.jpg',
            backurl: 'http://wallpaperrs.com/uploads/travel-world/city-road-in-the-usa-wide-wallpaper-21149.png'
        },
        {
            title: 'Little Sister',
            author: 'Queens of the Stone Age',
            url: 'https://cs7-5v4.vk-cdn.net/p6/821ea07c6babb4.mp3',
            pic: 'http://images.junostatic.com/full/CS1812682-02A-BIG.jpg',
            backurl: 'https://s-media-cache-ak0.pinimg.com/originals/f8/51/18/f8511830a0ba133ed21be279b836a67b.jpg'
        },
        {
            title: 'Preparation',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'http://devtest.qiniudn.com/Preparation.mp3',
            pic: 'http://devtest.qiniudn.com/Preparation.jpg',
            backurl: 'http://wallup.net/wp-content/uploads/2016/02/wallpapers-full_moon-moon-night.jpg'
        },
        {
            title: 'Little Sister',
            author: 'Queens of the Stone Age',
            url: 'https://cs7-5v4.vk-cdn.net/p6/821ea07c6babb4.mp3',
            pic: 'http://images.junostatic.com/full/CS1812682-02A-BIG.jpg',
        },
        {
            title: 'Little Sister',
            author: 'Queens of the Stone Age',
            url: 'https://cs7-5v4.vk-cdn.net/p6/821ea07c6babb4.mp3',
            pic: 'http://images.junostatic.com/full/CS1812682-02A-BIG.jpg',
        },
        {
            title: 'Little Sister',
            author: 'Queens of the Stone Age',
            url: 'https://cs7-5v4.vk-cdn.net/p6/821ea07c6babb4.mp3',
            pic: 'http://images.junostatic.com/full/CS1812682-02A-BIG.jpg',
        }
    ]
});

ap5.on('play', function () {
    console.log('play play');
    var urlBack = ('url' + '(' + ap5.music.backurl + ')' + 'no-repeat center center fixed');
    document.body.style.background = urlBack;
    document.body.style.backgroundSize = 'cover';
});
ap5.on('pause', function () {
    console.log('pause');
});
ap5.on('canplay', function () {
    console.log('canplay');
});
ap5.on('playing', function () {
    console.log('playing');
});
ap5.on('ended', function () {
    console.log('ended');
});
ap5.on('error', function () {
    console.log('error');
});
