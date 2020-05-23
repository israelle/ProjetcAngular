import {DeserializableModel} from './deserializable-model';

export  class ImageUploadModel implements DeserializableModel {

    $key: string;
    id: number;
    name: string;
    url: string;
    file: File;

    constructor(file: File) {
        this.file = file;
    }

    getUrl() {
        return this.url;
    }

    getName() {
        return this.name;
    }

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;    }
}
