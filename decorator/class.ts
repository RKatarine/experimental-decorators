import "reflect-metadata";
import {logType} from "./logType";


class Demo {

    @logType // apply property decorator
    public attr1: string;
}
