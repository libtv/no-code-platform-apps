import { ResponseVO } from "./responseVO";
import express from "express";

export interface Result {
    result: ResponseVO;
    data: any;
}

export interface ApiMethodVO {
    get?: express.RequestHandler;
    post?: express.RequestHandler;
    del?: express.RequestHandler;
    patch?: express.RequestHandler;
}
