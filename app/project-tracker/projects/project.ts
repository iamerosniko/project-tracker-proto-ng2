export class Project {
    constructor (
        public id: string,
        public projectName: string,
        public description: string,
        public technology?: string,
        public owner?: string
    ){}
}