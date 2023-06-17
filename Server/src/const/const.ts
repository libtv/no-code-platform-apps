import dotenv from "dotenv";

dotenv.config();

export const APP_PORT = process.env.APP_PORT || "3000";
export const DB_SET_NAME = process.env.DB_SET_NAME || "root";
export const DB_SET_PASSWORD = process.env.DB_SET_PASSWORD || "root";
export const DB_SET_DATABASE = process.env.DB_SET_DATABASE || "apps";
export const DB_SET_HOST = process.env.DB_SET_HOST || "localhost";
export const DB_SET_TIMEZONE = process.env.DB_SET_TIMEZONE || "+09:00";
export const DB_SET_DIALECT = process.env.DB_SET_DIALECT || "mariadb";
export const FILE_SEPARATOR = "/";
export const IMPORT_API_EXTENSION = process.env.IMPORT_API_EXTENSION || "assembly.ts";
export const SEJONG_API_KEY = process.env.SEJONG_API_KEY || "sejongtelecom";
