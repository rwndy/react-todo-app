/* eslint-disable prefer-const */
export const getCookie = (cname: string): string | null => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  
  for (const element of ca) {
    let c = element.trim();
    if (c.startsWith(name)) {
      return c.substring(name.length, c.length);
    }
  }
  
  return null;
};

export const setCookie = (cname: string, cvalue: string, exdays: number): void => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const setCookieMinutes = (cname: string, cvalue: string, minutes: number): void => {
  const d = new Date();
  d.setTime(d.getTime() + minutes * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const setCookieSeconds = (cname: string, cvalue: string, seconds: number): void => {
  const d = new Date();
  d.setTime(d.getTime() + seconds * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const eraseCookie = (name: string): void => {
  document.cookie = `${name}=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};