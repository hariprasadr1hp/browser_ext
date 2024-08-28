export async function checkHttpProtocol(document: Document): Promise<boolean> {
    return (!["http:", "https:"].includes(document.location.protocol))
}
