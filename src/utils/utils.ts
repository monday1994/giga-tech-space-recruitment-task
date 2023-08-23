export const copyArrayOfObjects = <T>(arr: T[]): T[] => {
    return arr.map(item => ({ ...item }));
};