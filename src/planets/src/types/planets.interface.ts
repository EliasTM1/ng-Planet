export interface Planet {
    geology:     Geology;
    images:      Images;
    name:        string;
    overview:    Geology;
    radius:      string;
    revolution:  string;
    rotation:    string;
    structure:   Geology;
    temperature: string;
}

export interface Geology {
    source:  string;
    content: string;
}

export interface Images {
    geology:  string;
    internal: string;
    planet:   string;
}
