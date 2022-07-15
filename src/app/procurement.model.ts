export interface Procurement {
    software: Software,
    equipment: Equipment,
    manpower: Manpower
}

interface Software {
    revit: number,
    cad: number,
    data_env: number,
    navis: number
}

interface Equipment {
    laptop: number
}

interface Manpower {
    manager: number,
    coordinator: number,
    modeler: number
}
