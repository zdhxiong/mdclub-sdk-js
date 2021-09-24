import { postRequest } from './util/requestAlias.js';
import { buildURL, buildRequestBody } from './util/requestHandler.js';
import { EmailResponse } from './models.js';

interface SendParams {
  /**
   * 邮箱地址
   */
  email: Array<string>;
  /**
   * 邮件标题
   */
  subject: string;
  /**
   * 邮件内容
   */
  content: string;
}

/**
 * 🔐发送邮件
 *
 * 用于后台管理员发送邮件。
 */
export const send = (params: SendParams): Promise<EmailResponse> =>
  postRequest(
    buildURL('/emails', params),
    buildRequestBody(params, ['email', 'subject', 'content']),
  );
