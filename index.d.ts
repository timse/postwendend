export interface IPostwendend {
    (destination: string, data?: {}, newWindow?: boolean, doc?: Document): void;
}

declare const postwendend: IPostwendend;
export default postwendend;


