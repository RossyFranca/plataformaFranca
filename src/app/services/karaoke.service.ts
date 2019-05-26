import { Injectable } from "@angular/core";
import * as puppeteer from 'puppeteer';


/**
 * Angular com conflito com o puppeteer:
 * ERROR in ./src/app/services/karaoke.service.ts
Module not found: Error: Can't resolve 'puppeteer' in
 'C:\Users\sirab\OneDrive\Documentos\Projetos\plataformaFranca\plataforma-front\src\app\services'
 * 
 */
@Injectable()
export class KaraokeService {
    constructor() { }

    public async buscaMusica(artista: string, musica: string) {

     return ""
    }
}


/**
 * Youtube API
 *  chave API: AIzaSyCiPOpgfx5CWbnIRHk0SyD12QWBHFO2ToQ
 * 
 * 
 */