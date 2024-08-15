import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GetSessiongInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { CookieService } from './cookie.service';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session-info.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
  ) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  async sigUp(
    @Body() SignUpBodyDto: SignUpBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(
      SignUpBodyDto.email,
      SignUpBodyDto.password,
    );

    this.cookieService.setToken(res, accessToken);
  }

  @Post('sing-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  async signIn(
    @Body() SignInBodyDto: SignInBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const accessToken = await this.authService.signIn(
      SignInBodyDto.email,
      SignInBodyDto.password,
    );

    return this.cookieService.setToken(res, accessToken);
  }

  @Post('sign-out')
  @ApiOkResponse()
  @UseGuards(AuthGuard)
  signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
  }

  @Get('session')
  @ApiOkResponse({
    type: GetSessiongInfoDto,
  })
  @UseGuards(AuthController)
  getSession(@SessionInfo() session: GetSessiongInfoDto) {
    return session;
  }
}
