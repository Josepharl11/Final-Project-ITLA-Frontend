export interface Space {
    name: string;
    type: 'Aula' | 'Laboratorio' | 'Oficina' | 'Auditorio' | 'Otros' | 'Cafeteria';
}

export interface Floor {
    level: number;
    descriptionLevel: string;
    spaces: Space[];
}

export interface Building {
    _id: string;
    id: string;
    number: string;
    name: string;
    description: string;
    floors: Floor[];
}