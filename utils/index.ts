export const getUniqueId = () => String(Math.floor(Math.random() * 100000));

export const capitalize = (value: string) => value.charAt(0)
    .toUpperCase() + value.slice(1);
