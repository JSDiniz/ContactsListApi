import validDataMiddleware from "./validData.middleware";
import userExistsMiddleware from "./userExist.middleware";
import validTokenMiddleware from "./validToken.middleware";
import adminAuthMiddleware from "./adminAuth.middleware";
import userIsActiveMiddleware from "./userIsActive.middleware";
import verifyUserOrAdminMiddleware from "./verifyUserOrAdmin.middleware";
import userDataUpdateMiddleware from "./userDataUpdate.middleware";
import userUpdateIsActiveMiddleware from "./userUpdateIsActive.middleware";
import contactExistMiddleware from "./contactExist.middleware";
import contactNotExistMiddleware from "./contactNotExist.middleware";
import verifyContactIsFromUserMiddleware from "./verifyContactIsFromUser.middleware";

export {
  validDataMiddleware,
  userExistsMiddleware,
  validTokenMiddleware,
  adminAuthMiddleware,
  userIsActiveMiddleware,
  verifyUserOrAdminMiddleware,
  userDataUpdateMiddleware,
  userUpdateIsActiveMiddleware,
  contactExistMiddleware,
  contactNotExistMiddleware,
  verifyContactIsFromUserMiddleware,
};
