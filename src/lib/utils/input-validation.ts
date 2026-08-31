export const SONGSTERR_URL_REGEX_PATTERN =
  /^https:\/\/www\.songsterr\.com\/a\/wsa\/.*/;

export function setValidationMessage(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.value === '') {
    input.setCustomValidity('请输入有效的曲谱链接。');
  } else {
    input.setCustomValidity('请输入有效的 Songsterr 链接。');
  }

  input.reportValidity();
}
export function clearValidationMessage(event: Event): void {
  const input = event.target as HTMLInputElement;
  input.setCustomValidity('');
}

export function isUrlFromSongsterr(url: any) {
  return SONGSTERR_URL_REGEX_PATTERN.test(String(url));
}
