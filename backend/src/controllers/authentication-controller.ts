import { SignInParams } from "../protocols";
import { Request, Response } from "express";
import httpStatus from "http-status";

import authenticationService from "../services/authentication-service";

export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authenticationService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "CannotCreateSessionError") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
}
