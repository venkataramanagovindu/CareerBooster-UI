import { environment } from "src/environments/environment";

export class CoreURL{
    public static readonly LOGIN = environment.apiURL + "user/login";
    public static readonly REGISTER = environment.apiURL + "user";
    public static readonly GET_ALL_COURSES = environment.apiURL + "courses";
    public static readonly GET_ALL_COURSES_BY_CATEGORY = environment.apiURL + "courses/GetCoursesByCategoryId";
    public static readonly ADD_USER_COURSE = environment.apiURL + "UserCourses";
    public static readonly GET_USER_COURSE = environment.apiURL + "UserCourses";
    public static readonly GET_USER_COURSE_DETAILS = environment.apiURL + "UserCourses/GetUserCourseDetails";
}