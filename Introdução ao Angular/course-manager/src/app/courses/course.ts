export class Course {
    id!: number;
    name!: string;
    imageUrl!: string;
    price!: number;
    code!: string;
    duration!: number;
    rating!: number;
    releaseDate!: string;
    //O exclamação é para forçar o TypeScript a ignorar se a variável tem um valor ou não na inicialização.
}