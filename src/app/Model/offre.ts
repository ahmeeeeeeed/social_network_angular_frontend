import { User } from './user';

export class Offre {

    id: number;
    contenu: string;
    date: Date;
    niveauExp: string;
    user: User[];
}
