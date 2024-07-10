import { LineAndCharacter} from "typescript"

export class PhotographySubjectDetails{
    name!:string
    details!:string
    imageUrl!: string;
    

   constructor(name:string,details:string, imageUrl: string){
    this.name=name;
    this.details=details;
    this.imageUrl = imageUrl;
    

}
}