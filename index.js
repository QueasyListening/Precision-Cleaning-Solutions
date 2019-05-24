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
