const triangles = Array.from(document.getElementsByClassName("triangle"));

window.addEventListener('load', () => {
    triangles.forEach((triangle, i) => {
        if (i === 0) {
            triangle.style.transform = 'scale(1)';
            // triangle.style.transform = 'rotate(0deg)';
        } else {
            window.setTimeout(() => {
                triangle.style.transform = `rotate(${i*60}deg)`;
            }, 300*i);
        }
    });
    
    window.setTimeout(() => {
        const p = document.getElementsByClassName('p')[0];
        p.style.transform="scale(1) rotate(-30deg)";
        p.style.opacity="1";
    }, 1250);

    window.setTimeout(() => {
        console.log(document.getElementById('twinkle'));
        document.getElementById('twinkle').style.animation = 'sparkle 1.5s ease-in';
    }, 2350);
});


const scrollCheck = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('.hexagon').classList.add('small-hex');
        Array.from(document.getElementsByClassName('triangle')).forEach(triangle => {
            triangle.classList.add('small-triangle');
        });
        document.querySelector('.p').classList.add('small-p');
        document.querySelector('header').classList.add('small-header');
        document.querySelector('nav').style.bottom = '7px';
        document.querySelector('.title').style.display = 'none';
    } else {
        document.querySelector('.hexagon').classList.remove('small-hex');
        Array.from(document.getElementsByClassName('triangle')).forEach(triangle => {
            triangle.classList.remove('small-triangle');
        });
        document.querySelector('.p').classList.remove('small-p');
        document.querySelector('header').classList.remove('small-header');
        document.querySelector('nav').style.bottom = '0px';
        document.querySelector('.title').style.display = 'block';
    }
}
window.onscroll = scrollCheck;