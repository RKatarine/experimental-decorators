import "reflect-metadata";
import {logType, LookupTypes} from "./logType";

interface IParams {
    data: string;
}

@LookupTypes
class Demo {

    @logType // apply property decorator
    public attr1!: string;

    @logType
    setOptions = ({params, str}: { params: IParams, str: string }) => {
        this.attr1 = params.data;
    };

    @logType
    setOptionsNext = (params: IParams) => {
        this.attr1 = params.data;
    };

    @logType
    setOptionsNextLext = (str: string) => {
        this.attr1 = str;
    };

    @logType
    withoutArrow(str: string) {
        this.attr1 = str;
    }


    @logType
    get someFieldGet() {
        return this.attr1;
    }


    @logType
    set someFieldSet(str:string) {
        this.attr1 = str;
    }
}
