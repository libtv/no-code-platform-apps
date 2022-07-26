export function getDateTime(max: number | undefined = undefined) {
    if (typeof max === "undefined") {
        return new Date().getTime();
    }
    return Number(new Date().getTime().toString().slice(0, max));
}
