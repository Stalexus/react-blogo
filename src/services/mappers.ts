import { UserCredential } from "firebase/auth";
import { UserData } from "../types";

export const transformUserCredential = (userCredential: UserCredential): UserData => {
    return {
      displayName: userCredential.user.displayName,
      email: userCredential.user.email,
    };
  }