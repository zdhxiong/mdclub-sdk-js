import { postRequest } from './util/requestAlias.js';
import { buildURL } from './util/requestHandler.js';
import { CaptchaResponse } from './models.js';

/**
 * 生成新的图形验证码
 *
 * 生成新的图形验证码。
 */
export const generate = (): Promise<CaptchaResponse> =>
  postRequest(buildURL('/captchas', {}));
