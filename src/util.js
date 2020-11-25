export function resolveContent(content) {
    return content.split('\n').map(c => `<p>${c}</p>`).join('');
}
