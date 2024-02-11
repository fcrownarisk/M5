document.addEventListener('DOMContentLoaded', () => {
    const triangleContainer = document.getElementById('triangle-container');

    const triangles = [
        { color: 'red', className: 'triangle-red' },
        { color: 'blue', className: 'triangle-blue' },
        { color: 'green', className: 'triangle-green' },
        { color: 'yellow', className: 'triangle-yellow' },
        { color: 'purple', className: 'triangle-purple' },
        { color: 'orange', className: 'triangle-orange' },
    ];
    triangles.forEach((triangle) => {
        const div = document.createElement('div');
        div.style.width = '0';
        div.style.height = '0';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '0 30px 30px 30px';
        div.style.borderColor = `transparent transparent ${triangle.color} transparent`;
        div.className = triangle.className;
        triangleContainer!.appendChild(div);
    });
});
