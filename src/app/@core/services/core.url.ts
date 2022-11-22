import { environment } from "src/environments/environment";

export class CoreURL{
    public static readonly LOGIN = environment.apiURL + "user/login";
    public static readonly REGISTER = environment.apiURL + "user";
    public static readonly GET_ALL_COURSES = environment.apiURL + "courses";
}