function toTransparentColor(color, alpha = 0.5) {
    if (!color) return 'rgba(0, 0, 0, 0.5)'; // Default fallback

    // Handle named colors or hex by creating a temporary element
    const tempElement = document.createElement('div');
    tempElement.style.color = color;
    document.body.appendChild(tempElement);
    const computedColor = window.getComputedStyle(tempElement).color; // e.g., "rgb(255, 255, 255)"
    document.body.removeChild(tempElement);

    // Extract RGB values from "rgb(r, g, b)" or "rgba(r, g, b, a)"
    const rgbMatch = computedColor.match(/\d+/g);
    if (rgbMatch) {
        const [r, g, b] = rgbMatch;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    return `rgba(0, 0, 0, ${alpha})`; // Fallback
}

export default toTransparentColor