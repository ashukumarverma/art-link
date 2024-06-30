/**
 * This file contains all the routes of the application
 */


/**
 * An array of public routes
 * which is accessible without authentication
 * @type {string}
 */
export const publicRoutes = [
    "/",
    '/gallery',
]

/**
 * An array of auth routes
 * These routes ridirects to home if user is authenticated
 * @type {string}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register"
]

/**
 * The prefix for the api routes
 * Routes start with this prefix are considered as api routes for authentication
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth"

/**
 * The default login redirect route
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings"