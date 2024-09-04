export async function checkHttpProtocol(document: Document): Promise<boolean> {
  return (!["http:", "https:"].includes(document.location.protocol))
}

export function sleep(seconds: number) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}
