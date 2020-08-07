import "reflect-metadata";
import {logType} from "./logType";

interface IParams {
    data: string;
}

class Demo {

    @logType // apply property decorator
    public attr1!: string;

    @logType
    setOptions = ({params, str}: { params: IParams, str: string }) => {
        this.attr1 = params.data;
    }

    @logType
    setOptionsNext = (params: IParams) => {
        this.attr1 = params.data;
    }

    @logType
    setOptionsNextLext = (str: string) => {
        this.attr1 = str;
    }
}
