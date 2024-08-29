export interface LinkedinJob {
  id: string;
  title: string;
  company: string;
  location: string;
}

export interface Tracker {
  ga_session_id: number | undefined,
  datadog_session_id: string | undefined,
  facebook_pixel_id: string | undefined,
  tiktok_pixel_id: string | undefined,
  google_ads_id: string | undefined,
  bing_ads_id: string | undefined,
}
