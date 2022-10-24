import { environment } from "src/environments/environment";

export class CoreURL{
    public static readonly LOGIN = environment.apiURL + "user/login";
    public static readonly REGISTER = environment.apiURL + "user";
}