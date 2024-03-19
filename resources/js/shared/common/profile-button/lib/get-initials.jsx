export function getInitials(username) {
    const words = username.split(' ');
    
    let initials = '';

    for (let i = 0; i < Math.min(2, words.length); i++) {
        const word = words[i];
        initials += word.charAt(0);
    }

    return initials;
}
