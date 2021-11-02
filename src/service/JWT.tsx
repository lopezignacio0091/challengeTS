export default class JWT {

    static tokken : string;
    
    static Init(tokken:string) {
        this.tokken = tokken;
    }

    static getTokken() {
        return this.tokken;
    }

}