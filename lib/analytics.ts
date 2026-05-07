export function trackEvent(
  eventName: string,
  payload?: Record<string, string | number | boolean | null | undefined>,
) {
  console.log("[trackEvent]", eventName, payload ?? {});
}
