const triangles = Array.from(document.getElementsByClassName("triangle"));

triangles.forEach((triangle, i) => {
    if (i === 0) {
        triangle.style.transform = 'rotate(0deg) scale(1)';
    } else {
        window.setTimeout(() => {
            triangle.style.transform = `rotate(${i*60}deg) scale(1)`;
        }, 200*i);
    }
});

window.setTimeout(() => {
    const p = document.getElementsByClassName('p')[0];
    p.style.transform="scale(1) rotate(-30deg)";
    p.style.opacity="1";
}, 650);