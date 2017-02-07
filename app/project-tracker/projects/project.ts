export class Project {
    constructor (
        public id: number,
        public projectName: string,
        public description: string,
        public technology?: string,
        public owner?: string
    ){}
}