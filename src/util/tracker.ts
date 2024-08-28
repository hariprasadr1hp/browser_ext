export async function getGaSessionId(document: Document): Promise<string | undefined> {
  return document.cookie.match(/_ga=GA[0-9]\.[0-9]\.[0-9]+\.([0-9]+);/)?.[1];
}

export async function getDatadogSessionId(document: Document): Promise<string | undefined> {
  return document.cookie.match(/_dd_s.*id=([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12});?/)?.[1];
}

