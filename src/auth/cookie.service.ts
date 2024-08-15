import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CookieService {
  constructor() {}

  static tokenKey = 'access-token';

  setToken(res: Response, token: string) {
    res.cookie(CookieService.tokenKey, token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
  }

  removeToken(res: Response) {
    res.clearCookie(CookieService.tokenKey);
    //todo: он не добавлял res.end
    res.end();
  }
}
