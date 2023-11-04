export const formatDate = (isoDate) => {
    const opitons = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(isoDate).toLocaleDateString(undefined, opitons);
}